"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Techstack from "../components/Techstack";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update isMobile state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this value as needed
    };

    // Run on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && !isMobile) {
        const { scrollTop } = document.documentElement || document.body;
        const delta = scrollTop - lastScrollTop; // Positive when scrolling down, negative when scrolling up
        setLastScrollTop(scrollTop);

        containerRef.current.scrollLeft += delta * 3; // Sync horizontal scroll with vertical scroll direction
      }
    };

    // Attach scroll event listener for desktop
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener when not mobile
    return () => {
      if (!isMobile) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollTop, isMobile]);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        if (containerRef.current) {
          // Auto-scroll the images horizontally
          containerRef.current.scrollLeft += 4; // Adjust the scroll speed here
        }
      }, 30); // Set the interval time (in ms)

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const images = [
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",

    "./stb.avif",
  
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",

    "./stb.avif",
  
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",
    "./stb.avif",
    "./mcd.webp",
    "./brand.jpg",
    "./stb.avif",
    "./brand.jpg",

    "./stb.avif",
  ];

  return (
    <>
      <div className="cont mt-12 flex-grow grid grid-cols-12 lg:grid-rows-9 sm:grid-rows-9 mx-auto gap-3">
        {/* Row 1 */}
        <div className="content col-span-12 sm:col-span-8 sm:row-span-2 md:row-span-3 rounded-2xl relative z-0">
          <div className="controls absolute flex gap-4">
            <button onClick={() => {
              const video = document.querySelector('video');
              console.log(video)
              if (video) {
                video.style.width = '100%';
                video.style.height = '100%';
              }
            }}>
              fullscreen
            </button>
          </div>
          <video
            src="/showreel.mp4"
            autoPlay
            loop
            muted
            className="bigger rounded-xl w-full mx-auto h-full object-cover"
          />
        </div>
        <div className="content col-span-6 sm:row-span-1 sm:col-span-4 md:row-span-2 bg-red p-2 rounded-2xl">
          <h2 className="font-mono lg:text-3xl w-full h-full flex items-center justify-center">Design. <br />Develop. <br />Deliver.</h2>
        </div>
        {/* Row 2 */}
        <div className="content col-span-6 sm:col-span-8 sm:row-span-1 md:col-span-4 md:row-span-3 bg-red border rounded-2xl">
          Services
        </div>
        <div className="content col-span-12 sm:col-span-4 sm:row-start-2 sm:col-start-9 sm:row-span-2 md:col-span-6 md:row-span-2 bg-red border rounded-2xl">
          Projects
        </div>
        <div className="content col-span-4 sm:row-span-2 sm:col-span-4 md:col-span-2 bg-red md:row-span-2 rounded-2xl">
          <div className="grid grid-cols-2 grid-rows-3 w-full h-full"><Techstack /></div></div>
        {/* Row 3 */}
        <div
          ref={containerRef}
          className="content justify-center col-span-12 row-span-1 bg-red border-0 rounded-2xl overflow-hidden whitespace-nowrap flex items-center py-16"
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Logo ${index}`}
              className="w-24 h-24 mx-4 grayscale cursor-pointer"
              initial={{
                filter: "grayscale(1)",
                clipPath: "inset(0% 0% 0% 0%)", // Initial state: fully visible
              }}
              whileHover={{
                filter: "grayscale(0)", // Remove grayscale
                clipPath: "inset(0% 0% 0% 0%)", // Animate clipPath to reveal top-to-bottom
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>
        {/* Row 4 */}
        <div className="content col-span-8 sm:col-span-8 sm:row-span-2 md:col-span-4 md:row-span-2 bg-red border rounded-2xl">
          container 1
        </div>
        <div className="content col-span-8 sm:col-span-6 sm:row-span-2 md:col-span-5 md:row-span-2 bg-red border rounded-2xl">
          container 1
        </div>
        <div className="content col-span-4 sm:col-span-6 md:col-span-3 sm:row-span-2 md:row-span-2 bg-red border rounded-2xl">
          container 1
        </div>
      </div>
    </>
  );
}
