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
    <section id="problems" className="w-full bg-white py-24">
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
            숙소 하나 운영하는데, 왜 이렇게 신경 쓸 게 많죠?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            숙박업주 분들이 공통적으로 겪는 현실적인 운영 스트레스입니다.<br />
            이런 고민들, 혼자 해결하기 어려우시죠?
          </motion.p>
        </div>

        {/* Problems Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${problem.color} rounded-3xl p-8 h-full border ${problem.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}>
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${problem.iconBg} rounded-2xl flex items-center justify-center mr-4`}>
                    <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {problem.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-8">
                  {problem.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* User Quote */}
                <div className="bg-white/60 rounded-2xl p-6 border border-white/80">
                  <p className="text-gray-600 text-sm italic leading-relaxed whitespace-pre-line">
                    "{problem.userQuote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              이런 문제들, 이제 해결할 차례입니다
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              복잡한 기술 없이도, 실제로 필요한 결과만을 제공하는 솔루션을 준비했습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems; 