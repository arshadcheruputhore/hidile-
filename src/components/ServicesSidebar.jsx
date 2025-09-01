// Desktop Services Sidebar Component
const ServicesSidebar = ({ activeService }) => {
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
    }
  };

  return (
    <div className="hidden lg:block sticky top-20 h-fit">
      <div className="w-80 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Our Services</h2>
        
        <div className="space-y-2">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                activeService === service.id
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
  );
};

export default ServicesSidebar;