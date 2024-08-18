import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertiseComponent = () => {
  const circleGraphicRef = useRef(null);
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
  // useEffect(() => {
  //   gsap.to(".circle-image", {
  //     rotate: 360,
  //     duration: 10,
  //     ease: "none",
  //     repeat: -1,
  //     scrollTrigger: {
  //       trigger: ".circle-image",
  //       start: "top 80%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });

  //   // Animate the title
  //   gsap.fromTo(
  //     ".section-title",
  //     { opacity: 0, y: -100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".section-title",
  //         start: "top 80%",
  //         scrub: 1,
  //       },
  //     }
  //   );

  //   // Animate cards
  //   gsap.fromTo(
  //     ".card",
  //     { opacity: 1, y: 100, scale: 0.8 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       stagger: 0.3,
  //       scrollTrigger: {
  //         trigger: ".card",
  //         start: "top 75%",
  //         end: "bottom 25%",
  //         scrub: 1,
  //       },
  //     }
  //   );

  //   // Animate line under title
  //   gsap.fromTo(
  //     ".title-line",
  //     { scaleX: 0, transformOrigin: "left" },
  //     {
  //       scaleX: 1,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: ".title-line",
  //         end: "top 30%",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div className="expertise-container font-['comfortaa'] bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="content-wrapper max-w-4xl w-full relative z-2">
        <div
          ref={circleGraphicRef}
          className="circle-wrapper absolute z-2 bottom-0 left-20"
        >
          <img
            className="circle-image w-64 h-64"
            src="./CircleGraphic.svg"
            alt="Decorative Circle"
          />
        </div>

        <div className="text-wrapper relative z-10 max-w-6xl mx-auto">
          <h2 className="section-title text-4xl md:text-6xl font-light mb-16">
            OUR EXPERTISE
            <span className="title-line block w-1/3 h-0.5 bg-white mt-2"></span>
          </h2>

          <div className="cards-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className={`card border border-white bg-black p-6 aspect-[3/4] flex flex-col justify-between ${
                  index === 1 ? "mt-16" : ""
                }`}
              >
                <div className="card-content h-full flex items-center justify-center">
                </div>
                <div className="card-footer flex justify-end mt-auto">
                  <span className="text-3xl">&gt;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseComponent;
