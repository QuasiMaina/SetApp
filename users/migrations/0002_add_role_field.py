from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),  # previous migration
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='role',
            field=models.CharField(
                max_length=50,
                choices=[
                    ('dop', 'Director of Photography'),
                    ('gaffer', 'Gaffer'),
                    ('first_ac', 'First AC'),
                    ('grip', 'Grip'),
                    ('admin', 'Admin'),
                ],
                blank=True,
                null=True,
            ),
        ),
    ]
