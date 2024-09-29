// src/App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header /> 
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;


