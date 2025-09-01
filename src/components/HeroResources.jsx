import React, { useState } from 'react';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
import { useScroll } from '../contexts/ScrollContext';

export default function HeroResources({ currentPage = 'industries' }) {
  const [searchQuery, setSearchQuery] = useState('');

  const { scrollToJob } = useScroll(); // Get the scroll function from context

  // Page configurations
  const pageConfig = {
    about: {
      title: <>We're Here to Gurantee <br className="hidden sm:block" /> your Success</>,
      description: "At Hidile, we're committed to guaranteeing your success by providing innovative task management solutions, expert support, and the tools you need to optimize your workflow and achieve your goals.",
      breadcrumb: 'About'
    },
    contact: {
      title: <>We're Here to Help You Manage and <br className="hidden sm:block" /> Optimize Your Tasks</>,
      description: "We value your interest and involvement in the Hidile OKR. Whether you have questions, need support, or want to get more involved, we're here to help. Below are the ways you can reach out to us directly or stay connected through our updates.",
      breadcrumb: 'Contact'
    },
    blogs: {
      title: <>Insights, Stories, and Ideas <br className="hidden sm:block" /> to Inspire Your Growth</>,
      description: "Explore a collection of stories, insights, and updates where we share our learnings, celebrate milestones, and inspire ideas that drive growth.",
      breadcrumb: 'Blogs',
      showSearch: true
    },
    career: {
      title: <>Explore Opportunities and <br className="hidden sm:block" /> Grow with us.</>,
      description: "Ready to explore life at Hidile and grow with us? Drop your CV and be part of something bigger.",
      breadcrumb: 'Career',
      showButton: true
    }
  };

  // Get current page config or default to industries
  const currentConfig = pageConfig[currentPage] || pageConfig.industries;

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative min-h-[55vh] lg:min-h-[65vh] overflow-hidden sm:pt-28 pt-20 bg-[url(/img/heroResourcesBg.png)] bg-center bg-no-repeat bg-cover max-sm:px-6">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 max-sm:mb-4 bg-white px-4 py-0.5 rounded-3xl border border-zinc-300">
          <div className="flex items-center space-x-1 text-xs text-gray-900">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>/</span>
            <span>{currentConfig.breadcrumb}</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-snug sm:leading-normal tracking-tight text-gray-900 mb-3 sm:mb-6">
            {currentConfig.title}
            {currentConfig.subtitle && (
              <span className="block">{currentConfig.subtitle}</span>
            )}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentConfig.description}
          </p>

          {/* Search Bar for Blogs Page */}
          {currentConfig.showSearch && (
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 lg:py-2 py-1.5 bg-white/70 bg-opacity-90 border border-gray-200 rounded-3xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Open Positions Button for Career Page */}
          {currentConfig.showButton && (
            <div className="flex justify-center">
              <button 
                onClick={scrollToJob}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 lg:px-6 py-2.5 lg:py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors max-lg:w-max max-w-xs"
              >
                <ChevronDown className="h-4 w-4 mr-2" />
                Open Positions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}