import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";

function GenderFilteredUsers() {
  const { getUsersByGender, formData } = useContext(FormContext);
  const [selectedGender, setSelectedGender] = useState("");

  const filteredUsers = getUsersByGender(selectedGender);

  const genderEmojis = {
    Male: "👨",
    Female: "👩",
    Other: "🧑",
  };

  return (
    <div className="gender-filter-section">
      <h2>View Employees by Gender</h2>
      
      <div className="gender-filter-buttons">
        <button
          className={`filter-btn ${selectedGender === "" ? "active" : ""}`}
          onClick={() => setSelectedGender("")}
        >
          All Employees
        </button>
        <button
          className={`filter-btn ${selectedGender === "Male" ? "active" : ""}`}
          onClick={() => setSelectedGender("Male")}
        >
          👨 Male
        </button>
        <button
          className={`filter-btn ${selectedGender === "Female" ? "active" : ""}`}
          onClick={() => setSelectedGender("Female")}
        >
          👩 Female
        </button>
        <button
          className={`filter-btn ${selectedGender === "Other" ? "active" : ""}`}
          onClick={() => setSelectedGender("Other")}
        >
          🧑 Other
        </button>
      </div>

      <div className="employees-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="employee-card">
              <div className="employee-image-wrapper">
                {user.imagePreview ? (
                  <img src={user.imagePreview} alt={`${user.firstName} ${user.lastName}`} />
                ) : (
                  <div className="no-image">No Image</div>
                )}
              </div>
              <div className="employee-info">
                <h3>
                  {genderEmojis[user.gender]} {user.firstName} {user.lastName}
                </h3>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.mobile}</p>
                <p><strong>City:</strong> {user.city}</p>
                <p className="gender-badge">{user.gender}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No employees found for this gender.</p>
          </div>
        )}
      </div>

      <div className="stats">
        <p>Total: <strong>{filteredUsers.length}</strong> employee(s)</p>
      </div>
    </div>
  );
}

export default GenderFilteredUsers;
