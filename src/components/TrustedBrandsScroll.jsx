import React from 'react';

const TrustedBrandsScroll = () => {
  // Brand logos data
  const topRowBrands = [
    { name: 'mparticle', logo: '🔲', colors: 'from-gray-800 to-black' },
    { name: 'loom', logo: '🌟', colors: 'from-purple-500 to-blue-500' },
    { name: 'pendo', logo: '🚀', colors: 'from-pink-500 to-red-500' },
    { name: 'Optimizely', logo: '⚡', colors: 'from-blue-500 to-cyan-500' },
    { name: 'draftbit', logo: '📦', colors: 'from-purple-600 to-indigo-600' },
    { name: 'Typedream', logo: '🎨', colors: 'from-pink-500 to-purple-600' },
    // Duplicate for seamless scroll
    { name: 'mparticle', logo: '🔲', colors: 'from-gray-800 to-black' },
    { name: 'loom', logo: '🌟', colors: 'from-purple-500 to-blue-500' },
    { name: 'pendo', logo: '🚀', colors: 'from-pink-500 to-red-500' },
    { name: 'Optimizely', logo: '⚡', colors: 'from-blue-500 to-cyan-500' },
    { name: 'draftbit', logo: '📦', colors: 'from-purple-600 to-indigo-600' },
    { name: 'Typedream', logo: '🎨', colors: 'from-pink-500 to-purple-600' }
  ];

  const bottomRowBrands = [
    { name: 'Notion', logo: '📝', colors: 'from-gray-700 to-gray-900' },
    { name: 'Figma', logo: '🎯', colors: 'from-purple-500 to-pink-500' },
    { name: 'Slack', logo: '💬', colors: 'from-green-500 to-teal-500' },
    { name: 'Airtable', logo: '📊', colors: 'from-orange-500 to-yellow-500' },
    { name: 'Webflow', logo: '🌊', colors: 'from-blue-600 to-purple-600' },
    { name: 'Linear', logo: '📐', colors: 'from-indigo-500 to-blue-500' },
    // Duplicate for seamless scroll
    { name: 'Notion', logo: '📝', colors: 'from-gray-700 to-gray-900' },
    { name: 'Figma', logo: '🎯', colors: 'from-purple-500 to-pink-500' },
    { name: 'Slack', logo: '💬', colors: 'from-green-500 to-teal-500' },
    { name: 'Airtable', logo: '📊', colors: 'from-orange-500 to-yellow-500' },
    { name: 'Webflow', logo: '🌊', colors: 'from-blue-600 to-purple-600' },
    { name: 'Linear', logo: '📐', colors: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <div className="w-full overflow-hidden relative mt-12 sm:mt-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-700 text-base sm:text-lg font-medium">
          <span className="text-yellow-500 text-xl">⭐</span>
          <span className="text-center">Trusted by 100,000+ marketers, writers, and entrepreneurs</span>
        </div>
      </div>

      {/* Top Row - Scrolling Right */}
      <div className="relative mb-6 sm:mb-8 overflow-hidden">
        <div className="flex gap-4 sm:gap-4 animate-scroll-right">
          {topRowBrands.map((brand, index) => (
            <div
              key={`top-${brand.name}-${index}`}
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-gray-100 min-w-[160px] sm:min-w-[200px]">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${brand.colors} rounded-lg sm:rounded-xl flex items-center justify-center text-white`}>
                  <span className="text-sm sm:text-lg">{brand.logo}</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm sm:text-lg">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolling Left */}
      <div className="relative overflow-hidden">
        <div className="flex gap-2 sm:gap-4 animate-scroll-left">
          {bottomRowBrands.map((brand, index) => (
            <div
              key={`bottom-${brand.name}-${index}`}
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-gray-100 min-w-[160px] sm:min-w-[200px]">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${brand.colors} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md`}>
                  <span className="text-sm sm:text-lg">{brand.logo}</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm sm:text-lg">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      {/* Left Fade */}
      <div className="absolute top-0 left-0 h-full w-10 sm:w-20 
  bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent pointer-events-none z-10">
      </div>

      {/* Right Fade */}
      <div className="absolute top-0 right-0 h-full w-10 sm:w-20 
  bg-gradient-to-l from-gray-50 via-gray-50/70 to-transparent pointer-events-none z-10">
      </div>


      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedBrandsScroll;