import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { Clock, Calendar, User, Share2, Facebook, FacebookIcon, LucideFacebook, MoveLeft, ArrowLeft } from 'lucide-react';

const BlogSinglePage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get shared data from navigation state or use fallback
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    // Check if data was passed from blog listing page
    if (location.state?.blogPosts && location.state?.selectedBlog) {
      setBlogPosts(location.state.blogPosts);
      setCurrentBlog(location.state.selectedBlog);
    } else if (blogId) {
      // If no state data, you might want to fetch from API or redirect
      // For now, we'll show a loading or error state
      console.warn('No blog data received. Please navigate from blog listing page.');
    }
  }, [location.state, blogId]);

  const handleBlogSelect = (blog) => {
    setCurrentBlog(blog);
    navigate(`/blogs/${blog.id}`, {
      replace: true,
      state: {
        blogPosts: blogPosts,
        selectedBlog: blog
      }
    });
  };

  // Show loading if no data
  if (!currentBlog || !blogPosts.length) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog content...</p>
          <p className="text-sm text-gray-500 mt-2">
            Please navigate from the blog listing page
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to={'/resources/blogs'} className="flex gap-2 items-center bg-gray-100 w-max px-1.5 sm:px-3 sm:py-0.5 rounded-full ring ring-gray-200 mb-6">
          <ArrowLeft width={16} color='#4a5565' />
          <span className='text-xs sm:text-sm font-semibold text-gray-600 '>blogs</span>
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Main Content */}
          <div className="flex-1 lg:max-w-4xl">
            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden mb-8 h-[300px] sm:h-[400px]">
              <img
                src={currentBlog.image}
                alt={currentBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-lg py-4 px-4 sm:px-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {currentBlog.category}
                  </span>
                </div>
                <h1 className="text-base sm:text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {currentBlog.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-200">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">{currentBlog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">{currentBlog.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              {currentBlog.content && (
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Setting Up a First Project Matters</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{currentBlog.content.intro}</p>
                    <p className="text-gray-700 leading-relaxed">{currentBlog.content.description}</p>
                  </div>

                  {currentBlog.content.sections && currentBlog.content.sections.map((section, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                      {section.tip && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                          <p className="text-gray-700 text-sm">
                            <span className="text-red-600">💡</span> {section.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}

                  {currentBlog.content.conclusion && (
                    <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{currentBlog.content.conclusion}</p>
                    </div>
                  )}
                </div>
              )}

              {!currentBlog.content && (
                <div className="text-center py-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{currentBlog.title}</h2>
                  <p className="text-gray-600 mb-4">{currentBlog.description}</p>
                  <div className="space-y-4 text-left max-w-3xl mx-auto">
                    <p className="text-gray-700 leading-relaxed">
                      This is a sample blog post demonstrating the layout and structure. In a real application,
                      this content would be fetched from your content management system or API.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The blog post would include detailed information about {currentBlog.title.toLowerCase()},
                      with practical tips, step-by-step instructions, and real-world examples to help readers
                      implement the concepts discussed.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Key topics covered would include best practices, common pitfalls to avoid, and actionable
                      strategies that readers can apply immediately in their own work or projects.
                    </p>
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-blue-600 rounded-xl p-4 sm:p-6 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-white font-medium">Like what you see? Share with a friend.</p>
                  <div className="flex justify-center gap-3">
                    <div className="cursor-pointer hover:shadow-lg size-max">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_324_1235)">
                          <path d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_1235">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="cursor-pointer hover:shadow-lg size-max">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_324_1237)">
                          <path d="M16.0033 14.4878L22.7544 24.1443H19.9838L14.4747 16.2646V16.2641L13.6659 15.1074L7.23047 5.90198H10.0011L15.1945 13.3311L16.0033 14.4878Z" fill="white" />
                          <path d="M26.7584 0H3.24156C1.45134 0 0 1.45134 0 3.24156V26.7584C0 28.5487 1.45134 30 3.24156 30H26.7584C28.5487 30 30 28.5487 30 26.7584V3.24156C30 1.45134 28.5487 0 26.7584 0ZM19.135 25.4406L13.5601 17.3271L6.58044 25.4406H4.77653L12.7592 16.1619L4.77653 4.54401H10.865L16.144 12.2269L22.7533 4.54401H24.5572L16.9452 13.3924H16.9447L25.2235 25.4406H19.135Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_1237">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="cursor-pointer hover:shadow-lg size-max">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_324_1240)">
                          <path d="M25.9091 0H4.09091C1.83156 0 0 1.83156 0 4.09091V25.9091C0 28.1684 1.83156 30 4.09091 30H25.9091C28.1684 30 30 28.1684 30 25.9091V4.09091C30 1.83156 28.1684 0 25.9091 0Z" fill="white" />
                          <path d="M10.807 8.18182C10.807 8.68751 10.657 9.18184 10.3761 9.60231C10.0951 10.0228 9.69583 10.3505 9.22863 10.544C8.76143 10.7375 8.24734 10.7882 7.75137 10.6895C7.25539 10.5909 6.79981 10.3473 6.44224 9.98976C6.08466 9.63218 5.84114 9.1766 5.74249 8.68063C5.64383 8.18465 5.69447 7.67056 5.88799 7.20337C6.08151 6.73617 6.40922 6.33685 6.82969 6.0559C7.25015 5.77495 7.74449 5.625 8.25018 5.625C8.92829 5.625 9.57863 5.89438 10.0581 6.37387C10.5376 6.85337 10.807 7.50371 10.807 8.18182Z" fill="#0169FD" />
                          <path d="M10.227 12.4432V23.7392C10.2274 23.8225 10.2114 23.9051 10.1798 23.9822C10.1483 24.0594 10.1017 24.1295 10.043 24.1886C9.98421 24.2477 9.91435 24.2945 9.8374 24.3265C9.76045 24.3585 9.67794 24.375 9.5946 24.375H6.89972C6.81639 24.3752 6.73383 24.359 6.6568 24.3272C6.57976 24.2954 6.50977 24.2487 6.45085 24.1898C6.39192 24.1308 6.34522 24.0609 6.31344 23.9838C6.28165 23.9068 6.2654 23.8242 6.26563 23.7409V12.4432C6.26563 12.275 6.33243 12.1137 6.45135 11.9948C6.57026 11.8759 6.73155 11.8091 6.89972 11.8091H9.5946C9.76248 11.8095 9.92333 11.8765 10.0419 11.9954C10.1604 12.1143 10.227 12.2753 10.227 12.4432Z" fill="#0169FD" />
                          <path d="M24.3134 18.3239V23.792C24.3137 23.8687 24.2987 23.9446 24.2695 24.0154C24.2403 24.0862 24.1974 24.1506 24.1432 24.2048C24.089 24.2589 24.0247 24.3019 23.9538 24.3311C23.883 24.3603 23.8071 24.3752 23.7305 24.375H20.8327C20.7561 24.3752 20.6802 24.3603 20.6094 24.3311C20.5386 24.3019 20.4742 24.2589 20.42 24.2048C20.3659 24.1506 20.3229 24.0862 20.2937 24.0154C20.2645 23.9446 20.2496 23.8687 20.2498 23.792V18.4926C20.2498 17.7017 20.4816 15.029 18.1822 15.029C16.4009 15.029 16.0379 16.8579 15.9663 17.6795V23.792C15.9663 23.9452 15.906 24.0922 15.7985 24.2013C15.6911 24.3103 15.545 24.3728 15.3918 24.375H12.593C12.5165 24.375 12.4408 24.3599 12.3701 24.3306C12.2995 24.3013 12.2354 24.2583 12.1814 24.2041C12.1274 24.15 12.0846 24.0857 12.0555 24.015C12.0264 23.9443 12.0115 23.8685 12.0117 23.792V12.3937C12.0115 12.3173 12.0264 12.2415 12.0555 12.1708C12.0846 12.1001 12.1274 12.0358 12.1814 11.9816C12.2354 11.9275 12.2995 11.8845 12.3701 11.8552C12.4408 11.8259 12.5165 11.8108 12.593 11.8108H15.3918C15.5464 11.8108 15.6947 11.8722 15.804 11.9815C15.9134 12.0909 15.9748 12.2391 15.9748 12.3937V13.379C16.6362 12.3869 17.6163 11.6216 19.7077 11.6216C24.3407 11.6216 24.3134 15.9477 24.3134 18.3239Z" fill="#0169FD" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_1240">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Responsive */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            {/* Author Info */}
            {currentBlog.author && (
              <div className="bg-blue-600 rounded-xl p-4 sm:p-6 mb-6 lg:mb-8">
                <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden bg-gray-300 flex-shrink-0">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <img src="/img/authorBlog.png" alt="blog-author" className='w-full h-full object-cover object-top' />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left lg:text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{currentBlog.author.name}</h3>
                    <p className="text-blue-200 mb-3">{currentBlog.author.role}</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-300 pt-4">
                  <p className="text-blue-100 text-sm leading-relaxed text-center sm:text-left lg:text-center">{currentBlog.author.bio}</p>
                </div>
                <div className="mt-6">
                  <p className="text-blue-100 font-medium mb-3 text-center sm:text-left lg:text-center">Share with your community!</p>
                  <div className="flex justify-center gap-3">
                    <div className="cursor-pointer hover:shadow-lg size-max">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_324_1235_author)">
                          <path d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_1235_author">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="cursor-pointer hover:shadow-lg size-max">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_324_1237_author)">
                          <path d="M16.0033 14.4878L22.7544 24.1443H19.9838L14.4747 16.2646V16.2641L13.6659 15.1074L7.23047 5.90198H10.0011L15.1945 13.3311L16.0033 14.4878Z" fill="white" />
                          <path d="M26.7584 0H3.24156C1.45134 0 0 1.45134 0 3.24156V26.7584C0 28.5487 1.45134 30 3.24156 30H26.7584C28.5487 30 30 28.5487 30 26.7584V3.24156C30 1.45134 28.5487 0 26.7584 0ZM19.135 25.4406L13.5601 17.3271L6.58044 25.4406H4.77653L12.7592 16.1619L4.77653 4.54401H10.865L16.144 12.2269L22.7533 4.54401H24.5572L16.9452 13.3924H16.9447L25.2235 25.4406H19.135Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_1237_author">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="cursor-pointer hover:shadow-lg size-max">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_324_1240_author)">
                          <path d="M25.9091 0H4.09091C1.83156 0 0 1.83156 0 4.09091V25.9091C0 28.1684 1.83156 30 4.09091 30H25.9091C28.1684 30 30 28.1684 30 25.9091V4.09091C30 1.83156 28.1684 0 25.9091 0Z" fill="white" />
                          <path d="M10.807 8.18182C10.807 8.68751 10.657 9.18184 10.3761 9.60231C10.0951 10.0228 9.69583 10.3505 9.22863 10.544C8.76143 10.7375 8.24734 10.7882 7.75137 10.6895C7.25539 10.5909 6.79981 10.3473 6.44224 9.98976C6.08466 9.63218 5.84114 9.1766 5.74249 8.68063C5.64383 8.18465 5.69447 7.67056 5.88799 7.20337C6.08151 6.73617 6.40922 6.33685 6.82969 6.0559C7.25015 5.77495 7.74449 5.625 8.25018 5.625C8.92829 5.625 9.57863 5.89438 10.0581 6.37387C10.5376 6.85337 10.807 7.50371 10.807 8.18182Z" fill="#0169FD" />
                          <path d="M10.227 12.4432V23.7392C10.2274 23.8225 10.2114 23.9051 10.1798 23.9822C10.1483 24.0594 10.1017 24.1295 10.043 24.1886C9.98421 24.2477 9.91435 24.2945 9.8374 24.3265C9.76045 24.3585 9.67794 24.375 9.5946 24.375H6.89972C6.81639 24.3752 6.73383 24.359 6.6568 24.3272C6.57976 24.2954 6.50977 24.2487 6.45085 24.1898C6.39192 24.1308 6.34522 24.0609 6.31344 23.9838C6.28165 23.9068 6.2654 23.8242 6.26563 23.7409V12.4432C6.26563 12.275 6.33243 12.1137 6.45135 11.9948C6.57026 11.8759 6.73155 11.8091 6.89972 11.8091H9.5946C9.76248 11.8095 9.92333 11.8765 10.0419 11.9954C10.1604 12.1143 10.227 12.2753 10.227 12.4432Z" fill="#0169FD" />
                          <path d="M24.3134 18.3239V23.792C24.3137 23.8687 24.2987 23.9446 24.2695 24.0154C24.2403 24.0862 24.1974 24.1506 24.1432 24.2048C24.089 24.2589 24.0247 24.3019 23.9538 24.3311C23.883 24.3603 23.8071 24.3752 23.7305 24.375H20.8327C20.7561 24.3752 20.6802 24.3603 20.6094 24.3311C20.5386 24.3019 20.4742 24.2589 20.42 24.2048C20.3659 24.1506 20.3229 24.0862 20.2937 24.0154C20.2645 23.9446 20.2496 23.8687 20.2498 23.792V18.4926C20.2498 17.7017 20.4816 15.029 18.1822 15.029C16.4009 15.029 16.0379 16.8579 15.9663 17.6795V23.792C15.9663 23.9452 15.906 24.0922 15.7985 24.2013C15.6911 24.3103 15.545 24.3728 15.3918 24.375H12.593C12.5165 24.375 12.4408 24.3599 12.3701 24.3306C12.2995 24.3013 12.2354 24.2583 12.1814 24.2041C12.1274 24.15 12.0846 24.0857 12.0555 24.015C12.0264 23.9443 12.0115 23.8685 12.0117 23.792V12.3937C12.0115 12.3173 12.0264 12.2415 12.0555 12.1708C12.0846 12.1001 12.1274 12.0358 12.1814 11.9816C12.2354 11.9275 12.2995 11.8845 12.3701 11.8552C12.4408 11.8259 12.5165 11.8108 12.593 11.8108H15.3918C15.5464 11.8108 15.6947 11.8722 15.804 11.9815C15.9134 12.0909 15.9748 12.2391 15.9748 12.3937V13.379C16.6362 12.3869 17.6163 11.6216 19.7077 11.6216C24.3407 11.6216 24.3134 15.9477 24.3134 18.3239Z" fill="#0169FD" />
                        </g>
                        <defs>
                          <clipPath id="clip0_324_1240_author">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Latest Blogs Section - Responsive */}
            <div className="lg:sticky lg:top-20">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Latest Blogs</h3>
              
              {/* Mobile: Horizontal scroll */}
              <div className="lg:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {blogPosts.map((blog) => (
                    <div
                      key={blog.id}
                      className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200 flex-shrink-0 w-72 ${
                        currentBlog.id === blog.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-lg'
                      }`}
                      onClick={() => handleBlogSelect(blog)}
                    >
                      <div className="relative">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {blog.category}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 leading-tight text-sm">
                          {blog.title}
                        </h4>
                        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Vertical stack */}
              <div className="hidden lg:block space-y-6">
                {blogPosts.map((blog) => (
                  <div
                    key={blog.id}
                    className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200 ${
                      currentBlog.id === blog.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-lg'
                    }`}
                    onClick={() => handleBlogSelect(blog)}
                  >
                    <div className="relative">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 text-white text-xs bg-black/50 px-2 py-1 rounded">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                        {blog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BlogSinglePage;