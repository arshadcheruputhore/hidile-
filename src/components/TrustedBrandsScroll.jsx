import React from 'react';

const TrustedBrandsScroll = () => {
  const topRowBrands = [
    { img: '/img/englishHouse_scroll.png', alt: 'english House' },
    { img: '/img/usaBadge_scroll.png', alt: 'usa badge' },
    { img: '/img/pentrack_scroll.png', alt: 'pentrack' },
    { img: '/img/pkmathew_scroll.png', alt: 'pk mathew' },
    { img: '/img/Impeters_scroll.png', alt: 'Impeters' },
    { img: '/img/Flexi_scroll.png', alt: 'flexi' },
    { img: '/img/Madre_scroll.jpg', alt: 'Madre' },
    { img: '/img/genfam_scroll.jpeg', alt: 'Genfam' },
    { img: '/img/edraak_scroll.png', alt: 'Edraak' },
    { img: '/img/Billshoper_scroll.png', alt: 'Billshoper' },
  ];

  return (
    <div className="w-full overflow-hidden relative mt-12 sm:mt-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-700 text-base sm:text-lg font-medium">
          <span className="text-yellow-500 text-xl">⭐</span>
          <span className="text-center">
            Trusted by 1,000+ CA firms, managers, and professionals
          </span>
        </div>
      </div>

      {/* Scrolling Row */}
      <div className="relative mb-6 sm:mb-8 overflow-hidden">
        <div className="flex gap-4 sm:gap-6 animate-scroll-seamless">
          {/* Repeat the brands twice for seamless looping */}
          {[...topRowBrands, ...topRowBrands].map((brand, index) => (
            <div key={`${brand.alt}-${index}`} className="flex-shrink-0">
              <div className="flex items-center justify-center rounded-lg bg-gray-100 min-w-[160px] sm:min-w-[180px] min-h-16">
                <img
                  src={brand.img}
                  alt={brand.alt}
                  className="w-24 h-10 sm:w-28 sm:h-14 object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-10 sm:w-20 
        bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent pointer-events-none z-10"></div>

      <div className="absolute top-0 right-0 h-full w-10 sm:w-20 
        bg-gradient-to-l from-gray-50 via-gray-50/70 to-transparent pointer-events-none z-10"></div>

      <style jsx>{`
        .animate-scroll-seamless {
          animation: scroll-seamless 20s linear infinite;
        }

        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TrustedBrandsScroll;
