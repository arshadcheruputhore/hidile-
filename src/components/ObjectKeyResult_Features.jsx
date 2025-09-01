import React from 'react'

function ObjectKeyResult_Features() {
    return (
        <>
            <section className='mb-12 sm:mb-14'>
                <div className="bg-zinc-100 px-8 py-10 rounded-2xl max-md:px-2 max-md:py-5">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-left  text-gray-800 leading-tight sm:leading-9 md:leading-[48px]">
                        Objective & Key Result
                    </h1>
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5">
                        <p className="leading-relaxed text-left text-gray-500 text-sm sm:text-base mt-1">
                            Organize to/dos and keep all the information in place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mt-6 sm:mt-8">
                        {/* Create Folder */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col justify-between col-span-1 sm:col-span-2 lg:col-span-2">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Create Folder
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Instant checklists with assignees and linked tasks
                                </p>
                            </div>

                            <div className="drop-shadow-xl">
                                <img
                                    src="/img/objective-createFolder.png"
                                    alt="Create Folder"
                                    className="rounded-t-xl w-full object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Add Files */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] col-span-1 sm:col-span-1 lg:col-span-2 flex flex-col justify-between">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Add Files
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Create reusable templates with default fields
                                </p>
                            </div>

                            <div className="pl-0 sm:pl-10 drop-shadow-xl ">
                                <img
                                    src="/img/objective-addFiles.png"
                                    alt="Add Files"
                                    className="rounded-tl-xl rounded-br-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* File Details */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] col-span-1 sm:col-span-1 lg:col-span-2 flex flex-col justify-between">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    File Details
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Limit visibility by role/team and assign tasks automatically
                                </p>
                            </div>

                            <div className="pl-0 sm:pl-10 drop-shadow-xl">
                                <img
                                    src="/img/objective-fileDetails.png"
                                    alt="File Details"
                                    className="rounded-tl-xl rounded-br-xl w-full object-contain"
                                />
                            </div>
                        </div>  

                        {/* Templates */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col justify-between col-span-1 sm:col-span-2 lg:col-span-3">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Templates
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Share task-related files and documents.
                                </p>
                            </div>

                            <div className="pl-6 sm:pl-10 drop-shadow-xl max-sm:pt-6">
                                <img
                                    src="/img/objective-templates.png"
                                    alt="Templates"
                                    className="rounded-tl-xl rounded-br-xl w-full h-full object-contain scale-110 pr-5 max-sm:pr-2"
                                />
                            </div>
                        </div>

                        {/* Activity */}
                        <div className="overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col col-span-1 sm:col-span-2 lg:col-span-3">
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-3 sm:mb-4">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Assign task to template
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Collaborate and communicate directly in items
                                </p>
                            </div>

                            <div className="pl-6 sm:pl-10 drop-shadow-xl">
                                <img
                                    src="/img/objective-assignTask.png"
                                    alt="Activity"
                                    className="rounded-l-xl w-full h-full object-contain"
                                />
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
        </>
    )
}

export default ObjectKeyResult_Features;