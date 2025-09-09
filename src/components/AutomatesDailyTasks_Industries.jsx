import React, { useEffect, useRef, useState } from 'react';
import { Clock, MessageCircle, FileText, CheckCircle } from 'lucide-react';

const AutomatesDailyTasks_Industries = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

  const automationFeatures = [
    {
      icon: <Clock className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Deadline Management",
      description: "Automatic tracking and alerts for tax deadlines, audit schedules, and compliance requirements."
    },
    {
      icon: <MessageCircle className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Client Communications",
      description: "Automated client updates, status reports, and document request notifications."
    },
    {
      icon: <FileText className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Document Processing",
      description: "Streamlined document collection, review workflows, and approval processes."
    },
    {
      icon: <CheckCircle className="lg:w-6 lg:h-6 w-5 h-5 text-blue-500" />,
      title: "Task Assignment",
      description: "Intelligent task distribution based on team expertise and workload balancing."
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

  return (
    <div className="">
      <div className="max-w-7xl mx-auto max-sm:px-2">
        {/* Main Section Header */}
        <div 
          ref={headerRef}
          className={`mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
            How Hidile OKR Automates Your Important Daily Routine Tasks
          </h1>
          <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed max-w-3xl">
            Save hours every day with intelligent automation that handles routine tasks, so you can focus on high-value client work and strategic growth.
          </p>
        </div>

        {/* Automation Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {automationFeatures.map((feature, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`
                bg-white rounded-2xl p-4 sm:p-6 border border-blue-200 hover:shadow-lg transition-all duration-700 ease-out flex flex-col items-center text-center
                ${visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`
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
  );
};

export default AutomatesDailyTasks_Industries;