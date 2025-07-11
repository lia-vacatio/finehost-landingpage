import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Dashboard from './components/Dashboard';
import SocialProof from './components/SocialProof';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import About from './pages/About';

function HomePage({ onNavigateToAbout }: { onNavigateToAbout: () => void }) {
  return (
    <div className="App">
      <Header onNavigateToAbout={onNavigateToAbout} />
      <Hero />
      <Problems />
      <Solutions />
      <Dashboard />
      <SocialProof />
      <ConsultationForm />
      <Footer />
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const navigateToAbout = () => setCurrentPage('about');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <div>
      {currentPage === 'home' && <HomePage onNavigateToAbout={navigateToAbout} />}
      {currentPage === 'about' && <About onNavigateToHome={navigateToHome} />}
    </div>
  );
}

export default App; 