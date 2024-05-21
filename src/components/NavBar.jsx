import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleAuth }) => {
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      alert('You have been logged out.');
      handleAuth(false);
      localStorage.setItem("loggedin","false");
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow fixed w-screen left-0 top-0 z-10 flex justify-between items-center p-4 px-40">
      <div className="navbar-logo">
        <Link to="/">
          {/* <img src="/logo.png" alt="Brand Logo" className="h-10" /> */}
          <h1 className='text-2xl font-bold tracking-widest	'>BEYOUNG</h1>
        </Link>
      </div>
      <div>
        <button
          onClick={handleAuthAction}
          className="bg-black text-white px-4 py-2 rounded"
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



