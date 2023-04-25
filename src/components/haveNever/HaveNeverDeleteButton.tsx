import { HiOutlineMinus } from "react-icons/hi2";

interface HaveNeverDeleteButtonProps {
  id: number;
  handleDelete: (id: number) => void;
}

export const HaveNeverDeleteButton = ({
  id,
  handleDelete,
}: HaveNeverDeleteButtonProps) => {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="rounded-full bg-red-400 p-2 text-white"
    >
      <HiOutlineMinus className="text-xl" />
    </button>
  );
};
