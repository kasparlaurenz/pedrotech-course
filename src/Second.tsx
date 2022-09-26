import React, { useState } from 'react';
import axios from 'axios';
import { GET } from './util/api';

const Second = () => {
  const [person, setPerson] = useState<{ name: string; age: number }>({
    name: '',
    age: 0,
  });

  const API_URL = `https://api.agify.io?name=${person.name}`;

  const getAge = async () => {
    const person = await GET(API_URL);
    if (person) {
      setPerson({ ...person, age: person.age });
    }
  };

  return (
    <>
      Second
      <input
        type="text"
        placeholder="Type Name.."
        onChange={e => setPerson({ ...person, name: e.target.value })}
        value={person.name}
      />
      <button onClick={getAge}>Get Age</button>
      {person.age !== 0 && (
        <>
          <h2>Predicted age of: {person.name}</h2>
          <p>{person.age}</p>
        </>
      )}
    </>
  );
};

export default Second;
