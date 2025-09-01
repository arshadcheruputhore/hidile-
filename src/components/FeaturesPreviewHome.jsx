import { ArrowRight, BarChart3, Bell, Calendar, CheckSquare, FileText, FolderOpen, Grid3x3, Settings, Shuffle, Users } from 'lucide-react';
import React, { useState } from 'react';

export default function FeaturesPreviewHome() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        { 
            icon: CheckSquare, 
            label: 'Task Management', 
            image: '/img/okr-tasks.png' 
        },
        { 
            icon: Users, 
            label: 'Team Management', 
            image: '/img/team-dashboard-img.png' 
        },
        { 
            icon: FileText, 
            label: 'Templates', 
            image: '/img/okr-templates.png' 
        },
        { 
            icon: Calendar, 
            label: 'Calendar', 
            image: '/img/calendar-dashboard-img.png' 
        },
        { 
            icon: FolderOpen, 
            label: 'Files', 
            image: '/img/okr-files.png' 
        },
        { 
            icon: Settings, 
            label: 'Settings', 
            image: '/img/settings-dashboard-img.png' 
        },
        { 
            icon: BarChart3, 
            label: 'Reports', 
            image: '/img/okr-reports.png' 
        },
        { 
            icon: Bell, 
            label: 'Notifications', 
            image: '/img/notifications-dashboard-img.png' 
        },
        { 
            icon: Grid3x3, 
            label: 'Integration', 
            image: '/img/integration-dashboard-img.png' 
        },
        { 
            icon: Shuffle, 
            label: 'Workflow', 
            image: '/img/okr-workflow.png' 
        }
    ];

    const handleFeatureClick = (index) => {
        setActiveFeature(index);
    };

    return (
        <section className="max-sm:mt-16 pt-14 px-6 max-sm:px-2 bg-[url('/img/GradientFeatures.png')] bg-no-repeat bg-center bg-cover">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-white mb-6 sm:mb-8 md:mb-10 leading-tight">
                        Powerful Features That Drive Results
                    </h1>

                    {/* Feature Icons Grid */}
                    <div className="overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                        <div className="flex gap-3 sm:flex-wrap sm:justify-center md:gap-2 min-w-max sm:min-w-0 px-4 sm:px-0 max-sm:p-0">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                const isActive = activeFeature === index;
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleFeatureClick(index)}
                                        className="flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 flex-shrink-0 w-22 sm:w-22"
                                    >
                                        <div className={`w-14 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl sm:rounded-xl border-2 transition-all duration-300 ${isActive
                                            ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/30'
                                            : 'bg-white/20 backdrop-blur-sm text-gray-300 border-white/50  hover:bg-white/30 hover:border-white/70 hover:text-white'
                                            }`}>
                                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                        </div>
                                        <span className={`text-xs text-center leading-tight transition-colors duration-300 px-1 max-w-full break-words ${isActive ? 'text-blue-300 font-medium' : 'text-gray-100'}`}>
                                            {feature.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Image Preview */}
                <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
                    <div className="px-4 sm:px-8 md:px-14 w-full mx-auto mt-6 sm:mt-8 rounded-lg sm:rounded-[20px] border border-white bg-white/40 shadow-[0_5px_10px_0_rgba(0,0,0,0.10)] backdrop-blur-[17.5px]">
                        <div 
                            className="rounded-xl bg-contain bg-no-repeat bg-center aspect-[16/9] w-full transition-all duration-500 ease-in-out"
                            style={{ 
                                backgroundImage: `url('${features[activeFeature].image}')` 
                            }}
                        >
                        </div>
                    </div>

                    <div className="relative w-full flex justify-center items-center">
                        {/* Glass shadow background */}
                        <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-full h-full rounded-2xl sm:rounded-[20px] 
                  bg-[linear-gradient(360deg,rgba(255,255,255,0)_0%,#ffffff_100%)] 
                  opacity-30 blur-[15px] sm:blur-[25px]"></div>

                        {/* Content */}
                        <div className="relative z-10 p-8 sm:p-10 md:p-14">
                            <div className="text-center">
                                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-gray-200 font-medium px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base">
                                    Explore more
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}