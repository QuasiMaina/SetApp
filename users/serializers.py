from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Setup

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email", "first_name", "last_name", "role")
        read_only_fields = ("id",)


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6, required=True)
    role = serializers.ChoiceField(choices=User.ROLE_CHOICES, required=False, allow_null=True)

    class Meta:
        model = User
        fields = ("id", "username", "email", "password", "first_name", "last_name", "role")

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("This username is already taken.")
        return value

    def validate_email(self, value):
        if value and User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value

    def create(self, validated_data):
        password = validated_data.pop("password")
        # ✅ assign default role if none is provided
        role = validated_data.get("role", "grip")
        validated_data["role"] = role
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class SetupSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source="user.username")  # show username only

    class Meta:
        model = Setup
        fields = ["id", "title", "description", "category", "created_at", "user"]
        read_only_fields = ("id", "created_at", "user")
