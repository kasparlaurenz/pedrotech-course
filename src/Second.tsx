import React, { useState } from 'react';
import axios from 'axios';

const Second = () => {
  const [person, setPerson] = useState<{ name: string; age: number }>({
    name: '',
    age: 0,
  });

  const getAge = () => {
    axios.get(`https://api.agify.io?name=${person.name}`).then(response => {
      setPerson({ name: response.data.name, age: response.data.age });
      console.log(response);
    });
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
