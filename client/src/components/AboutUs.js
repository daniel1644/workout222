// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to our fitness app!</p>
      <p>We are a team of fitness enthusiasts dedicated to helping you reach your goals.</p>
      <p>Our app provides a platform for users to track their workouts, set goals, and connect with others who share similar interests.</p>
      <div className="image-gallery">
        <img src="https://i.ytimg.com/vi/HISjHTE2vnM/maxresdefault.jpg" alt="Fitness class" />
        <img src="https://i.ytimg.com/vi/KBpoBc98BwM/maxresdefault.jpg" alt="Personal training" />
        <img src="https://i.ytimg.com/vi/wgglFeTL0lU/hqdefault.jpg" alt="Running group" />
      </div>
    </div>
  );
};

export default AboutUs;