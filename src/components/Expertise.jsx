import React from "react";

const ExpertiseComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
       
      }}
      className=" font-['comfortaa'] bg-black text-white min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-4xl w-full relative z-2">
        <div className="absolute z-2 bottom-0 left-20 ">
          <img
            className="w-64 h-64 -rotate-180"
            src="./CircleGraphic.svg"
            alt=""
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light mb-16">
            OUR EXPERTISE
            <span className="block w-1/3 h-0.5 bg-white mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className={`border border-white bg-black p-6 aspect-[3/4] flex flex-col justify-between ${
                  index === 1 ? "mt-16" : ""
                }`}
              >
                <div className="h-full"></div>
                <div className="flex justify-end">
                  <span className="text-3xl">&gt;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseComponent;
