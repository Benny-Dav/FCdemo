import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, image }) => {
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-6xl animate-modalEntry flex items-center justify-center h-[calc(100vh-10rem)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2 group z-50"
          onClick={onClose}
        >
          <span className="text-sm font-medium group-hover:underline">Close</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl w-full h-full">
          <div className="relative h-full py-5">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{image.alt}</h3>
            {image.description && (
              <p className="text-gray-200 text-base md:text-lg max-w-3xl">{image.description}</p>
            )}
            {image.category && (
              <p className="text-sm text-gray-400 mt-2">{image.category}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 