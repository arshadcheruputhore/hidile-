import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WatchDemoModal } from "./WatchDemoModal";
import { WatchDemoButton } from "./WatchDemoButton";

export default function HeroIndustries() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "aeRYRXyd1Cs"; // Extracted from your YouTube URL

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative lg:min-h-[60vh] overflow-hidden sm:pt-[8%] pt-20 pb-10 lg:pb-20 bg-gradient-to-br from-blue-500 via-white to-yellow-50 max-sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* decorative bg layer */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] [background-size:24px_24px]" />
          {/* radial spotlight */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-40
                        bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent)]" />
          {/* abstract blob */}
          <div className="absolute bottom-[-120px] right-[-120px] h-[420px] w-[420px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent)]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-2 sm:px-6 lg:px-8 my-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 max-sm:mb-4 bg-white px-4 py-0.5 rounded-3xl border border-zinc-300">
            <ol className="flex items-center space-x-1 text-xs text-gray-900">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <li>/</li>
              <li>
                CA-Auditing Firms
              </li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-snug sm:leading-normal tracking-tight text-gray-900 mb-3 sm:mb-6">
              You account for money. We make work . <br />
              <span className="block">accountable</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A unified workspace that brings together tasks, documents, and sign-offs — all seamlessly tailored to meet the unique needs of CA firms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center max-lg:px-4">
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
    </section>
  );
}
