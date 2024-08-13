import React from "react";

const FeaturedWork = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
      
      }}
      className="font-['comfortaa'] bg-black text-white min-h-screen w-full flex items-center justify-center p-4 py-20"
    >
      <div className="max-w-4xl w-full relative z-2">
        <div className="absolute z-2 top-2/3 -translate-y-1/2 right-48 hidden md:block">
          <img
            className="w-64 h-64 rotate-90"
            src="./CircleGraphic.svg"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light mb-8 md:mb-16">
            Featured Work
            <span className="block w-1/3 h-0.5 bg-white mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className={`border border-white bg-black p-4 md:p-6 aspect-[3/4] flex flex-col justify-between ${
                  index === 1 ? "" : "sm:mt-24 md:mt-48"
                }`}
              >
                <div className="h-full"></div>
                <div className="flex justify-end">
                  <span className="text-2xl md:text-3xl">&gt;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
