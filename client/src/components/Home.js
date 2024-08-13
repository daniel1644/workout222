import React from 'react';
import pic1 from '../logo.png';
import pic2 from '../1.png';
import pic3 from '../2.png';
import pic4 from '../4.png';
import './home.css';
import HeroSlider from './HeroSlider';
import Footer from './Footer';

const Home = () => {
  return (
    <div>

      
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
      </h1>

      <div className="image-gallery">
        <img src={pic1} alt="" className="img-fluid" />
        <img src={pic2} alt="" className="img-fluid" />
        <img src={pic3} alt="" className="img-fluid" />
        <img src={pic4} alt="" className="img-fluid" />
      </div>
      <HeroSlider /> 
    
      <Footer /> 
    </div>
  );
};

export default Home;