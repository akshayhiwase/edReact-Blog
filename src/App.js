import React from 'react';
import Header from './Components/Header/header'
import Cards from './Components/Cards/Cards'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">

      <Header />

      <h1>My Places</h1>
      <div className="main-section">

        <Cards />
        <Sidebar />
      </div>



    </div>
  );
}

export default App;
