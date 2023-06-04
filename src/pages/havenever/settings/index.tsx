import { HiArrowLeft } from "react-icons/hi2";
import Link from "next/link";
import { HaveNeverListForSettings } from "~/components/haveNever/haveNeverListForSettings";
import { HaveNeverCreateButton } from "~/components/haveNever/HaveNeverCreateButton";

export default function Settings() {

  return (
    <>
      <div className="relative sticky top-0 z-20 flex h-20 justify-center p-3">
        <h2 className="m-0 text-center text-3xl text-white">Paramètres</h2>
        <Link
          href="/havenever"
          className=" absolute left-1 top-2 rounded-xl p-3 text-white"
        >
          <HiArrowLeft size={25}></HiArrowLeft>
        </Link>
      </div>
      <div className="game-container flex flex-col overflow-y-auto p-3">
        <div className="flex flex-col">
          <HaveNeverListForSettings></HaveNeverListForSettings>
        </div>
      </div>
      <div className="flex h-40 w-full items-center justify-center overflow-hidden bg-background">
        <HaveNeverCreateButton></HaveNeverCreateButton>
      </div>
      
    </>
  );
}
