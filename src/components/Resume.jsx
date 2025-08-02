import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function Resume({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => onClose(false)}
          style={{zIndex:1000}}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 max-w-lg w-full shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Resume</h2>
            <p className="text-gray-700 text-center">
              This is your resume modal content.
            </p>
            <button
              className="mt-6 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all block mx-auto"
              onClick={() => onClose(false)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Resume;
