import React, { useState } from 'react';
import './App.css';
import Text from './components/Text';

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
      {showText && <Text />}
    </div>
  );
}

export default App;
