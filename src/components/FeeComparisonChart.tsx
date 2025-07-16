import React from 'react';
import { motion } from 'framer-motion';

interface FeeData {
  service: string;
  fee: number;
  isHighlighted?: boolean;
}

interface FeeComparisonChartProps {
  data: FeeData[];
  caption?: string;
  className?: string;
}

const FeeComparisonChart: React.FC<FeeComparisonChartProps> = ({ 
  data, 
  caption = "같은 예약, 수수료는 1/5 수준입니다.",
  className = "" 
}) => {
  const maxFee = Math.max(...data.map(item => item.fee));

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      {/* Caption */}
      <div className="text-center mb-6">
        <p className="text-sm font-semibold text-gray-700">{caption}</p>
      </div>

      {/* Chart Container */}
      <div className="flex items-end justify-center space-x-6 h-48">
        {data.map((item, index) => {
          const barHeight = Math.max((item.fee / maxFee) * 120, 20); // 최소 높이 20px 보장
          return (
            <div key={item.service} className="flex flex-col items-center">
              {/* Fee Percentage */}
              <div className={`text-sm font-bold mb-2 ${
                item.isHighlighted ? 'text-primary-600' : 'text-gray-600'
              }`}>
                {item.fee}%
              </div>

              {/* Bar */}
              <motion.div
                className={`w-16 rounded-t-lg ${
                  item.isHighlighted 
                    ? 'bg-primary-600 shadow-lg' 
                    : 'bg-gray-300'
                }`}
                style={{ height: `${barHeight}px` }}
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight}px` }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              />

              {/* Service Name */}
              <div className="mt-3 text-center">
                <p className={`text-xs font-medium ${
                  item.isHighlighted 
                    ? 'text-primary-600 font-semibold' 
                    : 'text-gray-600'
                }`}>
                  {item.service}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 text-center">
        <div className="flex justify-center items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-600 rounded"></div>
            <span className="text-gray-600">FineHost</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
            <span className="text-gray-600">경쟁 서비스</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeComparisonChart; 