import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { SecretsCircleAddPlayerForm } from "~/components/secrets-circle/SecretsCircleAddPlayerForm";
import { SecretsCirclePlayersList } from "~/components/secrets-circle/SecretsCirclePlayersList";

export default function Start(){

    return (
        <>
      <div className="relative flex h-20 justify-center p-2">
        
        <Link
          className="absolute left-1 top-2 rounded-xl p-3 text-white"
          href="/secrets-circle/single-device"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="flex h-[calc(100vh_-_240px)] flex-col gap-4 overflow-y-auto py-8">
        
      </div>

     
    </>
    )
}