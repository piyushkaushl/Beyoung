import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => email.includes('@');
  const validatePassword = (password) =>
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[@#$%^&*()_]/.test(password) &&
    password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }
    if (!validateEmail(email)) {
      alert('Email must have "@"');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password should be at least 6 letters and should include at least one lowercase letter, uppercase letter, and symbol[@#$%^&*()_]');
      return;
    }
    if (password !== confirmPassword) {
      alert('Both passwords should match');
      return;
    }

    // Simulating user check and creation
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
      alert('The User already exists');
    } else {
      const newUser = { name, email, password };
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
      alert('User registered successfully');
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Register with Beyoung</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
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
            placeholder="Choose New Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password *"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">
          REGISTER
        </button>
        <div className="mt-4 text-center">
          Already a Customer? <Link to="/login" className="text-blue-600">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

