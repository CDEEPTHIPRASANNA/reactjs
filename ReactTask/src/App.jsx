// Task 1 : SelfIntroduction

// import SelfIntroduction from './SelfIntroduction';

// function App() {
//   return (
//     <div>
//       <SelfIntroduction />
//     </div>
//   );
// }

// export default App;


// import SelfIntroduction from "./SelfIntroduction";
// import "./App.css";

// function App() {
//   return <SelfIntroduction />;
// }

// export default App;



// // Task 2 : Parent and Child components.

// import Parent from "./Parent";
// import "./App.css";

// function App() {
//   return <Parent />;
// }

// export default App;

// Task 3 – Conditional Rendering & List Rendering

import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showEmployees, setShowEmployees] = useState(false);

  const employees = [
    {
      id: 1,
      name: "Deepthi Prasanna",
      age: 24,
      city: "Chittoor",
      role: "Frontend Developer",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      age: 27,
      city: "Bangalore",
      role: "Backend Developer",
      contact: "9876543211",
    },
    {
      id: 3,
      name: "Priya Reddy",
      age: 25,
      city: "Hyderabad",
      role: "UI Designer",
      contact: "9876543212",
    },
    {
      id: 4,
      name: "Kiran Kumar",
      age: 28,
      city: "Chennai",
      role: "QA Engineer",
      contact: "9876543213",
    },
    {
      id: 5,
      name: "Anjali Singh",
      age: 26,
      city: "Pune",
      role: "React Developer",
      contact: "9876543214",
    },
  ];

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="login-card">
          <h1>Employee Portal</h1>
          <p>Login to access the dashboard</p>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      ) : (
        <div className="dashboard">

          <div className="welcome-card">
            <h1>Welcome, Deepthi 👋</h1>
            <p>User authenticated successfully</p>

            <h2>Total Employees: {employees.length}</h2>

            <div className="btn-group">
              <button
                onClick={() =>
                  setShowEmployees(!showEmployees)
                }
              >
                {showEmployees
                  ? "Hide Employees"
                  : "Show Employees"}
              </button>

              <button
                className="logout-btn"
                onClick={() => {
                  setIsLoggedIn(false);
                  setShowEmployees(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>

          {showEmployees && (
            <div className="employee-grid">
              {employees.map((employee) => (
                <div
                  className="employee-card"
                  key={employee.id}
                >
                  <div className="avatar">
                    {employee.name.charAt(0)}
                  </div>

                  <h3>{employee.name}</h3>

                  <p>
                    <strong>Age:</strong> {employee.age}
                  </p>

                  <p>
                    <strong>City:</strong> {employee.city}
                  </p>

                  <p>
                    <strong>Role:</strong> {employee.role}
                  </p>

                  <p>
                    <strong>Contact:</strong>{" "}
                    {employee.contact}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;