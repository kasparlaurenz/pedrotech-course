import React from 'react';
import './App.css';
import { useToggle } from './useToggle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Cat from './components/Cat';

function App() {
  const queryClient = new QueryClient();
  const [isVisible, toggle] = useToggle(false);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
        {isVisible && <h1>Hidden Text</h1>}
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
