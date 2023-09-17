import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  const logo = 'https://cdn-icons-png.flaticon.com/512/60/60736.png'
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <h1>BCA Blogs</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#103457',
          borderRadius: '4px',
          fontWeight: '700'
        }}>New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
