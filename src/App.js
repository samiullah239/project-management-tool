import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/Login";
import Layout from "./Components/Layout"; // Import Layout
import Dashboard from "./pages/Dashboard";
import Management from "./pages/ProjectManagement";

function App() {
  return (
    <Router>
      {/* Define routes for login/signup, sidebar, and dashboard */}
      <Routes>
        {/* Route for LoginSignup without Sidebar */}
        <Route path="/" element={<LoginSignup />} />

        {/* Route for HR Dashboard with Sidebar */}
        <Route path="/hr" element={
          <Layout>
            <Dashboard /> {/* Display Dashboard when sidebar is visible */}
          </Layout>
        } />

        {/* Route for Project Management with Sidebar */}
        <Route path="/management" element={
          <Layout>
            <Management /> {/* Display Project Management page with Sidebar */}
          </Layout>
        } />

        {/* Additional protected routes can be added here if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
