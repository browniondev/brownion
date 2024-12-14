import React, { MutableRefObject, useEffect, useRef } from 'react';

const FireCursor = () => {
  const cursorRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
//   const trailsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    let overPara = false;
    let cursorText = "";

    const updateCursor = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      overPara = document.elementFromPoint(coords.x, coords.y) instanceof HTMLParagraphElement;
      cursorText = overPara ? "TEST" : "";
    };

    const animateTrail = () => {
      let x = coords.x;
      let y = coords.y;

    //   if(!trailsRef.current) return;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      const trailsRef: NodeListOf<HTMLDivElement> = document.querySelectorAll(".trail");

      trailsRef.forEach((trail, idx) => {
        if (!trail) return;
        if(!(trail instanceof HTMLDivElement)) return;

        trail.style.transform = `translate(${x - trail.offsetWidth / 2}px, ${y - trail.offsetHeight / 2}px)`;
        trail.style.scale = String(overPara ? 4 : (10 - idx) / 10);
        trail.innerText = overPara ? cursorText : "";

        const nextTrail = trailsRef[idx + 1] || trailsRef[0];
        x += (nextTrail.x - x) * 0.2;
        y += (nextTrail.y - y) * 0.2;

        trail.x = x;
        trail.y = y;
      });

      requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', updateCursor);
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <div
          key={idx}
          className="trail"
        ></div>
      ))}
    </div>
  );
};

export default FireCursor;
