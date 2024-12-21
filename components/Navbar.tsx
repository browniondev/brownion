import { useState } from "react";

export default function Navbar() {

  const [openBar, setOpenBar] = useState(false);
  const openSidebar = () => setOpenBar(true);

  return (
    <nav className="font-serif font-bold w-full py-4 flex justify-between lg:px-8">
      <h1 className="text-2xl">br.</h1>
      <div className="lg:hidden">
        <button className="hamburger-menu" onClick={openSidebar}>
          <img src="/apps.svg" height={32} width={32} />
        </button>
      </div>
      <ul className="font-sans font-semibold uppercase text-xs tracking-wide gap-10 hidden md:flex"><li>menu</li><li>projects</li><li>join us</li><li>about us</li></ul>
      {openBar && <section className="sidebar bg-black top-0 left-0 z-50 fixed w-full h-full p-4">

      </section> }
    </nav>
  );
}

