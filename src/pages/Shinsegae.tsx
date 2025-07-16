import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ShinsegaeProps {
  onNavigateToHome: () => void;
}

interface FormData {
  name: string;
  phone: string;
  propertyType: string;
  roomCount: string;
  message: string;
}

const Shinsegae: React.FC<ShinsegaeProps> = ({ onNavigateToHome }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const scrollToContact = () => {
    const contactSection = document.getElementById('shinsegae-contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log('🎯🎯🎯 신세계 상담신청 onSubmit 함수 실행됨! 🎯🎯🎯');
    console.log('📝 받은 데이터:', data);
    alert('파인호스트 상담 신청을 보내는 중입니다.'); // 확실한 확인용
    
    setIsSubmitting(true);
    
    try {
      // 홈 페이지와 동일한 Google Apps Script 웹 앱 URL 사용
      const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjZzGdxf8zHpkV1vq2JgRSN-B5MgNKB5LoU3fvyx8JrFnYyBrXyPebypEBbfC3eX09/exec';
      
      console.log('📡 API 호출 시작!', data);
      console.log('🔗 사용 중인 URL:', APPS_SCRIPT_URL);
      
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          propertyType: getPropertyTypeLabel(data.propertyType),
          roomCount: getRoomCountLabel(data.roomCount),
          message: data.message || '',
          source: 'shinsegae-page' // 신세계 페이지에서 온 것임을 표시
        })
      });
      
      console.log('응답 상태:', response.status);
      console.log('응답 타입:', response.type);
      
      // no-cors 모드에서는 응답을 읽을 수 없으므로 성공으로 간주
      if (response.type === 'opaque') {
        console.log('CORS 우회 모드 - 요청이 전송되었습니다');
        setIsSubmitted(true);
        reset();
        console.log('신세계 상담신청이 전송되었습니다! (CORS 우회 모드)');
      } else {
        // 일반 모드에서는 응답 확인
        const result = await response.json();
        console.log('서버 응답:', result);
        
        if (result.success) {
          setIsSubmitted(true);
          reset();
          console.log('신세계 상담신청이 성공적으로 전송되었습니다!');
        } else {
          throw new Error(result.message || '전송 중 오류가 발생했습니다');
        }
      }
    } catch (error) {
      console.error('신세계 상담신청 전송 오류:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('오류 상세:', errorMessage);
      alert(`상담신청 전송 중 오류가 발생했습니다.\n오류: ${errorMessage}\n다시 시도해주세요.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 선택값을 한글 라벨로 변환하는 헬퍼 함수들
  const getPropertyTypeLabel = (value: string) => {
    const type = propertyTypes.find(t => t.value === value);
    return type ? type.label : value;
  };

  const getRoomCountLabel = (value: string) => {
    const count = roomCounts.find(c => c.value === value);
    return count ? count.label : value;
  };

  // 신세계 페이지 숙소 유형 옵션 (홈페이지와 통일)
  const propertyTypes = [
    { value: 'pension', label: '펜션' },
    { value: 'guesthouse', label: '게스트하우스' },
    { value: 'camping', label: '캠핑/야영장' },
    { value: 'hanok', label: '한옥숙박' },
    { value: 'other', label: '기타' }
  ];

  const roomCounts = [
    { value: '1-3', label: '1-3개' },
    { value: '4-6', label: '4-6개' },
    { value: '7-10', label: '7-10개' },
    { value: '10+', label: '10개 이상' }
  ];



  const partnershipBenefits = [
    "신세계 VIA SHINSEGAE 입점",
    "전용 프리미엄 소개 페이지 제공",
    "신세계 고객층 타겟 마케팅",
    "브랜드 파워를 활용한 신뢰도 향상",
    "전문 입점 컨설팅 서비스"
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onNavigateToHome}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                FineHost로 돌아가기
              </button>
            </div>
            <button 
              onClick={scrollToContact}
              className="btn-primary"
            >
              신세계 입점 문의
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/night.png')] bg-cover bg-center"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-loose text-center" style={{ lineHeight: '1.3' }}>
                VIA SHINSEGAE 입점<br />
                <span className="text-blue-400">파인호스트</span>와 함께하세요
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center mb-8">
                신세계 여행 서비스에 입점된 프리미엄 숙소는<br />
                <strong className="text-blue-400">오직 파인호스트 제휴 숙소</strong>입니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={scrollToContact}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                신세계 입점 문의하기
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shinsegae Premium Travel Service Introduction */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Service Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                백화점 아이덴티티를 반영한<br />
                <span className="text-blue-400">프리미엄 여행 큐레이션 플랫폼</span>
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">백화점 「APP in APP」</h3>
                      <p className="text-gray-300 leading-relaxed">
                        일관된 톤앤무드 유지<br />
                        여행 콘텐츠에만 집중된 플랫폼
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">온라인 결제 기능</h3>
                      <p className="text-gray-300 leading-relaxed">
                        APP에서 바로 여행 상품 결제<br />
                        신세계포인트·신백리워드 사용 가능
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">여행 큐레이팅</h3>
                      <p className="text-gray-300 leading-relaxed">
                        스토리텔링 방식 상품 전개<br />
                        고객 상황별 맞춤 여행 설계
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">백화점 상품 전시</h3>
                      <p className="text-gray-300 leading-relaxed">
                        쇼핑과의 유기적 연계<br />
                        기획전/이벤트/라이브 방송 진행
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: App Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-black py-16 px-6 md:px-10 text-white text-center rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SHINSEGAE Voyage</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-12">
                  신세계가 선보이는 감성 프리미엄 여행 경험
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                  {/* 왼쪽 이미지 */}
                  <div className="relative max-w-[250px]">
                    <img
                      src="/sinsegae app screen/home-screen.png"
                      alt="신세계여행 프리미엄 여행 앱 화면 - 파인호스트 숙소관리 솔루션 파트너십"
                      className="rounded-2xl shadow-xl border border-gray-700"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-md">
                      프리미엄 여행
                    </div>
                  </div>

                  {/* 오른쪽 이미지 */}
                  <div className="relative max-w-[250px]">
                    <img
                      src="/sinsegae app screen/find.png"
                      alt="신세계여행 감성 숙소 큐레이션 앱 화면 - 파인호스트 PMS 솔루션"
                      className="rounded-2xl shadow-xl border border-gray-700"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-1 rounded-full shadow-md">
                      감성 숙소<br />큐레이션
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: VIA SHINSEGAE Logo & Brand Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="mb-8">
                <div className="w-48 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <span className="text-white font-bold text-xl">VIA SHINSEGAE</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  신세계의 프리미엄 여행 서비스
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  VIA SHINSEGAE는 신세계가 제공하는 프리미엄 여행 서비스로, 
                  최고급 숙소와 맞춤형 여행 경험을 제공합니다. 
                  신세계의 브랜드 파워와 고객 신뢰도를 바탕으로 
                  프리미엄 고객층에게 차별화된 서비스를 제공합니다.
                </p>
              </div>
            </motion.div>

            {/* Right: FineHost Partnership Structure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                신세계 입점 기회, 파인호스트를 통해 열립니다
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                신세계 프리미엄 여행 서비스 'VIA SHINSEGAE'의 입점 기회는 <br /> 오직 파인호스트를 통해서만 제공됩니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">파인호스트 제휴 신청</h4>
                    <p className="text-gray-600 text-sm">간단한 상담을 통해 파인호스트 도입 안내</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">신세계 입점 기회 부여</h4>
                    <p className="text-gray-600 text-sm">파인호스트 플랫폼을 통해 VIA SHINSEGAE 입점 기회 제공</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">프리미엄 고객 타겟팅</h4>
                    <p className="text-gray-600 text-sm">신세계 고객 접점을 활용한 고급 여행 수요 유입 가능</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ lineHeight: '1.8' }}>
            파인호스트와 함께하는 수많은 숙소가 <br /> 신세계와 함께하고 있습니다.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              프리미엄 숙소들의 실제 입점 사례를 확인해보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/sinsegae%20x%20finehost/polgaeoo.webp",
                name: "폴개우영",
                location: "제주도",
                url: "https://finestays.com//lodgment/62ef135660d38d450219d07d?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/UigwiSodam.webp",
                name: "의귀소담",
                location: "제주도",
                url: "https://finestays.com//lodgment/62ed0fef5c153b1b07d19d06?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/iido.jpeg",
                name: "이이도",
                location: "제주도",
                url: "https://finestays.com//lodgment/668619b49567bf94179bf6cb?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/spacenongnong.webp",
                name: "스페이스농농",
                location: "제주도",
                url: "https://finestays.com//lodgment/637727085fec9a09e1b2e303?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/rapauza.jpg",
                name: "라파우자",
                location: "제주도",
                url: "https://finestays.com//lodgment/67682d7082f4f300486a268c?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/mulgeoul.jpeg",
                name: "물결그림",
                location: "제주도",
                url: "https://finestays.com//lodgment/62f1f15b3f8088dbd705be72?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/ikoi.webp",
                name: "이코이",
                location: "제주도",
                url: "https://finestays.com//lodgment/641c3344ff62036d05aaeb24?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/ieori_stay.webp",
                name: "이어리스테이",
                location: "경남 남해군",
                url: "https://finestays.com//lodgment/64e2baa4343ff593527ef2e0?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/hiarue.webp",
                name: "희애루",
                location: "제주도",
                url: "https://finestays.com//lodgment/654a08839aea047cdcf93276?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/guemdeung.webp",
                name: "금등첨화",
                location: "제주도",
                url: "https://finestays.com//lodgment/662710e7bf26c32d404e3252?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/Sihoru.webp",
                name: "시호루",
                location: "제주도",
                url: "https://finestays.com//lodgment/630c577050fdf497fe8060d2?fromMap=true&fromName=true"
              },
              {
                image: "/sinsegae%20x%20finehost/Seobjae.webp",
                name: "섭재",
                location: "제주도",
                url: "https://finestays.com//lodgment/636be568f07fe118d0a7422b?fromMap=true&fromName=true"
              }
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => window.open(property.url, '_blank')}
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${property.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.name}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">VIA SHINSEGAE 입점</span>
                    </div>
                    <div className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                      숙소 보기 →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                파인호스트와 신세계의 완벽한 시너지
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                VIA SHINSEGAE와의 독점 제휴를 통해 프리미엄 숙소만을 위한 
                특별한 혜택을 제공합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {partnershipBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12" style={{ lineHeight: '1.6' }}>
              프리미엄 숙소라면<br />
              지금 바로 파인호스트와 함께하세요
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              신세계 VIA SHINSEGAE 입점으로 숙소의 가치를 높이고<br />
              프리미엄 고객층을 만나보세요
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              입점 문의하기
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="shinsegae-contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 rounded-2xl p-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  상담 신청이 완료되었습니다!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  빠른 시일 내에 전문 상담사가 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  다시 작성하기
                </button>
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    무료 상담 신청
                  </h2>
                  <p className="text-gray-600 mb-8">
                    전문 상담사가 1:1로 맞춤형 솔루션을 제안해드립니다
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: '이름을 입력해주세요' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="홍길동"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { 
                          required: '연락처를 입력해주세요',
                          pattern: {
                            value: /^[0-9-+\s()]+$/,
                            message: '올바른 연락처를 입력해주세요'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="010-9531-8312"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        숙소 유형 *
                      </label>
                      <select
                        {...register('propertyType', { required: '숙소 유형을 선택해주세요' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">숙소 유형을 선택하세요</option>
                        {propertyTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.propertyType && (
                        <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
                      )}
                    </div>

                    {/* Room Count */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        객실 수 *
                      </label>
                      <select
                        {...register('roomCount', { required: '객실 수를 선택해주세요' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">객실 수를 선택하세요</option>
                        {roomCounts.map((count) => (
                          <option key={count.value} value={count.value}>
                            {count.label}
                          </option>
                        ))}
                      </select>
                      {errors.roomCount && (
                        <p className="mt-1 text-sm text-red-600">{errors.roomCount.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        문의사항
                      </label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="신세계 입점에 대한 궁금한 점이나 요청사항을 자유롭게 작성해주세요"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 text-lg rounded-lg font-semibold transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                          : 'btn-primary hover:bg-primary-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>전송 중...</span>
                        </div>
                      ) : (
                        '무료 상담 신청하기'
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      * 표시된 항목은 필수 입력사항입니다
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* Right Side - Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    신세계 VIA SHINSEGAE 입점의 특별함
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">독점 제휴 파트너</h4>
                        <p className="text-gray-600 text-sm">신세계 VIA SHINSEGAE 입점은 오직 파인호스트를 통해서만 가능합니다</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-600 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">프리미엄 고객층 확보</h4>
                        <p className="text-gray-600 text-sm">신세계 브랜드 파워로 고급 여행 수요를 확보할 수 있습니다</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">연락처 정보</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-600">010-9531-8312</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-600">lia@hautrip.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-600">평일 10:00 - 19:00</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 FineHost. 신세계 VIA SHINSEGAE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shinsegae; 