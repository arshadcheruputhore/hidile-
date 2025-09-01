import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import React from 'react'

function FeaturedPosts_Blogs() {
    return (
        <section className="">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 lg:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Featured Posts
                    </h2>
                </div>

                {/* Featured Post Card */}
                <div className="bg-white rounded-xl lg:rounded-2xl shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row justify-between">
                        {/* Left Side - Image */}
                        <div className="w-auto relative overflow-hidden">
                            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">                     
                                {/* Main Image */}
                                <div className="flex items-center justify-start">
                                    <img
                                        src="/img/featured_blogs.png"
                                        alt="Task Management Dashboard"
                                        className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl rounded-l-none lg:rounded-l-2xl"
                                        onError={(e) => {
                                            // Fallback to placeholder
                                            e.target.src = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=80";
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center max-sm:p-4">
                            {/* Tag */}
                            <div className="mb-4 lg:mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                                    <Tag className="w-4 h-4" />
                                    Productivity Tips
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold text-gray-900 mb-3 lg:mb-4 leading-tight">
                                10 Task Management Strategies That Actually Work
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">
                                Discover proven strategies to manage your tasks effectively and boost your productivity
                            </p>

                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 lg:mb-8 text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-xs sm:text-sm">Jun 15, 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-xs sm:text-sm">8 min read</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className=''>
                                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group ">
                                    Read more
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default FeaturedPosts_Blogs;