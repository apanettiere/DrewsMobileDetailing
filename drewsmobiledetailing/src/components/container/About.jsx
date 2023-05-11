import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";
import { logos } from "../../Data";

const About = () => {
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
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="about">
      <div className="gap-8 place-items-center">
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
            About <span className="text-primary">Drew's Mobile Detailing</span>
          </div>
          <p className="text-md leading-7 mb-4">
            Here at Drew's Mobile Detailing, we offer the best services to make
            your vehicle look new again. A company you can trust that is fully
            insured. We do everything from basic washes to ceramic coatings. If
            you want your car or boat done we are the company for you! If you
            want the best customer care and services, call or text today to set
            up an appointment (239)- 300- 1782.
          </p>

          <div className="mt-12 max-w-[700px] mx-auto flex flex-wrap justify-center gap-8">
            <Accordion
              id={1}
              title="We Come To You"
              content="Drew's Mobile Detailing is self-efficient with our own water making it easy to go to any location. All is needed is a common electrical outlet within 200 feet. Whether you're at home, work, in a meeting, or just relaxing at home, we will come to you making your vehicle spotless!"
            />
            <Accordion
              id={2}
              title="Licensed & Insured"
              content="For your confidence and your protection, Drew's Mobile Detailing is fully licensed and insured!"
            />
            <Accordion
              id={3}
              title="Areas we service"
              content="We service 30+ miles away from Naples, which includes Naples, Bonita, Marco Island, Estero, Ave Maria, and Fort Myers."
            />
            <Accordion
              id={4}
              title="Professionalism"
              content="Drew's Mobile Detailing has a personal connection with ALL of its customers. We make sure all are your needs are satisfied with proper etiquette and manners."
            />
          </div>
        </div>
        <div className="place-items-center">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
            Brands We Have <span className="text-primary">Detailed</span>
          </div>
          <p className="text-md leading-7 mb-4">
            Our versatile services cater to a wide range of vehicles, ensuring
            that we meet the needs of all our clients. Whether you own a vintage
            muscle car, a sleek sports car, or a family SUV, we have the
            expertise and equipment to provide top-quality detailing services.
          </p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex items-center justify-center flex-wrap gap-8 p-6"
          >
            {logos.map((logo, index) => (
              <motion.div variants={item} className="w-28" key={index}>
                <img src={logo} alt="" className="w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
