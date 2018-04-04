import React from 'react';
import './App.css';
// Main.js is the router
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar/>
    <div className="container">
      <Main/>
    </div>
  </div>
);

export default App;
