import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  propertyName: string;
  phone: string;
  propertyType: string;
  roomCount: string;
  message: string;
}

const ConsultationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log('🎯🎯🎯 올바른 onSubmit 함수 실행됨! 🎯🎯🎯');
    console.log('📝 받은 데이터:', data);
    alert('상담 신청을 보내는 중입니다.'); // 확실한 확인용
    
    setIsSubmitting(true);
    
    try {
      // Google Apps Script 웹 앱 URL
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
          propertyName: data.propertyName,
          phone: data.phone,
          propertyType: getPropertyTypeLabel(data.propertyType),
          roomCount: getRoomCountLabel(data.roomCount),
          message: data.message || ''
        })
      });
      
      console.log('응답 상태:', response.status);
      console.log('응답 타입:', response.type);
      
      // no-cors 모드에서는 응답을 읽을 수 없으므로 성공으로 간주
      if (response.type === 'opaque') {
        console.log('CORS 우회 모드 - 요청이 전송되었습니다');
        setIsSubmitted(true);
        reset();
        console.log('상담신청이 전송되었습니다! (CORS 우회 모드)');
      } else {
        // 일반 모드에서는 응답 확인
        const result = await response.json();
        console.log('서버 응답:', result);
        
        if (result.success) {
          setIsSubmitted(true);
          reset();
          console.log('상담신청이 성공적으로 전송되었습니다!');
        } else {
          throw new Error(result.message || '전송 중 오류가 발생했습니다');
        }
      }
    } catch (error) {
      console.error('상담신청 전송 오류:', error);
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

  if (isSubmitted) {
    return (
      <section id="contact" className="py-8 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-xl md:rounded-2xl p-8 md:p-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              상담 신청이 완료되었습니다!
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              빠른 시일 내에 전문 상담사가 연락드리겠습니다.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            >
              다시 작성하기
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-8 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                무료 상담 신청
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                전문 상담사가 1:1로 맞춤형 솔루션을 제안해드립니다
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: '이름을 입력해주세요' })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="홍길동"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Property Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    숙소 이름 *
                  </label>
                  <input
                    type="text"
                    {...register('propertyName', { required: '숙소 이름을 입력해주세요' })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="예: 바다뷰 펜션, 힐링 게스트하우스"
                  />
                  {errors.propertyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.propertyName.message}</p>
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm md:text-base"
                    placeholder="현재 겪고 계신 문제나 궁금한 점을 자유롭게 작성해주세요"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 md:py-4 text-base md:text-lg rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                      : 'btn-primary hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                왜 FineHost를 선택해야 할까요?
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-xs md:text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">전문 상담사 1:1 매칭</h4>
                    <p className="text-gray-600 text-xs md:text-sm">숙박업 경험이 풍부한 전문가가 직접 상담해드립니다</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-xs md:text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">맞춤형 솔루션 제안</h4>
                    <p className="text-gray-600 text-xs md:text-sm">귀하의 상황에 최적화된 운영 방안을 제시합니다</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">연락처 정보</h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base">010-9531-8312</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base">lia@hautrip.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base">평일 10:00 - 19:00</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm; 