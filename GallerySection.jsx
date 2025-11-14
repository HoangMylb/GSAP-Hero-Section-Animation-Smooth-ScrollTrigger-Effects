import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './GallerySection.module.css';

gsap.registerPlugin(ScrollTrigger);

const GalleryCard = ({ gradient, title, description }) => {
  return (
    <div className={styles.galleryCard}>
      <div
        className={styles.galleryImage}
        style={{ background: gradient }}
      ></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const GallerySection = () => {
  const sectionTitleRef = useRef(null);
  const galleryItemsRef = useRef([]);

  useEffect(() => {
    // Set initial state
    gsap.set(sectionTitleRef.current, { y: 30, opacity: 0 });
    gsap.set(galleryItemsRef.current, { y: 30, opacity: 0, scale: 0.95 });

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

    // Items Staggered Reveal with Scale Effect
    gsap.to(galleryItemsRef.current, {
      scrollTrigger: {
        trigger: sectionTitleRef.current.parentElement,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 0.5,
      },
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.12,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const galleryData = [
    {
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      title: 'Parallax Effect',
      description: 'Background moves smoothly on scroll',
    },
    {
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      title: 'Text Reveal',
      description: 'Text reveals from bottom to top',
    },
    {
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      title: 'Scroll Trigger',
      description: 'Animations triggered on scroll',
    },
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 ref={sectionTitleRef} className={styles.sectionTitle}>
          Animation Effects
        </h2>

        <div className={styles.galleryGrid}>
          {galleryData.map((item, index) => (
            <div
              key={index}
              ref={(el) => galleryItemsRef.current.push(el)}
              className={styles.galleryItem}
            >
              <GalleryCard
                gradient={item.gradient}
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

export default GallerySection;
