import React from 'react';

function ClubLogin() {
  return (
    <main>
      <div className="form-container">
        <div className="form-box">
          <h2>Club Login</h2>
          <form id="club-login-form">
            <input type="text" name="club-name" placeholder="Club Name" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="btn">Login</button>
          </form>
          <p>Need assistance? <a href="#">Contact Admin</a></p>
        </div>
      </div>
    </main>
  );
}

export default ClubLogin;