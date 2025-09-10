import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { WatchDemoModal } from "./WatchDemoModal";
import { WatchDemoButton } from "./WatchDemoButton";
import { Link } from 'react-router-dom';

export default function HeroServiceDetails() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "aeRYRXyd1Cs"; // Extracted from your YouTube URL

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative lg:min-h-[60%] min-h-screen overflow-hidden max-sm:pt-6 pt-28" style={{ background: 'linear-gradient(90deg, #F0F9FF 0%, #EEF2FF 100%)' }}>
      <div className="max-w-7xl mx-auto">
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
              <Link to={'/'} className='hover:underline'>
                Home
              </Link>
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
              <Link
                to="/reach-us"
                className="group relative inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 max-lg:w-full overflow-hidden "
              >
                {/* Text */}
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                  Get Started Now
                </span>

                {/* Left Arrow - slides slightly right and fades */}
                <ArrowRight className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-100 transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-0" />

                {/* Right Arrow - emerges from under text */}
                <ArrowRight className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>

              <WatchDemoButton onClick={openModal} />
            </div>
          </div>
        </div>

        <WatchDemoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoId={videoId}
        />
      </div>
    </div>
  );
}