import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="bg-primary p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md: text-sm">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8"
        >
          <div className="flex gap-4 text-white">
            <a
              href="tel:2393001782"
              className="text-white hover:scale-110 flex place-items-center gap-2"
            >
              <BsFillTelephoneFill />
              (239)-300-1782
            </a>
            <a
              href="https://www.facebook.com/DrewsMobileDetailing8/"
              className="hover:scale-110 text-xl"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/drews.mobile.detailing/"
              className="hover:scale-110 text-xl"
            >
              <BsInstagram />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mt-4 text-sm text-white text-center">
        <p>
          Offering mobile detailing services in Naples, Florida. We provide
          top-quality and professional mobile detailing for your convenience.
        </p>
      </div>
      <div className="mt-8 flex justify-center text-sm text-white">
        <p>
          &copy; {new Date().getFullYear()} Drew's Mobile Detailing. All rights
          reserved.
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
