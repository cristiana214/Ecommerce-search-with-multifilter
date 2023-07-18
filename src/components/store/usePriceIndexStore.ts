import { PriceIndex } from "@/types/PriceIndex";
import { create } from "zustand";

type PriceIndexStoreState = {
  priceIndex: PriceIndex | null;
  setPriceIndex: (data: any) => void; // Update the type of data based on your data structure
};

const usePriceIndexStore = create<PriceIndexStoreState>((set) => ({
  priceIndex: null,
  setPriceIndex: (data) => set({ priceIndex: data.priceIndex }),
}));

export default usePriceIndexStore;
