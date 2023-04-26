import { AnimatePresence, motion } from "framer-motion";
import { modalVariants } from "../../hooks/useAnimation";

interface ModalProps {
  onClose: () => void;
  width: string;
  height?: number;
  className: string;
  modalIsOpen: boolean;
  children: React.ReactNode;
  position?: "top" | "bottom" | "center";
}

const Modal = ({
  onClose,
  width,
  height,
  modalIsOpen,
  children,
  className,
  position = "bottom",
}: ModalProps) => {

  const positionClass = () => {
    switch (position) {
      case "top":
        return "items-start";
      case "bottom":
        return "items-end";
      case "center":
        return "items-center";
      default:
        return "items-end";
    }
  };

  return (
    <>
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex ${positionClass()} justify-center z-20`}
            onClick={onClose}
          >
            <motion.div
              className={`bg-background relative p-3 max-h-screen overflow-y-auto ${className}`}
              onClick={(e) => e.stopPropagation()}
              style={{ width: width, height: height }}
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
