import React, { useState } from "react";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
<div className={`w-full max-w-[400px] mx-auto p-6 mt-20 bg-[#1d1f27] text-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${isLogin ? 'h-[400px]' : 'h-[600px]'}`}>
<div className="flex justify-between mb-5 border-b-2 border-gray-700">
        <button 
          className={`flex-1 text-center py-3 text-lg ${isLogin ? 'text-white font-semibold border-b-4 border-blue-500' : 'text-gray-400'}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button 
          className={`flex-1 text-center py-3 text-lg ${!isLogin ? 'text-white font-semibold border-b-4 border-blue-500' : 'text-gray-400'}`}
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
                className="p-3 bg-gray-800 text-white rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="p-3 bg-gray-800 text-white rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button 
                className="py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <input 
                type="text" 
                placeholder="Full Name" 
                className="p-3 bg-gray-800 text-white rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="p-3 bg-gray-800 text-white rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="p-3 bg-gray-800 text-white rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="p-3 bg-gray-800 text-white rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
              <button 
                className="py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
