import React from 'react';
import { useGetCat } from '../useGetCat';

const Cat = () => {
  const { data, isLoading, refetchData } = useGetCat();
  if (isLoading) return <h1>loading...</h1>;
  return (
    <div>
      <button onClick={refetchData}>Fetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};

export default Cat;
