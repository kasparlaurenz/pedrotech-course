import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const [username, setUsername] = useState<string>('Laurenz');
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
