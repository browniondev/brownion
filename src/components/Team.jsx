import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      image: "https://loremflickr.com/512/512?random=1",
    },
    {
      id: 2,
      name: "Team Member 2",
      image: "https://loremflickr.com/512/512?random=10",
    },
    {
      id: 3,
      name: "Team Member 3",
      image: "https://loremflickr.com/512/512?random=100",
    },
    {
      id: 4,
      name: "Team Member 4",
      image: "https://loremflickr.com/512/512?random=1000",
    },
    {
      id: 5,
      name: "Team Member 5",
      image: "https://loremflickr.com/512/512?random=10000",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-black text-white p-8"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-light mb-16 pl-60"
      >
        OUR TEAM
      </motion.h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="relative"
      >
        {teamMembers.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex justify-center items-center flex-col"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent border-2 border-white rounded-lg overflow-hidden w-64 h-96 flex justify-center items-center flex-col"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold bg-black">
                  {member.name}
                </h2>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="slider-controler absolute inset-0 flex justify-between items-center pointer-events-none">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="swiper-button-prev text-white pointer-events-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="swiper-button-next text-white pointer-events-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </div>
      </Swiper>
    </motion.div>
  );
}

export default App;
