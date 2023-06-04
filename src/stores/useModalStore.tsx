import { type ReactNode } from 'react';
import { create } from 'zustand';

// Define the modal store state and actions interface
interface ModalStore {
  isOpen: boolean;
  content: ReactNode;
  bgColor?: string;
  height?: number;
  open: (content: ReactNode, height?: number) => void; // Modify this
  close: () => void;
}

// Create the store with the defined types
const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  height: undefined,
  bgColor: 'primary',
  open: (content, height = 550, bgColor = 'primary') => set({ isOpen: true, content, height, bgColor }),
  close: () => {
    set(() => {
      // Reset the modal state
      return { isOpen: false, content: null, height: undefined, onClose: undefined };
    });
  },
}));

export default useModalStore;