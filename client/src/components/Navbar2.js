import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar2 = () => (
  <nav>
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/workouts">Workouts</Link>
      </li>
      <li>
        <Link to="/goals">Goals</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar2;
