import React from 'react';

const Lists = () => {
  const names = ['pedro', 'marc', 'dustin', 'charlie'];

  const users = [
    { id: 1, name: 'Peter', age: 13 },
    { id: 2, name: 'Jake', age: 31 },
    { id: 3, name: 'Marry', age: 24 },
  ];

  return (
    <div className="Lists">
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}

      {users.map(user => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <span>{user.age}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
