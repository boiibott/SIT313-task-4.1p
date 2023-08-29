import React from 'react'
import './Navbar.css';
function NavBar() {
    return (
        <div className="container">
        <div className="navbar">
          <a href="#">Dev@Deakin</a>
          <input type="text" placeholder="Search..." />
          <div className="login-button">
            <a href="#">Login</a>
          </div>
          <div className="post-button">
            <a href="#">Post</a>
          </div>
        </div>
      </div>
    )
}
export default NavBar;  
