import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="top-bar">
        <Link to="/" className="logo">EventEase</Link>
        <nav>
          <ul>
            <li><Link to="/club-login" className="btn club-login">Club Login</Link></li>
            <li><Link to="/login" className="btn student-login">Student Login/Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
