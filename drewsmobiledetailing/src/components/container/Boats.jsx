import React from "react";
import boat from "./../../assets/boat.avif";
import { boats } from "../../Data";
import marine from "./../../assets/marine.pdf";
import Services from "./Course/Services";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Boats = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const slideFromLeft = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const [ref1, inView1] = useInView({ threshold: 0.1 });

  return (
    <div className="section" id="boats">
      <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
        <span className="text-primary">Boats</span>
      </div>
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="md:w-3/4">
          <motion.img
            ref={ref1}
            src={boat}
            alt="boat"
            variants={slideFromLeft}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
          />
        </div>
        <div className="pl-5">
          <div className="pl-5">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              System X Ceramic <span className="text-primary">Coating</span>
            </div>
            <p className="text-sm leading-7 mb-5">
              Whether at sea or the dock, System X creates a super slick,
              brilliant, glossy shell - protecting your boat or yacht from
              damaging UV rays, salt spray, temperature extremes, and pollution.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-6 mb-6">
        {/* Display the 'marine' PDF */}
        <embed
          className="w-full h-[75vh]" // 75% of the viewport height
          src={marine} // The source of your 'marine' PDF
          type="application/pdf"
        />
      </div>
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-primary">Services</span>
        </div>
        <p className="text-sm leading-7 max-w-[700px] mx-auto"></p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {boats.map((boat) => {
          const [ref, inView] = useInView({ threshold: 0.1 });

          return (
            <motion.div
              key={boat.id} // Moved the key prop here
              ref={ref}
              variants={item}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Services {...boat} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Boats;
