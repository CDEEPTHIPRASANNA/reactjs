import React from "react";

function UsersTable({ users, onDeleteUser, onViewUser }) {
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
                  <td>{user.city}</td>
                  <td><span className="role-pill">{user.role}</span></td>
                  <td>
                    <span className={`status-badge ${status === "Active" ? "active" : "inactive"}`}>
                      {status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="view-btn" onClick={() => onViewUser(user)} title="View details" aria-label={`View ${user.name}`}>
                        👁
                      </button>
                      <button className="edit-btn" onClick={() => onViewUser(user, true)} title="Edit user" aria-label={`Edit ${user.name}`}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => onDeleteUser(user.id)} title="Delete" aria-label={`Delete ${user.name}`}>
                        Delete
                      </button>
                    </div>
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
