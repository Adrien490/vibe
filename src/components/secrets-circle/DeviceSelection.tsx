import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React from 'react'
import { listVariants, tapAnimation } from '~/hooks/useAnimation'

export const DeviceSelection = () => {
    const router = useRouter();
    const options = [
        {
            title: "Plusieurs téléphones",
            description: "Jouez en simultané sur plusieurs téléphones (pas encore disponible mais ça arrive tqt).",
            link: "/secrets-circle/"
        },
        {
            title: "Un téléphone",
            description: "Jouez sur un seul téléphone. Le créateur de la partie lira chacune des questions.",
            link: "/secrets-circle/single-device"
        }
    ]
  return (
    <div className='flex flex-col gap-8 w-full'>
        {options.map((option, index) => (
        <motion.div
        onClick={()=>router.push(option.link)}
          className="w-4/5 rounded-2xl mx-auto bg-white px-4 py-4"
          key={index}
          variants={listVariants}
          initial="hidden"
      whileTap={tapAnimation}
          animate="visible"
          custom={index}
          exit="hidden"
        >
          <div className='flex flex-col gap-8 text-center'>
            <div className='text-primary font-semibold text-2xl'>{option.title}</div>
            <div className='text-black text-sm italic break-words'>{option.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
