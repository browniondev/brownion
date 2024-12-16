"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HorizontalScrollMobile from "../components/HorizontalScrollMobile";
import HorizontalScroll from "../components/HorizontalScroll";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";
const images2 = [
  {
    src: "https://wallpapers.com/images/hd/purple-sky-3d-nature-9zgqmz91pcm7idf7.jpg",
    title: "Showcase site | Branding",
    caption: "AMGPRO",
    key: "0",
  },
  {
    src: "https://i.pinimg.com/originals/13/3b/89/133b89168deaceb619421cd65fc62f59.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "1",
  },
  {
    src: "https://e1.pxfuel.com/desktop-wallpaper/859/280/desktop-wallpaper-awesome-3d-nature-full-screen-3d-full-screen.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "2",
  },
  {
    src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "3",
  },
  {
    src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "4",
  },
  {
    src: "https://cdn.wallpapersafari.com/64/26/m4ojCw.jpg",
    title: "Ecommerce site | Branding",
    caption: "Diamonds Story",
    key: "5",
  },
  // Add more images as needed
];

const images = [
  "./stb.avif",
  "./mcd.webp",
  "./brand.jpg",
  "./stb.avif",
  "./brand.jpg",
  "./stb.avif",
  "./mcd.webp",
  "./mcd.webp",
  "./mcd.webp",
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

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 500 },
  });
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

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image/project
  const imagesPerSlice = 4; // Number of images to show in the tech stack

  // Calculate the current slice for the tech stack
  const currentSlice = images.slice(
    currentIndex,
    currentIndex + imagesPerSlice
  );

  // Handlers for slicing logic in tech stack
  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const [isGrayscale, setIsGrayscale] = useState(true);
  return (
    <>
      <div className="cont mt-12 flex-grow grid grid-cols-12 lg:grid-rows-9 sm:grid-rows-9 mx-auto gap-3">
        {/* Row 1 */}
        <div className="content col-span-12 sm:col-span-8 sm:row-span-2 md:row-span-3 rounded-2xl relative z-0">
          <div className="controls absolute flex gap-4">
            <button
              onClick={() => {
                const video = document.querySelector("video");
                console.log(video);
                if (video) {
                  video.style.width = "100%";
                  video.style.height = "100%";
                }
              }}
            >
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
          <h2 className="font-mono lg:text-3xl w-full h-full flex items-center justify-center">
            Design. <br />
            Develop. <br />
            Deliver.
          </h2>
        </div>
        {/* Row 2 */}
        <div className="content col-span-6 sm:col-span-8 sm:row-span-1 md:col-span-4 md:row-span-3 bg-red border rounded-2xl">
          Services
        </div>
        <div className="content relative col-span-12 sm:col-span-4 sm:row-start-2 sm:col-start-9 sm:row-span-2 md:col-span-6 md:row-span-2 bg-red border rounded-2xl flex justify-center items-center">
          <motion.img
            src={images2[currentIndex].src} // Show the current project image
            alt="Current Project"
            className={`w-full h-full object-cover rounded-lg ${
              isGrayscale ? "grayscale" : ""
            }`} // Conditionally apply grayscale
            initial={{ opacity: 0, filter: "grayscale(1)" }} // Start with grayscale applied
            animate={{
              opacity: 1,
              filter: isGrayscale ? "grayscale(1)" : "grayscale(0)",
            }} // Animate grayscale on click
            transition={{ duration: 0.5 }}
            onClick={() => setIsGrayscale(!isGrayscale)} // Toggle grayscale on click
          />
          <div className="flex p-4 absolute bottom-0 w-full justify-between mt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0} // Disable if at the start
              className={`p-2 rounded-full shadow-lg ${
                currentIndex === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-white text-black"
              }`}
            >
              <ChevronLeft />
              {/* Left Arrow */}
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex == images2.length - 1} // Disable if at the end
              className={`p-2 rounded-full shadow-lg ${
                currentIndex == images2.length - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-white text-black"
              }`}
            >
              <ChevronRight /> {/* Right Arrow */}
            </button>
          </div>
        </div>

        {/* Tech Stack Images */}
        <div className="content border border-black border-solid sm:border-none overflow-x-hidden w-full col-span-4 sm:row-span-2 sm:col-span-4 md:col-span-2 bg-red md:row-span-2 rounded-2xl flex flex-col">
          <div className="flex sm:grid sm:grid-cols-2 sm:grid-rows-3 w-full h-full">
            {currentSlice.map((src, index) => (
              <animated.img
                key={index}
                src={src}
                alt={`Tech Stack ${index}`}
                style={fadeIn} // Apply animation
                className="w-12 h-12 mx-4 grayscale cursor-pointer hover:scale-110 hover:grayscale-0 transition-all duration-200"
              />
            ))}
          </div>
        </div>

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
