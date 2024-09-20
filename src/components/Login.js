import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main>
      <div className="form-container">
        <div className={`form-box ${isLogin ? 'login-form' : 'signup-form'}`}>
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          <form>
            {!isLogin && <input type="text" name="name" placeholder="Name" required />}
            {!isLogin && <input type="email" name="email" placeholder="Email" required />}
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit" className="btn">{isLogin ? 'Login' : 'Signup'}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a href="#" onClick={toggleForm}>{isLogin ? 'Signup' : 'Login'}</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;