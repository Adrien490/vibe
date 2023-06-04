import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { DeviceSelection } from "~/components/secrets-circle/DeviceSelection";

export default function SecretsCircle() {
  return (
    <>
      <div className="relative flex h-20 justify-center p-2">
        <h2 className="text-center text-3xl text-white">Cercle des secrets</h2>
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="h-[calc(100vh_-_240px)] flex flex-col py-8 gap-8 justify-center items-center overflow-y-auto">
        <DeviceSelection></DeviceSelection>
        
        
      </div>
      
    </>
  );
}
