import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion, useScroll, useSpring } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8, // Adjust this value to make scrolling faster or slower
      lerp: 0.05, // Lower values make scrolling smoother but less responsive
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    locoScroll.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.current.scrollTo(value, {
              duration: 0,
              disableLerp: true,
            })
          : locoScroll.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      locoScroll.current.update();
    });

    ScrollTrigger.refresh();
    setIsReady(true);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (locoScroll.current) {
        locoScroll.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const resizeObserver = new ResizeObserver(() => {
      locoScroll.current.update();
      ScrollTrigger.refresh();
    });

    resizeObserver.observe(scrollRef.current);

    return () => resizeObserver.disconnect();
  }, [isReady]);

  return (
    <>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
      <motion.div
        className="progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--accent)",
          transformOrigin: "0%",
          scaleX: scaleX,
        }}
      />
    </>
  );
};

export default ScrollContainer;
