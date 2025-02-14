import Image from 'next/image';
import NavOrbitIon, { DualOrbitIon } from './NavOrbitIon';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { config } from "./config";

export default function Sidebar({barStatus, setBarStatus}: { barStatus: boolean, setBarStatus: () => void}) {

  const sidebarVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.4 } }, // Start collapsed
    visible: { height: "75%", opacity: 1, transition: { duration: 0.5 } }, // Expand to full height
    exit: { height: 0, opacity: 0, transition: { duration: 0.6 } }, // Collapse back
  };

  const urls = config.urls;

  return (
    <>

    <ul className="sidebar md:left-10 fixed md:transform-none bottom-6
     bg-gradient-to-b from-gray-500/30 to-gray-800/50 backdrop-blur-sm backdrop-filter 
      p-3 flex flex-row w-10/12 sm:w-auto sm:flex-col gap-2 shadow-2xl rounded-full z-40 justify-evenly">
      {["whatsapp", "instagram", "facebook", "twitter"].map((bname, i) => {
        const url = process.env[`NEXT_PUBLIC_${bname.toUpperCase()}_URL`];
        console.log(url)
        return (<li key={i} className="bg-glow">
          <Link href={url as string || ""} target="_blank" 
      rel="noopener noreferrer">
            <Image src={`${bname}.png`} alt={`${bname} Icon`} width={32} height={32} className="w-8 h-8" />
          </Link>
        </li>);
})}
    </ul>

    <motion.div
      className="fixed md:transform-none bottom-6
      bg-black backdrop-blur-sm backdrop-filter 
      p-3 flex flex-col items-center sm:hidden w-10/12 sm:w-auto sm:flex-col shadow-2xl rounded-3xl z-50 justify-center gap-6 z-10 overflow-hidden"
      variants={sidebarVariants}
      initial="hidden"
      animate={barStatus ? "visible" : "hidden"}
      exit="exit"
    >
      <div
        onClick={setBarStatus}
        className="close bg-black shadow h-16 w-16 absolute rounded-full flex justify-center items-center -top-1/2"
      >
        <DualOrbitIon />
      </div>
      {urls.map((menu, i) => (
        <Link href={menu.uri}>
        <div key={i} className="p-4 cursor-pointer">
          <h2 className="text-center w-full text-gray-600 hover:text-white hover:text-xl transition-all duration-150 ease-in text-sm font-bold tracking-widest uppercase font-sans">
            {menu.nm}
          </h2>
        </div>
        </Link>
      ))}
    </motion.div>
    </>
  );
}
