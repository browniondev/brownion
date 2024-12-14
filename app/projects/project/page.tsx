"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TransitionLink } from "../../../components/TransitionLink";

// Assume this is the same array of images from your original component
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
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    caption: string;
  } | null>(null);

  const [isFocused, setIsFocused] = useState(false); // New state to toggle focus

  const router = useRouter();

  useEffect(() => {
    // Retrieve the image ID from localStorage
    const imageIndex = localStorage.getItem("selectedImageId");
    console.log(imageIndex);

    if (imageIndex !== null) {
      const index = parseInt(imageIndex, 10);
      if (index >= 0 && index < images.length) {
        setSelectedImage(images2[index]);
      }
    } else {
      // If no image is selected, redirect back to home or another page
      router.push("/");
    }
  }, [router]);

  if (!selectedImage) {
    return null; // Optionally, add a loading spinner or message here
  }

  const handleImageClick = () => {
    setIsFocused((prev) => !prev); // Toggle focus state on click
  };

  return (
    <div className="mt-12 flex flex-col items-center justify-center h-screen overflow-y-hidden">
      {/* Background Overlay */}
      <motion.div
        onClick={handleImageClick}
        className={
          isFocused
            ? "fixed w-screen h-screen overflow-hidden  z-40 bg-gradient-to-t from-black to-neutral-600 opacity-0 transition-all duration-500"
            : "fixed w-screen h-screen  z-40 bg-gradient-to-t from-black to-neutral-800 opacity-60 transition-all duration-500 overflow-hidden"
        }
      />
      <motion.div
        className="fixed w-screen overflow-hidden h-screen z-20"
        style={{
          backgroundImage: `url(${
            images2[
              parseInt(localStorage.getItem("selectedImageId") || "0", 10)
            ].src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: isFocused ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
        onClick={handleImageClick}
      />

      <TransitionLink href="/projects">
        <motion.div
          className="text-xl overflow-hidden fixed right-2 text-black font-bold w-10 h-10 bg-white rounded-full flex justify-center items-center z-[100] top-32"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }} // Slide and fade out
          transition={{ delay: 0.1, duration: 1 }}
        >
          X
        </motion.div>
      </TransitionLink>

      {/* Image Display */}
      <motion.img
        src={selectedImage.src}
        alt={selectedImage.caption}
        className="fixed overflow-hidden w-screen max-h-screen z-10  cursor-pointer" // Add cursor pointer
        onClick={handleImageClick} // Handle image click
        initial={{ opacity: 1 }}
        // Full opacity when focused, reduced when not
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Title and Caption Animations */}
      <motion.div
        className="fixed overflow-hidden left-2 z-50 bottom-2 text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFocused ? 0 : 1 }} // Fade out text when image is focused
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl overflow-hidden font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isFocused ? -100 : 0, opacity: isFocused ? 0 : 1 }} // Slide and fade out
          transition={{ delay: 0.5, duration: 1 }}
        >
          {selectedImage.title}
        </motion.h1>
        <motion.p
          className="text-lg mt-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: isFocused ? 100 : 0, opacity: isFocused ? 0 : 1 }} // Slide and fade out
          transition={{ delay: 0.5, duration: 1 }}
        >
          {selectedImage.caption}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
