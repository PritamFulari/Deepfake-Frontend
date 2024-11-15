import React, { useState, useEffect } from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Separator } from "@/components/ui/separator.jsx";
import { Link } from "react-router-dom";
import { NavbarMenu } from "@/lib/data";
import { MdMenu } from "react-icons/md";
import Register from "./Register.jsx";
import { PiSparkleFill } from "react-icons/pi";

const Navbar = () => {
  const [open, setOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(false); 

  // Detect screen size changes to toggle mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Assume 768px as the breakpoint for mobile
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="py-4 bg-magenta text-white ">
      <nav>
        <div className="container flex justify-between">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <PiSparkleFill />
            DeepFake<span className="text-secondary">Detector</span>
          </div>

          {/* Menu section (Desktop and larger screens) */}
          <div className=" py-2 hidden md:block">
            <ul className="flex items-center gap-8">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="inline-block hover:text-primary font-semibold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons section */}
          <div className="flex items-center gap-4">
            <div className="text-2xl justify-center px-4 py-2 hover:bg-primary hover:text-white rounded-md duration-200 hidden md:block">
              <Register />
            </div>
          </div>

          {/* Mobile hamburger menu section */}
          {isMobile && (
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          )}
        </div>
      </nav>

      {/* Render the responsive menu only on mobile */}
      {isMobile && <ResponsiveMenu open={open} />}
      <Separator />
    </header>
  );
};

export default Navbar;
