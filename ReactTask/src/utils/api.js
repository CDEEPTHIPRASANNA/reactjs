const API_BASE = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error(`Fetch users failed: ${res.status}`);
  return res.json();
}

export async function createUser(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Create user failed: ${res.status}`);
  return res.json();
}

export async function updateUser(id, payload) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Update user failed: ${res.status}`);
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`Delete user failed: ${res.status}`);
  return true;
}
