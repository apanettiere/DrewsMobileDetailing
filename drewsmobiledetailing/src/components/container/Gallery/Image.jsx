import React from "react";
import { motion } from "framer-motion";

const Image = ({ photos }) => {
  const animationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <motion.div
          key={`${photo.id}-${index}`}
          className="bg-gray-200 rounded overflow-hidden text-center p-4"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <img
            src={
              photo.media_type === "IMAGE"
                ? photo.media_url
                : photo.thumbnail_url
            }
            alt={photo.caption || "Instagram Photo"}
            className="w-full h-auto"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Image;
