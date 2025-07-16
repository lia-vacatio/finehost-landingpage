import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const partners = [
    {
      name: "위드홈",
      description: "제주 숙소 40채 위탁 운영",
      logo: "/withhome.jpg",
      website: "https://www.instagram.com/with_home_jeju_/"
    },
    {
      name: "제주독거",
      description: "숙소 위탁운영사 ‘트러스테이’ 운영",
      logo: "/jejudoccc.jpg",
      website: "https://www.instagram.com/jejudoccc/"
    },
    {
      name: "웨일로",
      description: "서울최초 도심형 하이엔드 패밀리 료칸스테이",
      logo: "/whalero.jpg",
      website: "https://www.instagram.com/whalero.z/"
    }
  ];

  const partnerBrands = [
    { name: "감숙소", logo: "/gamsung sukso logo/1.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/2.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/3.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/4.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/5.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/6.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/7.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/8.avif" },
    { name: "감숙소", logo: "/gamsung sukso logo/9.avif" }
  ];

  const testimonials = [
    {
      name: "김영수 대표님",
      role: "제주 프리미엄 독채 운영",
      location: "제주도",
      rating: 5,
      content: "파인호스트 덕분에 숙소 운영이 훨씬 수월해졌어요. 예약 관리부터 정산까지 한 번에 처리할 수 있어서 정말 편리합니다. 특히 고객 문의 응대가 자동화되어 시간을 많이 절약할 수 있어요.",
      avatar: "👨‍💼"
    },
    {
      name: "박미영 사장님",
      role: "강릉 펜션 운영",
      location: "강릉",
      rating: 5,
      content: "처음에는 걱정이 많았는데, 파인호스트 사용 후 완전히 바뀌었어요. 매출이 30% 증가했고, 고객 만족도도 훨씬 높아졌습니다. 정말 감사합니다!",
      avatar: "👩‍💼"
    },
    {
      name: "이철수 대표님",
      role: "부산 게스트하우스 운영",
      location: "부산",
      rating: 5,
      content: "여러 OTA 플랫폼을 한 번에 관리할 수 있어서 정말 좋아요. 파인호스트 없이는 운영하기 어려웠을 것 같습니다. 추천합니다!",
      avatar: "👨‍💼"
    },
    {
      name: "최지영 사장님",
      role: "가평 펜션 운영",
      location: "가평",
      rating: 5,
      content: "파인호스트의 자동화 기능이 정말 대단해요. 예약 확인부터 체크인까지 모든 과정이 자동으로 처리되어서 손님들도 만족하고 저도 편해요.",
      avatar: "👩‍💼"
    },
    {
      name: "정민호 대표님",
      role: "경주 호텔 운영",
      location: "경주",
      rating: 5,
      content: "파인호스트 도입 후 운영 효율성이 크게 향상되었습니다. 특히 실시간 매출 분석과 예약 현황을 한눈에 볼 수 있어서 정말 유용해요.",
      avatar: "👨‍💼"
    },
    {
      name: "한소영 사장님",
      role: "해운대 리조트 운영",
      location: "부산 해운대",
      rating: 5,
      content: "파인호스트의 고객 관리 시스템이 정말 훌륭해요. 고객 데이터를 체계적으로 관리할 수 있어서 마케팅에도 도움이 많이 됩니다.",
      avatar: "👩‍💼"
    },
    {
      name: "송태현 대표님",
      role: "제주 스테이 운영",
      location: "제주도",
      rating: 5,
      content: "파인호스트 덕분에 숙소 운영이 완전히 바뀌었어요. 예약 관리가 훨씬 체계적이 되었고, 고객 응대도 자동화되어 정말 편리합니다.",
      avatar: "👨‍💼"
    },
    {
      name: "임수진 사장님",
      role: "강릉 모텔 운영",
      location: "강릉",
      rating: 5,
      content: "파인호스트 사용 후 매출이 크게 증가했어요. 특히 요금 최적화 기능이 정말 유용하고, 고객 만족도도 높아졌습니다.",
      avatar: "👩‍💼"
    }
  ];

  // Auto-play functionality for reviews
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 3) % testimonials.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [testimonials.length]);



  // Manual navigation
  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 3) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);
  };

  const goToReview = (index: number) => {
    setCurrentReviewIndex(index * 3);
  };

  const visibleReviews = testimonials.slice(currentReviewIndex, currentReviewIndex + 3);

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
            className="text-center mb-20"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">이미 수많은 전문 운영사들이 선택한 FineHost</h3>
            <p className="text-gray-600 text-lg">믿고 맡기는 파트너들이 증명합니다</p>
          </motion.div>

          {/* Main Partners - New Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary-200 shadow-md"
              >
                <div className="flex items-center gap-4">
                  {/* Logo Section - Left */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center group">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} 로고`}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-16 h-16 flex items-center justify-center hidden">
                        <span className="text-gray-500 text-sm font-medium">{partner.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Center */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 truncate">{partner.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{partner.description}</p>
                  </div>

                  {/* Website Button - Right */}
                  <div className="flex-shrink-0">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200 whitespace-nowrap hover:underline"
                    >
                      홈페이지 보기
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner Brands Infinite Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-10 text-center">국내에서 제일 가는 숙소의 사장님들은 이미 파인호스트를 사용 중이에요.</h4>
            
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: [0, -100 * partnerBrands.length] }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-16"
                style={{ width: `${partnerBrands.length * 100}%` }}
              >
                {[...partnerBrands, ...partnerBrands].map((brand, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} 로고`}
                      className="w-32 h-24 object-contain drop-shadow-md opacity-80 hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">실제 고객사 후기</h3>
            <p className="text-secondary-600">파인호스트를 사용하는 숙박업주님들의 생생한 후기입니다</p>
          </motion.div>

          {/* Reviews Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: [0, -100 * Math.ceil(testimonials.length / 3)] }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex gap-6"
                style={{ width: `${Math.ceil(testimonials.length / 3) * 100}%` }}
              >
                {testimonials.map((review, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 