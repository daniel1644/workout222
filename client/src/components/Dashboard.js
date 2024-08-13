import React, { useState, useEffect } from 'react';
import { getUsers, getWorkouts, getGoals } from '../api'; 
import './Dashboard.css'; 
import Navbar2 from './Navbar2';
import Logout from './Logout';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [usersData, workoutsData, goalsData] = await Promise.all([
          getUsers(),
          getWorkouts(),
          getGoals()
        ]);
        setUsers(usersData || []);
        setWorkouts(workoutsData || []);
        setGoals(goalsData || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    
    <div className="dashboard__container">
      <Navbar2/>
      <Logout />
      <h2>Dashboard</h2>
      <div className="dashboard__grid">
        <div className="widget">
          <h3>Users</h3>
          <ul>
            {users.length > 0 ? (
              users.map(user => (
                <li key={user.id}>
                  <p>{user.username}</p>
                </li>
              ))
            ) : (
              <li>No users available.</li>
            )}
          </ul>
        </div>
        <div className="widget">
          <h3>Workouts</h3>
          <ul>
            {workouts.length > 0 ? (
              workouts.map(workout => (
                <li key={workout.id}>
                  <p>{workout.type}</p>
                </li>
              ))
            ) : (
              <li>No workouts available.</li>
            )}
          </ul>
        </div>
        <div className="widget">
          <h3>Goals</h3>
          <ul>
            {goals.length > 0 ? (
              goals.map(goal => (
                <li key={goal.id}>
                  <p>{goal.description}</p>
                </li>
              ))
            ) : (
              <li>No goals available.</li>
            )}
          </ul>
        </div>
        <div className="image-gallery">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_z2mmMJwzSplR9KDarPj6jx6dA-PRJNhvs7CMR-5u4huKqDWJQD9PmadVB7-5n8bqgHk&usqp=CAU" alt="Image 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjfM0zk3G8TrOgGZS28wZWIBz4oKVtjntPwUVa2pZbshXrksyftsbjbEK-NoPNEOSbEs&usqp=CAU" alt="Image 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGKmjTsDMEHh7X6xXb2aS8WQb5d5r6-8T6tbJZxNu4Y5uRQPUe-sUlsER4TCigx4-ukM4&usqp=CAU" alt="Image 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthI5daXz7tiLV0wf-fxAwGvW8LDnPeyzsLQZq7Y0wCHkwTz-8bfpKjz3wAm5A5I9kRVY&usqp=CAU" alt="Image 4" />
          <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/c2/51/5a/c2515a28-2afc-4ea0-a958-ae2d058805bd/source/256x256bb.jpg" alt="Image 5" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;