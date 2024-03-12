import React from 'react'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import OtherPage from './components/OtherPage';
import PortfolioPage from './components/PortfolioPage';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/other" element={<OtherPage />} />
				<Route path="contact" element={<ContactPage />} />
			</Routes>
		</>
	)
}

export default App
