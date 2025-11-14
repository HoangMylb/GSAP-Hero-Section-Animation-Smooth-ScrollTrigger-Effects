import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: 'power3.inOut',
    });
  };

  return (
    <button
      className={`${styles.scrollToTopBtn} ${isVisible ? styles.visible : ''}`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
