import React from 'react'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomePage />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
