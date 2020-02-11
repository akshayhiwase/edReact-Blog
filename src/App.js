import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo'
import Cards from './Components/Cards/Cards'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navbar />
      <Cards />
      <Sidebar />

    </div>
  );
}

export default App;
