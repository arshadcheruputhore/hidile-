import React from 'react';

const TrustedBrandsScroll = () => {
  // Brand logos data
  const topRowBrands = [
    {img: '/img/englishHouse_scroll.png', alt: 'english House' },
    {img: '/img/usaBadge_scroll.png', alt: 'usa badge'},
    {img: '/img/pentrack_scroll.png', alt: 'pentrack'},
    {img: '/img/pkmathew_scroll.png', alt: 'pk mathew'},
    {img: '/img/Impeters_scroll.png', alt: 'Impeters'},
    {img: '/img/Flexi_scroll.png', alt: 'flexi' },
    {img: '/img/Madre_scroll.jpg', alt: 'Madre'},
    {img: '/img/genfam_scroll.jpeg', alt: 'Genfam'},
    {img: '/img/edraak_scroll.png', alt: 'Edraak'},
    {img: '/img/Billshoper_scroll.png', alt: 'Billshoper'},
  ];

  const scrollBrands = [...topRowBrands, ...topRowBrands]

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
        <div className="flex gap-4 sm:gap-6 animate-scroll-left">
          {scrollBrands.map((brand, index) => (
            <div
              key={`top-${brand.alt}-${index}`}
              className="flex-shrink-0"
            >
              <div className="flex items-center justify-center rounded-lg bg-gray-100 min-w-[160px] sm:min-w-[180px] min-h-16">
                <img src={brand.img} alt={brand.alt} className=' w-24 h-10 sm:w-28 sm:h-14 object-contain object-center' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolling Left */}
      {/* <div className="relative overflow-hidden">
        <div className="flex gap-2 sm:gap-4 animate-scroll-left">
          {bottomRowBrands.map((brand, index) => (
            <div
              key={`bottom-${brand.alt}-${index}`}
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-gray-100 min-w-[160px] sm:min-w-[200px]">
               <img src={brand.img} alt={brand.alt} className='w-28 h-14 object-contain object-center' />
              </div>
            </div>
          ))}
        </div>
      </div> */}

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
          animation: scroll-right 20s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TrustedBrandsScroll;