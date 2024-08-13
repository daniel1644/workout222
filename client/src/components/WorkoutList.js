import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getWorkouts, deleteWorkout, addWorkout, getWorkout, updateWorkout } from '../api';
import './WorkoutList.css';
import Navbar2 from './Navbar2';
import Logout from './Logout';

const WorkoutList = () => {
  const history = useHistory();
  const { id } = useParams();
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentWorkoutId, setCurrentWorkoutId] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      } 
    };
    fetchWorkouts();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchWorkout = async () => {
        const data = await getWorkout(id);
        setDate(data.date);
        setType(data.type);
        setDuration(data.duration);
        setCurrentWorkoutId(id);
        setIsEditing(true);
      };
      fetchWorkout();
    }
  }, [id]);

  const handleViewWorkout = (id) => {
    history.push(`/workouts/${id}`);
  };

  const handleDeleteWorkout = async (id) => {
    if (id === currentWorkoutId) {
      await deleteWorkout(id);
      setWorkouts(workouts.filter(workout => workout.id !== id));
      history.push('/workouts');
    }
  };

  const handleEditWorkout = (id) => {
    if (id === currentWorkoutId) {
      setIsEditing(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateWorkout(currentWorkoutId, { date, type, duration });
    } else {
      const newWorkout = await addWorkout({ date, type, duration });
      setWorkouts([...workouts, newWorkout]);
    }
    history.push('/workouts');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Navbar2/>

      <div className="workout-list-container">
         <Logout />
      <h2 className="workout-list-header">Workout List</h2>
      <Link to="/workouts/add">Add Workout</Link>
   
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <br />
        <label>
          Duration:
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isEditing ? 'Save Changes' : 'Add Workout'}</button>
      </form>
      <ul className="workout-list">
        {workouts.map((workout) => (
          <li key={workout.id} className="workout-item">
            <h1>{workout.date} - {workout.type} ({workout.duration} mins)</h1>
            <button onClick={() => handleViewWorkout(workout.id)}>View Workout</button>
            {currentWorkoutId === workout.id && (
              <React.Fragment>
                <button onClick={() => handleEditWorkout(workout.id)}>Edit</button>
                <button onClick={() => handleDeleteWorkout(workout.id)}>Delete</button>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
     
    </div>
    </div>
    
  );
};

export default WorkoutList;