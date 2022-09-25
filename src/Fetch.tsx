import React from 'react';

const Fetch = () => {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });

  return (
    <div>
      <button>Fetch</button>
      <p></p>
    </div>
  );
};

export default Fetch;
