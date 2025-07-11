import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Heart, Zap, Calendar, TrendingUp, Award, Users2, DollarSign, Star } from 'lucide-react';

interface AboutProps {
  onNavigateToHome: () => void;
}



const timeline = [
  {
    year: '2022.01',
    title: '법인 설립과 동시에 투자 유치',
    icon: Calendar,
    description: '바카티오의 시작'
  },
  {
    year: '2023.08',
    title: '누적 결제액 20억 원 돌파',
    icon: TrendingUp,
    description: '서비스 성장의 첫 번째 이정표'
  },
  {
    year: '2024.01',
    title: '월 거래액 5억 원 돌파 / 연간 거래액 100억 원 달성',
    icon: DollarSign,
    description: '지속적인 성장과 확장'
  },
  {
    year: '2024.02',
    title: '파인호스트 정식 런칭',
    icon: Star,
    description: '새로운 서비스의 시작'
  },
  {
    year: '2024.05',
    title: '파인호스트 사용 숙소 1,000곳 돌파',
    icon: Users2,
    description: '고객 신뢰 획득'
  },
  {
    year: '2024.07',
    title: '개별 호스트 정산액 3억 원 이상',
    icon: Award,
    description: '실제 생계에 도움을 주는 서비스로 성장'
  },
  {
    year: '2024.09',
    title: '시리즈A 투자 유치 (60억 원)',
    icon: Zap,
    description: '미래 성장을 위한 투자 확보'
  }
];

const About: React.FC<AboutProps> = ({ onNavigateToHome }) => {
  const scrollToContact = () => {
    onNavigateToHome();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onNavigateToHome}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                홈으로 돌아가기
              </button>
            </div>
            <div className="flex items-center">
              <img
                src="/finehost_bk.png"
                alt="FineHost 로고"
                className="h-8 w-auto"
              />
            </div>
            <div className="w-24"></div>
          </div>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
            >
              Who we are
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed"
            >
              위탁사와 함께 부딪히며 배운 경험을 바탕으로<br />
              <span className="text-primary-600 font-semibold">숙박 운영의 본질을 이해하는 팀</span>이 만들었습니다.
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏢</div>
              <p className="text-gray-600 text-lg">
                *실제 팀원들과 제주도 오피스에서 호스트 컨퍼런스 오픈 · 호스트 서비스를 위한 인터뷰 및 강의 촬영 · 호스트에게 직접 손편지 작성하는 모습
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
            >
              바카티오가 걸어온 길
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start md:items-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  {/* Content */}
                  <div className="md:ml-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary-600">{item.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-secondary-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <div className="text-4xl mb-6">💬</div>
              <blockquote className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                "바카티오는 고객의 목소리에 가장 먼저 귀 기울입니다.<br />
                수차례의 제주 합숙과 호스트 인터뷰를 통해<br />
                숙박업 운영의 진짜 문제를 함께 고민해왔습니다."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              우리의 미션
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-secondary-600 max-w-3xl mx-auto"
            >
              개인 숙박업주가 기술의 복잡함 없이도 전문가처럼 운영할 수 있도록 돕는 것
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">명확한 목표</h3>
              <p className="text-secondary-600">
                숙박업주가 겪는 실제 문제를 정확히 파악하고, 
                실질적인 해결책을 제공합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">고객 중심</h3>
              <p className="text-secondary-600">
                기술보다는 사용자의 편의성을 우선시하며, 
                직관적이고 쉬운 인터페이스를 만듭니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">지속적 혁신</h3>
              <p className="text-secondary-600">
                시장의 변화와 고객의 피드백을 반영하여 
                끊임없이 개선하고 발전합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 border border-primary-100"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">
              함께 성장해나가요
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              파인호스트와 함께라면 혼자 운영해도 충분합니다.<br />
              지금 바로 무료 상담을 받아보세요.
            </p>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              무료 상담 신청하기
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 