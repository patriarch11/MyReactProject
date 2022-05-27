import React from 'react';
import './App.css';
import ContentVDS from './components/ContentVDS/ContentVDS';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <ContentVDS />
    </div>
  );
}

export default App;
