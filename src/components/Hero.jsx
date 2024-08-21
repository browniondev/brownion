import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";
import ExpertiseComponent from "./Expertise";
import FeaturedWork from "./Work";
import OurTeam from "./Team";
import BentoGrid from "./Projects";
import HeroTextparticles from "./HeroTextparticles";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

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
      <div className="font-['comfortaa'] w-full overflow-x-hidden  bg-black text-white min-h-screen flex flex-col justify-center items-center p-4 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://i.pinimg.com/originals/c5/38/7d/c5387d91868b74d255f31fc78458660b.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, 
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
      <BentoGrid />
    </div>
  );
};

export default Hero;
