import React from 'react'
import HeroResources from '../components/HeroResources'
import { Outlet, useLocation } from 'react-router-dom'

function ResourcesLayout() {
    const location = useLocation();

    // Map routes to page types
    const getPageType = (pathname) => {
        if (pathname.includes('/about-us')) return 'about';
        if (pathname.includes('/contact-us')) return 'contact';
        if (pathname.includes('/careers')) return 'career';
        if (pathname.includes('/blogs')) return 'blogs';
    };

    const currentPageType = getPageType(location.pathname);

    return (
        <>
            <div className="bg-[#FCFCFC]">
                <HeroResources currentPage={currentPageType} />

                <main className="">
                    <Outlet /> {/* contact, about, career, blogs pages render here */}
                </main>
            </div>
        </>
    )
}

export default ResourcesLayout