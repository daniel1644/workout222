import React from 'react';
import { useHistory } from 'react-router-dom';
import './AboutUs.css';
import Navbar2 from './Navbar2';
import Logout from './Logout';

const AboutUs = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="about-us-container">
      <Navbar2 />
      <Logout />
      <div className="about-us-content">
        <h1 className="title">About Our Fitness App</h1>
        <div className='about-div'>
          <img src="https://i.ytimg.com/vi/HISjHTE2vnM/maxresdefault.jpg" alt="Fitness class" />
          <div className='description-about'>
            <p>Welcome to our fitness app, your platform for tracking workouts, setting goals, and connecting with like-minded fitness enthusiasts.</p>
            <p>Founded by a team of dedicated fitness enthusiasts, our app is designed to help you achieve your fitness goals efficiently.</p>
          </div>
        </div>
        <h2 className="subtitle">Our Mission</h2>
        <div className='mission'>
          <p className="description-mission">Our mission is to empower individuals to reach their fitness goals by providing a user-friendly and efficient platform for workout tracking, goal setting, and community engagement.</p>
          <img src="https://i.ytimg.com/vi/KBpoBc98BwM/maxresdefault.jpg" alt="Mission" />
        </div>
        <h2 className="subtitle">What Sets Us Apart?</h2>
        <div className='values'>
          <img src="https://i.ytimg.com/vi/wgglFeTL0lU/hqdefault.jpg" alt="Values" className="values-image" />
          <ul className="feature-list">
            <li className="feature-item"><strong>Personalized Tracking:</strong> Log and monitor workouts with personalized metrics.</li>
            <li className="feature-item"><strong>Goal Setting:</strong> Set and track your fitness goals.</li>
            <li className="feature-item"><strong>Community:</strong> Engage with a supportive fitness community.</li>
            <li className="feature-item"><strong>Analytics:</strong> Access detailed performance insights.</li>
            <li className="feature-item"><strong>Support:</strong> Get help from our dedicated team.</li>
          </ul>
        </div>
        <h2 className="subtitle">Our Vision for the Future</h2>
        <div className='vision'>
          <p className="description-vision">We envision our app as the leading platform for fitness enthusiasts, with plans for advanced features, integrations, and enhanced community interactions.</p>
        </div>
      </div>
      <div className="arrow-buttons">
        <button className="arrow-button back" onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="arrow-button up" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
