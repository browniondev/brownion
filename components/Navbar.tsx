"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import MobileView from "./views/mobileView";
import DesktopView from "./views/desktopView";
import TabView from "./views/tabView";

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  const isAboutPage = pathname === "/about"; // Check if the route is /about

  const letterAnimation = {
    initial: { opacity: 1, y: 0, x: 0, scale: 1 },
    clicked: (i: number) => ({
      opacity: 1,
      y: i * 70, // Moves letters down sequentially
      x: -i * 9.5, // Shifts each letter horizontally to align vertically
      scale: 3.5, // Scale up the text
      transition: {
        delay: i * 0.1, // Stagger the animation for each letter
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  return (
    <nav className="font-serif font-bold w-full py-4 flex justify-between lg:px-8">
      <h1 className="text-2xl">br.</h1>
      <ul className="font-sans font-semibold uppercase text-xs tracking-wide flex gap-10">
        <li>menu</li>
        <li>projects</li>
        <li>join us</li>
        <li>
          <TabView>
            <Link href="/about" passHref>
              <motion.div
                className="ml-4 inline-block cursor-pointer"
                style={{ display: "inline-flex", flexDirection: "row" }}
              >
                {"about".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    custom={index}
                    initial="initial"
                    animate={isAboutPage ? "clicked" : "initial"} // Change animation based on route
                    variants={letterAnimation}
                  >
                    {char === " " ? "\u00A0" : char} {/* Handle spaces */}
                  </motion.span>
                ))}
              </motion.div>
            </Link>
          </TabView>
          <DesktopView>
            <Link href="/about" passHref>
              <motion.div
                className="ml-4 inline-block cursor-pointer"
                style={{ display: "inline-flex", flexDirection: "row" }}
              >
                {"about".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    custom={index}
                    initial="initial"
                    animate={isAboutPage ? "clicked" : "initial"} // Change animation based on route
                    variants={letterAnimation}
                  >
                    {char === " " ? "\u00A0" : char} {/* Handle spaces */}
                  </motion.span>
                ))}
              </motion.div>
            </Link>
          </DesktopView>
          <MobileView>
            <Link href="/about" passHref>
              <motion.div
                className={`ml-1 inline-block  cursor-pointer ${
                  isAboutPage
                    ? "pl-6 text-white h-screen fixed right-0 flex justify-center pt-12 items-start top-0 w-[55px]"
                    : "  "
                }`}
                initial={{ opacity: 0 }} // Initial opacity
                animate={{ opacity: isAboutPage ? 1 : 1 }} // Animate opacity based on isAboutPage
                transition={{ duration: 0.5 }} // Smooth transition
                style={{
                  backgroundColor: isAboutPage ? "black" : "transparent",
                  color: isAboutPage ? "white" : "black", 
                  display: "inline-flex",
                  flexDirection: "row",
                }}
              >
                {"about".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    custom={index}
                    initial="initial"
                    animate={isAboutPage ? "clicked" : "initial"} // Change animation based on route
                    variants={letterAnimation}
                  >
                    {char === " " ? "\u00A0" : char} {/* Handle spaces */}
                  </motion.span>
                ))}
              </motion.div>
            </Link>
          </MobileView>
        </li>
      </ul>
    </nav>
  );
}
