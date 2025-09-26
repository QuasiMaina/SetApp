const BASE_URL = "http://127.0.0.1:8000/api/users/";

export async function registerUser(data) {
  return fetch(`${BASE_URL}register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function loginUser(data) {
  return fetch(`${BASE_URL}login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function addSetup(data, token) {
  return fetch(`${BASE_URL}setups/`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}
