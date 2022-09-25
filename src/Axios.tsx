import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [fact, setFact] = useState<string>('');

  useEffect(() => {
    axios.get('https://catfact.ninja/fact').then(response => {
      setFact(response.data.fact);
    });
  }, []);

  return (
    <div>
      <button>Axios</button>

      {fact && <p>{fact}</p>}
    </div>
  );
};

export default Axios;
