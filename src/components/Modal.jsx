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

const modal = {
  hidden: {
    y: "-110vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.6 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => setShowModal(false);
  const closeModalEsc = (e) => {
    console.log(e.keyCode, e.key)
    if (e.keyCode === 27) {
      setShowModal(false);
    }
  }
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
          onKeyDown={closeModal}
          // onKeyDown={() => closeModalEsc()}
          tabIndex={0}
        />
      )}
    </AnimatePresence>
  );
};

export default Modal;
