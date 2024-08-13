import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BentoGrid = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger the animations for each box
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { scale: 0.2, opacity: 0, filter: "blur(50px) brightness(150%)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px) brightness(100%)",
          scrollTrigger: {
            trigger: box,
            start: "top 120%", // Start the animation when the top of the box is 120% from the top of the viewport
            once: true, // Play the animation only once
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black text-white p-4 font-sans">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex h-screen w-full items-center justify-center">
          <div className="grid h-2/3 w-full gap-4 p-2 grid-cols-5 grid-rows-4 uppercase font-black">
            <div
              ref={(el) => (boxesRef.current[0] = el)}
              className="col-span-2 row-span-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                src="laptop.jpeg"
                alt="Web Design"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[1] = el)}
              className="col-span-1 row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                src="https://corcel.b-cdn.net/0bd20164-7796-4719-9a3d-8c2b704a5afd.webp"
                alt="Web Design"
                className="w-full h-full object-cover rounded-xl grayscale"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[2] = el)}
              className="col-span-2 row-span-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <ul className="mt-2">
                <li className="text-2xl font-['comfortaa']">Web Design</li>
                <li className="text-2xl font-['comfortaa']">
                  VFX and Video Editing
                </li>
                <li className="text-2xl font-['comfortaa']">
                  Social Media Marketing
                </li>
                <li className="text-2xl font-['comfortaa']">Branding</li>
                <li className="text-2xl font-['comfortaa']">App Development</li>
              </ul>
            </div>

            <div
              ref={(el) => (boxesRef.current[3] = el)}
              className="col-span-1 row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <p className="text-2xl font-['comfortaa']">OUR SERVICES</p>
            </div>

            <div
              ref={(el) => (boxesRef.current[4] = el)}
              className="col-span-1 row-span-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                src="laptop+mobile.png"
                alt="Social Anxiety"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[5] = el)}
              className="col-span-1 row-span-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover rounded-xl"
                src="https://static.wixstatic.com/media/3d4741_24fdf078640e41478b7f46b4f399a7bb~mv2.png/v1/fill/w_282,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/laptop_reflection_screen_mockup-min.png"
                alt="Diamond"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[6] = el)}
              className="col-span-1 row-span-2 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover rounded-xl"
                src="https://st.depositphotos.com/1516544/4759/i/450/depositphotos_47594847--diamond-ring-on--black--background-with-high-quality.jpg"
                alt="Unicorn"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[7] = el)}
              className="col-span-1 row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <p className="text-2xl font-['comfortaa']">Contact</p>
            </div>

            <div
              ref={(el) => (boxesRef.current[8] = el)}
              className="col-span-1 row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover rounded-xl"
                src="https://black-forest-labs-flux-1-schnell.hf.space/file=/tmp/gradio/33215a38838cbed9c2e6bf6c43518e0557eee295/image.webp"
                alt="Daisy"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[9] = el)}
              className="col-span-1 row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-xl grayscale"
                src="https://black-forest-labs-flux-1-schnell.hf.space/file=/tmp/gradio/d42b4ebe8d2e77901d89e45732116733f186876a/image.webp"
                alt="Camera Lens"
              />
            </div>

            <div
              ref={(el) => (boxesRef.current[10] = el)}
              className="col-span-1 row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              <p className="text-2xl font-['comfortaa'] text-center">
                Let's build your brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
