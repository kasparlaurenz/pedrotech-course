import React, { useState } from 'react';
import './App.css';

function App() {
  const [showText, setShowText] = useState<boolean>(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(prevState => !prevState);
        }}
      >
        Show Text
      </button>
      {showText && <h1>Text</h1>}
    </div>
  );
}

export default App;
