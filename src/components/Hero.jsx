import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";
import ExpertiseComponent from "./Expertise";
import FeaturedWork from "./Work";
import OurTeam from "./Team";
import Projects from "./Projects";
import HeroTextparticles from "./HeroTextparticles";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          scroller: scrollContainer,
        },
      }
    );
  }, []);

  return (
    <div data-scroll-section ref={heroRef}>
      <div
        className="font-['comfortaa'] bg-black text-white min-h-screen flex flex-col justify-center items-center p-4 relative"
        style={{
          backgroundColor: "black",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          maskImage: "linear-gradient(circle, white 10%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(circle, white 10%, transparent 100%)",
        }}
      >
        {/* Image with reduced opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/c5/38/7d/c5387d91868b74d255f31fc78458660b.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4, // Adjust this value to change the opacity
          }}
        />
        <div className="text-center mb-8 relative z-3 flex flex-col items-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 border rounded-full p-5 px-10 bg-black">
            we are brown.ion
          </h1> */}
        </div>
        <div className="absolute -z-99">
          <HeroTextparticles />
        </div>
      </div>
      <Intro />
      <ExpertiseComponent />
      <FeaturedWork />
      <OurTeam />
      <Projects />
    </div>
  );
};

export default Hero;
