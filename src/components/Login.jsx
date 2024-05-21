import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    // Simulating user authentication
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedin","true");
      alert('User signed in successfully');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Beyoung</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email ID *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">
          Proceed
        </button>
        <div className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600">Create Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
