import { MoveRight } from 'lucide-react'
import React from 'react'

function FeaturesHome() {
    return (
        <section className='px-1 sm:px-3 max-sm:mt-16'>
            <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:items-start max-sm:gap-2.5">
                <div className="w-3/5 max-sm:w-full">
                    {/* Badge */}
                    <div className="max-sm:flex justify-start">
                        <div className="inline-flex gap-2 items-center py-1.5 pr-4 pl-1 bg-white border border-solid border-zinc-200 h-[45px] rounded-3xl 
  max-sm:min-w-max max-sm:max-w-sm 
  max-sm:h-[30px] max-sm:gap-1.5 max-sm:pr-2 max-sm:pl-0.5">

                            {/* Left blue label */}
                            <div className="flex flex-col items-center px-4 pt-1.5 pb-2 bg-blue-600 rounded-3xl 
    max-sm:px-2.5 max-sm:pt-1 max-sm:pb-1">
                                <span className="text-sm leading-5 text-center text-white tracking-wider font-medium 
      max-sm:text-[10px] max-sm:leading-[14px]">
                                    Features
                                </span>
                            </div>

                            {/* Center text */}
                            <div className="flex justify-center items-center flex-1">
                                <span className="text-sm font-medium leading-5 tracking-wide text-center text-gray-700 
      max-sm:text-[11px] max-sm:leading-4">
                                    Why hidile OKR
                                </span>
                            </div>

                            {/* Right icon */}
                            <div className="">
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

                    <h1 className="text-4xl font-medium text-left text-gray-900 leading-[48px] mt-6 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:leading-8 max-sm:mt-4 mb-0 sm:mb-8">
                        Foundation for <br className="max-sm:hidden" />
                        <span className="max-sm:block">High-Performing Teams</span>
                    </h1>
                </div>
                <div className="w-2/5 max-sm:w-full">
                    <p className="leading-[22px] text-left text-gray-600 text-base max-sm:text-sm max-sm:leading-5 max-sm:mb-6">
                        Empower your team with tools that simplify, align, and accelerate productivity. All under one unified workspace.
                    </p>
                </div>
            </div>

            <section className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-7 max-sm:gap-4 max-sm:mb-6">
                    {/* 1st Row - Two Cards */}
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-solid border-zinc-200 col-span-3 max-lg:col-span-1">
                        <div className="p-6 max-sm:p-4">
                            <h3 className="text-2xl tracking-wide font-semibold text-gray-800 mb-2.5 max-sm:text-xl max-sm:mb-2">
                                Smart Task Management
                            </h3>
                            <p className="text-gray-600 text-sm w-3/5 leading-[22px] max-lg:w-4/5 max-sm:w-full max-sm:text-xs max-sm:leading-5">
                                Assign, prioritize, and track tasks with clarity. Stay focused with
                                real-time updates, custom statuses, and visual boards.
                            </p>
                        </div>

                        <div className="pl-20 pt-8 overflow-hidden max-sm:pl-4 max-sm:pt-4 max-sm:px-4">
                            <img
                                src="/img/smart-task.png"
                                alt="Smart Task Management"
                                className="rounded-t-lg w-full object-cover drop-shadow-2xl max-sm:rounded-lg max-sm:drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-solid border-zinc-200 col-span-2 max-lg:col-span-1">
                        <div className="p-6 max-sm:p-4">
                            <h3 className="text-2xl tracking-wide font-semibold  text-gray-800 mb-2.5 max-sm:text-xl max-sm:mb-2">
                                Track Your Success
                            </h3>
                            <p className="text-gray-600 text-sm leading-[22px] max-sm:text-xs max-sm:leading-5">
                                Get detailed insights on task completion, team performance, and
                                progress with customizable reports.
                            </p>
                        </div>

                        <div className="px-6 py-3 max-sm:px-4 max-sm:py-2">
                            <img
                                src="/img/track-success.png"
                                alt="Track Your Success"
                                className="rounded-t-lg w-full object-cover max-sm:rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-sm:gap-4">
                    {/* 2nd Row - Three Cards */}
                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-solid border-zinc-200 px-8 pt-8 flex flex-col justify-between align-middle max-sm:px-4 max-sm:pt-4">
                        <div className="max-sm:mb-4">
                            <h3 className="text-2xl tracking-wide font-semibold  text-gray-800 mb-2.5 max-sm:text-xl max-sm:mb-2">
                                Work Together
                            </h3>
                            <p className="text-gray-600 text-sm leading-[22px] max-sm:text-xs max-sm:leading-5">
                                Assign tasks, share files, and collaborate effortlessly with your
                                team members.
                            </p>
                        </div>

                        <div className="w-full px-4 max-sm:px-0">
                            <img
                                src="/img/work-together.png"
                                alt="Work Together"
                                className="rounded-t-lg w-full object-contain drop-shadow-2xl max-sm:rounded-lg max-sm:drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-solid border-zinc-200 flex flex-col justify-between">
                        <div className="pr-14 pl-8 pt-8 max-sm:px-4 max-sm:pt-4">
                            <h3 className="text-2xl tracking-wide font-semibold  text-gray-800 mb-2.5 max-sm:text-xl max-sm:mb-2">
                                Never Miss a Deadline
                            </h3>
                            <p className="text-gray-600 text-sm leading-[22px] max-sm:text-xs max-sm:leading-5 max-sm:mb-4">
                                Get notified about upcoming deadlines, changes, and team updates in
                                real-time.
                            </p>
                        </div>

                        <div className="w-full pl-10 max-sm:pl-4 max-sm:px-4">
                            <img
                                src="/img/deadline.png"
                                alt="Never Miss a Deadline"
                                className="rounded-t-lg w-full object-cover drop-shadow-2xl max-sm:rounded-lg max-sm:drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl overflow-hidden border border-solid border-zinc-200">
                        <div className="px-6 pt-6 max-sm:px-4 max-sm:pt-4">
                            <h3 className="text-2xl tracking-wide font-semibold  text-gray-800 mb-2.5 max-sm:text-xl max-sm:mb-2">
                                Track Productivity
                            </h3>
                            <p className="text-gray-600 text-sm leading-[22px] max-sm:text-xs max-sm:leading-5 max-sm:mb-4">
                                Keep track of time spent on tasks with built-in timers for better
                                reporting.
                            </p>
                        </div>

                        <div className="max-sm:px-4">
                            <img
                                src="/img/productivity.png"
                                alt="Track Productivity"
                                className="rounded-t-lg w-full object-cover max-sm:rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default FeaturesHome