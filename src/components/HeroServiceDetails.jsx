import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroServiceDetails() {
  return (
    <div className="relative lg:min-h-[60%] min-h-screen overflow-hidden max-sm:pt-6 pt-28" style={{background: 'linear-gradient(90deg, #F0F9FF 0%, #EEF2FF 100%)'}}>
      {/* Decorative Circles */}
      {/* Left blue circle */}
      <div 
        className="absolute left-10 top-44 max-sm:top-36 max-sm:-left-7 max-sm:size-48 size-64 transform -translate-y-1/2"
        style={{
          borderRadius: '9999px',
          opacity: 0.2,
          background: '#38BDF8'
        }}
      />
      
      {/* Right side circles */}
      {/* Small purple circle */}
      <div 
        className="absolute right-20 top-24 max-sm:right-5 max-sm:top-1/4"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '9999px',
          opacity: 0.2,
          background: '#C084FC'
        }}
      />
      
      {/* Big indigo circle */}
      <div 
        className="absolute right-10 top-52 max-sm:right-10 max-sm:top-2/5"
        style={{
          width: '320px',
          height: '320px',
          borderRadius: '9999px',
          opacity: 0.2,
          background: '#818CF8'
        }}
      />
      
      {/* Main Content */}
      <div className="relative max-sm:min-h-screen z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 lg:pb-20">
        {/* Breadcrumb */}
        <nav className="mb-8 max-sm:mb-4 bg-white px-4 py-1 rounded-3xl border border-zinc-300">
          <ol className="flex items-center space-x-1 text-xs text-gray-900">
            <li>
                Home
            </li>
            <li>/</li>
            <li>
                Services
            </li>
            <li>/</li>
            <li className="">
              Explore Services
            </li>
          </ol>
        </nav>
        
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold leading-snug sm:leading-normal md:leading-16 tracking-tight sm:tracking-wide text-gray-900 text-center xl:text-nowrap mb-6">
            Cutting-Edge IT Solutions : Empowering <br />
            <span className="block">Your Digital Transformation</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Align goals, boost productivity, and achieve measurable results with the most 
            powerful OKR platform designed for modern hybrid teams.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a
                href="/signup"
                className="inline-flex max-sm:w-3/4 items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Get Started Now
              </a>

              <a
                href="/demo"
                className="inline-flex max-sm:w-3/4 items-center justify-center rounded-xl border border-blue-500/50 bg-white/90 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 backdrop-blur-sm transition-colors"
              >
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full">
                  <Play className="h-3.5 w-3.5" />
                </span>
                Watch Demo
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}