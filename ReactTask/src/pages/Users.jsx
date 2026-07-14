import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import users from "../data/users";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/Pagination";

const usersPerPage = 5;

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [userList, setUserList] = useState(users);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    city: "",
    role: "Frontend Developer",
  });

  const currentPage = Number(searchParams.get("page")) || 1;

  const filteredUsers = useMemo(() => {
    const searchText = searchTerm.trim().toLowerCase();

    return userList.filter((user) => {
      const matchesSearch =
        searchText === "" ||
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText) ||
        user.role.toLowerCase().includes(searchText);

      const matchesRole = selectedRole === "All" || user.role === selectedRole;

      return matchesSearch && matchesRole;
    });
  }, [searchTerm, selectedRole, userList]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / usersPerPage));
  const safePage = currentPage > totalPages ? totalPages : currentPage;

  const startIndex = (safePage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage !== safePage) {
      const params = new URLSearchParams(searchParams);
      params.set("page", safePage.toString());
      setSearchParams(params, { replace: true });
    }
  }, [currentPage, safePage, searchParams, setSearchParams]);

  const updatePage = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setSearchParams({ page: nextPage.toString() });
  };

  const nextPage = () => {
    if (safePage < totalPages) {
      updatePage(safePage + 1);
    }
  };

  const previousPage = () => {
    if (safePage > 1) {
      updatePage(safePage - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    updatePage(1);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    updatePage(1);
  };

  const handleNewUserChange = (field, value) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim() || !newUser.city.trim()) {
      return;
    }

    const nextId = Math.max(0, ...userList.map((user) => user.id)) + 1;
    setUserList((prev) => [
      {
        id: nextId,
        ...newUser,
      },
      ...prev,
    ]);

    setNewUser({
      name: "",
      email: "",
      city: "",
      role: "Frontend Developer",
    });
    updatePage(1);
  };

  const handleDeleteUser = (id) => {
    setUserList((prevUserList) => prevUserList.filter((user) => user.id !== id));
  };

  const handleSaveUser = (updatedUser) => {
    setUserList((prevUserList) =>
      prevUserList.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const roleOptions = ["All", ...new Set(userList.map((user) => user.role))];

  return (
    <div className="dashboard-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Dashboard · React Router · Pagination</p>
          <h1>User Management Dashboard</h1>
          <p>
            Manage your employee directory with search, filters, add/edit/delete controls, and URL-powered pagination.
          </p>
          <div className="hero-badges">
            <span>Clean interface</span>
            <span>Search & filter</span>
            <span>Fast editing</span>
          </div>
        </div>

        <div className="hero-side-card">
          <p className="small-label">Overview</p>
          <h2>{filteredUsers.length} team members</h2>
          <p>Displayed rows update instantly while the page query remains in sync.</p>
          <div className="hero-side-grid">
            <div>
              <strong>{userList.length}</strong>
              <span>Total users</span>
            </div>
            <div>
              <strong>{totalPages}</strong>
              <span>Pages</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Team statistics">
        <article className="stat-card">
          <p>Total Users</p>
          <h3>{userList.length}</h3>
        </article>
        <article className="stat-card">
          <p>Current Page</p>
          <h3>{safePage}</h3>
        </article>
        <article className="stat-card">
          <p>Roles</p>
          <h3>{new Set(userList.map((user) => user.role)).size}</h3>
        </article>
        <article className="stat-card">
          <p>Records / page</p>
          <h3>{usersPerPage}</h3>
        </article>
      </section>

      <section className="controls-card">
        <div className="control-column">
          <div className="control-group">
            <label htmlFor="search">Search users</label>
            <input
              id="search"
              type="text"
              placeholder="Search by name, email, city, or role"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="control-group">
            <label htmlFor="role">Filter by role</label>
            <select id="role" value={selectedRole} onChange={handleRoleChange}>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="add-card">
          <div className="add-card-header">
            <p className="small-label">Quick action</p>
            <h2>Add a new user</h2>
            <p className="add-card-description">
              Enter user details and click Add to onboard a new team member.
            </p>
          </div>

          <div className="add-form-grid">
            <div className="field-group">
              <label htmlFor="newName">Name</label>
              <input
                id="newName"
                type="text"
                value={newUser.name}
                onChange={(event) => handleNewUserChange("name", event.target.value)}
                placeholder="Jane Doe"
              />
            </div>
            <div className="field-group">
              <label htmlFor="newEmail">Email</label>
              <input
                id="newEmail"
                type="email"
                value={newUser.email}
                onChange={(event) => handleNewUserChange("email", event.target.value)}
                placeholder="jane@example.com"
              />
            </div>
            <div className="field-group">
              <label htmlFor="newCity">City</label>
              <input
                id="newCity"
                type="text"
                value={newUser.city}
                onChange={(event) => handleNewUserChange("city", event.target.value)}
                placeholder="New York"
              />
            </div>
            <div className="field-group">
              <label htmlFor="newRole">Role</label>
              <select
                id="newRole"
                value={newUser.role}
                onChange={(event) => handleNewUserChange("role", event.target.value)}
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>UI Designer</option>
                <option>QA Engineer</option>
                <option>Project Manager</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button className="primary-button" type="button" onClick={handleAddUser}>
              Add user
            </button>
          </div>
        </div>
      </section>

      <section className="table-card">
        <UsersTable
          users={currentUsers}
          onDeleteUser={handleDeleteUser}
          onSaveUser={handleSaveUser}
        />
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          previousPage={previousPage}
          nextPage={nextPage}
          onPageClick={updatePage}
        />
      </section>

      <footer className="page-footer">
        <p>Built with React Router, useSearchParams, and modern dashboard styling.</p>
      </footer>
    </div>
  );
}

export default Users;
