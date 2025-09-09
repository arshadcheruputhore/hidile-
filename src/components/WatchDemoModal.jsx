import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

// Video Modal Component
export const WatchDemoModal = ({ isOpen, onClose, videoId }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl group">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-1/2 transform translate-y-0 -translate-x-1/2 text-white hover:text-gray-300 z-30 bg-black/50 size-8 flex justify-center items-center rounded-3xl opacity-0 group-hover:opacity-100 group-hover:translate-y-12 transition-all duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>
        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Introducing HiDesk: Task, OKR & Project AI Assistance"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
};