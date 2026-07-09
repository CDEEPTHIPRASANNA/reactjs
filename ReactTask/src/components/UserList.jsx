import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function getAvatarUrl(seed) {
  return `https://api.dicebear.com/6.x/thumbs/svg?seed=${encodeURIComponent(seed)}&scale=95`;
}

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    console.log('Fetching user list from JSONPlaceholder...');

    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Unable to fetch user data right now.');
        }

        const data = await response.json();

        if (isMounted) {
          setUsers(data);
          setError('');
          console.log('User list loaded successfully:', data.length);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Something went wrong while loading users.');
          console.error('User list fetch failed:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="state-box">Loading users...</div>;
  }

  if (error) {
    return <div className="state-box">{error}</div>;
  }

  return (
    <div className="user-list fade-in-up">
      <p className="helper-text">Select a user to view their profile details.</p>
      <div className="list-container">
        {users.map((user) => (
          <NavLink
            key={user.id}
            to={`/users/${user.id}`}
            className={({ isActive }) => `user-card ${isActive ? 'active' : ''}`}
          >
            <div className="card-inner">
              <img src={getAvatarUrl(user.username)} alt={user.name} className="avatar" />
              <div className="user-text">
                <span className="user-name">{user.name}</span>
                <p className="user-meta">{user.username}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default UserList;
