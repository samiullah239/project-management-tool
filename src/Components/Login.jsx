import React, { useState } from "react";
import axios from "axios";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // New state for role
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccessMessage('');
  };

  const handleLogin = async () => {
    try {
      // Send email and password to the backend API
      const response = await axios.post("http://localhost:8080/auth/Login", { email, password });

      const { token, data } = response.data;  // Destructure token and user data from the response

      // Store token in localStorage for further use (e.g., for keeping the user logged in)
      localStorage.setItem("token", token);

      // Decode token to check role and redirect accordingly
      const decodedToken = decodeToken(token);
      if (decodedToken.role === "hr") {
        window.location.href = "/hr/dashboard";  // Redirect to HR Dashboard if role is hr
      } else if (decodedToken.role === "management") {
        window.location.href = "/management-dashboard";  // Redirect to Management Dashboard if role is management
      } else {
        window.location.href = "/hr/dashboard";  // Default redirect for other roles (e.g., user)
      }

    } catch (error) {
      setError(error.response?.data?.error || "Login failed");
    }
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      // Send role in the signup request
      const response = await axios.post("http://localhost:8080/auth/signUp", { userName, email, password, role });
      setSuccessMessage(response.data.message);  // Success message from backend
      setTimeout(() => {
        // Redirect to login page after successful signup
        setIsLogin(true);
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
    }
  };

  // Helper function to decode the token
  const decodeToken = (token) => {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode the JWT token and extract the payload
    return payload;  // Return the decoded payload
  };

  return (
    <div className={`w-full max-w-[400px] mx-auto p-6 mt-20 bg-gray-300 text-gray-600 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${isLogin ? 'h-[400px]' : 'h-[600px]'}`}>
      <div className="flex justify-between mb-5 border-b-2 border-gray-700">
        <button
          className={`flex-1 text-center py-3 text-lg ${isLogin ? 'text-gray-600 font-semibold border-b-4 border-gray-500' : 'text-gray-400'}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`flex-1 text-center py-3 text-lg ${!isLogin ? 'text-gray-600 font-semibold border-b-4 border-gray-500' : 'text-gray-400'}`}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      <div className="relative h-full">
        <div className="flex transition-transform duration-500" style={{ transform: isLogin ? "translateX(0)" : "translateX(0%)" }}>
          {/* Login Form */}
          {isLogin && (
            <div className="w-full p-5 flex flex-col gap-4">
              <h2 className="text-2xl text-center mb-2">Login</h2>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="py-3 bg-gray-500 text-white font-semibold rounded-2xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          )}

          {/* Signup Form */}
          {!isLogin && (
            <div className="w-full p-5 flex flex-col gap-4">
              <h2 className="text-2xl text-center mb-2">Signup</h2>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* Role selection */}
              <select
                className="p-3 bg-gray-300 text-black rounded-2xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>Select Role</option>
                <option value="hr">HR</option>
                <option value="management">Management</option>
                <option value="user">User</option>
              </select>
              <button
                className="py-3 bg-gray-500 text-white font-semibold rounded-2xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={handleSignup}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
