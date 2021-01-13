import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Modal = ({ showModal, setShowModal }) => (
  <AnimatePresence exitBeforeEnter>
    {showModal && (
      <motion.div
        className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
      />
    )}
  </AnimatePresence>
);

export default Modal;
