import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-8 md:pt-32 md:pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            <div className="mb-2 md:mb-4">숙소 운영</div>
            <div>지금보다 훨씬 더 간단해질 수 있습니다</div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            예약 관리부터 요금 설정, 정산까지<br />
            이제 파인호스트에서 한번에 해결하세요
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-sm md:text-base">방막기 자동화</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-sm md:text-base">가격 최적화</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
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
            <button className="btn-primary flex items-center space-x-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
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