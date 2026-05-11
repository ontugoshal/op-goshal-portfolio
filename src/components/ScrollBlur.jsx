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
      filter: 'blur(10px)',
      opacity: 0,
      y: 20,
      scale: 0.9
    });

    // Animation
    const tl = gsap.to(splitText.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        end: 'bottom 60%',
        scrub: true,
      },
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: {
        amount: 0.5,
        from: "start"
      },
      ease: 'none'
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
