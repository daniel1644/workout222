// // logout.js
// import axios from 'axios';

// const Logout = () => {
//   const handleClick = async () => {
//     try {
//       const response = await axios.post('/logout');
//       localStorage.removeItem('token');
//       window.location.href = '/';
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <button onClick={handleClick}>Logout</button>
//   );
// };

// export default Logout;