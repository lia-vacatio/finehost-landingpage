import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare, DollarSign, BarChart3, Smartphone, Settings } from 'lucide-react';
import FeeComparisonChart from './FeeComparisonChart';

const Dashboard: React.FC = () => {
  // OTA 로고 목록
  const otaLogos = [
    "/ota logo/naver.png",
    "/ota logo/yeogi.png", 
    "/ota logo/airbnb.png",
    "/ota logo/agoda.png",
    "/ota logo/booking.png",
    "/ota logo/nol.png"
  ];

  // 수수료 비교 데이터
  const feeComparisonData = [
    { service: "FineHost", fee: 3.3, isHighlighted: true },
    { service: "경쟁 서비스 A", fee: 15, isHighlighted: false },
    { service: "경쟁 서비스 B", fee: 12, isHighlighted: false }
  ];

  const features = [
    {
      id: "ota-integration",
      icon: Smartphone,
      headline: "각 OTA를 매번 들어가 예약 확인하시나요?",
      title: "모든 OTA 예약을 한 곳에서 관리할 수 있어요",
      description: "네이버, 에어비앤비, 여기어때, 아고다까지 모든 OTA 예약을 하나의 대시보드에서 확인하세요. 더 이상 여러 앱을 번갈아가며 확인할 필요가 없습니다.",
      benefits: [
        "모든 OTA 예약을 실시간으로 확인",
        "예약 상태 변경 시 즉시 반영",
        "통합된 예약 관리로 실수 방지"
      ],
      image: "/ota-dashboard.png",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      showOtaLogos: true // 첫 번째 기능에만 OTA 로고 슬라이드 표시
    },
    {
      id: "calendar-sync",
      icon: Calendar,
      headline: "중복 예약이 걱정되시나요?",
      title: "달력 하나로 모든 예약을 실시간 동기화합니다",
      description: "여러 OTA에서 동시에 예약이 들어와도 중복 예약 걱정 없이 안전하게 관리할 수 있습니다. 한 번의 방막기로 모든 채널에 반영됩니다.",
      benefits: [
        "실시간 캘린더 동기화",
        "중복 예약 자동 방지",
        "한 번의 클릭으로 모든 채널 방막기"
      ],
      image: "/calendar-sync.png",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      showOtaLogos: false
    },
    {
      id: "naver-fee",
      icon: DollarSign,
      headline: "네이버 연동, 수수료 걱정되시죠?",
      title: "업계 최저 수수료로 네이버 연동을 지원합니다",
      description: "네이버 예약 연동 시 발생하는 수수료 부담을 최소화했습니다. 업계 최저 수준의 수수료로 더 많은 수익을 남기실 수 있습니다.",
      benefits: [
        "업계 최저 수수료 적용",
        "투명한 수수료 정책",
        "수익성 극대화"
      ],
      image: "/naver-integration.png",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      showOtaLogos: false,
      showFeeChart: true // 세 번째 기능에 수수료 차트 표시
    },
    {
      id: "auto-message",
      icon: MessageSquare,
      headline: "매번 메시지 보내기 벅차셨죠?",
      title: "체크인/체크아웃 기준 자동 메시지를 보내드려요",
      description: "체크인 안내, 리뷰 요청 등 반복적인 메시지 발송을 자동화했습니다. 게스트에게 더 나은 서비스를 제공하면서도 업무 효율성을 높일 수 있습니다.",
      benefits: [
        "체크인/체크아웃 자동 메시지",
        "맞춤형 메시지 템플릿",
        "게스트 만족도 향상"
      ],
      image: "/message-dashboard.png",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      showOtaLogos: false,
      showFeeChart: false
    },
    {
      id: "revenue-analytics",
      icon: BarChart3,
      headline: "매출 분석이 어려우시죠?",
      title: "정산/예약 통계도 다 모아서 보여줘요",
      description: "채널별 매출, 예약률, 평균 숙박일 등 중요한 지표를 한눈에 확인할 수 있습니다. 데이터 기반으로 더 나은 운영 결정을 내릴 수 있습니다.",
      benefits: [
        "실시간 매출 및 예약 통계",
        "채널별 성과 분석",
        "데이터 기반 운영 최적화"
      ],
      image: "/revenue-analytics.png",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      showOtaLogos: false,
      showFeeChart: false
    },
    {
      id: "price-optimization",
      icon: Settings,
      headline: "요금 설정이 복잡하시죠?",
      title: "각 채널 요금도 한 번에 관리할 수 있어요",
      description: "시즌별, 요일별, 이벤트별로 차등 요금을 설정하고 모든 OTA에 한 번에 적용할 수 있습니다. 수요에 맞는 최적 가격으로 수익을 극대화하세요.",
      benefits: [
        "시즌별/요일별 차등 요금 설정",
        "모든 OTA 동시 적용",
        "수요 기반 가격 최적화"
      ],
      image: "/price-optimization.png",
      bgColor: "bg-gray-50",
      textColor: "text-gray-900",
      showOtaLogos: false,
      showFeeChart: false
    }
  ];

  return (
    <section id="dashboard" className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight"
          >
            실제로 어떻게 작동하는지 확인해보세요
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            복잡한 기술 없이도 직관적으로 사용할 수 있는 파인호스트의 핵심 기능들을 소개합니다
          </motion.p>
        </div>

        {/* Features */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 scroll-mt-24`}
              style={{ scrollMarginTop: '120px' }}
            >
              <div className="max-w-6xl mx-auto">
                {/* Content Grid - 모바일에서는 항상 세로, 데스크톱에서 좌우 교차 배치 */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'
                }`}>
                  
                  {/* Text Content - 모바일에서는 항상 먼저 */}
                  <div className={`space-y-4 md:space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-3 md:space-y-4">
                      <div className="border-l-4 border-primary-600 pl-4 md:pl-6 py-2">
                        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
                          {feature.headline}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg md:rounded-xl flex items-center justify-center">
                          <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                        </div>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-600 leading-tight">
                          {feature.title}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 md:space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base text-gray-700 leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Content - 모바일에서는 텍스트 다음 */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      {/* Image Container - 수수료 차트가 있는 경우 제외 */}
                      {!feature.showFeeChart && (
                        <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px] mx-auto">
                          <div className="bg-gray-100 rounded-lg md:rounded-xl shadow-md overflow-hidden">
                            <img 
                              src={feature.image} 
                              alt={`파인호스트 ${feature.title} - 숙소 PMS CMS 관리 솔루션 대시보드 화면`}
                              className="w-full h-auto object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                            {/* Placeholder */}
                            <div className="hidden w-full h-48 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-lg md:rounded-xl mx-auto mb-3 md:mb-4 flex items-center justify-center">
                                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
                                </div>
                                <p className="text-gray-500 font-medium text-sm md:text-base">{feature.title}</p>
                                <p className="text-gray-400 text-xs md:text-sm mt-2">스크린샷 준비 중</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Decorative Elements */}
                          <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-primary-100 rounded-full opacity-50"></div>
                          <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-4 h-4 md:w-6 md:h-6 bg-secondary-100 rounded-full opacity-50"></div>
                        </div>
                      )}

                      {/* OTA Logos - 첫 번째 기능에만 표시 */}
                      {feature.showOtaLogos && (
                        <motion.div 
                          className="mt-4 md:mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-center mb-2 md:mb-3">
                            <p className="text-xs text-gray-500 font-medium">연동되는 OTA 플랫폼</p>
                          </div>
                          <div className="bg-white rounded-lg shadow-sm p-2 md:p-3">
                            <div className="flex justify-center items-center space-x-2 md:space-x-4">
                              {otaLogos.map((logo, logoIndex) => (
                                <img
                                  key={logoIndex}
                                  src={logo}
                                  alt={`${logo.includes('naver') ? '네이버예약' : logo.includes('yeogi') ? '여기어때' : logo.includes('airbnb') ? '에어비앤비' : logo.includes('agoda') ? '아고다' : logo.includes('booking') ? '부킹닷컴' : 'OTA'} 연동 로고 - 파인호스트 숙소관리솔루션`}
                                  className="h-4 md:h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Fee Comparison Chart - 세 번째 기능에만 표시 */}
                      {feature.showFeeChart && (
                        <motion.div 
                          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[550px] mx-auto"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <FeeComparisonChart 
                            data={feeComparisonData}
                            caption="같은 예약, 수수료는 1/5 수준입니다."
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              지금 바로 시작해보세요
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              파인호스트와 함께라면 숙소 운영이 훨씬 더 간단해집니다. 
              전문 상담사가 1:1로 도와드립니다.
            </p>
            <button className="btn-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              무료 상담 신청하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard; 