// src/sections/FeaturesHero.jsx
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroFeatures() {
  return (
    <section className="relative overflow-hidden">
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

      <div className="mx-auto w-full md:pl-32 px-4 sm:px-8 lg:pl-32 lg:pt-20 py-10 sm:pb-16 md:pb-24 mt-10">
        <div className="grid items-center gap-2 lg:grid-cols-12">
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
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-normal md:leading-16 tracking-tight sm:tracking-wide text-gray-900 text-center sm:text-left xl:text-nowrap mb-3 sm:mb-6">
              Transform Your <br className="sm:hidden" /> Organization 
              <br className="max-sm:hidden" /> With Smart <br className="sm:hidden" />
              <br className="max-sm:hidden" /> OKR Management
            </h1>

            <p className="max-w-2xl mb-8 mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed text-gray-500 max-sm:text-gray-700 text-center sm:text-left">
              Align goals, boost productivity, and achieve measurable results with the most powerful
              OKR platform designed for modern hybrid teams.
            </p>

            <div className="max-sm:px-8 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center justify-center sm:justify-start">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Get Started Now
              </a>

              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl border border-blue-500/50 bg-white/90 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 backdrop-blur-sm transition-colors"
              >
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full">
                  <Play className="h-3.5 w-3.5" />
                </span>
                Watch Demo
              </a>
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
    </section>
  );
}