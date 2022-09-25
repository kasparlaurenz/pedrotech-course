import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [fact, setFact] = useState<string>('');

  const getFact = () => {
    axios.get('https://catfact.ninja/fact').then(response => {
      setFact(response.data.fact);
    });
  };

  useEffect(() => {
    getFact();
  }, []);

  return (
    <div>
      <button onClick={getFact}>Axios</button>

      {fact && <p>{fact}</p>}
    </div>
  );
};

export default Axios;
