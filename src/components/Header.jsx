import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, CheckSquare, LayoutTemplate, Calendar, BarChart3, ExternalLink, Workflow, Users, FileText, Settings, Bell, Building2, Car, Heart, Hammer, Factory, Briefcase, Phone, X } from "lucide-react";
import hidileLogo from "/img/hidileLogoHeader.png"


// Navigation configuration array
const NAV = [
  { label: "Home", to: "/", end: true },
  {
    label: "Features",
    to: "/features",
    // children: [
    //   {
    //     icon: CheckSquare,
    //     label: "Custom Tasks",
    //     description: "Learn about your users",
    //     to: "/features"
    //   },
    //   {
    //     icon: Users,
    //     label: "chat",
    //     description: "Real-time analytics user trends",
    //     to: "/features"
    //   },
    //   {
    //     icon: LayoutTemplate,
    //     label: "Templates",
    //     description: "Monitor your metrics",
    //     to: "/features"
    //   },
    //   {
    //     icon: FileText,
    //     label: "Files",
    //     description: "Measure B2B account health",
    //     to: "/features"
    //   },
    //   {
    //     icon: Calendar,
    //     label: "Calendar",
    //     description: "Segments with perfect target",
    //     to: "/features"
    //   },
    //   {
    //     icon: Settings,
    //     label: "Settings",
    //     description: "Surface hidden trends",
    //     to: "/features"
    //   },
    //   {
    //     icon: BarChart3,
    //     label: "Board",
    //     description: "Enhance team communication",
    //     to: "/features"
    //   },
    //   {
    //     icon: Bell,
    //     label: "Project Management",
    //     description: "Insights from customer reviews",
    //     to: "/features"
    //   },
    //   {
    //     icon: ExternalLink,
    //     label: "Integrations",
    //     description: "Optimize user experience",
    //     to: "/features"
    //   },
    //   {
    //     icon: Workflow,
    //     label: "Workflow",
    //     description: "Comprehensive performance",
    //     to: "/features"
    //   },
    //   {
    //     icon: Bell,
    //     label: "Custom Dashboards",
    //     description: "Insights from customer reviews",
    //     to: "/features"
    //   },
    //   {
    //     icon: Bell,
    //     label: "Invoices",
    //     description: "Insights from customer reviews",
    //     to: "/features"
    //   },
    // ],
  },
  {
    label: "CA-Auditing Firms",
    to: "/CA-Auditing-Firms",
    // children: [
    //   {
    //     icon: CheckSquare,
    //     label: "Finance & Accounting",
    //     description: "CA firms, tax management, compliance, and financial reporting",
    //     to: "/industries"
    //   },
    //   {
    //     icon: Users,
    //     label: "Logistics & Transportation",
    //     description: "Fleet management, route optimization, and delivery tracking",
    //     to: "/industries"
    //   },
    //   {
    //     icon: LayoutTemplate,
    //     label: "Automotive",
    //     description: "Service management, parts inventory, and customer relations",
    //     to: "/industries"
    //   },
    //   {
    //     icon: FileText,
    //     label: "Real Estate",
    //     description: "Property management, client tracking, and transaction workflows",
    //     to: "/industries"
    //   },
    //   {
    //     icon: Calendar,
    //     label: "Healthcare",
    //     description: "Patient management, EHR systems, telemedicine, and clinical workflows",
    //     to: "/industries"
    //   },
    //   {
    //     icon: Settings,
    //     label: "Construction",
    //     description: "Project management, safety compliance, and resource planning",
    //     to: "/industries"
    //   },
    //   {
    //     icon: BarChart3,
    //     label: "Manufacturing",
    //     description: "Production planning, quality control, and supply chain management",
    //     to: "/industries"
    //   },
    //   {
    //     icon: Bell,
    //     label: "Professional Services",
    //     description: "Client management, project billing, and service delivery",
    //     to: "/industries"
    //   }
    // ],
  },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  {
    label: "Resources",
    children: [
      {
        icon: CheckSquare,
        label: "About Us",
        description: "Learn about our company and mission",
        to: "/resources/about-us"
      },
      {
        icon: LayoutTemplate,
        label: "Contact Us",
        description: "Get in touch with our team",
        to: "/resources/contact-us"
      },
      {
        icon: Calendar,
        label: "Blogs",
        description: "Latest insights and industry trends",
        to: "/resources/blogs"
      },
      {
        icon: CheckSquare,
        label: "Careers",
        description: "Join our team and explore job opportunities",
        to: "/resources/careers"
      },
      // {
      //   icon: CheckSquare,
      //   label: "News",
      //   description: "Join our team and explore job opportunities",
      //   to: "/resources/careers"
      // },
    ],
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
        setActiveDropdown(null);
      }, 300);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
      // For better mobile support:
      document.body.classList.add('no-scroll-mobile');
    } else {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll-mobile');
    }

    // Cleanup
    return () => {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll-mobile');
    };
  }, [isMobileMenuOpen])


  const handleMouseEnter = (dropdown) => setActiveDropdown(dropdown);
  const handleMouseLeave = () => setActiveDropdown(null);
  const handleMobileDropdownClick = (dropdown) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  const handleDropdownItemClick = (item, parentLabel) => {
    // Navigate to the specific item
    navigate(item.to);

    // Close dropdown
    setActiveDropdown(null);

    // If it's mobile, close the mobile menu too
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const getDropdownTitle = (label) => {
    switch (label.toLowerCase()) {
      case 'features':
        return 'POWERFUL FEATURES THAT DRIVE RESULTS';
      case 'industries':
        return 'TRANSFORMING INDUSTRIES WITH IMPACTFUL SOLUTIONS';
      case 'resources':
        return 'EMPOWERING WITH RESOURCES';
      default:
        return '';
    }
  };

  // Helper function to check if any child is active
  const isAnyChildActive = (item, location) => {
    if (!item.children) return false;
    return item.children.some(child =>
      location.pathname === child.to ||
      (child.end === false && location.pathname.startsWith(child.to))
    );
  };

  // Helper function to check if specific child is active
  const isChildActive = (child, location) => {
    return location.pathname === child.to ||
      (child.end === false && location.pathname.startsWith(child.to));
  };

  const renderDesktopNavItem = (item, index) => {
    if (item.children) {
      const hasActiveChild = isAnyChildActive(item, location);

      return (
        <div
          key={index}
          className="relative flex gap-0.5 items-center group"
          onMouseEnter={() => handleMouseEnter(item.label.toLowerCase())}
          onMouseLeave={handleMouseLeave}
        >
          {item.to ? (
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) => {
                const shouldBeActive = isActive || hasActiveChild;
                return `tracking-tight text-sm font-medium transition-colors duration-200 relative group ${shouldBeActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`;
              }}
            >
              {({ isActive }) => {
                const shouldBeActive = isActive || hasActiveChild;
                return (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${shouldBeActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </>
                );
              }}
            </NavLink>
          ) : (
            <span
              className={`tracking-tight text-sm font-medium transition-colors duration-200 relative group cursor-pointer ${hasActiveChild ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${hasActiveChild ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </span>
          )}

          <div className="mt-1 transition-transform duration-200 group-hover:rotate-180">
            <ChevronDown
              size={12}
              className={`transition-colors duration-200 ${hasActiveChild ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                }`}
            />
          </div>

          {/* Enhanced Desktop Dropdown */}
          {activeDropdown === item.label.toLowerCase() && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-2 w-max max-w-2xl bg-white backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 py-6 p-4 animate-in fade-in-0 zoom-in-95 duration-300 before:content-[''] before:absolute before:-top-5 before:left-0 before:w-full before:h-14 before:bg-transparent">

              {/* Title */}
              <div className="text-center mb-3">
                <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  {getDropdownTitle(item.label)}
                </h3>
              </div>

              {/* Grid Layout */}
              <div className={`grid ${item.label === 'Resources' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {item.children.map((child, childIndex) => {
                  const IconComponent = child.icon;
                  const childIsActive = isChildActive(child, location);

                  return (
                    <div
                      key={childIndex}
                      onClick={() => handleDropdownItemClick(child, item.label)}
                      className={`flex items-start gap-4 p-3 rounded-xl transition-colors duration-200 cursor-pointer group/item ${childIsActive
                          ? "bg-blue-50 border-l-2 border-blue-500"
                          : "hover:bg-blue-50"
                        }`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${childIsActive ? "bg-blue-100" : ""
                        }`}>
                        <IconComponent
                          className={`w-5 h-5 transition-colors duration-200 ${childIsActive ? "text-blue-600" : "text-gray-600"
                            }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-semibold mb-1 transition-colors duration-200 ${childIsActive ? "text-blue-900" : "text-gray-900"
                          }`}>
                          {child.label}
                        </h4>
                        <p className={`text-xs leading-relaxed ${childIsActive ? "text-blue-700" : "text-gray-500"
                          }`}>
                          {child.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={index}
        to={item.to}
        end={item.end}
        className={({ isActive }) =>
          `tracking-tight text-sm font-medium transition-colors duration-200 relative group ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {item.label}
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
            />
          </>
        )}
      </NavLink>
    );
  };

  const renderMobileNavItem = (item, index) => {
    if (item.children) {
      return (
        <div key={index} className="w-full">
          <div
            className="flex justify-between items-center py-3 cursor-pointer"
            onClick={() => handleMobileDropdownClick(item.label.toLowerCase())}
          >
            <span className="text-base font-medium text-gray-700">
              {item.label}
            </span>
            <ChevronDown
              size={16}
              className={`text-gray-500 transition-transform duration-200 ${activeDropdown === item.label.toLowerCase() ? "rotate-180" : ""
                }`}
            />
          </div>
          {activeDropdown === item.label.toLowerCase() && (
            <div className="pb-2 space-y-2 dropdown-content">
              {/* Mobile dropdown title */}
              <div className="px-4 py-2">
                <h4 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  {getDropdownTitle(item.label)}
                </h4>
              </div>

              {item.children.map((child, childIndex) => {
                const IconComponent = child.icon;
                return (
                  <div
                    key={childIndex}
                    onClick={() => handleDropdownItemClick(child, item.label)}
                    className="flex items-start gap-3 p-3 mx-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-gray-900 mb-1">
                        {child.label}
                      </h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {child.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    return (
      <NavLink
        key={index}
        to={item.to}
        end={item.end}
        className={({ isActive }) =>
          `text-base font-medium transition-colors duration-200 py-3 block ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
          }`
        }
        onClick={toggleMobileMenu}
      >
        {item.label}
      </NavLink>
    );
  };

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        @keyframes slideOutUp {
          from {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px) scale(0.95);
          }
        }
        @keyframes dropdownSlideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 800px;
          }
        }
        .mobile-menu-overlay {
          animation: ${isClosing ? "fadeOut 0.3s ease-out forwards" : "fadeIn 0.3s ease-out forwards"};
        }
        .mobile-menu-content {
          animation: ${isClosing ? "slideOutUp 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards" : "slideInDown 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"};
        }
        .dropdown-content {
          animation: dropdownSlideDown 0.3s ease-out forwards;
          overflow: hidden;
        }
      `}</style>

      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-7xl h-[55px] z-50 pt-5 max-sm:w-full max-sm:px-2 max-sm:pt-3">
        <div className="flex justify-between items-center w-full rounded-2xl backdrop-blur-lg bg-white/60 h-[50px] px-5 max-sm:px-4">
          <Link to="/">
            <img
              src={hidileLogo}
              alt="hidileLogo"
              className="relative h-[27px] w-[75px] z-[2] cursor-pointer hover:opacity-80 transition-opacity duration-200 max-sm:h-[24px] max-sm:w-[65px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex relative gap-6 items-center z-[2] max-md:gap-4 max-sm:hidden ml-28">
            {NAV.map((item, index) => renderDesktopNavItem(item, index))}
          </nav>

          <div className="flex items-center gap-5 max-sm:gap-2">
            <a
              href="https://app.hidile.in/"
              target="_self"
              className="relative text-sm font-bold text-gray-900 z-[2] cursor-pointer hover:text-blue-600 transition-colors duration-200 max-sm:hidden"
            >
              Log In
            </a>
            <Link
              to="/signup"
              className="inline-flex relative gap-2.5 justify-center items-center px-5 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md z-[2] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 max-sm:px-3 max-sm:py-1 max-sm:hidden"
            >
              <span className="text-sm tracking-wide font-medium text-white max-sm:text-xs">
                Start for Free
              </span>
            </Link>
            <button
              className="hidden relative text-xl text-gray-800 z-[2] max-sm:block hover:text-blue-600 transition-colors duration-200 p-1"
              onClick={toggleMobileMenu}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {(isMobileMenuOpen || isClosing) && (
        <div
          className="fixed inset-0 bg-black/50 z-50 sm:hidden mobile-menu-overlay"
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed top-[75px] left-1/2 w-[95%] max-w-md bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl max-h-[80vh] overflow-y-auto mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: "translateX(-50%)", transformOrigin: "center top" }}
          >

            <div className="border-b border-gray-200 pb-4 mb-4">
              {/* Mobile Navigation */}
              <div className="flex flex-col w-full">
                {NAV.map((item, index) => renderMobileNavItem(item, index))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://app.hidile.in/"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-800 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={toggleMobileMenu}
              >
                Log In
              </a>
              <Link
                to="/signup"
                className="inline-flex gap-2.5 justify-center items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200"
                onClick={toggleMobileMenu}
              >
                <span className="text-base font-medium text-white">Start for Free</span>
              </Link>
            </div>
          </div>

          <div className="fixed top-[25px] left-1/2 transform -translate-x-1/2 z-50">
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-white rounded-full transition-all duration-200 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
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
      )}
    </>
  );
}