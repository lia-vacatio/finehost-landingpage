import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  const partners = [
    {
      name: "위드홈",
      description: "제주 프리미엄 독채 운영사",
      logo: "🏠"
    },
    {
      name: "제주독거",
      description: "제주도 최고의 숙박 관리사",
      logo: "🏝️"
    },
    {
      name: "웨일로",
      description: "전국 숙박업 전문 관리사",
      logo: "🐋"
    }
  ];

  const partnerBrands = [
    "조천욕장", "시기공주", "폴개코", "아노료사케", 
    "제주스테이", "해운대리조트", "부산게스트", "강릉펜션"
  ];

  const testimonials = [
    {
      name: "경수 대표님",
      role: "숙박업 운영",
      location: "제주도",
      rating: 5,
      content: "파인호스트가 진행한 웨비나도 들어봤는데요, 이 회사는 진정성이 느껴집니다. 유난히 정보가 없는 숙박업 시장에서 호스트들을 지지해주고 도와주려는 회사가 있다는 것에 감동받았습니다. 감사합니다.",
      avatar: "👨‍💼"
    },
    {
      name: "창식 대표님",
      role: "숙박업 운영",
      location: "가평",
      rating: 5,
      content: "숙소를 운영하면서 난생 처음 마주하는 상황 때문에 고민하다가 파인호스트에 들어오면 해결된 적이 많아요. 사소한 문제들부터 중요한 고비들까지 다 도움받고 있어요. 든든한 지원군 같은 존재죠.",
      avatar: "👨‍💼"
    },
    {
      name: "성민 대표님",
      role: "숙박업 운영",
      location: "제주도",
      rating: 5,
      content: "처음에는 일반적인 회사인 줄 알았어요. 그런데 아니더라구요. 호스트 의견에 귀기울이는 회사는 처음이었어요. 호스트가 고민하는 부분들을 매번 딱 좋은 타이밍에 물어봐줘서 고마워요. 항상 열정을 가지고 일한다는 게 느껴져요.",
      avatar: "👨‍💼"
    },
    {
      name: "지희 대표님",
      role: "숙박업 운영",
      location: "경주",
      rating: 5,
      content: "이제 막 숙소 오픈하는 제 지인한테도 알려줬어요. 파인호스트, 파인스테이 모두 다요. 그 지인도 좋은 서비스 알려줘서 고맙다고 하더라구요. 이런 야무진 회사가 승승장구해야 마땅하다고 생각해요. 앞으로도 늘 화이팅입니다!",
      avatar: "👩‍💼"
    },
    {
      name: "은주 대표님",
      role: "숙박업 운영",
      location: "경주",
      rating: 5,
      content: "파인호스트 임직원분들께 진심어린 감사인사를 드립니다. 많은 분들과 소통할 수 있게 해주신 것만으로도 정말 감사드리는데, 이렇게 표창장까지 직접 보내주셔서 더더 감사합니다. 저 또한 좋은 정보 많이 공유하도록 하겠습니다. 진심으로 감사드립니다.",
      avatar: "👩‍💼"
    }
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 3) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 6) % partnerBrands.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex((prev) => (prev - 6 + partnerBrands.length) % partnerBrands.length);
  };

  const visibleReviews = testimonials.slice(currentReviewIndex, currentReviewIndex + 3);
  const visiblePartners = partnerBrands.slice(currentPartnerIndex, currentPartnerIndex + 6);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-relaxed"
          >
            <div className="mb-4">국내 최고의 숙소와 위탁사들이</div>
            <div><span className="text-primary-600">FineHost</span>로 운영 효율과 성장을 동시에 잡고 있습니다</div>
          </motion.h2>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">주요 파트너사</h3>
            <p className="text-secondary-600">신뢰할 수 있는 파트너사들과 함께합니다</p>
          </motion.div>

          {/* Main Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-secondary-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Brands Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">협력 숙소</h4>
            
            <div className="flex items-center justify-between">
              <button
                onClick={prevPartner}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex-1 mx-4 overflow-hidden">
                <div className="flex gap-6 justify-center">
                  {visiblePartners.map((brand, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-sm"
                    >
                      <span className="text-gray-700 font-medium">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextPartner}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">실제 사용자 후기</h3>
            <p className="text-secondary-600">FineHost를 사용하는 숙박업주님들의 생생한 후기입니다</p>
          </motion.div>

          {/* Reviews Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex-1 mx-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {visibleReviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
                    >
                      {/* Quote Icon */}
                      <div className="text-gray-200 mb-4">
                        <Quote size={20} />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                        "{review.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="text-xl mr-3">{review.avatar}</div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                          <div className="text-xs text-secondary-600">{review.role} / {review.location}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index * 3)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentReviewIndex === index * 3 ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 