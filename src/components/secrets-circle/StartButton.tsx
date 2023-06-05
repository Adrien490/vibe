import { motion } from 'framer-motion'
import React from 'react'
import { tapAnimation } from '~/hooks/useAnimation'
import useModalStore from '~/stores/useModalStore';
import { ChooseOptions } from './ChooseOptions';

export const StartButton = () => {
    const modal = useModalStore((state) => state);
  return (
    <motion.div
        onClick={()=>modal.open(<ChooseOptions></ChooseOptions>, 600)}
          whileTap={tapAnimation}
          className="flex items-center justify-center rounded-full bg-secondary p-3 text-white"
        >
          Go!
        </motion.div>
  )
}
