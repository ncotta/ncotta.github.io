import React from 'react'
import Navbar from './components/helpers/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import OtherPage from './components/pages/OtherPage';
import PortfolioPage from './components/pages/PortfolioPage';
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
