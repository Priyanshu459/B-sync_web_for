import { useEffect, useRef } from 'react';
import './Cursor.css';

function Cursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    
    // Initial position way off screen
    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly move the dot
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }

      // Check hover states
      const target = e.target;
      const isClickable = target.closest('a') || target.closest('button') || target.closest('.nav-link') || target.closest('.bento-card') || target.closest('input');
      
      if (isClickable) {
        outline?.classList.add('active');
        dot?.classList.add('active');
      } else {
        outline?.classList.remove('active');
        dot?.classList.remove('active');
      }
    };

    // Smooth animation loop for the trailing outline
    const render = () => {
      // Linear interpolation (lerp) for smooth following
      outlineX += (mouseX - outlineX) * 0.15; 
      outlineY += (mouseY - outlineY) * 0.15;
      
      if (outline) {
        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;
      }
      
      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
}

export default Cursor;
