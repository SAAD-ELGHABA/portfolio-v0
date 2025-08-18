import { motion } from "framer-motion";
import React, { useState } from "react";
import ModalGallery from "../ModalGallery";

function ServiceGallery({ images = [] ,service}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images?.length > 3
          ? images.slice(0, 3).map((img, index) =>
              index === 2 ? (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-auto relative"
                  whileHover={{ scale: 1.01 }}
                >
                  <img
                    src={img?.trim() ? img : "/bg.jpg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-38 object-cover"
                  />
                  <div
                    className="absolute w-full h-full bg-[#00000044] top-0 right-0 flex items-center justify-center text-white cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <span className="text-2xl font-black">
                      +{images?.length - 3}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-auto"
                  whileHover={{ scale: 1.01 }}
                >
                  <img
                    src={img?.trim() ? img : "/bg.jpg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-38 object-cover"
                  />
                </motion.div>
              )
            )
          : images?.map((img, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-auto"
                whileHover={{ scale: 1.01 }}
              >
                <img
                  src={img?.trim() ? img : "/bg.jpg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-38 object-cover"
                />
              </motion.div>
            ))}
      </div>
      <ModalGallery isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Gallery Service {service}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images?.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-auto max-h-50 overflow-auto"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={img?.trim() ? img : "/bg.jpg"}
                alt={`Gallery ${index + 1}`}
                className="w-full min-h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </ModalGallery>
    </div>
  );
}

export default ServiceGallery;
