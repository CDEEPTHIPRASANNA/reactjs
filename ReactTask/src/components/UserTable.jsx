import { determineGender, getGenderEmoji, getGenderLabel } from '../utils/genderUtils';

function UserTable({ users = [], onProfileClick }) {
  if (!users.length) {
    return (
      <div className="empty-state">
        <h2>No profiles available</h2>
        <p>The directory is currently empty. Try another search or refresh the data.</p>
      </div>
    );
  }

  const getRole = (id) => (id % 3 === 0 ? 'Manager' : 'Team Member');
  const getLevel = (id) => `Level ${((id - 1) % 3) + 1}`;

  return (
    <section className="user-section" aria-labelledby="users-heading">
      <div className="section-header">
        <div>
          <p className="eyebrow">Team Directory</p>
          <h2 id="users-heading">All Employees</h2>
        </div>
        <span className="record-count">{users.length} profiles</span>
      </div>

      <div className="user-card-grid">
        {users.map((user) => {
          const gender = determineGender(user.name);
          return (
            <article key={user.id} className="user-card">
              <div className="user-card-avatar">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=1d4ed8&color=ffffff&rounded=true&size=120`}
                  alt={`Avatar for ${user.name}`}
                />
              </div>
              <div className="gender-badge" title={getGenderLabel(gender)}>
                {getGenderEmoji(gender)}
              </div>
              <div className="user-card-body">
                <p className="user-card-name">{user.name}</p>
                <p className="user-card-role">{getRole(user.id)}</p>
                <p className="user-card-level">{getLevel(user.id)}</p>
                <button
                  type="button"
                  className="profile-button"
                  onClick={() => onProfileClick?.(user)}
                >
                  View profile
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default UserTable;
