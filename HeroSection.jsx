import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const titleWordsRef = useRef([]);
  const subtitleTextsRef = useRef([]);
  const buttonsRef = useRef([]);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Set initial state for elements
    gsap.set(titleWordsRef.current, { y: 30, opacity: 0 });
    gsap.set(subtitleTextsRef.current, { y: 30, opacity: 0 });
    gsap.set(buttonsRef.current, { y: 20, opacity: 0 });

    // 1. PARALLAX EFFECT - Background moves smoothly on scroll
    gsap.to(bgImageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
      y: 100,
      ease: 'none',
    });

    // 2. TITLE ANIMATION - Words reveal from bottom to top
    gsap.to(titleWordsRef.current, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.3,
    });

    // 3. SUBTITLE ANIMATION - Subtitle lines reveal
    gsap.to(subtitleTextsRef.current, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.8,
    });

    // 4. BUTTONS ANIMATION - Buttons appear
    gsap.to(buttonsRef.current, {
      duration: 0.6,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 1.2,
    });

    // 5. SCROLL INDICATOR FADE OUT on scroll
    gsap.to(scrollIndicatorRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom 30%',
        scrub: 0.5,
      },
      opacity: 0,
      pointerEvents: 'none',
      ease: 'power2.in',
    });

    // Button hover animations
    const handleButtonHover = (btn) => {
      btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
          duration: 0.3,
          scale: 1.05,
          ease: 'power2.out',
        });
      });

      btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out',
        });
      });
    };

    buttonsRef.current.forEach(btn => handleButtonHover(btn));

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: target,
        ease: 'power3.inOut',
      });
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Background with Parallax */}
      <div className={styles.heroBackground}>
        <img
          ref={bgImageRef}
          src="assets/hero-bg.jpg"
          alt="Hero Background"
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroTextWrapper}>
          {/* Title */}
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>
              <span
                ref={(el) => titleWordsRef.current.push(el)}
                className={styles.heroTitleWord}
              >
                GSAP
              </span>
            </span>
            <span className={styles.heroTitleLine}>
              <span
                ref={(el) => titleWordsRef.current.push(el)}
                className={styles.heroTitleWord}
              >
                Hero Section
              </span>
            </span>
            <span className={styles.heroTitleLine}>
              <span
                ref={(el) => titleWordsRef.current.push(el)}
                className={styles.heroTitleWord}
              >
                Animation
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            <span
              ref={(el) => subtitleTextsRef.current.push(el)}
              className={styles.heroSubtitleText}
            >
              Discover the power of GSAP + ScrollTrigger
            </span>
            <span
              ref={(el) => subtitleTextsRef.current.push(el)}
              className={styles.heroSubtitleText}
            >
              Create smooth animations at 60 FPS on all devices
            </span>
          </p>

          {/* CTA Buttons */}
          <div className={styles.heroCta}>
            <a
              href="#about"
              className={`${styles.btn} ${styles.btnPrimary}`}
              ref={(el) => buttonsRef.current.push(el)}
              onClick={handleSmoothScroll}
            >
              Get Started
            </a>
            <a
              href="#gallery"
              className={`${styles.btn} ${styles.btnSecondary}`}
              ref={(el) => buttonsRef.current.push(el)}
              onClick={handleSmoothScroll}
            >
              View More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className={styles.heroScrollIndicator}>
          <span className={styles.scrollText}>Scroll Down</span>
          <div className={styles.scrollIcon}>
            <div className={styles.scrollWheel}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
