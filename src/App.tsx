import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type AppContextTypes = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextTypes | null>(null);

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState<string>('Laurenz');

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
