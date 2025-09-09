import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WatchDemoModal } from "./WatchDemoModal";
import { WatchDemoButton } from "./WatchDemoButton";

export default function HeroService() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "aeRYRXyd1Cs"; // Extracted from your YouTube URL

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative lg:min-h-[60vh] overflow-hidden lg:pt-[8%] pt-20 pb-10 lg:pb-20 bg-[url('/img/heroService-bg.png')] bg-no-repeat bg-cover bg-center max-sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 max-sm:mb-4 bg-white px-4 py-0.5 rounded-3xl border border-zinc-300">
            <ol className="flex items-center space-x-1 text-xs text-gray-900">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <li>/</li>
              <li>
                Services
              </li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-snug sm:leading-normal tracking-tight text-gray-900 mb-6">
              Cutting-Edge IT Solutions : Empowering <br />
              <span className="block">Your Digital Transformation</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Align goals, boost productivity, and achieve measurable results with the most
              powerful OKR platform designed for modern hybrid teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center max-lg:px-4">
              <Link
                to={"/reach-us"}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors max-lg:w-full"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Get Started Now
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