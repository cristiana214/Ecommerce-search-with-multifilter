interface PriceData {
  [currency: string]: {
    usd: number;
  };
}

export interface PriceIndex {
  data: {
    priceIndex: {
      eth: PriceData;
      usdc: PriceData;
      ton: PriceData;
    };
  };
}
