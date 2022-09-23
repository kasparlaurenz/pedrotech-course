import React from 'react';
import './App.css';
import Component from './components/Component/Component';

function App() {
  const age = 15;

  return (
    <div className="App">
      <h1>Test</h1>
      <p>Hallo</p>
      {age >= 18 ? (
        <Component />
      ) : (
        <div>
          Under age
          <h1>HAHA</h1>
        </div>
      )}
    </div>
  );
}

export default App;
