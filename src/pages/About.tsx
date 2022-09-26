import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const nav = useNavigate();
  return (
    <div>
      <Link to="/">Go to homepage</Link>
      <button onClick={() => nav('haha')}>Get Error</button>
    </div>
  );
};

export default About;
