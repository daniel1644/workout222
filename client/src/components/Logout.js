import axios from 'axios';
import { logoutUser } from '../api';
import './logout.css'; // import the CSS file

const Logout = () => {
  const handleClick = async () => {
    try {
      await logoutUser(); // Use the logoutUser function
      localStorage.removeItem('token');
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="logout-button" onClick={handleClick}>Logout</button>
  );
};

export default Logout;