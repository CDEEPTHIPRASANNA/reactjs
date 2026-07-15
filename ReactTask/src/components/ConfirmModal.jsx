import React from "react";

export default function ConfirmModal({ open, title = "Confirm", message, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") onCancel();
      }}
      className="modal-backdrop"
    >
      <div className="modal-card">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onCancel} autoFocus>
            Cancel
          </button>
          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
