import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const About = () => {
  const nav = useNavigate();
  const { user } = useParams();
  return (
    <div>
      This is about {user}
      <Link to="/">Go to homepage</Link>
      <button onClick={() => nav('haha')}>Get Error</button>
    </div>
  );
};

export default About;
