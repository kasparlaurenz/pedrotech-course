import React from 'react';
import type { FC } from 'react';

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
        return <User id={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

interface UserProps {
  id: number;
  age: number;
  name: string;
}
const User: FC<UserProps> = ({ id, age, name }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <span>{age}</span>
    </div>
  );
};

export default Lists;
