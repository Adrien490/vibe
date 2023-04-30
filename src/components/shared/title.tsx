import React from "react";
import { motion } from "framer-motion";

// Importer les styles pour l'effet 3D

export const Title = () => {
  // Animation avec Framer Motion

  return (
    <motion.h1
      className="text-primary text-5xl border-4 border-primary rounded-3xl p-5 tracking-wider three-d-title"
     
    >
      VIBES
    </motion.h1>
  );
};
