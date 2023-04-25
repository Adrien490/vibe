
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface GameItemProps {
  title: string;
  description: string;
  image_url: string;
  redirect_url: string;
}

export default function GameItem({ title, description, image_url, redirect_url }: GameItemProps) {
  const router = useRouter();
  const tapAnimation = {
    scale: 0.95,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
  };
  return (
    <motion.div onClick={()=>router.push(redirect_url)} className="relative h-28 shadow-md bg-white mx-auto border lg:w-80 p-2 w-4/5 border-4 text-white border-white border-1 border-secondary rounded-xl"
    initial={{ scale: 1, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}
      whileTap={tapAnimation}>
      <div className="flex items-center h-full">
        <div className="w-1/3 h-full relative">
          <Image
            src={image_url}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-l-xl"
          />
        </div>
        <div className="w-2/3 h-full px-4">
          <h3 className="text-black font-semibold">{title}</h3>
          <p className="text-black text-sm mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
