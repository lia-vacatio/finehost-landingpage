import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gradient mb-3 md:mb-4">FineHost</h3>
              <p className="text-gray-300 mb-4 md:mb-6 max-w-md text-sm md:text-base leading-relaxed">
                개인 숙박업주를 위한 올인원 솔루션으로, 
                예약 관리부터 매출 최적화까지 한 번에 해결합니다.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={18} className="md:w-5 md:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={18} className="md:w-5 md:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={18} className="md:w-5 md:h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">서비스</h4>
            <ul className="space-y-2">
              <li>
                <a href="#problems" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  문제점
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  솔루션
                </a>
              </li>
              <li>
                <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  데모
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  상담 신청
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">연락처</h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">010-9531-8312</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">lia@hautrip.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">평일 10:00 - 19:00</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              <p>© 2025 주식회사 바카티오 Vacatio Inc.</p>
              <p className="mt-1">서울특별시 마포구 마포대로4다길 31</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors text-center">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors text-center">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors text-center">
                고객지원
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 