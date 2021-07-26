import React from 'react';
import './core/assets/styles/custom.scss';
import './App.scss';
import Navbar from 'core/components/Navbar';
import Home from 'pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
