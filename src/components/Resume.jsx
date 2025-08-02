import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PDFViewer from "./PDFViewer";
import { X } from "lucide-react";

function Resume({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => onClose(false)}
          style={{ zIndex: 1000 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className=" rounded p-8 min-w-lg w-[90%] shadow-xl h-[90vh] overflow-auto custom-scrollbar bg-white"
          >
            <div className="flex items-center w-full justify-between mb-4">
              <h2 className="text-2xl font-bold  text-center">My Resume</h2>
              <button
                className="px-2 py-2 rounded-full bg-gray-300 text-white hover:bg-blue-700 transition-all block"
                onClick={() => onClose(false)}
              >
                <X/>
              </button>
            </div>
            <PDFViewer path={"/cv-07-28-25.pdf"} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Resume;
