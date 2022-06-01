import React from 'react';
import './App.css';
import ContentVDS from './components/ContentVDS/ContentVDS';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';
import History from './components/ShoppingHistory/History';
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
            <Route exact path='/main' element={<ContentVDS />} />
            <Route exact path='/order' element={<Order />} />
            <Route exact path='/history' element={<History />} />
            <Route exact path='/accsettings' element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
