import React from 'react';
import { Link } from 'react-router-dom';

type HomeProps = {
  username: string;
};

const Home = ({ username }: HomeProps) => {
  return (
    <div>
      <h1>Home of</h1>
      <p>{username}</p>
      <Link to="/about">Go to about</Link>
    </div>
  );
};

export default Home;
