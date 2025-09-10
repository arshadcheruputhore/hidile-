import { Calendar, Clock, ArrowRight, Tag, Grid, List, LayoutGrid } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function BlogCards_Blogs() {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [activeCategory, setActiveCategory] = useState('All Posts');

    const [visibleItems, setVisibleItems] = useState(new Set());
    const itemRefs = useRef([]);

    const navigate = useNavigate();

    const blogPosts = [
        {
            id: 2,
            image: '/img/dummyBlogCard.png',
            category: 'Productivity Tips',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 15, 2023',
            readTime: '8 min read'
        },
        {
            id: 3,
            image: '/img/dummyBlogCard2.png',
            category: 'Workflows',
            title: 'How to Set Up Your First Project in Hidile OKR',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read',
            // Add author and content for blogs that have detailed content
            author: {
                name: "John Doe",
                role: "Founder of Hidile OKR",
                bio: "As the founder of Hidile OKR, I bring over a decade of experience in SaaS, having developed MillionVerifier and SAAS-First. I'm deeply passionate about SaaS, data, and AI. If you share a similar ambition for success, let's connect!"
            },
            content: {
                intro: "Getting started with a new tool can feel overwhelming, especially when it's about something as crucial as managing your goals and projects. That's why we built Hidile OKR — to make setting objectives, tracking progress, and achieving results as simple and effective as possible.",
                description: "In this guide, we'll walk you through how to set up your first project in Hidile OKR step by step. By the end, you'll have a live project with clear objectives and measurable results, ready to move your team forward.",
                sections: [
                    {
                        title: "Step 1: Log in to Hidile OKR & Access the Dashboard",
                        content: "Once you log into Hidile OKR, you'll land on the dashboard. This is your control center, where you can see company-wide objectives, team OKRs, and personal contributions. To create a project, navigate to the sidebar menu and select 'Projects.' This section is dedicated to tracking initiatives that support your objectives.",
                        tip: "If you don't have an account yet, start for free and explore the demo workspace to get familiar with the interface."
                    },

                    {
                        title: "Step 2: Create a New Project",
                        content: "Click the “+ New Project” button to get started. You’ll be prompted to enter details such as the project name, owner, start and end dates, and a short description. Be clear and concise—your project name should reflect the initiative’s purpose, and the description should explain how it connects to your key results. For example, if your objective is “Improve Customer Satisfaction,” your project could be “Redesign Customer Support Portal.”",
                    },

                    {
                        title: "Step 3: Align the Project with OKRs",
                        content: "One of the strengths of Hidile OKR is its alignment feature. After creating your project, you can link it directly to specific objectives and key results. This ensures that everyone understands why the project exists and how it contributes to larger goals. Alignment not only boosts clarity but also helps in progress tracking and reporting.",
                    },

                    {
                        title: "Step 4: Add Tasks and Milestones",
                        content: "Projects become actionable when broken down into smaller tasks. Within the project space, you can create milestones and assign tasks to team members. Each task should have a deadline and clear ownership to avoid confusion. For example, under the “Redesign Customer Support Portal” project, milestones could include “User Research,” “Prototype Design,” and “Portal Launch.”",
                    },

                    {
                        title: "Step 5: Assign Owners and Collaborators",
                        content: "Ownership drives accountability. Every project in Hidile OKR should have a primary owner responsible for overseeing progress. However, collaboration is equally important—so you can add contributors who will execute specific tasks. This combination ensures that the project stays on track while encouraging teamwork.",
                    },

                    {
                        title: "Step 6: Track Progress and Update Regularly",
                        content: "As the project moves forward, updating progress is crucial. Hidile OKR provides progress bars and status indicators so that teams can visualize how far along a project is. Regular check-ins, status updates, and reviews help identify bottlenecks early and ensure alignment with objectives. Remember, a project isn’t just about finishing tasks; it’s about making measurable contributions to your OKRs.",
                    },

                    {
                        title: "Step 7: Review and Reflect",
                        content: "At the end of the project, take time to review the outcomes. Did it contribute effectively to your key results? Were deadlines met? What could be improved for next time? Hidile OKR allows you to generate reports and insights, making reflection a structured process. This not only helps with continuous improvement but also builds confidence for tackling bigger initiatives in the future.",
                    },
                ],
                conclusion: "Setting up your first project in Hidile OKR may feel like a small step, but it's a powerful way to turn strategy into action..."
            }
        },
        {
            id: 4,
            image: '/img/dummyBlogCard.png',
            category: 'Productivity Tips',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 5,
            image: '/img/dummyBlogCard2.png',
            category: 'AI & Automation',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 6,
            image: '/img/dummyBlogCard2.png',
            category: 'Workflows',
            title: 'How to Set Up Your First Project in Hidile OKR',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read',
            // Add author and content for blogs that have detailed content
            author: {
                name: "John Doe",
                role: "Founder of Hidile OKR",
                bio: "As the founder of Hidile OKR, I bring over a decade of experience in SaaS, having developed MillionVerifier and SAAS-First. I'm deeply passionate about SaaS, data, and AI. If you share a similar ambition for success, let's connect!"
            },
            content: {
                intro: "Getting started with a new tool can feel overwhelming, especially when it's about something as crucial as managing your goals and projects. That's why we built Hidile OKR — to make setting objectives, tracking progress, and achieving results as simple and effective as possible.",
                description: "In this guide, we'll walk you through how to set up your first project in Hidile OKR step by step. By the end, you'll have a live project with clear objectives and measurable results, ready to move your team forward.",
                sections: [
                    {
                        title: "Step 1: Log in to Hidile OKR & Access the Dashboard",
                        content: "Once you log into Hidile OKR, you'll land on the dashboard. This is your control center, where you can see company-wide objectives, team OKRs, and personal contributions. To create a project, navigate to the sidebar menu and select 'Projects.' This section is dedicated to tracking initiatives that support your objectives.",
                        tip: "If you don't have an account yet, start for free and explore the demo workspace to get familiar with the interface."
                    }
                    // ... add more sections as needed
                ],
                conclusion: "Setting up your first project in Hidile OKR may feel like a small step, but it's a powerful way to turn strategy into action..."
            }
        },
        {
            id: 7,
            image: '/img/dummyBlogCard2.png',
            category: 'Organization',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 8,
            image: '/img/dummyBlogCard.png',
            category: 'Organization',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 9,
            image: '/img/dummyBlogCard2.png',
            category: 'Productivity Tips',
            title: 'The Ultimate Guide to Task Prioritization',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read'
        },
        {
            id: 10,
            image: '/img/dummyBlogCard2.png',
            category: 'Workflows',
            title: 'How to Set Up Your First Project in Hidile OKR',
            description: 'Learn how to prioritize your tasks effectively to focus on what truly matters',
            date: 'Jul 10, 2023',
            readTime: '8 min read',
            // Add author and content for blogs that have detailed content
            author: {
                name: "John Doe",
                role: "Founder of Hidile OKR",
                bio: "As the founder of Hidile OKR, I bring over a decade of experience in SaaS, having developed MillionVerifier and SAAS-First. I'm deeply passionate about SaaS, data, and AI. If you share a similar ambition for success, let's connect!"
            },
            content: {
                intro: "Getting started with a new tool can feel overwhelming, especially when it's about something as crucial as managing your goals and projects. That's why we built Hidile OKR — to make setting objectives, tracking progress, and achieving results as simple and effective as possible.",
                description: "In this guide, we'll walk you through how to set up your first project in Hidile OKR step by step. By the end, you'll have a live project with clear objectives and measurable results, ready to move your team forward.",
                sections: [
                    {
                        title: "Step 1: Log in to Hidile OKR & Access the Dashboard",
                        content: "Once you log into Hidile OKR, you'll land on the dashboard. This is your control center, where you can see company-wide objectives, team OKRs, and personal contributions. To create a project, navigate to the sidebar menu and select 'Projects.' This section is dedicated to tracking initiatives that support your objectives.",
                        tip: "If you don't have an account yet, start for free and explore the demo workspace to get familiar with the interface."
                    }
                    // ... add more sections as needed
                ],
                conclusion: "Setting up your first project in Hidile OKR may feel like a small step, but it's a powerful way to turn strategy into action..."
            }
        },
    ];

    const getCategoryCount = (catName) => {
        return blogPosts.filter(item => item.category === catName).length
    }

    const categories = [
        { name: 'All Posts', count: blogPosts.length },
        { name: 'Workflows', count: getCategoryCount('Workflows') },
        { name: 'Productivity Tips', count: getCategoryCount('Productivity Tips') },
        { name: 'AI & Automation', count: getCategoryCount('AI & Automation') },
        { name: 'Strategy', count: getCategoryCount('Strategy') },
        { name: 'Organization', count: getCategoryCount('Organization') },
        { name: 'Analytics & Insights', count: getCategoryCount('Analytics & Insights') }
    ];

    // Filter posts based on active category
    const filteredPosts = activeCategory === 'All Posts'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const handleBlogClick = (blog) => {
        navigate(`/blogs/${blog.id}`, {
            state: {
                blogPosts: blogPosts,
                selectedBlog: blog
            }
        })
    }

    useEffect(() => {
        const observers = [];

        // Items observer
        const itemObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) {
                itemObserver.observe(ref);
            }
        });
        observers.push(itemObserver);

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

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
                <div
                    className={`flex items-center justify-between mb-4 transition-all duration-1000 ease-out`}>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-1">All Posts</h2>
                        <p className="text-sm text-gray-500">Showing {filteredPosts.length} of {blogPosts.length} posts</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <span className="text-xs text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full border border-gray-300">
                            {viewMode === 'grid' ? 'Grid View' : 'List View'}
                        </span> */}
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
                        {filteredPosts.map((post, index) => (
                            <div
                                ref={el => itemRefs.current[index] = el}
                                data-index={index}
                                onClick={() => handleBlogClick(post)}
                                className={`bg-white rounded-xl border border-gray-200 border-b-2 hover:border-b-blue-500 
                                overflow-hidden hover:shadow-md 
                                transition-all duration-700 
                                ease-out relative group
                                ${visibleItems.has(index)
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 translate-y-12 scale-95'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 120}ms`
                                }}
                            >
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
                            <div onClick={() => handleBlogClick(post)} key={post.id} className="bg-white rounded-xl border border-gray-200  border-r-2 hover:border-r-blue-500 overflow-hidden hover:shadow-md transition-all duration-500">
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