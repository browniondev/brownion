"use client";

export default function Home() {
  return (
    <>
      <div className="cont flex-grow grid grid-cols-12 lg:grid-rows-9 sm:grid-rows-9 mx-auto gap-3">
        {/* Row 1 */}
        <div className="content col-span-12 sm:col-span-8 sm:row-span-2 md:row-span-3 bg-red border rounded-2xl relative z-0">
          <div className="controls absolute flex gap-4">
            <div>
              fullscreen
            </div>
          </div>
          <video
            src="/showreel.mp4"
            autoPlay
            loop
            muted
            className="bigger rounded-xl w-full mx-auto h-auto object-cover"
          />
        </div>
        <div className="content col-span-6 sm:row-span-1 sm:col-span-4 md:row-span-2 bg-red p-2 rounded-2xl">
          <h2 className="montserrat-bold">Design. Develop. Deliver.</h2>
        </div>
        {/* Row 2 */}
        <div className="content col-span-6 sm:col-span-8 sm:row-span-1 md:col-span-4 md:row-span-3 bg-red border rounded-2xl">
          Services
        </div>
        <div className="content col-span-12 sm:col-span-4 sm:row-start-2 sm:col-start-9 sm:row-span-2 md:col-span-6 md:row-span-2 bg-red border rounded-2xl">
          Projects
        </div>
        <div className="content col-span-4 sm:row-span-2 sm:col-span-4 md:col-span-2 bg-red md:row-span-2 border rounded-2xl">
          Tech stack/switch control
        </div>
        {/* Row 3 */}
        <div className="content col-span-12 row-span-1 bg-red border rounded-2xl">
          For logos of company worked with
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
