import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/Pagination";
import useDebounce from "../hooks/useDebounce";
import ConfirmModal from "../components/ConfirmModal";
import Toast from "../components/Toast";
import UserDetailsDrawer from "../components/UserDetailsDrawer";
import { fetchUsers, createUser, updateUser, deleteUser } from "../utils/api";

const usersPerPage = 5;

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [selectedRole, setSelectedRole] = useState("All");
  const [userList, setUserList] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", city: "", role: "Frontend Developer" });
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const [toast, setToast] = useState({ message: "", type: "info" });
  const [confirmState, setConfirmState] = useState({ open: false, id: null });

  const [detailUser, setDetailUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalInitiallyEditing, setModalInitiallyEditing] = useState(false);

  const currentPage = Number(searchParams.get("page")) || 1;

  const filteredUsers = useMemo(() => {
    const searchText = debouncedSearchTerm.trim().toLowerCase();
    return userList.filter((user) => {
      const matchesSearch =
        searchText === "" ||
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        (user.city || "").toLowerCase().includes(searchText) ||
        (user.role || "").toLowerCase().includes(searchText);
      const matchesRole = selectedRole === "All" || user.role === selectedRole;
      return matchesSearch && matchesRole;
    });
  }, [debouncedSearchTerm, selectedRole, userList]);

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

  useEffect(() => {
    async function load() {
      setRequestError(null);
      setIsLoading(true);
      try {
        const data = await fetchUsers();
        const normalizedUsers = data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address?.city ?? "",
          role: "Frontend Developer",
          notes: "",
        }));
        setUserList(normalizedUsers);
      } catch (error) {
        console.error(error);
        setRequestError("Unable to load user data. Please refresh or try again later.");
        setToast({ message: "Failed to load users", type: "error" });
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const updatePage = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setSearchParams({ page: nextPage.toString() });
  };

  const nextPage = () => { if (safePage < totalPages) updatePage(safePage + 1); };
  const previousPage = () => { if (safePage > 1) updatePage(safePage - 1); };
  const handleSearchChange = (event) => { setSearchTerm(event.target.value); updatePage(1); };
  const handleRoleChange = (event) => { setSelectedRole(event.target.value); updatePage(1); };
  const handleNewUserChange = (field, value) => { setNewUser((prev) => ({ ...prev, [field]: value })); };

  const handleAddUser = async () => {
    if (!newUser.name.trim() || !newUser.email.trim() || !newUser.city.trim()) {
      setRequestError("Name, email, and city are required to add a user.");
      setToast({ message: "Please fill all required fields", type: "error" });
      return;
    }

    setRequestError(null);
    setIsAdding(true);
    const optimistic = { id: Date.now(), ...newUser };
    setUserList((prev) => [optimistic, ...prev]);
    setNewUser({ name: "", email: "", city: "", role: "Frontend Developer" });
    updatePage(1);

    try {
      const saved = await createUser(newUser);
      setUserList((prev) => prev.map((u) => (u.id === optimistic.id ? { ...u, id: saved.id ?? u.id } : u)));
      setToast({ message: "New user added", type: "info" });
    } catch (error) {
      console.error(error);
      setUserList((prev) => prev.filter((u) => u.id !== optimistic.id));
      setRequestError("Unable to add the user at this time.");
      setToast({ message: "Add failed", type: "error" });
    } finally {
      setIsAdding(false);
    }
  };

  const requestDeleteUser = (id) => setConfirmState({ open: true, id });

  const performDeleteUser = async () => {
    const id = confirmState.id; setConfirmState({ open: false, id: null }); if (!id) return;
    const previous = userList; setUserList((prev) => prev.filter((u) => u.id !== id));
    try { await deleteUser(id); setToast({ message: "User deleted", type: "info" }); }
    catch (error) { console.error(error); setUserList(previous); setRequestError("Unable to delete the user. Please try again."); setToast({ message: "Delete failed", type: "error" }); }
  };

  const handleSaveUser = async (updatedUser) => {
    setRequestError(null);
    const previous = userList; setUserList((prev) => prev.map((u) => (u.id === updatedUser.id ? { ...u, ...updatedUser } : u)));
    try {
      const saved = await updateUser(updatedUser.id, { name: updatedUser.name, email: updatedUser.email });
      setUserList((prev) => prev.map((u) => (u.id === updatedUser.id ? { ...u, name: saved.name ?? u.name, email: saved.email ?? u.email } : u)));
      setToast({ message: "User updated", type: "info" });
    } catch (error) {
      console.error(error);
      setUserList(previous);
      setRequestError("Unable to save changes. Please try again.");
      setToast({ message: "Update failed", type: "error" });
    }
  };

  const handleViewUser = (user, edit = false) => { setDetailUser(user); setModalInitiallyEditing(Boolean(edit)); setDrawerOpen(true); };
  const closeDrawer = () => { setDrawerOpen(false); setDetailUser(null); setModalInitiallyEditing(false); };

  const exportCSV = () => {
    const rows = filteredUsers;
    if (!rows || rows.length === 0) { setToast({ message: "No records to export", type: "error" }); return; }
    const headers = ["id", "name", "email", "city", "role"];
    const csv = [headers.join(","), ...rows.map(r => headers.map(h => { const v = r[h]; return '"' + String(v ?? "") .replace(/"/g, '""') + '"'; }).join(","))].join("\n");
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'users.csv'; a.click(); URL.revokeObjectURL(url);
    setToast({ message: 'CSV exported', type: 'info' });
  };

  const roleOptions = ["All", ...new Set(userList.map((user) => user.role))];

  return (
    <div className="dashboard-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <h1>User Management Dashboard</h1>
          <p>This page uses React state, effect hooks, and JSONPlaceholder API calls to implement read, add, edit, delete, and view workflows.</p>
          <div className="hero-badges"><span>API integration</span><span>CRUD operations</span><span>Responsive table</span></div>
        </div>

        <div className="hero-side-card">
          <p className="small-label">Overview</p>
          <h2>{filteredUsers.length} team members</h2>
          <p>Updates are reflected in the page instantly while API calls are dispatched.</p>
          <div className="hero-side-grid"><div><strong>{userList.length}</strong><span>Total users</span></div><div><strong>{totalPages}</strong><span>Pages</span></div></div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Team statistics">
        <article className="stat-card"><p>Total Users</p><h3>{userList.length}</h3></article>
        <article className="stat-card"><p>Current Page</p><h3>{safePage}</h3></article>
        <article className="stat-card"><p>Roles</p><h3>{new Set(userList.map((user) => user.role)).size}</h3></article>
        <article className="stat-card"><p>Records / page</p><h3>{usersPerPage}</h3></article>
      </section>

      <section className="controls-card">
        <div className="control-column">
          <div className="control-group"><label htmlFor="search">Search users</label><input id="search" type="text" placeholder="Search by name, email, city, or role" value={searchTerm} onChange={handleSearchChange} /></div>
          <div className="control-group"><label htmlFor="role">Filter by role</label><select id="role" value={selectedRole} onChange={handleRoleChange}>{roleOptions.map((role) => (<option key={role} value={role}>{role}</option>))}</select></div>
          <div style={{ marginTop: 12 }}><button className="ghost-btn" type="button" onClick={exportCSV}>Export CSV</button></div>
          {requestError ? <p className="empty-state">{requestError}</p> : null}
        </div>

        <div className="add-card">
          <div className="add-card-header"><p className="small-label">Add new user</p><h2>Create record</h2><p className="add-card-description">Add a new user to the table using the POST method. The new row appears immediately after success.</p></div>
          <div className="add-form-grid">
            <div className="field-group"><label htmlFor="newName">Name</label><input id="newName" type="text" value={newUser.name} onChange={(event) => handleNewUserChange("name", event.target.value)} placeholder="Jane Doe" /></div>
            <div className="field-group"><label htmlFor="newEmail">Email</label><input id="newEmail" type="email" value={newUser.email} onChange={(event) => handleNewUserChange("email", event.target.value)} placeholder="jane@example.com" /></div>
            <div className="field-group"><label htmlFor="newCity">City</label><input id="newCity" type="text" value={newUser.city} onChange={(event) => handleNewUserChange("city", event.target.value)} placeholder="New York" /></div>
            <div className="field-group"><label htmlFor="newRole">Role</label><select id="newRole" value={newUser.role} onChange={(event) => handleNewUserChange("role", event.target.value)}><option>Frontend Developer</option><option>Backend Developer</option><option>Full Stack Developer</option><option>UI Designer</option><option>QA Engineer</option><option>Project Manager</option></select></div>
          </div>
          <div className="form-actions"><button className="primary-button" type="button" onClick={handleAddUser} disabled={isAdding}>{isAdding ? "Adding..." : "Add user"}</button></div>
        </div>
      </section>

      <section className="table-card">
        {isLoading ? (<div className="empty-state">Loading users…</div>) : (<UsersTable users={currentUsers} onDeleteUser={requestDeleteUser} onViewUser={handleViewUser} />)}

        <Pagination currentPage={safePage} totalPages={totalPages} previousPage={previousPage} nextPage={nextPage} onPageClick={updatePage} />
      </section>

      <footer className="page-footer"><p>Implemented with useState, useEffect, and API-driven CRUD flows.</p></footer>

      <UserDetailsDrawer user={detailUser} open={drawerOpen} onClose={closeDrawer} onSaveUser={handleSaveUser} initiallyEditing={modalInitiallyEditing} />

      <ConfirmModal open={confirmState.open} title="Delete user" message="Are you sure you want to delete this user? This action cannot be undone." onConfirm={performDeleteUser} onCancel={() => setConfirmState({ open: false, id: null })} />

      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
    </div>
  );
}

export default Users;











