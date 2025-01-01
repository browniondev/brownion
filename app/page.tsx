"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HorizontalScrollMobile from "../components/HorizontalScrollMobile";
import HorizontalScroll from "../components/HorizontalScroll";
import { ChevronRight, ChevronLeft, Play, Pause } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";
import Brandspeed from "../components/Brandspeed";
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
  const [videoPlay, setVideoPlay] = useState(true);
  const text = "To Make the change a reality,We're here for you!";

  const [circles, setCircles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

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

    const generateRandomCircles = () => {
      const numCircles = 2; // Number of child divs
      const radius = 200; // Maximum distance on the X-axis

      const newCircles = Array.from({ length: numCircles }, (_, index) => {
        const x = Math.random() * 2 * radius - radius; // Random X position between -radius and +radius
        const y = 0; // Y remains fixed for a horizontal line
        return { id: index, x, y };
      });

      setCircles(newCircles);
    };

    generateRandomCircles();

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
      <section className="hero flex flex-col justify-center items-center h-screen w-full relative">
        <div className="absolute top-1/3 -translate-y-1/3 w-full sm:w-2/3 lg:w-1/2">
          {/* {circles.map(circle => {
        return (
          <div className="absolute w-2 h-2 bg-black z-20 circulate mix-blend-difference rounded-full" key={circle.id}  style={{
                transform: `translate(${circle.x}px, ${circle.y}px)`,
              }}></div>
        )
      })} */}

          {circles.map((circle) => (
            <div
              key={circle.id}
              className={`absolute w-2 h-2 bg-black mix-blend-difference ${
                (circle.id + 1) % 2 == 0 ? "circulate-opp" : "circulate"
              } rounded-full lg:${(circle.id + 1) % 2 == 0 ? "-" : ""}left-${
                (circle.id + 1) * 4
              } lg:${(circle.id + 1) % 2 == 0 ? "-" : ""}top-${
                (circle.id + 1) * 4
              } lg:translate-x-1/2`}
            ></div>
          ))}
          {/* <div className="absolute w-2 h-2 lg:left-0 lg:top-0 lg:translate-x-0 bg-black z-20 circulate-opp mix-blend-difference rounded-full"></div>
      <div className="absolute w-2 h-2 lg:left-1/2 lg:top-0 lg:translate-x-1/2 bg-black z-20 circulate mix-blend-difference rounded-full"></div>
      <div className="absolute w-2 h-2 lg:left-2/2 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 bg-black z-20 circulate mix-blend-difference rounded-full"></div> */}
          <h1 className="font-sans text-3xl cursor-pointer lg:text-5xl tracking-wide uppercase font-bold">
            {text.split(" ").map((word, index) => (
              <span
                key={index}
                className="highlight-text inline-block animate-blink"
                style={{
                  animationDelay: `${index * 0.3}s`, // Delay increases for each word
                }}
              >
                {word}
                {/* // {index < text.split(" ").length - 1 && " "} */}
                &nbsp;
              </span>
            ))}
            {/* <span className="highlight-text">To</span> <span className="highlight-text">Make</span> <span className="highlight-text">the</span> <span className="highlight-text">change</span> <span className="highlight-text"> a </span> <span className="highlight-text">reality,</span> <br /> <span className="highlight-text">We&apos;re</span> <span className="highlight-text">here</span> <span className="highlight-text">for</span> <span className="highlight-text">you!</span> */}
          </h1>
          <div className="flex gap-6 items-center text-gray-700">
            <h2 className="font-mono sm:mx-auto">
              Let brown.ion do it&apos;s magic!
            </h2>
            <button className="bg-black text-white sm:px-6 sm:py-4 w-32 h-32 rounded-full uppercase sm:tracking-wider font-sans my-8 sm:text-xs text-xs font-medium">
              call a mage
            </button>
          </div>
        </div>
        <div className="brand-animation my-10 w-screen bottom-0 sm:top-1/3 sm:-translate-y-1/3 h-40 absolute">
          <Brandspeed />
        </div>
      </section>
      <img
        src="/projectbg.png"
        alt=""
        className="w-full h-auto rounded-md my-12 lg:my-24 lg:mt-72"
      />
      <div className="cont mt-12 flex-grow grid grid-cols-12 lg:grid-rows-7 sm:grid-rows-7 mx-auto gap-3">
        {/* Row 1 */}
        <div className="content col-span-12 sm:col-span-8 sm:row-span-2 md:row-span-3 rounded-2xl relative z-0">
          <div className="controls absolute flex gap-4">
            <button
              onClick={() => {
                const video = document.querySelector("video");
                if (video) {
                  video.style.width = "100%";
                  video.style.height = "100%";
                }
              }}
            >
              Fullscreen
            </button>
          </div>
          <div className="relative">
            <video
              src="/showreel.mp4"
              autoPlay
              loop
              muted
              className="bigger rounded-xl w-full mx-auto h-full object-cover"
            />
            <button
              onClick={() => {
                const video = document.querySelector("video");
                if (video) {
                  if (video.paused) {
                    setVideoPlay(true);
                    video.play();
                  } else {
                    video.pause();
                    setVideoPlay(false);
                  } 
                }
              }}
              className="absolute bottom-5 right-5 bg-white text-black rounded-full p-3 shadow-md"
            >
              {!videoPlay ? <Play /> : <Pause />} 
            </button>
          </div>
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
        {/* <div className="content col-span-8 sm:col-span-8 sm:row-span-2 md:col-span-4 md:row-span-2 bg-red border rounded-2xl">
          container 1
        </div>
        <div className="content col-span-8 sm:col-span-6 sm:row-span-2 md:col-span-5 md:row-span-2 bg-red border rounded-2xl">
          container 1
        </div>
        <div className="content col-span-4 sm:col-span-6 md:col-span-3 sm:row-span-2 md:row-span-2 bg-red border rounded-2xl">
          container 1
        </div> */}
      </div>
    </>
  );
}
