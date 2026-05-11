import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const ScrollBlur = ({ children, className = "" }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into words/chars
    const splitText = new SplitType(textRef.current, { 
      types: 'words,chars',
      tagName: 'span'
    });

    // Initial state: blurred and faded
    gsap.set(splitText.chars, {
      filter: 'blur(6px)',
      opacity: 0,
      y: 10,
      willChange: 'filter, transform, opacity'
    });

    // Animation
    const tl = gsap.to(splitText.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: 0.5,
      },
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.3,
        from: "start"
      },
      ease: 'none',
      onComplete: () => {
        gsap.set(splitText.chars, { willChange: 'auto' });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      splitText.revert();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollBlur;
