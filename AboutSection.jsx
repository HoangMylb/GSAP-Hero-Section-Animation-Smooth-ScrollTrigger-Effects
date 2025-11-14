import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const AboutItem = ({ icon, title, description }) => {
  return (
    <div className={styles.aboutItem}>
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const sectionTitleRef = useRef(null);
  const aboutItemsRef = useRef([]);

  useEffect(() => {
    // Set initial state
    gsap.set(sectionTitleRef.current, { y: 30, opacity: 0 });
    gsap.set(aboutItemsRef.current, { y: 30, opacity: 0, scale: 0.95 });

    // Title Reveal Animation
    gsap.to(sectionTitleRef.current, {
      scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.5,
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Items Staggered Reveal
    gsap.to(aboutItemsRef.current, {
      scrollTrigger: {
        trigger: sectionTitleRef.current.parentElement,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 0.5,
      },
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const aboutData = [
    {
      icon: '🎨',
      title: 'Design',
      description:
        'Beautiful UI with parallax effect and text reveal animations on scroll.',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description:
        'Optimized to run at 60 FPS on all devices from mobile to desktop.',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description:
        'Perfect adaptive layout for mobile, tablet and desktop screens.',
    },
    {
      icon: '🔧',
      title: 'GSAP + ScrollTrigger',
      description:
        'Using powerful GSAP library to create professional animations.',
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 ref={sectionTitleRef} className={styles.sectionTitle}>
          About This Project
        </h2>

        <div className={styles.aboutGrid}>
          {aboutData.map((item, index) => (
            <div
              key={index}
              ref={(el) => aboutItemsRef.current.push(el)}
            >
              <AboutItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
