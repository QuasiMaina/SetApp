import { registerUser, loginUser, addSetup } from "./api.js";

let token = null;

// Helper: show messages under forms
function showMessage(id, msg, isError = false) {
  const el = document.getElementById(id);
  el.style.color = isError ? "red" : "green";
  el.innerText = msg;
}

// Register (auto-login after success)
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    role: form.role.value,
  };

  try {
    const res = await registerUser(data);
    const parsed = await res.json(); // ✅ parse JSON first

    if (!res.ok) {
      const errors = Object.entries(parsed)
        .map(([field, msgs]) => `${field}: ${msgs}`)
        .join("\n");
      showMessage("registerMsg", errors || "Registration failed", true);
    } else {
      showMessage("registerMsg", "✅ Registration successful! Logging in...", false);

      // Auto-login
      const loginRes = await loginUser({
        username: data.username,
        password: data.password,
      });
      const loginParsed = await loginRes.json();

      if (loginRes.ok && loginParsed.access) {
        token = loginParsed.access;
        showMessage("loginMsg", "✅ Auto-login successful!", false);
      } else {
        showMessage("loginMsg", loginParsed.detail || "Login failed", true);
      }
    }
  } catch (err) {
    showMessage("registerMsg", `Error: ${err.message}`, true);
  }
});

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    username: form.username.value,
    password: form.password.value,
  };

  try {
    const res = await loginUser(data);
    const parsed = await res.json();

    if (res.ok && parsed.access) {
      token = parsed.access;
      showMessage("loginMsg", "✅ Login successful!", false);
    } else {
      showMessage("loginMsg", parsed.detail || "Login failed", true);
    }
  } catch (err) {
    showMessage("loginMsg", `Error: ${err.message}`, true);
  }
});

// Add Setup
document.getElementById("setupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!token) return showMessage("setupMsg", "⚠️ You must login first!", true);

  const form = e.target;
  const data = {
    title: form.title.value,
    category: form.category.value,
    description: form.description.value,
  };

  try {
    const res = await addSetup(data, token);
    const parsed = await res.json();

    if (res.ok && parsed.id) {
      showMessage("setupMsg", "✅ Setup added successfully!", false);
    } else {
      const errors = Object.entries(parsed)
        .map(([field, msgs]) => `${field}: ${msgs}`)
        .join("\n");
      showMessage("setupMsg", errors || "Setup failed", true);
    }
  } catch (err) {
    showMessage("setupMsg", `Error: ${err.message}`, true);
  }
});
