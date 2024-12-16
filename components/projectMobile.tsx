"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

const ProjectPageMobile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastScrollTop, setLastScrollTop] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const [scrollWidth, setScrollWidth] = useState(0);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef2.current) {
      const scrollableWidth = containerRef2.current.scrollWidth;
      const visibleWidth = containerRef2.current.offsetWidth;
      setScrollWidth(scrollableWidth - visibleWidth);
    }
  }, [images2]);

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
            <motion.div className="relative z-20 flex justify-center  w-[300px] h-[600px] rounded-sm px-2 ">
              <motion.div
                className="absolute cursor-pointer self-center  rounded-sm h-[300px] w-[250px] sm:h-[55vh]  bg-black z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: !isFocused ? 0.7 : 0 }}
                transition={{ duration: 0.5 }}
                onClick={handleImageClick}
              ></motion.div>
              <motion.div
                className="absolute rounded-sm self-center text-white z-40 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                onClick={handleImageClick}
                animate={{
                  opacity: !isFocused ? 1 : 0,
                  y: !isFocused ? 0 : 50,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h1 className="text-sm font-bold">
                  {selectedImage.title}
                </motion.h1>
                <motion.p className="text-sm mt-2">
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
                className=" z-10 max-h-full object-cover rounded-sm cursor-pointer shadow-md"
              />
            </motion.div>

            {/* Project Title & Caption */}
          </>
        )}
      </AnimatePresence>

      {/* Scroll Section */}
      <div className="text-black flex flex-col items-center justify-center">
        <div
          
          className="w-full h-[45vh] flex flex-col  items-center justify-center mt-36"
        >
          <motion.div
            className=" text-justify flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-black mb-4">
              About the Project
            </h2>
            <p className="text-sm text-black">
              This project showcases a modern and interactive design for a
              branding site. The visuals emphasize the brand's aesthetic,
              providing users with an engaging and immersive experience.
            </p>
          </motion.div>

          <motion.div
            className=" flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={images[2].src || ""}
              alt="Project Detail"
              style={{ filter: `grayscale(1)` }}
              className=" h-[200px] w-[300px] mt-8  md:max-w-full md:max-h-[40vh] rounded-sm object-cover"
              initial={{
                filter: "grayscale(1)", // Start with full grayscale
                clipPath: "inset(0% 0% 0% 0%)", // Start with the bottom being fully visible
              }}
              whileTap={{
                filter: "grayscale(0)", // Remove grayscale
                clipPath: "inset(0% 0% 0% 0%)", // Slide up effect by revealing the full image
                transition: {
                  duration: 0.5, // Time taken for the effect to complete
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="text-black flex flex-col items-center justify-center">
        <div className="w-full h-[45vh] flex flex-col items-center justify-center mt-10">
          <h2 className="text-md font-bold text-black ">
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
              <motion.div
                className="flex"
                animate={{ x: ["0%", "-1%"] }} // Scroll left
                transition={{
                  duration: 90000, // Adjust for scroll speed
                  ease: "easeIn",
                  repeat: Infinity, // Infinite loop
                }}
              >
                {/* Duplicate images for seamless looping */}
                {[
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                  ...images2,
                ].map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Logo ${index}`}
                    className="w-12 h-12 mx-4 grayscale cursor-pointer"
                    initial={{
                      filter: "grayscale(1)",
                      clipPath: "inset(0% 0% 0% 0%)",
                    }}
                    whileHover={{
                      filter: "grayscale(0)",
                      clipPath: "inset(0% 0% 0% 0%)",
                      transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageMobile;
