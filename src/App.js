import React from 'react';
import './App.css';
import ContentVDS from './components/ContentVDS/ContentVDS';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';
import Bonus from './components/BonusPoints/Bonus';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/main' element={<ContentVDS />} />
            <Route path='/order' element={<Order />} />
            <Route path='/bonus' element={<Bonus />} />
            <Route path='/accsettings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
