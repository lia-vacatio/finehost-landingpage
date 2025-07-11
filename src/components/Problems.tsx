import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: '⏰',
    title: 'OTA 들어가서 또 확인하고 또 막고…',
    desc: '예약 막으려고 하루에 몇 번씩 OTA에 들어가고 계신가요?'
  },
  {
    icon: '💰',
    title: '가격 경쟁, 감으로만 해도 괜찮을까요?',
    desc: '주변 숙소 가격은 확인도 어렵고, 나만 비싸거나 싸게 받고 있는 건 아닐까 걱정되시죠?'
  },
  {
    icon: '📞',
    title: '메시지 하나 보내는 것도 일이에요',
    desc: '체크인 안내, 리뷰 요청, 다 해야 하는데 매번 수기로 하려니 너무 벅차요'
  },
  {
    icon: '📉',
    title: '매출은 올랐는데… 진짜 수익이 났을까요?',
    desc: '예약은 늘었는데, 실제로 남는 돈이 있는지는 감이 잘 안 오시죠?'
  },
  {
    icon: '📢',
    title: '광고나 SNS는 남 얘기 같아요',
    desc: '내 숙소만의 매력을 알리고 싶은데, 어디서부터 시작해야 할지 막막하진 않으세요?'
  },
  {
    icon: '🧾',
    title: '예약, 청소, 정산까지 다 직접?',
    desc: '모든 프로세스를 수기로 하다보니 실수도 잦고, 관리가 버겁지 않으세요?'
  },
];

const Problems: React.FC = () => {
  return (
    <section id="problems" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight"
          >
            이런 고민, 혼자만 하고 계신가요?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-base md:text-lg text-secondary-500 max-w-2xl mx-auto font-normal"
          >
            숙박업주 분들이 공통적으로 겪는 운영 스트레스를 짚어드립니다.<br />
            <span className="text-primary-600 font-medium">FineHost</span>는 이 모든 문제의 실질적인 해답이 됩니다.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center border border-transparent hover:border-primary-400 hover:shadow-xl transition-all duration-200 ease-in-out hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-3xl">
                {problem.icon}
              </div>
              <div className="font-semibold text-xl text-gray-900 mb-2 tracking-tight">
                {problem.title}
              </div>
              <div className="text-secondary-600 text-base leading-relaxed font-normal">
                {problem.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems; 