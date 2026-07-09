import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function getAvatarUrl(seed) {
  return `https://api.dicebear.com/6.x/thumbs/svg?seed=${encodeURIComponent(seed)}&scale=92`;
}

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    console.log('Fetching details for user id:', id);

    const fetchUser = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Unable to fetch user details right now.');
        }

        const data = await response.json();
        const selectedUser = data.find((item) => Number(item.id) === Number(id));

        if (isMounted) {
          if (selectedUser) {
            setUser(selectedUser);
            setError('');
            console.log('User details loaded successfully:', selectedUser.name);
          } else {
            setUser(null);
            setError('No user found for the selected ID.');
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Something went wrong while loading the user profile.');
          console.error('User detail fetch failed:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          setAvatarLoaded(false);
        }
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <div className="state-box">Loading profile...</div>;
  }

  if (error) {
    return <div className="state-box">{error}</div>;
  }

  if (!user) {
    return <div className="state-box">No profile data available.</div>;
  }

  return (
    <div className="profile-card fade-in-up">
      <Link to="/users" className="back-link">
        <span className="back-icon"></span>
        Back to users
      </Link>

      <div className="profile-header">
        <div className="avatar-wrapper avatar-skeleton">
          {!avatarLoaded && <div className="spinner" aria-hidden="true" />}
          <img
            src={getAvatarUrl(user.username)}
            alt={user.name}
            className="profile-avatar"
            onLoad={() => setAvatarLoaded(true)}
          />
        </div>

        <div className="profile-text">
          <h2 className="title">{user.name}</h2>
          <p className="subtitle">Profile information for selected user</p>
        </div>
      </div>

      <div className="info-grid">
        {[
          ['Name', user.name],
          ['Username', user.username],
          ['Email', user.email],
          ['Phone', user.phone],
          ['Website', user.website],
          ['Company', user.company?.name],
        ].map(([label, value]) => (
          <div key={label} className="info-item">
            <strong>{label}:</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
