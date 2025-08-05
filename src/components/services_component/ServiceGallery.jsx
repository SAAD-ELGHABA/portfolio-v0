import { motion } from "framer-motion";
import React from "react";

function ServiceGallery({ images = [] }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={img?.trim() ? img : "/bg.jpg"}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServiceGallery;
