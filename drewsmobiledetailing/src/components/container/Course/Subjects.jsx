import React from "react";
import { services } from "../../../Data";
import Services from "./Services";

import ceramic from "../../../assets/ceramic.png";
import ceramic1 from "../../../assets/ceramic1.png";
import ResponsiveEmbed from "react-responsive-embed";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Subjects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const slideFromRight = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const slideFromLeft = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  return (
    <div className="section" id="cars">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-primary">Services</span>
        </div>
        <p className="text-sm leading-7 mx-auto"></p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8"
      >
        {services.map((service, index) => {
          const [ref, inView] = useInView({ threshold: 0.1 });

          return (
            <motion.div
              ref={ref}
              variants={item}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Services key={service.id} {...service} />
            </motion.div>
          );
        })}
      </motion.div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Add On <span className="text-primary">Services</span>
      </div>
      <div className="mt-12  mx-auto">
        <div>
          <div className="font-bold text-lg mb-2">Shampoo Treatment</div>
          <div className="text-sm leading-7 mb-5">
            Shampoo treatment for cloth seats and any carpet in the vehicle! The
            treatment helps reduce smells, remove stains, and maintain
            longevity.
            <br />
            <span className="font-bold text-sm">
              Prices: Sedan/Coup- $30 Suv/Truck- $50
            </span>
          </div>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">Steam Clean</div>
          <div className="text-sm leading-7 mb-5">
            Steam cleaning your vehicle is a great way to remove hard stains
            while sanitizing all surfaces at the same time without any harmful
            chemicals. The interior including carpets, cloths, dash, cup
            holders, air vents, and crevices will be steam cleaned.
            <br />
            <span className="font-bold text-sm">
              Prices: Sedan/Coup- $80 Suv/Truck- $100
            </span>
          </div>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">Odor Removal</div>
          <div className="text-sm leading-7 mb-5">
            This treatment removes all odors that may be present such as
            cigarette, mold, musty, and foul smells. The method used is called
            Ozone treatment. The Ozone treatment is a proven way to remove all
            odors. After the treatment is finished the vehicle will need to have
            the doors open and air out for two hours. After two hours it is safe
            to drive! For the following 4-8 hours there will be the slightest
            "ozone smell". After that time period, the vehicle smells new every
            time! This treatment is
            <br />
            <span className="font-bold text-sm">
              Price: $80 (for all vehicle sizes!)
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm leading-7  mx-auto pt-8">
        <div className="grid sm:grid-cols-2 place-items-center gap-8">
          <div className="">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              <span className="text-primary">Polish</span>
            </div>
            <div className="text-sm leading-7  mb-5">
              <>
                If your paint is looking a little dull, a polish will fix that!
                Polish gives your vehicle a great shine and removes those
                annoying spiderweb scratches. When you get a polish service, we
                always put a beautiful coat of wax on after for free! It will
                break down the clear coat of your paint (to remove the dull look
                and scratches), and the wax will add a layer of protection to
                your paint. A one-step polish process is for vehicles that have
                very light scratches and a slight dull look. A two-step polish
                is for a vehicle that has many light to medium scratches and a
                dull look. Prices may vary slightly due to the size of the
                vehicle. Call or text for estimates
              </>
              <br />
              <span className="font-bold text-md">Pricing: </span>
              <br />
              One-Step Polish: Sedan- $200 SUV/Truck- $240 Two-Step Polish:
              Sedan- $280 SUV/Truck- $340 Call or Text for boats
              <br />
              *Evaluation &amp; Recommendation Upon Arrival*
            </div>
          </div>
          <motion.img
            ref={ref1}
            src={ceramic1}
            alt="ceramic"
            variants={slideFromRight}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
          />
          <a href="https://www.systemx.com/">
            <motion.img
              ref={ref2}
              src={ceramic}
              alt="ceramic"
              variants={slideFromLeft}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            />
          </a>

          <div className="">
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              Introducing System X Ceramic{" "}
              <span className="text-primary">Coating</span>
            </div>
            <div className="text-sm leading-7 mb-5">
              <>
                Upgrade your vehicle's protection and shine with advanced System
                X Ceramic Coatings. These semi-permanent coatings form an
                inseparable molecular bond with your vehicle's paintwork,
                providing an unmatched level of protection that won't wash off
                like traditional waxes or sealants. System X Ceramic Coatings
                offer exceptional durability and color-enhancing gloss for all
                exterior surfaces, including paint, metal, exhaust, stainless
                steel, and wheels. Unlike conventional ceramic coatings, the
                unique properties of System X make it a top choice for
                long-lasting protection and a stunning finish.
              </>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4 md:w-3/5 mx-auto mt-6">
          <ResponsiveEmbed
            ratio="16:9"
            src="https://www.youtube.com/embed/AWEx_ChGtV4"
          />
        </div>
      </div>
    </div>
  );
};

export default Subjects;
