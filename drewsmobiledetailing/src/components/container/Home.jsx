import React from "react";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Home = () => {
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
    <div className="bg-hero-background bg-cover bg-fixed bg-top bg-no-repeat text-white">
      <div className="section" id="home">
        <div className="md:flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className=" bg-black bg-opacity-40 rounded-md p-1">
              <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
                Detail your car
                <br /> from the comfort <br /> of your home.
              </div>
              <p className="text-sm leading-7 text-white max-w-sm">
                Welcome to Drew's Mobile Detailing, where we bring your vehicle
                back to life! As a fully insured company, you can trust us to
                provide the best services for your car or boat. From basic
                washes to ceramic coatings, we offer everything you need to make
                your vehicle look brand new again. I am dedicated to providing
                the highest level of customer care, ensuring that every detail
                is taken care of to your satisfaction. Don't wait any longer,
                call or text us today at (239)- 300- 1782 to set up an
                appointment and experience the difference of Drew's Mobile
                Detailing.
              </p>
            </div>
          </motion.div>
          <div className="md:w-[60%]">
            <img src={hero} alt="" />
          </div>
        </div>
        <div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex items-center justify-center flex-wrap gap-8 p-6"
          >
            <div className="flex gap-4 text-primary">
              <a
                href="tel:2393001782"
                className="text-white hover:scale-110 flex place-items-center gap-2"
              >
                <BsFillTelephoneFill className="text-primary" />
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
      </div>
    </div>
  );
};

export default Home;
