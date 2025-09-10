// src/sections/FeaturesHero.jsx
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { WatchDemoModal } from "./WatchDemoModal";
import { WatchDemoButton } from "./WatchDemoButton";
import { useState } from "react";

export default function HeroFeatures() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "aeRYRXyd1Cs"; // Extracted from your YouTube URL

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative overflow-hidden w-full max-w-7xl mx-auto">
      {/* Mobile background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 lg:hidden"
        style={{
          backgroundImage: `url('/img/feature-hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />

      {/* dotted accents */}
      <div aria-hidden className="pointer-events-none absolute left-6 bottom-6 hidden md:grid grid-cols-8 gap-2 opacity-30">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
        ))}
      </div>

      <div className="w-full px-4 sm:px-2 lg:pt-[6%] py-10 sm:pb-16 md:pb-20 pt-20">
        <div className="grid items-center lg:grid-cols-12">
          {/* LEFT: headline + text + CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-10">
            {/* Breadcrumb */}
            <div className="flex max-lg:justify-center">
              <nav className="mb-6 max-sm:mb-4 bg-white px-4 py-0.5 rounded-3xl border border-zinc-300 w-max">
                <ol className="flex items-center space-x-1 text-xs text-gray-900">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                  <li>/</li>
                  <li>
                    Features
                  </li>
                </ol>
              </nav>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-snug sm:leading-normal md:leading-14 tracking-tight sm:tracking-wide text-gray-900 text-center sm:text-left xl:text-nowrap mb-3 sm:mb-6">
              Take a Tour of Our Key <br className="max-sm:hidden" /> Features
            </h1>

            <p className="max-w-2xl mb-8 mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed text-gray-500 max-sm:text-gray-700 text-center sm:text-left">
              Explore the powerful tools that simplify your workflow, boost productivity, and help you achieve more with ease.
            </p>

            <div className="max-sm:px-8 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center justify-center sm:justify-start">
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

          {/* RIGHT: reserved image stage (hidden on mobile, visible on desktop) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-7">
            <div className="relative mx-auto h-[280px] w-full max-w-3xl sm:h-[360px] md:h-[440px] lg:h-[520px] xl:h-[560px]">
              {/* shadow glow */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[28px]"
              />

              <img
                src="img/feature-hero.png"
                alt="Feature hero"
                className="relative z-[1] h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <WatchDemoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={videoId}
      />
    </section>
  );
}