import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 sm:right-6 bottom-20 sm:bottom-6 z-40 p-3 sm:p-3.5 rounded-full bg-[#0B2545] hover:bg-[#133D72] text-white shadow-xl hover:shadow-2xl border border-white/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      aria-label="Scroll naar boven"
      title="Terug naar boven"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      <span className="sr-only">Scroll naar boven</span>
    </button>
  );
};
