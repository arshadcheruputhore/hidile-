import { Calendar, Clock, ArrowRight, Tag, Grid, List, LayoutGrid } from 'lucide-react';
import React, { useState } from 'react'

function BlogCards_Blogs() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [activeCategory, setActiveCategory] = useState('All Posts');

    const blogPosts = [
        {
            id: 1,
            image: '/img/dummyBlogCard.png',
            category: 'Productivity Tips',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 15, 2023',
            readTime: '8 min read'
        },
        {
            id: 2,
            image: '/img/dummyBlogCard2.png',
            category: 'Workflows',
            title: 'How to Set Up Your First Project in Hidile OKR',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 3,
            image: '/img/dummyBlogCard.png',
            category: 'Productivity Tips',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 4,
            image: '/img/dummyBlogCard2.png',
            category: 'AI & Automation',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 5,
            image: '/img/dummyBlogCard.png',
            category: 'Strategy',
            title: 'How to Set Up Your First Project in Hidile OKR',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 15, 2023',
            readTime: '8 min read'
        },
        {
            id: 6,
            image: '/img/dummyBlogCard2.png',
            category: 'Organization',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 7,
            image: '/img/dummyBlogCard.png',
            category: 'Organization',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 8,
            image: '/img/dummyBlogCard2.png',
            category: 'Productivity Tips',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 9,
            image: '/img/dummyBlogCard.png',
            category: 'Analytics & Insights',
            title: 'How to Set Up Your First Project in Hidile OKR',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        }
    ];

    const categories = [
        { name: 'All Posts', count: 9 },
        { name: 'Workflows', count: 1 },
        { name: 'Productivity Tips', count: 3 },
        { name: 'AI & Automation', count: 1 },
        { name: 'Strategy', count: 1 },
        { name: 'Organization', count: 2 },
        { name: 'Analytics & Insights', count: 1 }
    ];

    // Filter posts based on active category
    const filteredPosts = activeCategory === 'All Posts'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <section className="mt-12 lg:mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Category Filter - Horizontal Scrollable */}
                <div className="mb-6">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide py-3">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category.name)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 border border-zinc-200 ${activeCategory === category.name
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Header with View Toggle */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-1">All Posts</h2>
                        <p className="text-sm text-gray-500">Showing {filteredPosts.length} of {blogPosts.length} posts</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full border border-gray-300">
                            {viewMode === 'grid' ? 'Grid View' : 'List View'}
                        </span>
                        <div className="relative group">
                            <button
                                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                {viewMode === 'grid' ? (
                                    <List className="w-4 h-4 text-gray-600" />
                                ) : (
                                    <LayoutGrid className="w-4 h-4 text-gray-600" />
                                )}
                            </button>
                            {/* grid/list Label - Hidden on mobile */}
                            <div className="absolute -top-8 -translate-x-1/2 left-1/2 transform opacity-0 sm:group-hover:opacity-100 transition-all duration-200">
                                <div className="bg-gray-600 text-white px-2 py-1 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg">
                                    {viewMode === 'grid' ? 'List view' : 'Grid view'}
                                    {/* Arrow */}
                                    <div className="absolute top-full left-1/2 transform -translate-1/2 w-2 h-2 bg-gray-600 rotate-45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-xl border border-gray-200 border-b-2 hover:border-b-blue-500 overflow-hidden hover:shadow-md transition-all duration-500">
                                {/* Image */}
                                <div className="relative h-48 w-full bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover drop-shadow-lg hover:scale-105 transform transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = `https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format&q=80&sig=${post.id}`;
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {/* Category */}
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Tag className="w-3 h-3 text-blue-600" />
                                        <span className="text-xs text-blue-600 font-medium">{post.category}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                                        {post.description}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button className="text-blue-600 text-xs font-medium hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer hover:underline">
                                        Read more
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Blog Posts List */
                    <div className="space-y-4">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-xl border border-gray-200  border-r-2 hover:border-r-blue-500 overflow-hidden hover:shadow-md transition-all duration-500">
                                <div className="flex flex-col sm:flex-row">
                                    {/* Image */}
                                    <div className="w-full sm:w-48 h-32 sm:h-auto bg-gray-50 flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = `https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format&q=80&sig=${post.id}`;
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-4">
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                {/* Category */}
                                                <div className="flex items-center gap-1.5 mb-2">
                                                    <Tag className="w-3 h-3 text-blue-600" />
                                                    <span className="text-xs text-blue-600 font-medium">{post.category}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                                                    {post.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                                    {post.description}
                                                </p>
                                            </div>

                                            {/* Bottom Row */}
                                            <div className="flex items-center justify-between">
                                                {/* Meta */}
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{post.readTime}</span>
                                                    </div>
                                                </div>

                                                {/* CTA */}
                                                <button className="text-blue-600 text-xs font-medium hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer hover:underline">
                                                    Read more
                                                    <ArrowRight className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Minimal Custom Styles - Only what Tailwind doesn't provide */}
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    )
}

export default BlogCards_Blogs;