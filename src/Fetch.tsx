import React, { useState } from 'react';

const Fetch = () => {
  const [fact, setFact] = useState<string>('');
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

  const getFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      });
  };
  return (
    <div>
      <button onClick={getFact}>Fetch</button>
      {fact && <p>{fact}</p>}
    </div>
  );
};

export default Fetch;
