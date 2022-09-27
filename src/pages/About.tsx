import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, AppContextTypes } from '../App';

const About = () => {
  const { username } = useContext(AppContext) as AppContextTypes;
  return (
    <div>
      <h1>About {username}</h1>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default About;
