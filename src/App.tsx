import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="App">
      <button onClick={() => setIsVisible(prev => !prev)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
