import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedText = ({ text, containerRef }) => {
  const characters = text.split("").map((char, index) => (
    <span
      key={index}
      style={{ display: "inline-block", whiteSpace: "pre" }}
      className="animated-char"
    >
      {char}
    </span>
  ));

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".animated-char");

    gsap.fromTo(
      chars,
      { opacity: 1, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 170%",
          end: "bottom 150%",
          scrub: 3,
        },
      }
    );
  }, [containerRef]);

  return <div>{characters}</div>;
};

const BrandHero = () => {
  const circleGraphicRef = useRef(null);
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(circleGraphicRef.current, {
      rotate: "60deg",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: circleGraphicRef.current,
        start: "top 95%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    return () => {
      gsap.killTweensOf(circleGraphicRef.current);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "black",
        }}
        className="font-['comfortaa'] bg-black text-white min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12"
      >
        <div className="max-w-4xl w-full relative z-2">
          <div
            className="absolute z-2 -top-32 right-20 hidden md:block"
            ref={circleGraphicRef}
          >
            <img
              className="w-48 h-48 md:w-64 md:h-64"
              src="./CircleGraphic.svg"
              alt=""
            />
          </div>

          <div className="relative z-10" ref={textContainerRef}>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin mb-4"
            >
              WE HELP
              <span className="font-normal border border-white bg-black px-2 mx-2">
                BRANDS
              </span>
            </motion.h1>
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin mb-8"
            >
              TO
              <span className="font-normal border border-white px-2 mx-2 ">
                STAND
              </span>
              OUT
            </motion.h1>

            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xl sm:text-2xl md:text-3xl font-light mb-8"
            >
              Creative Wizards ~ Building Brands
            </motion.h2>

            <div className="space-y-2 text-xs sm:text-sm md:text-base font-light max-w-2xl">
              <AnimatedText
                text="We transform ideas into impactful experiences,"
                containerRef={textContainerRef}
              />
              <AnimatedText
                text="We help brands to grow and bring their digital presence."
                containerRef={textContainerRef}
              />
              <AnimatedText
                text="Choose us to elevate your brand with precision and"
                containerRef={textContainerRef}
              />
              <AnimatedText
                text="magic. Join us in designing the future."
                containerRef={textContainerRef}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandHero;
