import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getUsers, deleteUser, addUser, getUser, updateUser } from '../api';
import './UserList.css';
import Navbar2 from './Navbar2';
import Logout from './Logout';

const UserList = () => {
  const history = useHistory();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      } 
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const data = await getUser(id);
        setUsername(data.username);
        setEmail(data.email);
      };
      fetchUser();
      setIsEditing(true);
    }
  }, [id]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const data = await getUser(id); // assuming id is the current user's id
      setCurrentUser(data);
    };
    fetchCurrentUser();
  }, [id]);

  const handleViewProfile = (id) => {
    history.push(`/users/${id}`);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateUser(id, { username, email, password });
    } else {
      await addUser({ username, email, password });
    }
    history.push('/users');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
           <Navbar2/>
          <div className="user-list-container">
  
       <Logout />
      <h2 className="user-list-header">User List</h2>
      <Link to="/users/add">Add User</Link>
     
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isEditing ? 'Save Changes' : 'Add User'}</button>
      </form>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h1>{user.username}</h1>
            <button onClick={() => handleViewProfile(user.id)}>View Profile</button>
            {currentUser.id === user.id && (
              <>
                <Link to={`/users/edit/${user.id}`}>Edit</Link>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      
    </div>
    </div>

  );
};

export default UserList;