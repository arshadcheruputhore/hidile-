"use client";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function HeroHome() {

  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;  // 0..1
    el.style.setProperty("--mx", ((x - 0.5) * 2).toFixed(3)); // -1..1
    el.style.setProperty("--my", ((y - 0.5) * 2).toFixed(3)); // -1..1
  };

  const resetMove = () => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  };

   const features = [
    { label: 'Tasks', subtitle: 'Manage Smarter, Together' },
    { label: 'Team', subtitle: 'Collaborate Effectively' },
    { label: 'Template', subtitle: 'Create Once, Use Always' },
    { label: 'Calendar', subtitle: 'Schedule Everything' },
    { label: 'Files', subtitle: 'Organize Better' },
    { label: 'Settings', subtitle: 'Customize Your Way' },
    { label: 'Reports', subtitle: 'Track Progress' },
    { label: 'Notification', subtitle: 'Stay Updated' },
    { label: 'Integration', subtitle: 'Connect Everything' },
    { label: 'Workflow', subtitle: 'Automate Tasks' }
  ];

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 150); // Half of the animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  // const handleNext = () => {
  //   if (isAnimating) return;
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setCurrentIndex((prev) => (prev + 1) % features.length);
  //     setIsAnimating(false);
  //   }, 150);
  // };

  // const handlePrevious = () => {
  //   if (isAnimating) return;
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  //     setIsAnimating(false);
  //   }, 150);
  // };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      className="flex flex-col items-center lg:mt-8 w-full mt-10 relative max-w-7xl mx-auto">
      {/* Top Row Icons */}
      <div className="flex max-sm:flex-col justify-between items-center lg:gap-24 max-md:gap-16 gap-2 mt-7 relative">
        {/* bell */}
        <div className="max-sm:order-2 max-sm:absolute left-3 -bottom-13 float">
          <img
            src="/img/bell.png"
            alt="icon"
            width={60}
            className="max-sm:w-10 parallax-icon pointer-events-none"
            style={{ "--px": "10px", "--py": "12px" }}
          />
        </div>

        {/* Feature Badge */}
        <div className="max-sm:flex justify-start relative z-10">
          <div className="inline-flex gap-2 items-center py-1.5 pr-4 pl-1 bg-white border border-solid border-zinc-200 h-[45px] rounded-3xl 
  max-sm:min-w-max max-sm:max-w-sm 
  max-sm:h-[30px] max-sm:gap-1.5 max-sm:pr-2 max-sm:pl-0.5 max-sm:py-4">

            {/* Left blue label with slide animation */}
            <div className="relative flex flex-col items-center justify-center px-4 md:pt-1.5 md:pb-2 pb-1 bg-blue-600 rounded-3xl max-sm:px-2.5 overflow-hidden">
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                <span className="text-sm text-center text-white tracking-wider font-medium  whitespace-nowrap inline-block">
                  {features[currentIndex].label}
                </span>
              </div>
            </div>

            {/* Center text with fade animation */}
            <div className="flex justify-center items-center flex-1">
              <span 
                className={`text-sm font-medium tracking-wide text-center text-gray-700 transition-opacity duration-300 ${
                  isAnimating ? 'opacity-50' : 'opacity-100'
                }`}
              >
                {features[currentIndex].subtitle}
              </span>
            </div>

            {/* Right icon */}
            <div className="mt-1 max-sm:mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                className="max-sm:w-3.5 max-sm:h-3.5"
              >
                <path
                  d="M10.1201 4.04785L14.1668 8.09452L10.1201 12.1412"
                  stroke="#181D27"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.83398 8.09473H14.054"
                  stroke="#181D27"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* statics */}
        <div className="max-sm:order-3 max-sm:absolute right-3 -bottom-13 float-slow">
          <img
            src="/img/statics.png"
            alt="icon"
            width={60}
            className="max-sm:w-10 parallax-icon pointer-events-none"
            style={{ "--px": "-12px", "--py": "10px" }}
          />
        </div>
      </div>

      {/* Second Row Icons - Hidden on mobile */}
      <div className="flex justify-between w-full px-20 max-md:px-10 max-sm:hidden">
        <div className="float-fast">
          <img
            src="/img/chess.png"
            alt="icon"
            width={60}
            className="parallax-icon pointer-events-none"
            style={{ "--px": "8px", "--py": "6px" }}
          />
        </div>
        <div className="float">
          <img
            src="/img/msg.png"
            alt="icon"
            width={60}
            className="parallax-icon pointer-events-none"
            style={{ "--px": "-8px", "--py": "6px" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center relative z-10 max-sm:mt-16">
        <h1 className="mb-2.5 text-[40px] font-semibold text-center max-sm:text-center text-gray-900 leading-[64px] w-full max-md:text-4xl max-md:leading-relaxed max-sm:mb-2.5 max-sm:text-2xl text-nowrap">
          Define OKRs. Drive Tasks. <br />Deliver Outcomes.

        </h1>

        {/* Description with side icons */}
        <div className="flex w-full justify-between items-center gap-24 max-md:gap-16 relative">
          {/* Left Icon (desktop: inline, mobile: bottom-left corner) */}
          <div className="max-sm:absolute max-sm:bottom-20 max-sm:-left-2 float">
            <img
              src="/img/pie.png"
              alt="icon"
              width={60}
              className="max-sm:w-10 parallax-icon pointer-events-none"
              style={{ "--px": "9px", "--py": "9px" }}
            />
          </div>

          {/* Description */}
          <p className=" leading-7 text-center text-gray-600 w-[590px] max-md:max-w-[500px] max-sm:w-full text-base max-sm:leading-6 max-sm:max-w-none">
            Plan on boards, sync in chat, glide through your calendar.Tie it all to OKRs and watch the wins stack up.
          </p>

          {/* Right Icon (desktop: inline, mobile: bottom-right corner) */}
          <div className="max-sm:absolute max-sm:bottom-20 max-sm:-right-2 float-slow">
            <img
              src="/img/calender.png"
              alt="icon"
              width={60}
              className="max-sm:w-10 parallax-icon pointer-events-none"
              style={{ "--px": "-9px", "--py": "9px" }}
            />
          </div>
        </div>


        {/* Mobile-only icons row */}
        <div className="hidden max-sm:flex justify-between items-center gap-8 mt-8 w-full px-10">
          <div className="float-fast">
            <img
              src="/img/chess.png"
              alt="icon"
              width={48}
              className="max-sm:w-10 parallax-icon pointer-events-none"
              style={{ "--px": "6px", "--py": "5px" }}
            />
          </div>
          <div className="float">
            <img
              src="/img/msg.png"
              alt="icon"
              width={48}
              className="max-sm:w-10 parallax-icon pointer-events-none"
              style={{ "--px": "-6px", "--py": "5px" }}
            />
          </div>
        </div>
      </div>

      {/* Hero Image — mobile in-flow; md+ bottom-centered */}
      {/* Spacer (md+): reserves room so absolute image won't overlap content */}
      {/* <div className="hidden md:block w-full h-[380px] lg:h-[480px]" /> */}

      {/* Mobile (sm): normal flow, centered */}
      <div className="md:hidden w-full mt-10 flex justify-center">
        <img
          src="/img/OKRHeroHome.png"
          alt="okr-dashboard"
          loading="lazy"
          decoding="async"
          className="block w-full max-w-[640px] h-auto object-contain rounded-lg shadow-2xl ring-1 ring-black/5"
        />
      </div>

      {/* md+ : anchor bottom-center of the section */}
      <div className="hidden md:block absolute top-1/2 translate-y-2/5 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
        <img
          src="/img/OKRHeroHome.png"
          alt="okr-dashboard"
          loading="lazy"
          decoding="async"
          className="block w-[90vw] max-w-[980px] h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-black/5"
        />
      </div>

    </section>
  );
}

export default HeroHome;