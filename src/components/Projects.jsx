// import React, { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { IoMdArrowForward } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";
// import { XIcon } from "react-icons/io5"; // Import XIcon

// const BentoGrid = () => {
//   const [isDetailView, setIsDetailView] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const detailViewRef = useRef(null);

//   const handleCardClick = (card) => {
//     if (window.innerWidth >= 768) {
//       let content;
//       switch (card) {
//         case "Web Design":
//         case "VFX and Video Editing":
//         case "laptop+mobile":
//         case "Screen":
//         case "Diamond":
//         case "Team":
//         case "Camera Lens":
//           content = {
//             title: card,
//             type: "image",
//             src: getImageSource(card),
//           };
//           break;
//         case "OUR SERVICES":
//           return; // No action for this card
//         default:
//           return;
//       }

//       // Use View Transition API if supported
//       if (document.startViewTransition) {
//         document.startViewTransition(() => {
//           setSelectedCard(content);
//           setIsDetailView(true);
//         });
//       } else {
//         setSelectedCard(content);
//         setIsDetailView(true);
//       }
//     }
//   };

//   const getImageSource = (card) => {
//     const sources = {
//       "Web Design": "laptop.jpeg",
//       "VFX and Video Editing":
//         "https://corcel.b-cdn.net/0bd20164-7796-4719-9a3d-8c2b704a5afd.webp",
//       "laptop+mobile": "laptop+mobile.png",
//       Screen:
//         "https://static.wixstatic.com/media/3d4741_24fdf078640e41478b7f46b4f399a7bb~mv2.png/v1/fill/w_282,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/laptop_reflection_screen_mockup-min.png",
//       Diamond:
//         "https://st.depositphotos.com/1516544/4759/i/450/depositphotos_47594847--diamond-ring-on--black--background-with-high-quality.jpg",
//       Team: "https://st2.depositphotos.com/2931363/11075/i/450/depositphotos_110757274-stock-photo-buiness-team-brainstorming.jpg",
//       "Camera Lens":
//         "https://static3.depositphotos.com/1003924/172/i/450/depositphotos_1723004-stock-photo-objective.jpg",
//     };
//     return sources[card] || "";
//   };

//   const handleCloseDetailView = () => {
//     hideDetailView();
//   };

//   const hideDetailView = () => {
//     if (!detailViewRef.current) return;

//     gsap.to(detailViewRef.current, {
//       duration: 0.5,
//       opacity: 0,
//       ease: "power2.inOut",
//       onComplete: () => {
//         setIsDetailView(false);
//         setSelectedCard(null);
//         gsap.to("body", {
//           duration: 0.5,
//           backgroundColor: "#000",
//           ease: "power2.in",
//         });
//       },
//     });
//   };

//   useEffect(() => {
//     if (isDetailView && detailViewRef.current) {
//       gsap.set(detailViewRef.current, {
//         opacity: 0,
//         display: "flex",
//       });

//       gsap.to(detailViewRef.current, {
//         duration: 0.5,
//         opacity: 1,
//         ease: "power2.inOut",
//       });

//       gsap.to("body", {
//         duration: 0.5,
//         backgroundColor: "#1a1a1a",
//         ease: "power2.out",
//       });
//     }
//   }, [isDetailView]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         handleCloseDetailView();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   const renderGridItem = (title, span = "", image = null) => {
//     const isTextBox = !image;

//     return (
//       <div
//         className={`${span} bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-800 cursor-pointer relative group overflow-hidden`}
//         onClick={() => handleCardClick(title)}
//       >
//         {image ? (
//           <img
//             src={image}
//             alt={title}
//             className={`w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0`}
//           />
//         ) : (
//           <p className="text-md font-['comfortaa'] text-center group-hover:text-lg whitespace-break-spaces transform transition-all duration-300">
//             {title}
//           </p>
//         )}
//         {isTextBox && (
//           <span className="absolute right-3 top-3 opacity-0 text-white transform transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-150 group-hover:opacity-100">
//             <IoMdArrowForward />
//           </span>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-black text-white p-4 font-sans relative md:w-[87.5%] min-h-screen mt-20 overflow-hidden">
//       <div className="flex h-full w-full items-center justify-center relative">
//         <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-5 w-full">
//           {renderGridItem(
//             "Web Design",
//             "md:col-span-2 md:row-span-2 hover:scale-95 transition-all duration-300 ease-in-out",
//             "laptop.jpeg"
//           )}
//           {renderGridItem(
//             "VFX and Video Editing",
//             "md:col-span-1 md:row-span-1 hover:scale-95 transition-all duration-300 ease-in-out",
//             "https://corcel.b-cdn.net/0bd20164-7796-4719-9a3d-8c2b704a5afd.webp"
//           )}
//           <div className="md:col-span-2 md:row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-800 group transition-all duration-300 ease-in-out">
//             <ul className="mt-2 text-center">
//               <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
//                 Web Design
//               </li>
//               <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
//                 VFX and Video Editing
//               </li>
//               <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
//                 Social Media Marketing
//               </li>
//               <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
//                 Branding
//               </li>
//               <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
//                 App Development
//               </li>
//             </ul>
//           </div>
//           {renderGridItem(
//             "Tech Stack",
//             "md:col-span-1 md:row-span-2 hover:scale-95 transition-all duration-300 ease-in-out",
//             "https://media.licdn.com/dms/image/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=zcfSqc5__VRvgFu6e6Ll8vL4xNP_PYnbQYG4YpL9ysE"
//           )}
//           {renderGridItem(
//             "laptop+mobile",
//             "md:col-span-1 md:row-span-3 hover:scale-95 transition-all duration-300 ease-in-out",
//             "laptop+mobile.png"
//           )}
//           {renderGridItem(
//             "Screen",
//             "md:col-span-1 md:row-span-2 hover:scale-95 transition-all duration-300 ease-in-out",
//             "https://static.wixstatic.com/media/3d4741_24fdf078640e41478b7f46b4f399a7bb~mv2.png/v1/fill/w_282,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/laptop_reflection_screen_mockup-min.png"
//           )}
//           {renderGridItem(
//             "Diamond",
//             "md:col-span-2 md:row-span-2 hover:scale-95 transition-all duration-300 ease-in-out",
//             "https://st.depositphotos.com/1516544/4759/i/450/depositphotos_47594847--diamond-ring-on--black--background-with-high-quality.jpg"
//           )}
//           {renderGridItem(
//             "Team",
//             "md:col-span-1 md:row-span-1 hover:scale-95 transition-all duration-300 ease-in-out",
//             "https://st2.depositphotos.com/2931363/11075/i/450/depositphotos_110757274-stock-photo-buiness-team-brainstorming.jpg"
//           )}
//           {renderGridItem(
//             "Camera Lens",
//             "md:col-span-2 md:row-span-1 hover:scale-95 transition-all duration-300 ease-in-out",
//             "https://static3.depositphotos.com/1003924/172/i/450/depositphotos_1723004-stock-photo-objective.jpg"
//           )}
//         </div>

//         {isDetailView && (
//           <div
//             ref={detailViewRef}
//             className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 p-8 flex items-center justify-center z-50"
//           >
//             <div className="relative bg-gray-800 bg-opacity-70 rounded-2xl p-8 max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center">
//               <button
//                 className="absolute top-4 right-4 text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
//                 onClick={handleCloseDetailView}
//               >
//                 <XIcon className="h-8 w-8" />
//               </button>

//               {selectedCard?.type === "image" && (
//                 <img
//                   src={selectedCard.src}
//                   alt={selectedCard.title}
//                   className="max-w-full max-h-96 mb-6 rounded-lg object-contain transition-transform duration-500 ease-in-out"
//                 />
//               )}

//               <h2 className="text-4xl font-['comfortaa'] font-bold text-white">
//                 {selectedCard?.title}
//               </h2>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BentoGrid;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GridItem = ({ item, isSelected, onClick }) => (
  <motion.div
    layoutId={`item-${item.id}`}
    className={`p-4 cursor-pointer rounded-lg shadow-lg ${
      isSelected ? "absolute inset-0 z-20" : "bg-blue-200"
    }`}
    onClick={onClick}
    transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
  >
    {item.content}
  </motion.div>
);

const Grid = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    // Add more items as needed
  ];

  return (
    <div className="relative overflow-hidden max-w-4xl mx-auto h-[500px]">
      {/* A relatively positioned container that acts as a boundary for absolute positioning */}
      <div className="grid grid-cols-4 gap-4 p-4 h-full">
        {items.map((item) => (
          <GridItem
            key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            onClick={() =>
              setSelectedId(selectedId === item.id ? null : item.id)
            }
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={`item-${selectedId}`}
            className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg z-30 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setSelectedId(null)}
            >
              Close
            </button>
            <div>
              {/* Content of the expanded item */}
              {items.find((item) => item.id === selectedId).content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Grid;
