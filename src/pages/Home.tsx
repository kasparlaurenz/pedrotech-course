import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, AppContextTypes } from '../App';

const Home = () => {
  const { username } = useContext(AppContext) as AppContextTypes;
  return (
    <div>
      <h1>Home of</h1>
      <p>{username}</p>
      <Link to="/about">Go to about</Link>
    </div>
  );
};

export default Home;
