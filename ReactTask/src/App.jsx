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


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);

//   const increment = () => {
//     console.log("Increment Button Clicked");
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     console.log("Decrement Button Clicked");
//     setCount(count - 1);
//   };

//   const reset = () => {
//     console.log("Counter Reset");
//     setCount(0);
//   };

//   const toggleTheme = () => {
//     console.log("Theme Changed");
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={darkMode ? "app dark" : "app"}>
//       <div className="card">
//         <h1>Counter Dashboard</h1>
//         <p>React useState Hook Implementation</p>

//         <div className="counter-circle">
//           {count}
//         </div>

//         <div className="status-box">
//           <h3>Current Status</h3>

//           {count > 0 ? (
//             <p className="positive">🟢 Positive</p>
//           ) : count < 0 ? (
//             <p className="negative">🔴 Negative</p>
//           ) : (
//             <p className="zero">⚪ Zero</p>
//           )}
//         </div>

//         <div className="button-row">
//           <button className="increment" onClick={increment}>
//             + Increment
//           </button>

//           <button className="decrement" onClick={decrement}>
//             - Decrement
//           </button>
//         </div>

//         <button className="reset" onClick={reset}>
//           Reset Counter
//         </button>

//         <button className="theme-btn" onClick={toggleTheme}>
//           {darkMode ? "☀️ Light Theme" : "🌙 Dark Theme"}
//         </button>

//         <footer>
//           React Task 4 • Developed by Deepthi Prasanna
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default App;

/* Task 5: Registration Form using useState */

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//     dob: "",
//     gender: "",
//     address: "",
//     city: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     // First Name
//     if (formData.firstName.trim() === "") {
//       newErrors.firstName = "First Name is required";
//     } else if (formData.firstName.length < 3) {
//       newErrors.firstName = "Minimum 3 characters required";
//     }

//     // Last Name
//     if (formData.lastName.trim() === "") {
//       newErrors.lastName = "Last Name is required";
//     }

//     // Email
//     if (formData.email.trim() === "") {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Enter a valid email";
//     }

//     // Mobile
//     if (formData.mobile.trim() === "") {
//       newErrors.mobile = "Mobile Number is required";
//     } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
//       newErrors.mobile = "Enter a valid 10-digit mobile number";
//     }

//     // Password
//     if (formData.password === "") {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Minimum 8 characters required";
//     }

//     // Confirm Password
//     if (formData.confirmPassword === "") {
//       newErrors.confirmPassword = "Confirm Password is required";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     // Date of Birth
//     if (formData.dob === "") {
//       newErrors.dob = "Date of Birth is required";
//     }

//     // Gender
//     if (formData.gender === "") {
//       newErrors.gender = "Please select Gender";
//     }

//     // Address
//     if (formData.address.trim() === "") {
//       newErrors.address = "Address is required";
//     }

//     // City
//     if (formData.city.trim() === "") {
//       newErrors.city = "City is required";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       console.log("Registration Successful");
//       console.log(formData);

//       setSuccessMessage("Registration Successful!");

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         password: "",
//         confirmPassword: "",
//         dob: "",
//         gender: "",
//         address: "",
//         city: "",
//       });

//       setErrors({});
//     } else {
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-card">
//         <h1>Registration Form</h1>
//         <p>Create your account</p>

//         {successMessage && (
//           <div className="success-message">
//             {successMessage}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>

//           <div className="row">
//             <div className="input-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//               <span>{errors.firstName}</span>
//             </div>

//             <div className="input-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//               <span>{errors.lastName}</span>
//             </div>
//           </div>

//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <span>{errors.email}</span>
//           </div>

//           <div className="input-group">
//             <label>Mobile Number</label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//             <span>{errors.mobile}</span>
//           </div>

//           <div className="row">
//             <div className="input-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               <span>{errors.password}</span>
//             </div>

//             <div className="input-group">
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//               <span>{errors.confirmPassword}</span>
//             </div>
//           </div>

//           <div className="row">
//             <div className="input-group">
//               <label>Date of Birth</label>
//               <input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />
//               <span>{errors.dob}</span>
//             </div>

//             <div className="input-group">
//               <label>Gender</label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <option value="">Select</option>
//                 <option>Female</option>
//                 <option>Male</option>
//                 <option>Other</option>
//               </select>
//               <span>{errors.gender}</span>
//             </div>
//           </div>

//           <div className="input-group">
//             <label>Address</label>
//             <textarea
//               rows="3"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             ></textarea>
//             <span>{errors.address}</span>
//           </div>

//           <div className="input-group">
//             <label>City</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//             />
//             <span>{errors.city}</span>
//           </div>

//           <button type="submit">
//             Register
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

/* Task 6 – Fetch Data from API using useEffect */

// import React, { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     console.log("Fetching users...");

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Users:", data);

//         setUsers(data);
//         setFilteredUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);

//         setError("Unable to load user data.");
//         setLoading(false);
//       });
//   };

//   const handleSearch = (event) => {
//     const value = event.target.value;

//     setSearch(value);

//     const result = users.filter((user) =>
//       user.name.toLowerCase().includes(value.toLowerCase())
//     );

//     setFilteredUsers(result);
//   };

//   return (
//     <div className="container">

//       <div className="header">
//         <h1>Employee Directory</h1>
//         <p>React useEffect Hook - API Integration</p>
//       </div>

//       <div className="top-section">

//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search employee..."
//             value={search}
//             onChange={handleSearch}
//           />
//         </div>

//         <div className="count-card">
//           <h2>{filteredUsers.length}</h2>
//           <p>Total Employees</p>
//         </div>

//       </div>

//       {loading && (
//         <div className="loading">
//           Loading Employee Data...
//         </div>
//       )}

//       {error && (
//         <div className="error">
//           {error}
//         </div>
//       )}

//       {!loading && !error && (
//         <div className="table-container">

//           <table>

//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Website</th>
//               </tr>
//             </thead>

//             <tbody>

//               {filteredUsers.map((user) => (
//                 <tr key={user.id}>

//                   <td>{user.name}</td>

//                   <td>{user.username}</td>

//                   <td>{user.email}</td>

//                   <td>{user.phone}</td>

//                   <td>{user.website}</td>

//                 </tr>
//               ))}

//             </tbody>

//           </table>

//         </div>
//       )}

//     </div>
//   );
// }

// export default App;

