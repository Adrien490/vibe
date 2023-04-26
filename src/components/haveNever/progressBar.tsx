import { motion } from 'framer-motion'
import React from 'react'

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar = ({progress}: ProgressBarProps) => {
  return (
    <div className="mt-3 rounded-xl w-1/2 bg-gray-300 h-2">
          <motion.div
            className="bg-primary h-2"
            style={{ width: `${Math.min(progress, 100)}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
  )
}
