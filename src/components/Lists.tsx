import React from 'react';

const Lists = () => {
  const names = ['pedro', 'marc', 'dustin', 'charlie'];
  return (
    <div className="Lists">
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );
};

export default Lists;
