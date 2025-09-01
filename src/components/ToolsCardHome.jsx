import React from "react";

export default function ToolsCardHome() {
    return (
        <section className="relative w-full text-gray-900 mt-14 sm:mt-20 sm:px-3 px-1">
            <div className="mx-auto">
                {/* Heading */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-2xl font-medium md:text-[40px] text-gray-900 mb-2 sm:mb-2.5">
                        The Tools That Keep Your <br />
                        <span className="sm:hidden">Work Moving</span>
                        <span className="hidden sm:inline">Work Moving</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                        Track progress, manage deadlines, and collaborate effortlessly with
                        an all-in-one toolkit designed to keep your projects on schedule and
                        your team aligned.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Card 1 */}
                    <div className="pt-6 sm:pt-8 pl-6 sm:pl-8 rounded-2xl shadow-lg transition bg-white flex flex-col justify-between md:col-span-2">
                        <div className="w-full sm:w-2/3 max-sm:pr-3">
                            <h3 className="text-xl sm:text-[26px] font-semibold text-gray-900 mb-2 sm:mb-2.5 tracking-wide">
                                Transform Your Goals into Results
                            </h3>
                            <p className="text-gray-800 leading-6 text-sm mb-6 sm:mb-9 pr-4 sm:pr-0">
                                Drive organizational success with our comprehensive OKR system.
                                Set ambitious goals, track progress, and achieve breakthrough
                                results.
                            </p>
                        </div>

                        <div className="flex-1 flex items-end justify-end">
                            <div className="w-full sm:w-2/3 h-auto">
                                <img src="/img/okr-tool.png" alt="OKR System img" className="w-full h-full object-contain drop-shadow-lg rounded-br-2xl rounded-tl-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl shadow-lg transition bg-white flex flex-col md:col-span-1 justify-between">
                        <div className="w-full pt-6 sm:pt-8 px-6 sm:px-8">
                            <h3 className="text-xl sm:text-[26px] font-semibold text-gray-900 mb-2 sm:mb-2.5 tracking-wide">
                                Visualize Your Tasks <br className="hidden sm:block" />
                                <span className="sm:hidden">on a Calendar</span>
                                <span className="hidden sm:inline">on a Calendar</span>
                            </h3>
                            <p className="text-gray-800 leading-6 text-sm mb-3 sm:mb-3">
                                See every task in context — plan, track, and manage deadlines with
                                a calendar that keeps your team in sync and projects on schedule.
                            </p>
                        </div>

                        <div className="flex-1 flex items-end justify-end">
                            <div className="w-full sm:w-3/4 h-auto">
                                <img src="/img/okr-calender.png" alt="OKR System img" className="w-full h-full object-contain drop-shadow-lg rounded-br-2xl rounded-tl-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl shadow-lg transition bg-white flex flex-col md:col-span-1 justify-between">
                        <div className="w-full pt-6 sm:pt-8 px-6 sm:px-8">
                            <h3 className="text-xl sm:text-[26px] font-semibold text-gray-900 mb-2 sm:mb-2.5 tracking-wide">
                                Keep Work on Track
                            </h3>
                            <p className="text-gray-800 leading-6 text-sm mb-4">
                                Track progress at every stage, spot roadblocks early, and keep
                                your team focused on delivering results.
                            </p>
                        </div>

                        <div className="flex-1 flex items-end justify-end p-3 sm:p-4 relative">
                            <div className="absolute left-4 sm:left-8 bottom-4 sm:bottom-5">
                                <img src="/img/card-footer.png" alt="card-footer" className="w-20 sm:w-[120px]" />
                            </div>
                            <div className="w-[90%] sm:w-3/4 h-auto pl-2 sm:pl-3">
                                <img src="/img/okr-progress.png" alt="OKR System img" className="w-full h-full object-contain drop-shadow-lg rounded-br-2xl rounded-tl-2xl" />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-2xl shadow-lg transition bg-white flex flex-col sm:flex-row justify-between md:col-span-2 py-6 sm:py-8 px-6 sm:px-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                            <h3 className="text-xl sm:text-[26px] font-semibold text-gray-900 mb-2 sm:mb-2.5 tracking-wide">
                                Automate Your Entire <br className="hidden sm:block" />
                                <span className="sm:hidden">Workflow</span>
                                <span className="hidden sm:inline">Workflow</span>
                            </h3>
                            <p className="text-gray-800 leading-6 text-sm mb-3 sm:mb-9">
                                Design intelligent workflows that adapt to your business
                                processes. Reduce manual work and eliminate bottlenecks with smart
                                automation.
                            </p>
                        </div>

                        <div className="flex-1 flex items-center justify-center relative min-h-[200px] sm:min-h-0">
                            <div className="relative sm:absolute sm:-left-8 w-full sm:w-auto h-full z-10">
                                <img src="/img/okr-container.png" alt="OKR System img" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}