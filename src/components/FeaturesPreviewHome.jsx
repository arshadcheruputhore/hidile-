import { ArrowRight, BarChart3, BarChartIcon, Bell, BotMessageSquare, Calendar, CheckSquare, Files, FileText, FolderKanban, FolderOpen, Grid3x3, Layers, LayoutDashboard, MessagesSquare, Settings, Shuffle, SquareCheckBig, Target, Users, Workflow } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesPreviewHome() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        { 
            icon: Target, 
            label: 'OKR', 
            image: '/img/okr_features.png' 
        },
        { 
            icon: LayoutDashboard, 
            label: 'Dashboard', 
            image: '/img/dashboard_features.png' 
        },
        { 
            icon: BarChartIcon, 
            label: 'Reports', 
            image: '/img/report_features.png' 
        },
        { 
            icon: MessagesSquare, 
            label: 'Chats', 
            image: '/img/chats_features.png' 
        },
        { 
            icon: FolderKanban, 
            label: 'Projects', 
            image: '/img/projects_features.png' 
        },
        { 
            icon: SquareCheckBig, 
            label: 'Tasks', 
            image: '/img/responsibilities_features.png' 
        },
        { 
            icon: Layers, 
            label: 'Templates', 
            image: '/img/templates_features.png' 
        },
        { 
            icon: Files, 
            label: 'Files', 
            image: '/img/files_features.png' 
        },
        { 
            icon: BotMessageSquare, 
            label: 'Ai Chat', 
            image: '/img/AI_features.png' 
        },
        { 
            icon: Workflow, 
            label: 'Workflow', 
            image: '/img/workflow_features.png' 
        }
    ];

    const handleFeatureClick = (index) => {
        setActiveFeature(index);
    };

    return (
        <section className="max-sm:mt-16 py-8 lg:py-20 px-6 max-sm:px-2 bg-[url('/img/GradientFeatures.png')] bg-no-repeat bg-center bg-cover">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 sm:mb-6 md:mb-8 leading-tight">
                        Explore Our Game-Changing Features.
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
                                        <div className={`w-14 h-13 sm:w-14 sm:h-14 md:w-14 md:h-14 flex items-center justify-center rounded-xl sm:rounded-xl border-2 transition-all duration-300 ${isActive
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
                            className="rounded-xl aspect-[16/9] w-full transition-all duration-500 ease-in-out"
                        >
                            <img src={features[activeFeature].image} alt="okr-img" className='object-contain object-center w-full h-full' />
                        </div>
                    </div>

                    <div className="relative w-full flex justify-center items-center">
                        {/* Glass shadow background */}
                        <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-full h-full rounded-2xl sm:rounded-[20px] 
                  bg-[linear-gradient(360deg,rgba(255,255,255,0)_0%,#ffffff_100%)] 
                  opacity-30 blur-[15px] sm:blur-[25px]"></div>

                        {/* Content */}
                        <div className="relative z-10 pt-8 sm:pt-10 md:pt-14">
                            <div className="text-center">
                                <Link to={'/features'} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-gray-200 font-medium px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base">
                                    Explore more
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}