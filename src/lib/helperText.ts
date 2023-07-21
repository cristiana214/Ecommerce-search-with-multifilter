/**
 * Convert a string to Title case format.
 *
 * @param str - The string to convert.
 * @returns The converted string in title case format.
 */
export const convertToTitleCase = (str: string): string => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Convert a string to URL format.
 *
 * @param str - The string to convert.
 * @returns The converted string in URL format.
 */
export const convertToURLFormat = (str: string): string => {
  if (!str) return "";
  // Remove special characters using regex and replace spaces with dashes
  const convertedString = str
    .toString()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replaceAll(/\s+/g, "-");
  return convertedString;
};

export const convertTrxtoShort = (transactionHash: string): string => {
  return `${transactionHash.slice(0, 6)}...${transactionHash.slice(-4)}`;
};
