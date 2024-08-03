import { motion } from "framer-motion";

const Contact = () => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 `;

  return (
    <section
      id="free quote"
      className="w-full min-h-screen flex items-center justify-center text-center"
    >
      <div className="w-full max-w-3xl">
        <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-center">
          <span className="text-primary">Contact</span>
        </div>
        <motion.div>
          {/* HEADER */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          ></motion.div>

          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <iframe
                className="w-full mb-10 h-[800px] md:w-[800px] md:h-[800px] border-0"
                src="https://form.jotform.com/242151536286153"
                title="Contact Form"
                allowFullScreen
              ></iframe>
            </motion.div>

            <motion.div
              className="relative mt-16 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
