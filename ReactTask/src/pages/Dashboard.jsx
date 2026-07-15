import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../utils/api";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchUsers();
        const normalizedUsers = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address?.city ?? "",
          role: "Frontend Developer",
        }));
        setUsers(normalizedUsers);
      } catch (error) {
        console.error("Failed to load users:", error);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const totalUsers = users.length;
  const totalCities = new Set(users.map((user) => user.city)).size;
  const totalRoles = new Set(users.map((user) => user.role)).size;
  const rowsPerPage = 5;

  const topCities = Object.entries(
    users.reduce((acc, user) => {
      acc[user.city] = (acc[user.city] || 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const recentUsers = users.slice(0, 5);

  return (
    <div className="dashboard-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">UserFlow Management</p>
          <h1>Application Dashboard</h1>
          <p>
            View your user analytics from JSONPlaceholder API, recent team members, and key insights in a streamlined dashboard experience.
          </p>
          <div className="hero-badges">
            <span>API-driven data</span>
            <span>Live metrics</span>
            <span>Quick access</span>
          </div>
        </div>

        <div className="hero-side-card">
          <p className="small-label">Latest summary</p>
          <h2>{totalUsers} active users</h2>
          <p>Quick snapshot of application usage and team composition.</p>
          <div className="hero-side-grid">
            <div>
              <strong>{totalCities}</strong>
              <span>Total cities</span>
            </div>
            <div>
              <strong>{totalRoles}</strong>
              <span>Total roles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Dashboard statistics">
        <article className="stat-card">
          <p>Total users</p>
          <h3>{totalUsers}</h3>
        </article>
        <article className="stat-card">
          <p>Total cities</p>
          <h3>{totalCities}</h3>
        </article>
        <article className="stat-card">
          <p>Total roles</p>
          <h3>{totalRoles}</h3>
        </article>
        <article className="stat-card">
          <p>Rows per page</p>
          <h3>{rowsPerPage}</h3>
        </article>
      </section>

      <section className="table-card" style={{ padding: "20px 22px" }}>
        <div className="page-topbar" style={{ alignItems: "flex-start", gap: "12px" }}>
          <div className="page-heading">
            <p className="eyebrow">Recent users</p>
            <h2>Recently added team members</h2>
          </div>
          <div className="topbar-actions">
            <NavLink to="/users?page=1" className="ghost-btn">
              View users
            </NavLink>
          </div>
        </div>

        <div className="table-wrapper" style={{ marginTop: "18px" }}>
          {isLoading ? (
            <div className="empty-state">Loading users…</div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <section className="table-card" style={{ padding: "20px 22px" }}>
        <div className="page-topbar" style={{ alignItems: "flex-start", gap: "12px" }}>
          <div className="page-heading">
            <p className="eyebrow">Location overview</p>
            <h2>Users across top cities</h2>
          </div>
        </div>

        <div style={{ display: "grid", gap: "18px", marginTop: "18px" }}>
          {topCities.map(([city, count]) => (
            <div key={city} style={{ display: "grid", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{city}</span>
                <span>{count} users</span>
              </div>
              <div style={{ background: "#f1f5f9", borderRadius: "999px", height: "10px", overflow: "hidden" }}>
                <div
                  style={{
                    width: `${Math.min(100, (count / totalUsers) * 100)}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, #1d4ed8, #60a5fa)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
