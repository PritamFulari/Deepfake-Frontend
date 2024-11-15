import React from "react";
import { NavbarMenu } from "@/lib/data";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-10 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10  m-6 rounded-3xl">
            <ul className=" flex flex-col justify-center  items-center gap-2">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block  font-semibold  "
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
