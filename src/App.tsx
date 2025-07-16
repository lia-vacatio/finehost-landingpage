import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Dashboard from './components/Dashboard';
import SocialProof from './components/SocialProof';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import Shinsegae from './pages/Shinsegae';

function HomePage({ onNavigateToShinsegae }: { onNavigateToShinsegae: () => void }) {
  return (
    <div className="App">
      <Header onNavigateToShinsegae={onNavigateToShinsegae} />
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
  const [currentPage, setCurrentPage] = useState<'home' | 'shinsegae'>('home');

  const navigateToShinsegae = () => setCurrentPage('shinsegae');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <div>
      {currentPage === 'home' && <HomePage onNavigateToShinsegae={navigateToShinsegae} />}
      {currentPage === 'shinsegae' && <Shinsegae onNavigateToHome={navigateToHome} />}
    </div>
  );
}

export default App; 