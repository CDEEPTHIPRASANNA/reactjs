import { FaUserCircle, FaMapMarkerAlt, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

function Child(props) {
  return (
    <div className="user-card">
      <div className="profile-icon">
        <FaUserCircle />
      </div>

      <div className="user-name">
        <h2>{props.name}</h2>
        <span>User Profile</span>
      </div>

      <div className="info">
      <FaCalendarAlt />
      <div>
      <p>Age</p>
      <h4>{props.age}</h4>
      </div>
      </div>

      <div className="info">
        <FaMapMarkerAlt />
        <div>
          <p>City</p>
          <h4>{props.city}</h4>
        </div>
      </div>

      <div className="info">
        <FaPhoneAlt />
        <div>
          <p>Phone</p>
          <h4>{props.phone}</h4>
        </div>
      </div>
    </div>
  );
}

export default Child;