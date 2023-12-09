import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { AiOutlineMenu } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import logo from "../../assets/logo.avif";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg  bg-primary" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <Link to="home" spy={true} smooth={true} duration={500} offset={-50}>
            <div className="flex items-center gap-2 h-10">
              <img src={logo} alt="" className="w-full object-cover" />
            </div>
          </Link>
          <Link to="home" spy={true} smooth={true} duration={500} offset={-50}>
            <div className="sm:flex items-center hidden font-bold text-white pr-4">
              Drew's Mobile Detailing
            </div>
          </Link>

          <div className="sm:flex items-center hidden text-white text-sm">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>

          <div className=" font-bold sm: text-sm">
            <a
              href="tel:2393001782"
              className="text-white hover:scale-110 flex place-items-center gap-2"
            >
              <BsFillTelephoneFill className="" />
              (239)-300-1782
            </a>
          </div>

          <div className="flex items-end gap-4">
            <AiOutlineMenu
              className="text-3xl sm:hidden cursor-pointer text-white"
              onClick={() => setToggle(true)}
            />
          </div>
          {toggle && (
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 right-0 z-20 bg-primary text-white flex flex-col justify-top  py-24 items-center shadow-lg gap-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}

              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
