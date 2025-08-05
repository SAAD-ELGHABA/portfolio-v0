import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PDFViewer from "./PDFViewer";
import { X } from "lucide-react";

function Resume({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => onClose(false)}
          style={{zIndex:1000}}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[90vh] overflow-y-auto custom-scrollbar p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-center w-full">
                My Resume
              </h2>
              <button
                className="absolute top-4 right-4 p-2 rounded-full z-50 bg-gray-400 hover:bg-blue-600 transition-colors text-white"
                onClick={() => onClose(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="w-full">
              <PDFViewer path="/cv-07-28-25.pdf" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Resume;
