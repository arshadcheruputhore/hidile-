import React, { useState } from 'react';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroPricing() {

  return (
    <section className="relative lg:min-h-[70vh] overflow-hidden sm:pt-28 pt-20 max-lg:pb-10 bg-gradient-to-r max-sm:px-6" style={{ background: 'linear-gradient(105deg, #87B8FF 16.17%, #E7F1FF 87.53%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 max-sm:mb-4 bg-white px-4 py-0.5 rounded-3xl border border-zinc-300">
            <div className="flex items-center space-x-1 text-xs text-gray-900">
              <Link to={'/'} className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span>Pricing</span>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-[40px] font-semibold leading-relaxed sm:leading-normal tracking-tight text-gray-900 mb-3 sm:mb-6">
              Plans That Help Teams Achieve <br className='max-sm:hidden' /> More Together
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with all the features your teams need to succeed.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}