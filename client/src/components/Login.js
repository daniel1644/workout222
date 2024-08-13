import React, { useState } from 'react';
import { loginUser, registerUser } from '../api'; 
import { useHistory} from 'react-router-dom'
import Navbar2 from './Navbar2';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true); 
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginUser({ username, password });
        setMessage('Login successful!');
        setIsLoggedIn(true);
        history.push("/dashboard")
        
      } else {
        await registerUser({ username, password, email });
        setMessage('Registration successful!');
        setIsLoggedIn(true);
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      {isLoggedIn ? (
        <div>
          <Navbar2 />
          
          <div className="content">
           
          </div>
        </div>
      ) : (
        <div>
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          </form>
          <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
            {isLogin ? 'Need an account? Register here' : 'Already have an account? Login here'}
          </p>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;