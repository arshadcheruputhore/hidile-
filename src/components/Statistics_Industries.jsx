import React, { useEffect, useRef, useState } from 'react';

const Statistics_Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({});
  const sectionRef = useRef(null);

  const statistics = [
    {
      value: "500+",
      numericValue: 500,
      suffix: "+",
      label: "CA Firms Trust Us",
      color: "text-blue-500"
    },
    {
      value: "99.9%",
      numericValue: 99.9,
      suffix: "%",
      label: "Compliance Success Rate",
      color: "text-green-500"
    },
    {
      value: "4.8/5",
      numericValue: 4.8,
      suffix: "/5",
      label: "User Rating",
      color: "text-orange-500"
    }
  ];

  // Animation function for counting up
  const animateValue = (start, end, duration, callback, isDecimal = false) => {
    let startTime = null;
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = start + (end - start) * easeOutQuart;
      
      if (isDecimal) {
        callback(Math.min(currentValue, end).toFixed(1));
      } else {
        callback(Math.floor(Math.min(currentValue, end)));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Start animations for each statistic
          statistics.forEach((stat, index) => {
            const isDecimal = stat.numericValue % 1 !== 0;
            const duration = 2000 + (index * 200); // Stagger animations
            
            setTimeout(() => {
              animateValue(0, stat.numericValue, duration, (value) => {
                setAnimatedValues(prev => ({
                  ...prev,
                  [index]: value
                }));
              }, isDecimal);
            }, index * 300); // Delay each counter
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const getDisplayValue = (stat, index) => {
    if (!isVisible || animatedValues[index] === undefined) {
      return "0";
    }
    return animatedValues[index] + stat.suffix;
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 shadow-md max-sm:py-4">
      <div className="max-w-7xl mx-auto max-sm:px-2">
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className={`
                text-center py-8 max-sm:py-0 
                transition-all duration-1000 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
                ${index < statistics.length - 1 
                  ? 'md:border-r md:border-gray-200' 
                  : ''
                }
              `}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Statistic Value */}
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                {getDisplayValue(stat, index)}
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