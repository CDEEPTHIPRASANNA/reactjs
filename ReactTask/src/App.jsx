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

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showEmployees, setShowEmployees] = useState(false);

//   const employees = [
//     {
//       id: 1,
//       name: "Deepthi Prasanna",
//       age: 24,
//       city: "Chittoor",
//       role: "Frontend Developer",
//       contact: "9876543210",
//     },
//     {
//       id: 2,
//       name: "Rahul Sharma",
//       age: 27,
//       city: "Bangalore",
//       role: "Backend Developer",
//       contact: "9876543211",
//     },
//     {
//       id: 3,
//       name: "Priya Reddy",
//       age: 25,
//       city: "Hyderabad",
//       role: "UI Designer",
//       contact: "9876543212",
//     },
//     {
//       id: 4,
//       name: "Kiran Kumar",
//       age: 28,
//       city: "Chennai",
//       role: "QA Engineer",
//       contact: "9876543213",
//     },
//     {
//       id: 5,
//       name: "Anjali Singh",
//       age: 26,
//       city: "Pune",
//       role: "React Developer",
//       contact: "9876543214",
//     },
//   ];

//   return (
//     <div className="container">
//       {!isLoggedIn ? (
//         <div className="login-card">
//           <h1>Employee Portal</h1>
//           <p>Login to access the dashboard</p>

//           <input type="text" placeholder="Username" />
//           <input type="password" placeholder="Password" />

//           <button onClick={() => setIsLoggedIn(true)}>
//             Login
//           </button>
//         </div>
//       ) : (
//         <div className="dashboard">

//           <div className="welcome-card">
//             <h1>Welcome, Deepthi 👋</h1>
//             <p>User authenticated successfully</p>

//             <h2>Total Employees: {employees.length}</h2>

//             <div className="btn-group">
//               <button
//                 onClick={() =>
//                   setShowEmployees(!showEmployees)
//                 }
//               >
//                 {showEmployees
//                   ? "Hide Employees"
//                   : "Show Employees"}
//               </button>

//               <button
//                 className="logout-btn"
//                 onClick={() => {
//                   setIsLoggedIn(false);
//                   setShowEmployees(false);
//                 }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>

//           {showEmployees && (
//             <div className="employee-grid">
//               {employees.map((employee) => (
//                 <div
//                   className="employee-card"
//                   key={employee.id}
//                 >
//                   <div className="avatar">
//                     {employee.name.charAt(0)}
//                   </div>

//                   <h3>{employee.name}</h3>

//                   <p>
//                     <strong>Age:</strong> {employee.age}
//                   </p>

//                   <p>
//                     <strong>City:</strong> {employee.city}
//                   </p>

//                   <p>
//                     <strong>Role:</strong> {employee.role}
//                   </p>

//                   <p>
//                     <strong>Contact:</strong>{" "}
//                     {employee.contact}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    console.log("Increment Button Clicked");
    setCount(count + 1);
  };

  const decrement = () => {
    console.log("Decrement Button Clicked");
    setCount(count - 1);
  };

  const reset = () => {
    console.log("Counter Reset");
    setCount(0);
  };

  const toggleTheme = () => {
    console.log("Theme Changed");
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="card">
        <h1>Counter Dashboard</h1>
        <p>React useState Hook Implementation</p>

        <div className="counter-circle">
          {count}
        </div>

        <div className="status-box">
          <h3>Current Status</h3>

          {count > 0 ? (
            <p className="positive">🟢 Positive</p>
          ) : count < 0 ? (
            <p className="negative">🔴 Negative</p>
          ) : (
            <p className="zero">⚪ Zero</p>
          )}
        </div>

        <div className="button-row">
          <button className="increment" onClick={increment}>
            + Increment
          </button>

          <button className="decrement" onClick={decrement}>
            - Decrement
          </button>
        </div>

        <button className="reset" onClick={reset}>
          Reset Counter
        </button>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️ Light Theme" : "🌙 Dark Theme"}
        </button>

        <footer>
          React Task 4 • Developed by Deepthi Prasanna
        </footer>
      </div>
    </div>
  );
}

export default App;