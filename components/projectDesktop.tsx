"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { animated, useSpring } from "@react-spring/web";

const images = [
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

const ProjectPage: React.FC = () => {
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

  const images2 = [
    "../../mcd.webp",
    "../../brand.jpg",
    "../../stb.avif",
    "../../brand.jpg",
    "../../stb.avif",
    "../../mcd.webp",
    "../../brand.jpg",
    "../../stb.avif",
    "../../brand.jpg",
    "../../stb.avif",
    "../../brand.jpg",
    "../../stb.avif",
    "../../mcd.webp",
    "../../brand.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    const imageIndex = localStorage.getItem("selectedImageId");
    if (imageIndex !== null) {
      const index = parseInt(imageIndex, 10);
      if (index >= 0 && index < images.length) {
        setSelectedImage(images[index]);
      }
    } else {
      router.push("/"); // redirect if no image is selected
    }
  }, [router]);

  const handleImageClick = () => {
    setIsFocused((prev) => !prev);
  };

  return (
    <div className="flex  flex-col items-center justify-center h-auto overflow-hidden relative">
      {/* Only render if selectedImage exists */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Foreground Image */}
            <motion.div className="relative z-20 flex justify-center items-center w-[100vw] h-[95vh] rounded-lg px-2 ">
              <motion.div
                className="absolute cursor-pointer  rounded-lg h-[500px] w-[40%] sm:h-[55vh]  bg-black z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: !isFocused ? 0.7 : 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleImageClick}
              ></motion.div>
              <motion.div
                className="absolute  text-white z-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                onClick={handleImageClick}
                animate={{
                  opacity: !isFocused ? 1 : 0,
                  y: !isFocused ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h1 className="text-4xl font-bold">
                  {selectedImage.title}
                </motion.h1>
                <motion.p className="text-lg mt-2">
                  {selectedImage.caption}
                </motion.p>
              </motion.div>
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.caption}
                onClick={handleImageClick}
                style={
                  !isFocused
                    ? { filter: `grayscale(1)` }
                    : { filter: `grayscale(0)` }
                }
                className=" z-10 max-h-full object-cover rounded-lg cursor-pointer shadow-md"
              />
            </motion.div>

            {/* Project Title & Caption */}
          </>
        )}
      </AnimatePresence>

      {/* Scroll Section */}
      <animated.div
        className="text-black flex flex-col items-center justify-center"
        style={fadeIn}
      >
        <animated.div
          style={fadeIn}
          className="w-full h-[45vh] flex items-center justify-center mt-10"
        >
          <motion.div
            className="w-[50vw] text-justify flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              About the Project
            </h2>
            <p className="text-lg text-black">
              This project showcases a modern and interactive design for a
              branding site. The visuals emphasize the brand's aesthetic,
              providing users with an engaging and immersive experience.
            </p>
          </motion.div>

          <motion.div
            className="w-[30vw] flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={images[2].src || ""}
              alt="Project Detail"
              style={{ filter: `grayscale(1)` }}
              className=" h-[400px] w-[400px]  md:max-w-full md:max-h-[40vh] rounded-lg object-cover"
              initial={{
                filter: "grayscale(1)", // Start with full grayscale
                clipPath: "inset(0% 0% 0% 0%)", // Start with the bottom being fully visible
              }}
              whileHover={{
                filter: "grayscale(0)", // Remove grayscale
                clipPath: "inset(0% 0% 0% 0%)", // Slide up effect by revealing the full image
                transition: {
                  duration: 0.5, // Time taken for the effect to complete
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        </animated.div>
      </animated.div>

      {/* Technologies Section */}
      <div className="text-black flex flex-col items-center justify-center">
        <div className="w-full h-[45vh] flex gap-12 flex-row-reverse items-center justify-center mt-10">
          <h2 className="text-3xl font-bold text-black mb-4">
            Technologies Incorporated
          </h2>
          <motion.div
            className="w-[70vw] flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              ref={containerRef}
              className="content justify-center col-span-12 row-span-1 bg-red border-0 rounded-2xl overflow-hidden whitespace-nowrap flex items-center py-16"
            >
              {images2.map((src, index) => (
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
