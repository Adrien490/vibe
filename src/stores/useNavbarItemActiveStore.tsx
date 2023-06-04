import { create } from 'zustand';

// Define the Navbar active item store state and actions interface
interface NavbarItemActiveStore {
  item: string;
  set: (item: string) => void;
  reset: () => void;
}

// Create the store with the defined types
const useNavbarItemActiveStore = create<NavbarItemActiveStore>((set) => ({
  item: '',
  set: (item) => set({ item: item }),
  reset: () => set({ item: '' }),
}));

export default useNavbarItemActiveStore;
