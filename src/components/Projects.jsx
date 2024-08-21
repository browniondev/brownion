import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const BentoGrid = () => {
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const detailViewRef = useRef(null);

  const handleCardClick = (card) => {
    if (window.innerWidth >= 768) {
      let content;
      switch (card) {
        case "Web Design":
        case "VFX and Video Editing":
        case "laptop+mobile":
        case "Screen":
        case "Diamond":
        case "Team":
        case "Camera Lens":
          content = {
            title: card,
            type: "image",
            src: getImageSource(card),
          };
          break;
        case "OUR SERVICES":
          return; // No action for this card
        default:
          return;
      }

      // Use View Transition API if supported
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          setSelectedCard(content);
          setIsDetailView(true);
        });
      } else {
        setSelectedCard(content);
        setIsDetailView(true);
      }
    }
  };

  const getImageSource = (card) => {
    const sources = {
      "Web Design": "laptop.jpeg",
      "VFX and Video Editing":
        "https://corcel.b-cdn.net/0bd20164-7796-4719-9a3d-8c2b704a5afd.webp",
      "laptop+mobile": "laptop+mobile.png",
      Screen:
        "https://static.wixstatic.com/media/3d4741_24fdf078640e41478b7f46b4f399a7bb~mv2.png/v1/fill/w_282,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/laptop_reflection_screen_mockup-min.png",
      Diamond:
        "https://st.depositphotos.com/1516544/4759/i/450/depositphotos_47594847--diamond-ring-on--black--background-with-high-quality.jpg",
      Team: "https://st2.depositphotos.com/2931363/11075/i/450/depositphotos_110757274-stock-photo-buiness-team-brainstorming.jpg",
      "Camera Lens":
        "https://static3.depositphotos.com/1003924/172/i/450/depositphotos_1723004-stock-photo-objective.jpg",
    };
    return sources[card] || "";
  };

  const handleCloseDetailView = () => {
    hideDetailView();
  };

  const hideDetailView = () => {
    if (!detailViewRef.current) return;

    gsap.to(detailViewRef.current, {
      duration: 0.5,
      width: 0,
      left: "100%",
      ease: "back.in(1.7)",
      onComplete: () => {
        setIsDetailView(false);
        setSelectedCard(null);
        gsap.to("body", {
          duration: 0.5,
          backgroundColor: "#000",
          ease: "power2.in",
        });
      },
    });
  };

  useEffect(() => {
    if (isDetailView && detailViewRef.current) {
      gsap.set(detailViewRef.current, {
        width: 0,
        display: "flex",
      });

      gsap.to(detailViewRef.current, {
        duration: 0.5,
        width: "100%",
        ease: "back.out(1.7)",
      });

      gsap.to("body", {
        duration: 0.5,
        backgroundColor: "#1a1a1a",
        ease: "power2.out",
      });
    }
  }, [isDetailView]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseDetailView();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const renderGridItem = (title, span = "", image = null) => {
    const isTextBox = !image;

    return (
      <div
        className={`${span}  bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-800 cursor-pointer relative group overflow-hidden`}
        onClick={() => handleCardClick(title)}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0`}
          />
        ) : (
          <p className="text-md font-['comfortaa'] text-center group-hover:text-lg whitespace-break-spaces transform transition-all duration-300">
            {title}
          </p>
        )}
        {isTextBox && (
          <span className="absolute right-3 top-3 opacity-0 text-white transform transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-150 group-hover:opacity-100">
            <IoMdArrowForward />
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="bg-black text-white p-4 font-sans relative md:w-[87.5%] min-h-screen mt-20 overflow-hidden">
      <div className="flex h-full w-full items-center justify-center relative">
        <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-5 w-full">
          {renderGridItem(
            "Web Design",
            "md:col-span-2 md:row-span-2 hover:scale-95 transition-all duratino-300 ease-in-out",
            "laptop.jpeg"
          )}
          {renderGridItem(
            "VFX and Video Editing",
            "md:col-span-1 md:row-span-1 hover:scale-95 transition-all duratino-300 ease-in-out",
            "https://corcel.b-cdn.net/0bd20164-7796-4719-9a3d-8c2b704a5afd.webp"
          )}
          <div className="md:col-span-2 md:row-span-1 bg-black bg-opacity-30 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-800 group transition-all duration-300 ease-in-out">
            <ul className="mt-2 text-center">
              <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
                Web Design
              </li>
              <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
                VFX and Video Editing
              </li>
              <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
                Social Media Marketing
              </li>
              <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
                Branding
              </li>
              <li className="text-2xl font-['comfortaa'] transition-all duration-300 ease-in-out transform group-hover:scale-75 hover:!scale-110 cursor-pointer">
                App Development
              </li>
            </ul>
          </div>
          {renderGridItem(
            "Tech Stack",
            "md:col-span-1 md:row-span-2 hover:scale-95 transition-all duration-300 ease-in-out",
            "https://media.licdn.com/dms/image/D4D12AQFJWfUQaQ1qPg/article-cover_image-shrink_600_2000/0/1675674296261?e=2147483647&v=beta&t=zcfSqc5__VRvgFu6e6Ll8vL4xNP_PYnbQYG4YpL9ysE"
          )}
          {renderGridItem(
            "laptop+mobile",
            "md:col-span-1 md:row-span-3 hover:scale-95 transition-all duratino-300 ease-in-out",
            "laptop+mobile.png"
          )}
          {renderGridItem(
            "Screen",
            "md:col-span-1 md:row-span-2 hover:scale-95 transition-all duratino-300 ease-in-out",
            "https://static.wixstatic.com/media/3d4741_24fdf078640e41478b7f46b4f399a7bb~mv2.png/v1/fill/w_282,h_226,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/laptop_reflection_screen_mockup-min.png"
          )}
          {renderGridItem(
            "Diamond",
            "md:col-span-1 md:row-span-2 hover:scale-95 transition-all duratino-300 ease-in-out ",
            "https://st.depositphotos.com/1516544/4759/i/450/depositphotos_47594847--Screen-ring-on--black--background-with-high-quality.jpg"
          )}
          {renderGridItem(
            "Contact",
            "md:col-span-1 md:row-span-1 hover:scale-95 transition-all duratino-300 ease-in-out"
          )}
          {renderGridItem(
            "Team",
            "md:col-span-1 md:row-span-1 hover:scale-95 transition-all duratino-300 ease-in-out",
            "https://st2.depositphotos.com/2931363/11075/i/450/depositphotos_110757274-stock-photo-buiness-team-brainstorming.jpg"
          )}
          {renderGridItem(
            "Camera Lens",
            "md:col-span-1 md:row-span-1 hover:scale-95 transition-all duratino-300 ease-in-out",
            "https://static3.depositphotos.com/1003924/172/i/450/depositphotos_1723004-stock-photo-objective.jpg"
          )}
          {renderGridItem(
            " Build your brand",
            "md:col-span-1 md:row-span-1 text-center hover:scale-95 transition-all duratino-300 ease-in-out"
          )}
        </div>
      </div>

      {isDetailView && (
        <div
          ref={detailViewRef}
          className="absolute inset-0 bg-black bg-opacity-80 hidden md:flex items-center justify-center z-50"
        >
          <div className="bg-black p-8 rounded-lg w-[95%] h-[85%] overflow-auto relative border border-gray-800">
            <button
              className="absolute top-4 left-4 bg-gray-900 rounded-full p-3 px-4 leading-none text-white duration-200 hover:text-gray-500"
              onClick={handleCloseDetailView}
            >
              <IoMdClose size={15} /> {/* Use IoMdClose here */}
            </button>
            {selectedCard && selectedCard.type === "image" ? (
              <img
                src={selectedCard.src}
                alt={selectedCard.title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <p className="mt-4 text-lg">
                {selectedCard && selectedCard.text}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BentoGrid;
