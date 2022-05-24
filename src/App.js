import React from 'react';
import './App.css';
import ContentVDS from './components/ContentVDS';
import Header from './components/Header';
import Nav from './components/Navbar';


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
