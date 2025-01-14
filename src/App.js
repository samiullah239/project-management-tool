import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/Login";
import Layout from "./Components/Layout"; // Import Layout
import Dashboard from "./Roles/MasterAdmin/Dashboard";
import Management from "./Roles/MasterAdmin/ProjectManagement";
import Addemployee from "./Roles/MasterAdmin/AddEmployee";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/add-employee" element={<Addemployee />} />

        <Route
          path="/hr"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/management"
          element={
            <Layout>
              <Management />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
