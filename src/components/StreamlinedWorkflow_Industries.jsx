import React, { useEffect, useRef, useState } from 'react';
import { LayoutTemplate, ClipboardCheck, CirclePlay, Hourglass, CircleCheckBig, ShieldCheck } from 'lucide-react';

const StreamlinedWorkflow_Industries = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);
  const itemRefs = useRef([]);

  const workflowSteps = [
    { icon: <LayoutTemplate className="lg:w-8 lg:h-8 w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-100" />, title: "Select Templates", description: "Choose from pre-designed templates to get started quickly and efficiently." },
    { icon: <ClipboardCheck className="lg:w-8 lg:h-8 w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-100" />, title: "Assign Tasks", description: "Allocate tasks to team members based on their skills and availability." },
    { icon: <CirclePlay className="lg:w-8 lg:h-8 w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-100" />, title: "Task Execution", description: "Assigned users start working on tasks with smooth workflow." },
    { icon: <Hourglass className="lg:w-8 lg:h-8 w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-100" />, title: "Track Time", description: "Monitor time spent on tasks, ensuring productivity and transparency." },
    { icon: <CircleCheckBig className="lg:w-8 lg:h-8 w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-100" />, title: "Complete Tasks", description: "Finalize tasks once completed, ensuring everything meets standards." },
    { icon: <ShieldCheck className="lg:w-8 lg:h-8 w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-100" />, title: "Verify Results", description: "Review and verify task completion before final approval." }
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
    <div className="mb-20 max-sm:mb-14">
      <div className="max-w-7xl mx-auto max-sm:px-2">
        {/* Main Section Header */}
        <div 
          ref={headerRef}
          className={`mb-8 lg:mb-16 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
            Streamlined Work Management Flow
          </h1>
          <p className="text-gray-600 text-sm sm:text-base text-left leading-relaxed max-w-2xl">
            Efficiently manage your CA practice with our modern workflow system designed for productivity.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-5 max-sm:px-3">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`
                relative bg-white rounded-lg px-3 pb-6 max-sm:p-3 border border-zinc-200 text-center
                transition-all duration-700 ease-out
                hover:shadow-lg
                lg:transform will-change-transform
                lg:even:group-hover:-translate-y-8 lg:odd:group-hover:translate-y-8
                lg:motion-reduce:transform-none
                group-hover:border-blue-200
                ${visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 lg:mb-6 lg:absolute lg:-top-6 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <div className="lg:w-14 lg:h-14 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center drop-shadow-2xl drop-shadow-blue-50 group-hover:bg-blue-500 ">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-900 mb-4 leading-tight lg:pt-12">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamlinedWorkflow_Industries;