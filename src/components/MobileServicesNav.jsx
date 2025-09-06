import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Cloud, Menu, X } from "lucide-react";

// Mobile Services Navigation Component
const MobileServicesNav = ({ activeService, isOpen, onToggle, showButton }) => {
  const services = [
    { id: 'enterprise-cloud', name: 'Enterprise Cloud Solutions' },
    { id: 'mobile-app-development', name: 'Mobile & App Development' },
    { id: 'digital-transformation', name: 'Digital Transformation & Mobility' },
    { id: 'it-outsourcing', name: 'IT Outsourcing' },
    { id: 'intelligent-automation', name: 'Intelligent Automation & Chatbots' },
    { id: 'rapid-prototyping', name: 'Rapid Prototyping Services' },
    { id: 'data-analytics', name: 'Data Analytics & Business Intelligence' },
    { id: 'cybersecurity-solutions', name: 'Cybersecurity Solutions' },
  ];

  const scrollToSection = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      onToggle(); // Close mobile menu after navigation
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={onToggle} />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="p-6 pt-20">
          <div className="flex items-center justify-between w-full mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Our Services</h2>

            <div className="">
              <button
                onClick={onToggle}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-50 rounded-full transition-all duration-200 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${activeService === service.id
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Ready to streamline your workflow?</h3>
            <p className="text-blue-100 text-sm mb-4">
              Start your 30-day free trial today. No credit card required.
            </p>
            <button className="w-full bg-white text-blue-500 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileServicesNav;