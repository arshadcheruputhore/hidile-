import React from 'react';

const Statistics_Industries = () => {
  const statistics = [
    {
      value: "500+",
      label: "CA Firms Trust Us",
      color: "text-blue-500"
    },
    {
      value: "99.9%",
      label: "Compliance Success Rate",
      color: "text-green-500"
    },
    {
      value: "4.8/5",
      label: "User Rating",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 shadow-md max-sm:py-4">
      <div className="max-w-7xl mx-auto max-sm:px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className={`text-center py-8 max-sm:py-0 ${
                index < statistics.length - 1 
                  ? 'md:border-r md:border-gray-200' 
                  : ''
              }`}
            >
              {/* Statistic Value */}
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              
              {/* Statistic Label */}
              <div className="text-gray-600 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics_Industries;