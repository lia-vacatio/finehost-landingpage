import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Check } from 'lucide-react';

const Solutions: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // 헤더 높이를 고려한 오프셋 계산
      const headerHeight = 80; // 헤더 높이 + 여유 공간
      const elementTop = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
  };

  const solutions = [
    {
      icon: Calendar,
      title: "예약 관리는 간편하게",
      features: [
        {
          text: "모든 주요 OTA 연동 (네이버, 아고다, 여기어때 등)",
          anchor: "ota-integration"
        },
        {
          text: "한 곳에서 예약 방막기 → 중복 예약 방지",
          anchor: "calendar-sync"
        },
        {
          text: "네이버 최저 수수료 연동도 지원",
          anchor: "naver-fee"
        }
      ],
      userQuote: "달력이 하나로 연결되니까 이제는 중복예약 걱정을 안 해요.",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: FileText,
      title: "운영 관리는 수월하게",
      features: [
        {
          text: "체크인/체크아웃 기준 자동 메시지 전송",
          anchor: "auto-message"
        },
        {
          text: "정산/예약 통계도 다 모아서 보여줘요",
          anchor: "revenue-analytics"
        },
        {
          text: "각 채널 요금도 한 번에 관리할 수 있어요",
          anchor: "price-optimization"
        }
      ],
      userQuote: "각 채널 로그인할 필요 없이 한눈에 보이니까 훨씬 편해졌어요.",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section id="solutions" className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight"
          >
            운영이 편해지니, 숙소가 더 잘 돌아갑니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            복잡한 기술 없이도, 실제로 필요한 결과만을 제공합니다.<br />
            이제 불안 없이 숙소를 운영하세요.
          </motion.p>
        </div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${solution.color} rounded-3xl p-8 h-full border ${solution.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${solution.iconBg} rounded-2xl flex items-center justify-center mr-4`}>
                    <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">주요 기능</h4>
                  {solution.features.map((feature, featureIndex) => (
                    <button
                      key={featureIndex}
                      onClick={() => scrollToSection(feature.anchor)}
                      className="w-full text-left group/feature"
                    >
                      <div className="flex items-start p-3 rounded-xl hover:bg-white/50 transition-all duration-200 group-hover/feature:shadow-sm">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed underline decoration-dotted underline-offset-4 group-hover/feature:text-gray-900 group-hover/feature:decoration-solid transition-all duration-200">
                          {feature.text}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto mt-1 group-hover/feature:text-gray-600 transition-colors duration-200" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* User Quote */}
                <div className="bg-white/60 rounded-2xl p-6 border border-white/80">
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{solution.userQuote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              우리 숙소에도 적용해보기
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              지금 바로 무료 상담을 받아보시고,<br />
              파인호스트가 어떻게 도움을 드릴 수 있는지 확인해보세요.
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              무료 상담 신청하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions; 