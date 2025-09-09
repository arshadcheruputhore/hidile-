import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState(0); // First item expanded by default
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [headerVisible, setHeaderVisible] = useState(false);
    const [ctaVisible, setCtaVisible] = useState(false);
    const headerRef = useRef(null);
    const contactRef = useRef(null);
    const itemRefs = useRef([]);

  const faqData = [
    {
      question: "What platforms or devices is it compatible with (web, mobile, desktop)?",
      answer: "Our task management system is fully accessible across multiple platforms. You can use it directly from any modern web browser on your desktop or laptop. We also provide dedicated mobile apps for both iOS and Android, so you can manage tasks on the go."
    },
    {
      question: "Can I integrate it with other tools (Google Calendar, Slack, etc.)?",
      answer: "Yes, our platform offers seamless integrations with popular productivity tools including Google Calendar, Slack, Microsoft Teams, Trello, and many more. You can sync your tasks, receive notifications, and maintain workflow continuity across all your favorite applications."
    },
    {
      question: "Can I create separate workspaces for different projects or departments?",
      answer: "Absolutely! You can create unlimited workspaces to organize different projects, teams, or departments. Each workspace can have its own members, permissions, and customized workflows, ensuring complete separation and organization of your various initiatives."
    },
    {
      question: "How often is the system updated with new features?",
      answer: "We release updates regularly, typically every 2-4 weeks with minor improvements and bug fixes. Major feature releases happen quarterly. All updates are automatic and seamless, ensuring you always have access to the latest functionality without any downtime."
    },
    {
      question: "Do you provide onboarding or tutorials for new users?",
      answer: "Yes, we provide comprehensive onboarding support including interactive tutorials, video guides, documentation, and personalized training sessions. New users receive step-by-step guidance to help them get up and running quickly with all the key features."
    },
    {
      question: "What industries typically benefit most from using this system?",
      answer: "Our system is versatile and benefits organizations across various industries including technology, marketing, healthcare, education, finance, and manufacturing. Any business that manages projects, coordinates teams, or tracks deliverables can benefit from our comprehensive task management solution."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

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
  
      // CTA observer
      const ctaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCtaVisible(true);
          }
        },
        { threshold: 0.3 }
      );
  
      if (contactRef.current) {
        ctaObserver.observe(contactRef.current);
        observers.push(ctaObserver);
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
    <section className="mt-12 sm:mt-20 px-3 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
            Got Questions? We've Got Answers!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Discover how our Hidile OKR helps teams and individuals stay organized, 
            manage tasks more efficiently, and collaborate seamlessly across any device.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 lg:space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`bg-white rounded-lg lg:rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                  }
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
            >
              {/* Question */}
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xs sm:text-base font-medium text-gray-900 pr-4 max-sm:pr-2.5 leading-relaxed">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ${
                    expandedItem === index ? 'bg-blue-500' : 'hover:bg-blue-200'
                  }`}>
                    {expandedItem === index ? (
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h- transition-colors duration-200 ${
                        expandedItem === index ? 'text-white' : 'text-blue-500'
                      }`} />
                    ) : (
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-8 pb-4 sm:pb-6">
                  <div className="pt-1 border-t border-gray-100">
                    <p className="text-gray-600 text-xs sm:text-base leading-relaxed mt-4 max-sm:mt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div 
        ref={contactRef}
        className={`text-center mt-4 lg:mt-6  ${
            ctaVisible 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}>
          <p className="text-gray-600 mb-2 lg:mb-4 max-sm:text-xs">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-sm max-sm:text-xs text-sm">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;