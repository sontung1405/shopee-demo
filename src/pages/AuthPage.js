import React, { useState } from 'react';
import { registerUser, loginUser } from '../api';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await loginUser({ email, password });
        console.log('Login successful:', data);
      } else {
        const data = await registerUser({ username, email, password });
        console.log('Registration successful:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {isLogin ? <h2>Login</h2> : <h2>Register</h2>}
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin((prev) => !prev)}>
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default AuthPage;