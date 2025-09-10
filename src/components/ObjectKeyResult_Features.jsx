import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function ObjectKeyResult_Features() {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [headerVisible, setHeaderVisible] = useState(false);
    const headerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observers = [];

        // Header observer
        const headerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (headerRef.current) {
            headerObserver.observe(headerRef.current);
            observers.push(headerObserver);
        }

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

    const getCardClassName = (index, baseClasses) => {
        const isVisible = visibleItems.has(index);
        return `${baseClasses} transition-all duration-700 ease-out ${isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
            }`;
    };

    return (
        <>
            <section className='mb-12 sm:mb-14 max-w-7xl mx-auto'>
                <div className="bg-zinc-100 px-8 py-10 rounded-2xl max-md:px-3 max-md:py-5">
                    <div
                        ref={headerRef}
                        className={`transition-all duration-1000 ease-out ${headerVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-12'
                            }`}
                    >
                        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-left  text-gray-800 leading-tight sm:leading-9 md:leading-[48px]">
                            OKR - Objective & Key Result
                        </h1>
                        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5">
                            <p className="leading-relaxed text-left text-gray-500 text-sm sm:text-base mt-1">
                                Organize to/dos and keep all the information in place.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-6 sm:mt-8">

                        {/* Goal Setting */}
                        <div ref={el => itemRefs.current[0] = el}
                            data-index={0}
                            className={getCardClassName(0, "overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col justify-end")}
                            style={{
                                transitionDelay: `${0 * 120}ms`
                            }}
                        >
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Goal Setting
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Set clear goals and give your team a shared direction.
                                </p>
                            </div>

                            <div className="drop-shadow-xl flex-1 sm:w-4/5 flex items-end self-end-safe sm:mt-3">
                                <img
                                    src="/img/okr-goal.png"
                                    alt="Add Files"
                                    className="rounded-tl-xl rounded-br-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Create Objectives */}
                        <div ref={el => itemRefs.current[1] = el}
                            data-index={1}
                            className={getCardClassName(1, "overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-end")}
                            style={{
                                transitionDelay: `${1 * 120}ms`
                            }}
                            >
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Create Objectives
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    From big-picture goals to daily work, start with strong objectives.
                                </p>
                            </div>

                            <div className="drop-shadow-xl flex-1 sm:w-4/5 flex items-end self-end-safe sm:mt-3">
                                <img
                                    src="/img/createObject_okr.png"
                                    alt="File Details"
                                    className="rounded-tl-xl rounded-br-xl w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Child Objectives */}
                        <div ref={el => itemRefs.current[2] = el}
                            data-index={2}
                            className={getCardClassName(2, "overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col justify-end col-span-1 sm:col-span-2 lg:col-span-3")}
                            style={{
                                transitionDelay: `${2 * 120}ms`
                            }}
                            >
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Child Objectives
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Create sub-goals that keep teams focused on the bigger picture.
                                </p>
                            </div>

                            <div className="flex-1 sm:pl-12 flex items-end self-end-safe sm:mt-3 drop-shadow-xl">
                                <img
                                    src="/img/childObjective_okr.png"
                                    alt="Templates"
                                    className="rounded-tl-xl rounded-br-xl w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Create Key Results */}
                        <div ref={el => itemRefs.current[3] = el}
                            data-index={3}
                            className={getCardClassName(3, "overflow-hidden rounded-[9.836px] bg-[#FBFBFB] shadow-[0_2.643px_2.643px_0_rgba(0,0,0,0.25)] backdrop-blur-[0.6606px] flex flex-col justify-end col-span-1 sm:col-span-2 lg:col-span-2")}
                            style={{
                                transitionDelay: `${3 * 120}ms`
                            }}
                            >
                            <div className="px-4 sm:px-6 pt-6 sm:pt-8 mb-3 sm:mb-4">
                                <h3 className="text-lg sm:text-xl lg:text-xl tracking-wide font-semibold text-gray-800 mb-0 sm:mb-1 lg:mb-1">
                                    Assign task to template
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-5 sm:leading-[22px]">
                                    Create actionable key results that drive accountability.
                                </p>
                            </div>

                            <div className="flex-1 sm:w-[80%] flex items-end self-end-safe sm:mt-3 drop-shadow-xl">
                                <img
                                    src="/img/createKey_okr.png"
                                    alt="Activity"
                                    className="rounded-l-xl w-full h-full object-cover"
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