import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, AppContextTypes } from '../App';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Home = () => {
  const { data, isLoading, error } = useQuery(['catfact'], async () => {
    return await axios.get('https://catfact.ninja/fact').then(res => res.data);
  });
  console.log(data?.fact);
  const { username } = useContext(AppContext) as AppContextTypes;

  if (error) {
    return <>Hilfe</>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>Home of</h1>
      <p>{username}</p>
      <Link to="/about">Go to about</Link>
      <p>{data?.fact}</p>
    </div>
  );
};

export default Home;
