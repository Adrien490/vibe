import { HiOutlineMinus } from "react-icons/hi2";

interface HaveNeverDeleteButtonProps {
  handleDelete: (id: number) => Promise<void>;
  
}

export const HaveNeverDeleteButton = ({
  handleDelete,
}: HaveNeverDeleteButtonProps) => {
  return (
    <button
    onClick={() => handleDelete}
      className="rounded-full bg-red-400 p-2 text-white"
    >
      <HiOutlineMinus className="text-xl" />
    </button>
  );
};
