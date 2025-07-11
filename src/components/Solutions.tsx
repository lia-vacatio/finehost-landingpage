import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Calendar, MessageCircle, TrendingUp, Users, Zap } from 'lucide-react';

const Solutions: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const solutions = [
    {
      icon: Calendar,
      title: "방막기 자동화",
      description: "여러 OTA 사이트의 예약을 한 번에 확인하고 자동으로 방막기 처리",
      benefit: "하루 2시간 절약"
    },
    {
      icon: TrendingUp,
      title: "가격 최적화",
      description: "주변 숙소 가격을 실시간 분석하여 최적 가격을 추천",
      benefit: "매출 20% 증가"
    },
    {
      icon: MessageCircle,
      title: "자동 메시지",
      description: "체크인 안내, 리뷰 요청 등을 자동으로 발송",
      benefit: "고객 만족도 향상"
    },
    {
      icon: BarChart3,
      title: "매출 분석",
      description: "실시간 매출 흐름과 수익성을 한눈에 파악",
      benefit: "데이터 기반 의사결정"
    },
    {
      icon: Users,
      title: "마케팅 도구",
      description: "SNS 콘텐츠부터 인플루언서 매칭까지 마케팅을 쉽게 시작",
      benefit: "예약률 30% 향상"
    },
    {
      icon: Zap,
      title: "통합 운영 관리",
      description: "예약부터 정산까지 모든 과정을 체계적으로 한 곳에서 관리",
      benefit: "운영 효율성 극대화"
    }
  ];

  return (
    <section id="solutions" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
          >
            모든 문제를 한 번에 해결하는 솔루션
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-lg text-secondary-500 max-w-3xl mx-auto font-normal"
          >
            복잡한 기술 용어 없이, 실제로 필요한 <span className="text-primary-600 font-medium">결과만을 제공</span>합니다
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-transparent hover:border-primary-400 hover:shadow-xl transition-all duration-200 ease-in-out hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-100 transition-colors duration-200">
                <solution.icon className="text-primary-600 w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                {solution.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed font-normal">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-10 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl border border-primary-100"
        >
          <h3 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            이제 혼자 운영해도 충분합니다
          </h3>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            복잡한 시스템 없이도 전문가처럼 숙소를 운영할 수 있습니다
          </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                무료로 시작하기
              </button>
              <button className="px-8 py-3 bg-white text-primary-600 font-medium rounded-xl border border-primary-200 hover:bg-primary-50 transition-colors duration-200">
                데모 체험하기
              </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions; 