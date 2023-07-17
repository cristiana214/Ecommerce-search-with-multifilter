import { PriceIndex } from "@/types/PriceIndex";
import { create } from "zustand";

interface PriceIndexStoreState {
  priceIndexData: PriceIndex | null;
  setPriceIndexData: (data: any) => void; // Update the type of data based on your data structure
}

const usePriceIndexStore = create<PriceIndexStoreState>((set) => ({
  priceIndexData: null,
  setPriceIndexData: (data) => set({ priceIndexData: data }),
}));

export default usePriceIndexStore;
