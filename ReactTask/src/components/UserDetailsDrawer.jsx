import React, { useEffect, useState } from "react";

export default function UserDetailsDrawer({ user, open, onClose, onSaveUser, initiallyEditing = false }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", city: "", role: "" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setForm({ name: user.name || "", email: user.email || "", city: user.city || "", role: user.role || "" });
      setEditing(initiallyEditing);
      setError("");
    } else {
      setEditing(false);
      setError("");
    }
  }, [user, open, initiallyEditing]);

  if (!open || !user) return null;

  const handleChange = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const startEdit = () => setEditing(true);
  const cancelEdit = () => { setEditing(false); setForm({ name: user.name || "", email: user.email || "", city: user.city || "", role: user.role || "" }); setError(""); };

  const save = async () => {
    if (!form.name.trim() || !form.email.trim()) { setError("Name and email are required"); return; }
    setSaving(true);
    setError("");
    try {
      if (onSaveUser) await onSaveUser({ id: user.id, ...form });
      setEditing(false);
    } catch (e) {
      setError(e?.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="drawer-overlay">
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel" role="dialog" aria-modal="true">
        <div className="drawer-header">
          <h3>{editing ? "Edit user" : user.name}</h3>
          <div className="drawer-header-actions">
            {!editing && <button className="view-btn" onClick={startEdit} aria-label="Edit user">Edit</button>}
            <button className="cancel-btn" onClick={onClose} aria-label="Close">{editing ? "Close" : "Close"}</button>
          </div>
        </div>

        <div className="drawer-body">
          {editing ? (
            <>
              <label className="drawer-field">
                <span className="drawer-field-label">Name</span>
                <input className="inline-input" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
              </label>

              <label className="drawer-field">
                <span className="drawer-field-label">Email</span>
                <input className="inline-input" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
              </label>

              <label className="drawer-field">
                <span className="drawer-field-label">City</span>
                <input className="inline-input" value={form.city} onChange={(e) => handleChange("city", e.target.value)} />
              </label>

              <label className="drawer-field">
                <span className="drawer-field-label">Role</span>
                <input className="inline-input" value={form.role} onChange={(e) => handleChange("role", e.target.value)} />
              </label>

              {error ? <div className="drawer-error">{error}</div> : null}

              <div className="drawer-actions">
                <button className="primary-button" onClick={save} disabled={saving}>{saving ? "Saving..." : "Save"}</button>
                <button className="ghost-btn" onClick={cancelEdit} disabled={saving}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <div>
                <strong>Email</strong>
                <div className="drawer-text-muted">{user.email}</div>
              </div>

              <div>
                <strong>City</strong>
                <div className="drawer-text-muted">{user.city || "—"}</div>
              </div>

              <div>
                <strong>Role</strong>
                <div className="drawer-text-muted">{user.role}</div>
              </div>

              <div>
                <strong>Joined</strong>
                <div className="drawer-text-muted">{user.joinedAt || "2024-01-15"}</div>
              </div>

              <section>
                <strong>Recent Activity</strong>
                <ul className="drawer-list">
                  <li>Logged in 2 days ago</li>
                  <li>Updated profile 10 days ago</li>
                  <li>Assigned to project "Apollo"</li>
                </ul>
              </section>

              <section>
                <strong>Notes</strong>
                <p className="drawer-text-muted">{user.notes || "No notes available."}</p>
              </section>

              <div className="drawer-actions drawer-actions--stack">
                <a href={`mailto:${user.email}`} className="ghost-btn">Send email</a>
                <button className="primary-button" onClick={() => { navigator.clipboard?.writeText(user.email); }}>Copy email</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

