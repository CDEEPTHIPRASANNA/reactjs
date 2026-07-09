// import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
// import UserDetails from './components/UserDetails';
// import UserList from './components/UserList';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="page">
//         <header className="header">
//           <div className="header-content">
//             <div className="brand-block">
//               <div className="brand-badge">U</div>
//               <div>
//                 <h1 className="title">User Directory</h1>
//                 <p className="subtitle">Explore user profiles with interactive routes</p>
//               </div>
//             </div>
//             <nav className="nav">
//               <NavLink to="/users" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
//                 All Users
//               </NavLink>
//             </nav>
//           </div>
//         </header>

//         <main className="main">
//           <section className="hero-panel">
//             <div>
//               <p className="eyebrow">Responsive Web Page</p>
//               <h2 className="hero-title">A clean, interactive user experience</h2>
//               <p className="hero-text">
//                 Browse users, open detailed profiles, and move through the app smoothly on any screen size.
//               </p>
//             </div>
//           </section>

//           <Routes>
//             <Route path="/" element={<Navigate to="/users" replace />} />
//             <Route path="/users" element={<UserList />} />
//             <Route path="/users/:id" element={<UserDetails />} />
//             <Route
//               path="*"
//               element={
//                 <div className="state-box">
//                   The requested page could not be found.
//                 </div>
//               }
//             />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


// Task 12: Custom Hook for API Integration – Submit by EOD

