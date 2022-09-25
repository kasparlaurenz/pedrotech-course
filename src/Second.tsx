import React, { useState } from 'react';
import axios from 'axios';

const Second = () => {
  const [name, setName] = useState<{ name: string; age?: number }>({
    name: '',
  });

  const getAge = () => {
    axios
      .get(`https://api.agify.io?name=${name}`)
      .then(response => setName({ ...name, age: response.data.age }));
  };
  return (
    <>
      Second
      <input
        type="text"
        placeholder="Type Name.."
        onChange={e => setName({ ...name, name: e.target.value })}
        value={name.name}
      />
      <button onClick={getAge}>Get Age</button>
      <h2>Predicted age of: {name.name}</h2>
      <p>{name.age}</p>
    </>
  );
};

export default Second;
