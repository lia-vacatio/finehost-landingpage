import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-8 md:pt-32 md:pb-16 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg?v=1')`,
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-secondary-50/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline - SEO 최적화된 제목 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            <div className="mb-2 md:mb-4">숙소 PMS CMS 운영이</div>
            <div>파인호스트로 훨씬 더 간단해집니다</div>
          </motion.h1>

          {/* Subtitle - 핵심 키워드 포함 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            네이버연동, 아고다연동, 예약관리부터 문자메시지자동화까지<br />
            신세계여행 파트너십으로 더욱 안전하게 한번에 해결하세요
          </motion.p>

          {/* Key Benefits - SEO 키워드 강화 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-800">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-sm md:text-base">OTA 자동연동</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-800">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-sm md:text-base">가격 최적화</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-800">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-sm md:text-base">매출 분석</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <button className="btn-primary flex items-center space-x-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 shadow-lg hover:shadow-xl transition-shadow duration-200" aria-label="파인호스트 숙소 관리 솔루션 무료 상담 신청">
              <span>무료 상담 신청</span>
              <ArrowRight size={16} className="md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 