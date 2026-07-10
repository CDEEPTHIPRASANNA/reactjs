import { determineGender, getGenderEmoji, getGenderLabel } from './utils/genderUtils';\nimport UserTable from './components/UserTable';
import { useMemo, useState } from 'react';
import useFetchData from './hooks/useFetchData';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'username', label: 'Username' },
  { value: 'company', label: 'Company' },
  { value: 'city', label: 'City' },
];

function App() {
  const { data: users, loading, error, refetch } = useFetchData(USERS_API_URL);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredUsers = useMemo(() => {
    const activeUsers = Array.isArray(users) ? users : [];
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = normalizedSearch
      ? activeUsers.filter((user) => {
          const city = user.address?.city || '';
          const company = user.company?.name || '';

          return [
            user.name,
            user.username,
            user.email,
            city,
            company,
          ]
            .join(' ')
            .toLowerCase()
            .includes(normalizedSearch);
        })
      : activeUsers;

    return filtered.sort((a, b) => {
      const getValue = (item) => {
        if (sortKey === 'company') return item.company?.name || '';
        if (sortKey === 'city') return item.address?.city || '';
        return String(item[sortKey] || '').toLowerCase();
      };

      const aValue = getValue(a);
      const bValue = getValue(b);

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [users, search, sortKey, sortOrder]);

  const summary = useMemo(() => {
    const activeUsers = Array.isArray(users) ? users : [];
    const cities = new Set(activeUsers.map((user) => user.address?.city).filter(Boolean));
    const companies = new Set(activeUsers.map((user) => user.company?.name).filter(Boolean));

    return {
      total: activeUsers.length,
      showing: filteredUsers.length,
      cities: cities.size,
      companies: companies.size,
    };
  }, [users, filteredUsers.length]);

  const openProfile = (user) => setSelectedUser(user);
  const closeProfile = () => setSelectedUser(null);

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-overlay" />
        <header className="hero-brand-bar">
          <div className="brand-chip">
            <span>TEAM</span>
          </div>
          <div className="hero-brand-labels">
            <p className="eyebrow">Team Directory</p>
            <h1>All employees at a glance</h1>
          </div>
          <div className="hero-actions">
            <button type="button" className="icon-button" aria-label="Grid view">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
              </svg>
            </button>
            <button type="button" className="icon-button" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8a6 6 0 0 0-12 0c0 5-3 6-3 6h18s-3-1-3-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="hero-avatar">
              <span>KM</span>
            </div>
          </div>
        </header>

        <div className="hero-copy-block">
          <p className="hero-copy-intro">Organize your team with clarity and a professional dashboard experience.</p>
          <p className="hero-copy">
            Track employee profiles, search instantly with an overlay panel, and review active team metrics in a
            polished interface built for modern internal tools.
          </p>
        </div>

        <div className="hero-search-panel" aria-label="Search team directory">
          <div className="hero-search-header">
            <div>
              <p className="hero-search-title">Quick search</p>
              <p className="hero-search-subtitle">Search team members by name, email, city, or company.</p>
            </div>
            <span className="hero-search-count">{summary.showing} results</span>
          </div>
          <label htmlFor="floating-search" className="sr-only">
            Search users by name, username, email, city or company
          </label>
          <input
            id="floating-search"
            type="search"
            className="hero-search-field"
            value={search}
            placeholder="Search team members"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </section>

      <section className="dashboard-panel" aria-label="Directory controls and summary">
        <div className="control-panel">
          <div className="control-group">
            <label htmlFor="sort-field">Sort by</label>
            <div className="sort-wrap">
              <select
                id="sort-field"
                className="sort-select"
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="sort-button"
                onClick={() => setSortOrder((current) => (current === 'asc' ? 'desc' : 'asc'))}
                aria-label={`Change sort direction to ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
              >
                {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
              </button>
            </div>
          </div>

          <div className="control-group refresh-group">
            <label>Updated</label>
            <button type="button" className="refresh-button" onClick={refetch}>
              Refresh profiles
            </button>
          </div>
        </div>

        <div className="summary-grid">
          <article className="summary-card">
            <p className="summary-label">Users loaded</p>
            <strong>{summary.total}</strong>
          </article>
          <article className="summary-card">
            <p className="summary-label">Visible</p>
            <strong>{summary.showing}</strong>
          </article>
          <article className="summary-card">
            <p className="summary-label">Cities</p>
            <strong>{summary.cities}</strong>
          </article>
          <article className="summary-card">
            <p className="summary-label">Companies</p>
            <strong>{summary.companies}</strong>
          </article>
        </div>
      </section>

      {loading && (
        <section className="status-card" aria-live="polite">
          <div className="loader" aria-hidden="true" />
          <div>
            <h2>Loading user directory</h2>
            <p>Fetching the latest employees from the public API.</p>
          </div>
        </section>
      )}

      {!loading && error && (
        <section className="status-card error-state" role="alert">
          <h2>Unable to load directory</h2>
          <p>{error}</p>
          <button type="button" className="refresh-button" onClick={refetch}>
            Try again
          </button>
        </section>
      )}

      {!loading && !error && (
        <UserTable users={filteredUsers} onProfileClick={openProfile} />
      )}

      {selectedUser && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="profile-modal">
            <div className="profile-modal-header">
              <div>
                <p className="eyebrow">Profile details</p>
                <h2>{selectedUser.name}</h2>
                <p className="profile-subtitle">{selectedUser.company?.name || 'No company'}</p>
              </div>
              <button type="button" className="close-button" onClick={closeProfile} aria-label="Close profile details">
                ×
              </button>
            </div>
            <div className="profile-modal-body">
              <div className="profile-image-card">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(selectedUser.name)}&background=1d4ed8&color=ffffff&rounded=true&size=160`}
                  alt={`Profile for ${selectedUser.name}`}
                />
              </div>
              <div className="profile-details-grid">
                <div>
                  <p className="detail-label">Username</p>
                  <p>{selectedUser.username}</p>
                </div>
                <div>
                  <p className="detail-label">Email</p>
                  <p>{selectedUser.email}</p>
                </div>
                <div>
                  <p className="detail-label">Phone</p>
                  <p>{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="detail-label">Website</p>
                  <p>{selectedUser.website}</p>
                </div>
                <div>
                  <p className="detail-label">City</p>
                  <p>{selectedUser.address?.city}</p>
                </div>
                <div>
                  <p className="detail-label">Company</p>
                  <p>{selectedUser.company?.name}</p>
                </div>
                <div className="profile-bio">
                  <p className="detail-label">About</p>
                  <p>{selectedUser.company?.catchPhrase || 'Creative team leader with a growth mindset.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;


