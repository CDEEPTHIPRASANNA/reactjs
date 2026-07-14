import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo">U</div>
          <div>
            <h2 className="brand-title">UserFlow</h2>
            <p className="brand-subtitle">Management</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
            Dashboard
          </NavLink>
          <NavLink to="/users?page=1" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>
            Users
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-footer-title">Admin User</div>
          <div className="sidebar-footer-text">Manage records, view analytics, and navigate sections from one place.</div>
        </div>
      </aside>

      <main className="main-panel">
        <Routes>
          <Route path="/" element={<Navigate to="/users?page=1" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
