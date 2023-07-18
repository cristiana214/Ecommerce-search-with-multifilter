interface PriceData {
  [currency: string]: {
    usd: number;
  };
}

export interface PriceIndex {
  eth: PriceData;
  usdc: PriceData;
  ton: PriceData;
}

export interface PriceIndexResponse {
  data: {
    priceIndex: PriceIndex;
  };
}
