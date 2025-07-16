import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateToShinsegae: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToShinsegae }) => {
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
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              <button 
                onClick={onNavigateToShinsegae}
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <img 
                  src="/shinsegae.png" 
                  alt="VIA SHINSEGAE 로고" 
                  className="h-10 w-auto"
                />
              </button>
              <a href="#problems" className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2 rounded-md font-medium flex items-center">
                문제점
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2 rounded-md font-medium flex items-center">
                솔루션
              </a>
              <a href="#dashboard" className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2 rounded-md font-medium flex items-center">
                제품
              </a>
              <a 
                href="https://vacatio.career.greetinghr.com/ko/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2 rounded-md font-medium flex items-center"
              >
                회사 소개
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors px-4 py-2 rounded-md font-medium flex items-center">
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
              <button
                onClick={() => {
                  onNavigateToShinsegae();
                  setIsMenuOpen(false);
                }}
                className="flex items-center px-3 py-2 text-gray-600 hover:text-primary-600 w-full text-left"
              >
                <img 
                  src="/shinsegae.png" 
                  alt="VIA SHINSEGAE 로고" 
                  className="h-8 w-auto mr-3"
                />
                <span className="font-medium">VIA SHINSEGAE</span>
              </button>
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
                제품
              </a>
              <a
                href="https://vacatio.career.greetinghr.com/ko/about"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-600 hover:text-primary-600"
              >
                회사 소개
              </a>
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