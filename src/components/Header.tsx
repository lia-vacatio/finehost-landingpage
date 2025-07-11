import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateToAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToAbout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/finehost_bk.png"
              alt="FineHost 로고"
              className="h-8 w-auto"
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </div>

          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex items-center space-x-2">
            <nav className="flex space-x-2">
              <a href="#problems" className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md">
                문제점
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md">
                솔루션
              </a>
              <a href="#dashboard" className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md">
                데모
              </a>
              <button 
                onClick={onNavigateToAbout}
                className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md"
              >
                회사 소개
              </button>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors px-3 py-2 rounded-md">
                문의
              </a>
            </nav>
            <button 
              onClick={scrollToContact}
              className="btn-primary ml-2"
            >
              무료 상담 신청
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="#problems"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                문제점
              </a>
              <a
                href="#solutions"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                솔루션
              </a>
              <a
                href="#dashboard"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                데모
              </a>
              <button
                onClick={() => {
                  onNavigateToAbout();
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 w-full text-left"
              >
                회사 소개
              </button>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                onClick={() => setIsMenuOpen(false)}
              >
                문의
              </a>
              <div className="px-3 py-2">
                <button 
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}
                  className="btn-primary w-full"
                >
                  무료 상담 신청
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 