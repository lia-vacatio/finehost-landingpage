import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Smartphone, Settings } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    {
      icon: Calendar,
      title: "예약 관리가 복잡해요",
      details: [
        "채널마다 방막기 따로",
        "중복 예약 피하려고 수기 확인",
        "네이버 연동은 수수료가 너무 높음"
      ],
      userQuote: "예약은 잘 되는데, 내가 이걸 계속 혼자 감당할 수 있을까 싶었어요.",
      color: "from-red-50 to-orange-50",
      borderColor: "border-red-100",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: FileText,
      title: "운영 업무가 너무 많아요",
      details: [
        "메시지 직접 발송해야 해서 번거로움",
        "요금 설정 매번 헷갈림",
        "예약·정산은 엑셀로 따로 관리"
      ],
      userQuote: "하루 종일 예약 확인하고 메시지 보내다 보니,\n일에 계속 끌려다니게 되는 기분이더라구요",
      color: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section id="problems" className="w-full bg-white py-8 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight"
          >
            숙소 PMS 운영, 왜 이렇게 복잡하고 신경 쓸 게 많죠?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            숙박업주 분들이 공통적으로 겪는 현실적인 운영 스트레스입니다.<br />
            네이버연동부터 OTA 관리까지, 이런 고민들 혼자 해결하기 어려우시죠?
          </motion.p>
        </div>

        {/* Problems Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${problem.color} rounded-2xl md:rounded-3xl p-6 md:p-8 h-full border ${problem.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}>
                {/* Icon */}
                <div className="flex items-center mb-4 md:mb-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${problem.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4`}>
                    <problem.icon className={`w-6 h-6 md:w-8 md:h-8 ${problem.iconColor}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {problem.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {problem.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-700 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* User Quote */}
                <div className="bg-white/60 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/80">
                  <p className="text-gray-600 text-xs md:text-sm italic leading-relaxed whitespace-pre-line">
                    "{problem.userQuote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems; 