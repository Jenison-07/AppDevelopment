import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSignUp = (e) => {
     e.preventDefault(); 
    nav("/");
  };

  return (
    <div class="container">
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button >Sign up</button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">
        <button type="button">Log in</button>
      </Link>
      </p>
    </div>
  );
}

export default SignUp;
