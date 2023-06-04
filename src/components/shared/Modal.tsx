import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { modalVariants } from "~/hooks/useAnimation";
import useModalStore from "~/stores/useModalStore";

const Modal = () => {
  const modal = useModalStore((state) => state);

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    const velocityY = Math.abs(info.velocity.y);

    if (velocityY > 600 && info.offset.y > 0) {
      modal.close();
    }
  };

  return (
    <>
      <AnimatePresence>
        {modal.isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => modal.close()}
            variants={modalVariants}
            className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center overflow-hidden bg-blue-900"
          >
            <motion.div
              className={`absolute absolute bottom-0 w-full overflow-y-auto overflow-y-auto overscroll-contain bg-background p-2 shadow-xl`}
              style={{
                height: modal.height,
              }}
              initial={{ y: "1000px" }}
              animate={{ y: 0 }}
              onClick={(e) => e.stopPropagation()}
              exit={{ y: "1000px" }}
              transition={{ duration: 0.3 }}
              drag="y" // Enable vertical drag
              dragConstraints={{ top: 0, bottom: 300 }}
              dragSnapToOrigin={true}
              onDragEnd={handleDragEnd}
            >
              {modal.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
