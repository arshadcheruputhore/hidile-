import { useEffect, useState } from "react";
import EnterpriseCloudSolutions_services from "./EnterpriseCloudSolutions_services";
import MobileServicesNav from "./MobileServicesNav";
import ServicesSidebar from "./ServicesSidebar";
import { List, X } from "lucide-react";
import MobileAppDevelopment_services from "./MobileAppDevelopment_services";
import DigitalTransformation_services from "./DigitalTransformation_services";
import ITOutsourcing_services from "./ITOutsourcing_services";
import IntelligentAutomation_services from "./IntelligentAutomation_services";
import RapidPrototyping_services from "./RapidPrototyping_services";
import DataAnalytics_services from "./DataAnalytics_services";
import CybersecuritySolutions_services from "./CybersecuritySolutions_services";

// Main AllServices Component
const AllServices = () => {
  const [activeService, setActiveService] = useState('enterprise-cloud');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileButton, setShowMobileButton] = useState(false);

  // Track which section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    // Observe all service sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Track AllServices section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowMobileButton(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const allServicesElement = document.getElementById('all-services-container');
    if (allServicesElement) {
      observer.observe(allServicesElement);
    }

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="all-services-container" className="relative">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Menu Button - positioned relative to AllServices container */}
        {/* {showMobileButton && ( */}
        <div className="lg:hidden sticky top-20 right-0 z-40 flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
          </button>
        </div>
        {/* )} */}

        {/* Mobile Navigation */}
        <MobileServicesNav
          activeService={activeService}
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          showButton={showMobileButton}
        />

        <div className="flex lg:gap-5 {'gap-8'} max-sm:-mt-10 ">
          {/* Main Content Area */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Each service has its own unique component and design */}
            <EnterpriseCloudSolutions_services />

            <MobileAppDevelopment_services />

            <DigitalTransformation_services />

            <ITOutsourcing_services />

            <IntelligentAutomation_services />

            <RapidPrototyping_services />

            <DataAnalytics_services />

            <CybersecuritySolutions_services />

            {/* Add other service components here */}
          </div>

          {/* Desktop Sidebar */}
          <div className="flex-shrink-0">
            <ServicesSidebar activeService={activeService} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;