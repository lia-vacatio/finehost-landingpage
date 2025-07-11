import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: '김지현',
    role: '대표 / Product Owner',
    intro: '숙박업의 모든 고민을 IT로 해결하고 싶어요.',
    avatar: '🧑‍💼',
  },
  {
    name: '이수민',
    role: '프론트엔드 개발',
    intro: '사용자에게 가장 쉬운 경험을 만듭니다.',
    avatar: '👩‍💻',
  },
  {
    name: '박준호',
    role: '백엔드 개발',
    intro: '데이터와 자동화로 운영을 더 편하게!',
    avatar: '👨‍💻',
  },
  {
    name: '최유진',
    role: '마케팅 & 고객지원',
    intro: '고객의 목소리를 가장 가까이에서 듣습니다.',
    avatar: '🧑‍🔧',
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="team">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            파인호스트 팀을 소개합니다
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            "혼자 운영해도 괜찮다"는 마음을 전하고 싶어요.<br />
            파인호스트 팀은 숙박업주님의 든든한 동반자가 되겠습니다.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{member.avatar}</div>
              <div className="font-bold text-lg text-gray-900 mb-1">{member.name}</div>
              <div className="text-primary-600 font-medium mb-2">{member.role}</div>
              <div className="text-gray-600 text-sm">{member.intro}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 