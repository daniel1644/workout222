import React, { useState } from 'react';
import pic1 from '../logo.png';
import pic2 from '../1.png';
import pic3 from '../2.png';
import pic4 from '../4.png';
import './home.css';
import { loginUser, registerUser } from '../api'; // Ensure you have these functions in your api.js
import Footer from './Footer';



const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginUser({ username, password });
        setMessage('Login successful!');
      } else {
        await registerUser({ username, password, email });
        setMessage('Registration successful!');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div>

      <div className="auth-container">
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


      <h1>
      <div className="slider__item">
      <div className="slider__content">
        <h1 className="text-light mb-3">Gym Tracker</h1>
        <h4 className="text-light mb-4"> 
          Welcome to Gym Tracker, your ultimate partner in achieving your fitness goals.<br/> 
          From tracking workouts to monitoring progress, we provide comprehensive tools to ensure you stay <br/>
          on top of your fitness journey. Trust us to help you maintain a healthy and active lifestyle efficiently 
          and professionally.
        </h4>
      </div>
    </div>
      =</h1>

      <div className="image-gallery">
        <img src={pic1} alt="" className="img-fluid" />
        <img src={pic2} alt="" className="img-fluid" />
        <img src={pic3} alt="" className="img-fluid" />
        <img src={pic4} alt="" className="img-fluid" />
      </div>

      <Footer /> 

    </div>
  );
};

export default Home;