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
  // Convert to lowercase and replace spaces with dashes
  return str?.toString().toLowerCase().replaceAll(/\s+/g, "-");
};
