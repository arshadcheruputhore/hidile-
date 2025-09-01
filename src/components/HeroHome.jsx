"use client";
import * as React from "react";

function HeroHome() {
  return (
    <section className="flex flex-col items-center mt-12 w-full max-sm:mt-8 relative">
      {/* Top Row Icons */}
      <div className="max-sm:mb-2 flex max-sm:flex-col justify-between items-center gap-24 max-md:gap-16 max-sm:gap-2 mt-7 relative">
        <div className="max-sm:order-2 max-sm:absolute left-3 -bottom-12">
          <img src="/img/bell.png" alt="icon" width={60} className="max-sm:w-10 " />
        </div>

        {/* Feature Badge */}
        <div className="max-sm:flex justify-start">
          <div className="inline-flex gap-2 items-center py-1.5 pr-4 pl-1 bg-white border border-solid border-zinc-200 h-[45px] rounded-3xl 
  max-sm:min-w-max max-sm:max-w-sm 
  max-sm:h-[30px] max-sm:gap-1.5 max-sm:pr-2 max-sm:pl-0.5">

            {/* Left blue label */}
            <div className="flex flex-col items-center px-4 pt-1.5 pb-2 bg-blue-600 rounded-3xl 
    max-sm:px-2.5 max-sm:pt-1 max-sm:pb-1">
              <span className="text-sm leading-5 text-center text-white tracking-wider font-medium 
      max-sm:text-[10px] max-sm:leading-[14px]">
                Tasks
              </span>
            </div>

            {/* Center text */}
            <div className="flex justify-center items-center flex-1">
              <span className="text-sm font-medium leading-5 tracking-wide text-center text-gray-700 
      max-sm:text-[11px] max-sm:leading-4">
                Manage Smarter, Together
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

        <div className="max-sm:order-3 max-sm:absolute right-3 -bottom-12">
          <img src="/img/statics.png" alt="icon" width={60} className="max-sm:w-10 " />
        </div>
      </div>

      {/* Second Row Icons - Hidden on mobile, repositioned */}
      <div className="flex justify-between w-full px-20 max-md:px-10 max-sm:hidden">
        <div>
          <img src="/img/chess.png" alt="icon" width={60} />
        </div>
        <div>
          <img src="/img/msg.png" alt="icon" width={60} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center relative z-10 max-sm:mt-12">
        <h1 className="mb-2.5 text-[40px] font-medium text-center max-sm:text-center text-gray-900 leading-[64px] w-full max-md:text-4xl max-md:leading-relaxed max-sm:mb-2.5 max-sm:text-xl max-sm:px-4">
          Define OKRs. Drive Tasks. <br className="max-sm:hidden" />Deliver Outcomes. 
          
        </h1>

        {/* Description with side icons */}
        <div className="flex w-full justify-between items-center gap-24 max-md:gap-16 relative">
          {/* Left Icon (desktop: inline, mobile: bottom-left corner) */}
          <div className="max-sm:absolute max-sm:bottom-20 max-sm:-left-2">
            <img
              src="/img/pie.png"
              alt="icon"
              width={60}
              className="max-sm:w-10 "
            />
          </div>

          {/* Description */}
          <p className="text-base leading-7 text-center text-gray-600 w-[590px] max-md:max-w-[500px] max-sm:w-full max-sm:text-sm max-sm:leading-6 max-sm:px-4 max-sm:max-w-none">
            Plan on boards, sync in chat, glide through your calendar.Tie it all to OKRs and watch the wins stack up.
          </p>

          {/* Right Icon (desktop: inline, mobile: bottom-right corner) */}
          <div className="max-sm:absolute max-sm:bottom-20 max-sm:-right-2">
            <img
              src="/img/calender.png"
              alt="icon"
              width={60}
              className="max-sm:w-10 "
            />
          </div>
        </div>


        {/* Mobile-only icons row */}
        <div className="hidden max-sm:flex justify-between items-center gap-8 mt-4 w-full px-10">
          <div>
            <img src="/img/chess.png" alt="icon" width={48} className="max-sm:w-10 " />
          </div>
          <div>
            <img src="/img/msg.png" alt="icon" width={48} className="max-sm:w-10 " />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-[889px] h-[445px] mt-14 absolute top-full bg-[url('/img/OKRHeroHome.png')] bg-center bg-no-repeat bg-contain max-sm:bg-contain max-lg:w-[700px] max-lg:h-[350px] max-lg:top-[65%] max-md:w-[500px] max-md:h-[250px] max-md:top-[70%] max-sm:w-[100%] max-sm:h-[160px] max-sm:top-full max-sm:mt-8"></div>
    </section>
  );
}

export default HeroHome;