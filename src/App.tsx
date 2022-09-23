import React from 'react';
import './App.css';
import Component from './components/Component/Component';

function App() {
  const age = 15;
  const isGreen = true;

  return (
    <div className="App">
      <h1>Test</h1>
      <p>Hallo</p>
      {age >= 18 ? (
        <Component />
      ) : (
        <>
          Under age
          <h1 className={isGreen ? 'green' : ''}>HAHA</h1>
        </>
      )}
      {isGreen && <p>Text ist grün</p>}
    </div>
  );
}

export default App;
