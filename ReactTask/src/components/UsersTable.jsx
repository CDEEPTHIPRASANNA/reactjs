import { useState } from "react";

function UsersTable({ users, onDeleteUser, onSaveUser }) {
  const [editingUserId, setEditingUserId] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    city: "",
    role: "",
  });

  const startEdit = (user) => {
    setEditingUserId(user.id);
    setFormValues({
      name: user.name,
      email: user.email,
      city: user.city,
      role: user.role,
    });
  };

  const handleFieldChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.city.trim()) {
      return;
    }

    onSaveUser({
      id: editingUserId,
      ...formValues,
    });
    setEditingUserId(null);
  };

  const handleCancel = () => {
    setEditingUserId(null);
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => {
              const status = user.status || (user.id % 2 === 0 ? "Active" : "Inactive");
              const editing = editingUserId === user.id;

              return (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <div className="avatar">
                        {user.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <strong>{user.name}</strong>
                        <p>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {editing ? (
                      <input
                        className="inline-input"
                        value={formValues.city}
                        onChange={(event) => handleFieldChange("city", event.target.value)}
                      />
                    ) : (
                      user.city
                    )}
                  </td>
                  <td>
                    {editing ? (
                      <select
                        className="inline-input"
                        value={formValues.role}
                        onChange={(event) => handleFieldChange("role", event.target.value)}
                      >
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>Full Stack Developer</option>
                        <option>UI Designer</option>
                        <option>QA Engineer</option>
                        <option>Project Manager</option>
                      </select>
                    ) : (
                      <span className="role-pill">{user.role}</span>
                    )}
                  </td>
                  <td>
                    <span className={`status-badge ${status === "Active" ? "active" : "inactive"}`}>
                      {status}
                    </span>
                  </td>
                  <td>
                    {editing ? (
                      <div className="action-buttons">
                        <button className="save-btn" onClick={handleSave}>
                          Save
                        </button>
                        <button className="cancel-btn" onClick={handleCancel}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="action-buttons">
                        <button className="edit-btn" onClick={() => startEdit(user)}>
                          Edit
                        </button>
                        <button className="delete-btn" onClick={() => onDeleteUser(user.id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6">
                <div className="empty-state">No users match your search or filter.</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
