import React from 'react'

function TaskTemplates_Features() {
    return (
        <>
            <section className='mb-12 sm:mb-14'>
                <div className="bg-zinc-100 px-8 py-10 rounded-2xl max-md:px-2 max-md:py-5">
                    <h1 className="text-xl sm:text-3xl md:text-3xl font-semibold text-left text-gray-800 leading-tight sm:leading-9 md:leading-[48px]">
                        Task Templates {/* Task Management*/}
                    </h1>
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5">
                        <p className="leading-relaxed text-left text-gray-500 text-sm sm:text-base mt-1">
                            Organize to/dos and keep all the information in place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mt-6 sm:mt-8">
                        {/* Create Task */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] col-span-1 sm:col-span-1 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-4 sm:mb-5">
                                <h3 className="text-lg sm:text-lg lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Create Task
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Have a dedicated space for each project.
                                </p>
                            </div>

                            <div className="pl-6 sm:pl-10 pb-4 drop-shadow-xl">
                                <img
                                    src="/img/task-create.png"
                                    alt="Create Task"
                                    className="rounded-l-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Sub Task */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-1 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-4 sm:mb-5">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Sub Task
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Quickly create boards for new projects.
                                </p>
                            </div>

                            <div className="pl-6 sm:pl-10 drop-shadow-xl">
                                <img
                                    src="/img/task-subtask.png"
                                    alt="Sub Task"
                                    className="rounded-l-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Reminders */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col justify-between col-span-1 sm:col-span-2 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-4 sm:mb-5">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Reminders
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Organize tasks into sections.
                                </p>
                            </div>

                            <div className="drop-shadow-xl">
                                <img
                                    src="/img/task-reminders.png"
                                    alt="Reminders"
                                    className="rounded-t-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Recurring Task */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] col-span-1 sm:col-span-1 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-4 sm:mb-5">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Recurring Task
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Create an item for each task.
                                </p>
                            </div>

                            <div className="pl-2 drop-shadow-xl">
                                <img
                                    src="/img/task-recurring.png"
                                    alt="Recurring Task"
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Work History */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-1 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-4 sm:mb-5">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Work History
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Set task information structure.
                                </p>
                            </div>

                            <div className="pl-6 sm:pl-8 drop-shadow-xl">
                                <img
                                    src="/img/task-history.png"
                                    alt="Work History"
                                    className="rounded-l-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* comment */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-2 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-4 sm:mb-5">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Comment
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Perform multiple actions at once.
                                </p>
                            </div>

                            <div className="pl-6 sm:pl-8 drop-shadow-xl">
                                <img
                                    src="/img/task-chat.png"
                                    alt="Chat"
                                    className="rounded-l-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Time Tracking - Full Width */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col lg:flex-row col-span-full justify-between">
                            <div className="px-4 sm:px-6 lg:px-6 pt-6 sm:pt-8 pb-4 sm:pb-5 w-full lg:w-2/5">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Time Tracking
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Set your workflow on autopilot and let repetitive actions happen automatically.
                                </p>

                                <div className="ml-4 sm:ml-7 mt-4 sm:mt-7">
                                    <div className="mt-4 sm:mt-7">
                                        <h4 className='text-sm sm:text-base text-gray-700 mb-1'>Assignments</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">Get notified when someone gives you a task.</p>
                                    </div>

                                    <div className="mt-4 sm:mt-7">
                                        <h4 className='text-sm sm:text-base text-gray-700 mb-1'>Updates</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">See all changes and new comments on your tasks.</p>
                                    </div>

                                    <div className="mt-4 sm:mt-7">
                                        <h4 className='text-sm sm:text-base text-gray-700 mb-1'>Mention</h4>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">Mention someone to notify them and get their attention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-[250px] sm:h-[300px] lg:h-[380px] w-full lg:w-1/2 pt-6 sm:pt-12">
                                <div className="w-full h-full px-4 lg:px-0">
                                    <img
                                        src="/img/task-timeTrack.png"
                                        alt="Time Tracking"
                                        className="rounded-l-xl w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Notification */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-6 sm:mb-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Notification
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Share task-related files and documents.
                                </p>
                            </div>

                            <div className="px-8 sm:px-16 h-[200px] sm:h-[250px] lg:h-[300px]">
                                <img
                                    src="/img/task-notification.png"
                                    alt="Notification"
                                    className="rounded-l-xl w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Activity */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-3 sm:mb-4">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Activity Log
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Share task-related files and documents.
                                </p>
                            </div>

                            <div className="px-3 h-[200px] sm:h-[250px] lg:h-[300px]">
                                <img
                                    src="/img/task-activity.png"
                                    alt="Activity"
                                    className="rounded-l-xl w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Templates */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-2 lg:col-span-full">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Templates
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Work smarter, not harder—let templates do the setup.
                                </p>
                            </div>

                            <div className="drop-shadow-xl max-sm:pt-6 w-5/6 self-end">
                                <img
                                    src="/img/templates_TaskTemplate.png"
                                    alt="Templates"
                                    className="rounded-tl-xl rounded-br-xl w-full h-full object-contain scale-110 pr-5 max-sm:pr-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TaskTemplates_Features