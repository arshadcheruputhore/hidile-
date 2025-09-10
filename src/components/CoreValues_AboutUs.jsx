import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Users, Award, Heart } from 'lucide-react';

const CoreValues_AboutUs = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);
    const itemRefs = useRef([]);

      const [isVisible, setIsVisible] = useState(false);
      const [animatedValues, setAnimatedValues] = useState({});
      const sectionRef = useRef(null);

    const automationFeatures = [
        {
            icon: <CheckCircle2 className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Excellence",
            description: "We strive for perfection in every solution we deliver to our CA partners."
        },
        {
            icon: <Users className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Collaboration",
            description: "Success comes through working together with our clients and understanding their needs."
        },
        {
            icon: <Award className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Innovation",
            description: "Constantly evolving our platform to meet the changing demands of the accounting industry."
        },
        {
            icon: <Heart className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
            title: "Trust",
            description: "Building lasting relationships through transparency, reliability, and integrity."
        }
    ];

    const statistics = [
        {
            value: "500+",
            numericValue: 500,
            suffix: "+",
            label: "Projects Launched",
        },
        {
            value: "50+",
            numericValue: 50,
            suffix: "+",
            label: "Happy Clients",
        },
        {
            value: "99.9%",
            numericValue: 99.9,
            suffix: "%",
            label: "Compliance Success Rate",
        },
        {
            value: "10+",
            numericValue: 10,
            suffix: "+",
            label: "Years Experience",
        }
    ];

    useEffect(() => {
        const observers = [];

        // Header observer
        const headerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (headerRef.current) {
            headerObserver.observe(headerRef.current);
            observers.push(headerObserver);
        }

        // Items observer
        const itemObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) {
                itemObserver.observe(ref);
            }
        });
        observers.push(itemObserver);

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);


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
        <section className="">
            <div className="px-8 sm:px-8 md:px-14 lg:px-32 ">
                <div className="max-w-7xl mx-auto">
                    {/* Main Section Header */}
                    <div
                        ref={headerRef}
                        className={`sm:mb-8 mb-6 transition-all duration-1000 ease-out ${headerVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                            Our Core Values
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            Our Core Values Define the Way We Innovate, Collaborate, and Empower Productivity Every Day
                        </p>
                    </div>

                    {/* Automation Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {automationFeatures.map((feature, index) => (
                            <div
                                key={index}
                                ref={el => itemRefs.current[index] = el}
                                data-index={index}
                                className={`bg-white rounded-2xl p-4 sm:p-6 border border-zinc-200 hover:shadow-lg transition-all hover:duration-300 flex flex-col items-center text-center relative group duration-700 ease-out ${visibleItems.has(index)
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-12 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 120}ms`
                                }}
                            >
                                {/* Icon with background */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-white px-4 sm:px-6 lg:px-8 shadow-md mt-8 max-sm:py-5">
                <div className="max-w-7xl mx-auto max-sm:px-2">
                    <div 
                    ref={sectionRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
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
              `}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
                                {/* Statistic Value */}
                                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2`}>
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
        </section>
    );
};

export default CoreValues_AboutUs;