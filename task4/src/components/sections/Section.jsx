import React, { useRef, useEffect, useState } from 'react';
import '../../assets/css/Section.css'; // Import the CSS file for styli

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

const Section = ({ children }) => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`section ${isVisible ? 'in-view' : ''}`}
    >
      {children}
    </section>
  );
};

export default Section;
