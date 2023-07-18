interface EquivalentValues {
  eth: number;
  usdc: number;
  ton: number;
}

export function calculateEquivalentValues(usdValue: number): EquivalentValues {
  const exchangeRates = {
    eth: 1893.68,
    usdc: 0.999193,
    ton: 1.4,
  };

  const equivalentValues: EquivalentValues = {
    eth: usdValue / exchangeRates.eth,
    usdc: usdValue / exchangeRates.usdc,
    ton: usdValue / exchangeRates.ton,
  };

  return equivalentValues;
}
