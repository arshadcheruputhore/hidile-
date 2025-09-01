import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Calendar, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useScroll } from '../contexts/ScrollContext';

const JobOpenings_Career = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('All Department');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { JobOpeningRef } = useScroll(); // Get the JobOpeningRef from context

    const jobListings = [
        {
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Calicut',
            type: 'Full-time',
            experience: '1-2 Years',
            description: "We're looking for a Senior Frontend Developer to help build and improve our task management platform. You'll work with React, TypeScript, and modern frontend tools to create intuitive user interfaces."
        },
        {
            title: 'Product Manager',
            department: 'Product',
            location: 'Calicut',
            type: 'Full-time',
            experience: '3-5 Years',
            description: 'We are seeking a Product Manager to lead the development of our new mobile application. You will work closely with cross-functional teams to prioritize features and ensure user satisfaction.'
        },
        {
            title: 'UX/UI Designer',
            department: 'Design',
            location: 'Calicut',
            type: 'Part-time',
            experience: '2-4 Years',
            description: "Join us as a UX/UI Designer to create visually appealing and user-friendly designs for our web and mobile applications. You'll conduct user research and work on wireframes and prototypes."
        },
        {
            title: 'Data Analyst',
            department: 'Analytics',
            location: 'Calicut',
            type: 'Contract',
            experience: '1-3 Years',
            description: 'We are looking for a Data Analyst to gather and interpret data to help improve our product offerings. You will be responsible for generating reports and insights that drive decision-making.'
        },
        {
            title: 'DevOps Engineer',
            department: 'IT Operations',
            location: 'Calicut',
            type: 'Full-time',
            experience: '3-6 Years',
            description: 'Seeking a DevOps Engineer to automate and streamline our operations and processes. You will work with cloud platforms and CI/CD tools to ensure efficient deployment cycles.'
        },
        {
            title: 'Marketing Specialist',
            department: 'Marketing',
            location: 'Calicut',
            type: 'Full-time',
            experience: '2-5 Years',
            description: 'We are on the lookout for a Marketing Specialist to develop and execute marketing strategies to enhance our brand presence. You will analyze market trends and collaborate with the sales team to maximize outreach.'
        }
    ];

    const departments = ['All Department', 'Engineering', 'Product', 'Design', 'Analytics', 'IT Operations', 'Marketing'];

    useEffect(() => {
        const observer = new IntersectionObserver(
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

        const elements = document.querySelectorAll('.job-item');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const filteredJobs = jobListings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment === 'All Department' || job.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const handleDepartmentSelect = (dept) => {
        setSelectedDepartment(dept);
        setIsDropdownOpen(false);
    };

    return (
        <section className="mt-14 lg:mt-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div ref={JobOpeningRef} className="text-center mb-4 lg:mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Shape the Future With Us
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Discover roles that challenge you, inspire growth, and make an impact.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="px-4 sm:px-6 lg:px-8 mb-4 lg:mb-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 max-w-4xl mx-auto">
                        {/* Search Input */}
                        <div className="relative flex-1 flex items-center gap-2">
                            <div className="absolute top-2 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>

                            <input
                                type="text"
                                placeholder="Search by job title, department or skills....."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-12 sm:pr-4 py-2 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                            />

                            {/* Mobile: Filter icon in search bar */}
                            <div className="sm:hidden flex items-center py-1 px-2 border border-gray-200 rounded-md">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <SlidersHorizontal className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Desktop Department Filter */}
                        <div className="relative hidden sm:block custom-select">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <SlidersHorizontal className="h-5 w-5 text-gray-400" />
                            </div>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="appearance-none pl-12 pr-8 py-2 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white cursor-pointer min-w-[200px] w-full text-sm text-left hover:bg-gray-50"
                            >
                                {selectedDepartment}
                            </button>
                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Custom Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                                    {departments.map((dept, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleDepartmentSelect(dept)}
                                            className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 border-b border-gray-100 last:border-b-0 ${selectedDepartment === dept
                                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{dept}</span>
                                                {selectedDepartment === dept && (
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Department Filter Dropdown */}
                    {isDropdownOpen && (
                        <div className="sm:hidden mt-3 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                                <h3 className="text-sm font-medium text-gray-900">Filter by Department</h3>
                            </div>
                            <div className="max-h-60 overflow-y-auto">
                                {departments.map((dept, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDepartmentSelect(dept)}
                                        className={`w-full px-4 py-3 text-left text-sm transition-all duration-200 border-b border-gray-100 last:border-b-0 ${selectedDepartment === dept
                                                ? 'bg-blue-50 text-blue-700 font-medium'
                                                : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{dept}</span>
                                            {selectedDepartment === dept && (
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Job Listings */}
                <div className="px-4 sm:px-6 lg:px-8 max-sm:pb-4">
                    <div className="space-y-4 max-w-6xl mx-auto">
                        {filteredJobs.map((job, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className={`job-item bg-white border border-gray-200 rounded-2xl p-4 lg:p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-300 ${visibleItems.has(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    {/* Left Content */}
                                    <div className="flex-1 mb-4 lg:mb-0 lg:pr-8">
                                        {/* Job Header */}
                                        <div className="mb-4">
                                            <div className="mb-2 sm:mb-0">
                                                <div className="flex items-start justify-between lg:justify-start lg:gap-4 ">
                                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                                                        {job.title}
                                                    </h3>
                                                    {/* Department Badge */}
                                                    <div className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium max-sm:w-max bg-blue-100 text-blue-600 flex-shrink-0`}>
                                                        {job.department}
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{job.experience}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Job Description */}
                                        <p className="text-gray-600 leading-relaxed text-xs lg:text-sm">
                                            {job.description}
                                        </p>
                                    </div>

                                    {/* Right Actions */}
                                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium text-xs lg:text-sm">
                                            Read More
                                        </button>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-xs lg:text-sm">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredJobs.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <Search className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                            <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JobOpenings_Career;