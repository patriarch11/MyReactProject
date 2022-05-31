import React from 'react';
import './App.css';
import ContentVDS from './components/ContentVDS/ContentVDS';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <ContentVDS />
      <Footer />
    </div>
  );
}

export default App;
