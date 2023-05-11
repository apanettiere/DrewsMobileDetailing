import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jet from "../../assets/jet.png";
import { BsFillTelephoneFill } from "react-icons/bs";

const Aircraft = () => {
  const isSmallScreen = window.innerWidth <= 480;

  const slideFromTopLeft = {
    hidden: {
      x: isSmallScreen ? ["-40%", "-40%"] : ["-30%", "-30%"],
      y: isSmallScreen ? ["-30%", "-30%"] : ["-80%", "-80%"],
      scale: [0.4, 0.4],
    },
    visible: isSmallScreen
      ? {
          x: "-2%",
          y: "-15%",
          scale: 0.5,
          transition: { duration: 1, ease: "easeInOut" },
        }
      : {
          x: "20%",
          y: "-62%",
          scale: 0.5,
          transition: { duration: 1, ease: "easeInOut" },
        },
  };

  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div className="bg-sky-background  md:bg-cover bg-auto md:bg-fixed bg-scroll bg-top bg-no-repeat text-white h-[600px]">
      <div className="section" id="aircraft">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="w-full sm:w-1/2 md:w-1/3 flex flex-col"
        >
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-center">
            System X Aircraft Ceramic{" "}
            <span className="text-primary">Coating</span>
          </div>
          <p className="text-md leading-7 text-white text-center">
            A breakthrough in aviation technology, System X creates a new super
            slick, brilliant, glossy shell that protects your aircraft from
            damaging UV rays, moisture, temperature extremes, and pollution.{" "}
            <br /> Contact for more details
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 p-2">
            <div className="flex gap-4 text-primary">
              <a
                href="tel:2393001782"
                className="text-white hover:scale-110 flex place-items-center gap-2"
              >
                <BsFillTelephoneFill className="text-primary" />
                (239)-300-1782
              </a>
            </div>
          </div>
        </motion.div>

        <div className="md:flex items-center justify-center">
          <motion.img
            ref={ref}
            src={jet}
            alt=""
            className="w-jet md:w-full"
            variants={slideFromTopLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
