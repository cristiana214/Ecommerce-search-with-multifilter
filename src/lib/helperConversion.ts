import { PriceIndex } from "@/types/PriceIndex";

/**
 * Convert a value from USD to the specified currency using the price index.
 *

 * @param {number} props.usdValue - The value in USD.
 * @param {string} props.currency - The target currency ("USDC", "ETH", "TON", or custom).
 * @returns {number} The converted value in the target currency.
 */
type Props = {
  usdValue: number;
  currency: "USDC" | "ETH" | "TON" | string;
  priceIndex: PriceIndex | any;
};
export function convertCurrency({
  usdValue,
  currency,
  priceIndex,
}: Props): number {
  try {
    // If price index is not available, return the original value
    if (!priceIndex) {
      return usdValue;
    }

    // Convert the currency to lowercase for consistent comparison
    const actualCurrency = currency.toLowerCase();

    // Get the exchange rate for the target currency
    const exchangeRate = priceIndex[actualCurrency].usd;

    // Calculate the equivalent value in the target currency
    const equivalentValue = usdValue / exchangeRate;

    // Return the converted value with 2 decimal places
    if (actualCurrency === "eth") return Number(equivalentValue.toFixed(4));
    return Number(equivalentValue.toFixed(2));
  } catch (e) {
    // Handle any errors by returning the original value
    return usdValue;
  }
}
