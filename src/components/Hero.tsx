import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            <div className="mb-4">숙소 운영</div>
            <div>지금보다 훨씬 더 간단해질 수 있습니다</div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            예약 관리부터 요금 설정, 정산까지<br />
            이제 파인호스트에서 한번에 해결하세요
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="text-green-500" size={20} />
              <span>방막기 자동화</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="text-green-500" size={20} />
              <span>가격 최적화</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="text-green-500" size={20} />
              <span>매출 분석</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary flex items-center space-x-2">
              <span>무료 상담 신청</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              데모 보기
            </button>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero; 