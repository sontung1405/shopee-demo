import React, { useState } from 'react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(prevMode => !prevMode);
  };

  return (
    <div>
      {isLogin ? <h2>Login</h2> : <h2>Register</h2>}
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={toggleMode}>
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
}

export default Auth;