import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroGetStarted() {
  return (
    <div className="relative lg:min-h-[70vh] overflow-hidden lg:pt-[8%] pt-20 pb-10 lg:pb-20 max-sm:px-6" style={{ background: 'linear-gradient(105deg, #87B8FF 16.17%, #E7F1FF 87.53%)' }}>
      <div className="">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-relaxed sm:leading-normal tracking-tight text-gray-900 mb-3 sm:mb-6">
              Start Achieving More with Hidile OKR <br />
              <span className="block">Reach Out Now</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline objectives, track results, and empower your team <br className='max-sm:hidden' /> with Hidile OKR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}