import React, { useEffect } from "react";

export default function Toast({ message, type = "info", onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast-wrapper" role="status" aria-live="polite">
      <div className={type === "error" ? "toast-card toast-card--error" : "toast-card"}>
        <div className="toast-message">{message}</div>
        <button onClick={onClose} aria-label="Close notification" className="toast-close-btn">
          ×
        </button>
      </div>
    </div>
  );
}
