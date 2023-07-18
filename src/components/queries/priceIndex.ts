import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { PriceIndexResponse } from "@/types/PriceIndex";

const fetchPriceIndex = async () => {
  const { data } = await axios.post<PriceIndexResponse>(
    process.env.NEXT_PUBLIC_PRICE_INDEX_ENDPOINT || "",
    {
      query: `
    query PriceIndex {
      priceIndex {
        eth {
          usd
        }
        usdc {
          usd
        }
        ton {
          usd
        }
      }
    }
  `,
      variables: {},
    },
  );
  return data;
};
export const usePriceIndex = () =>
  useQuery<PriceIndexResponse, Error>({
    queryKey: ["priceIndex"],
    queryFn: () => {
      return fetchPriceIndex();
    },
    staleTime: 10 * 60 * 1000, // Set the stale time to 10 minutes (10 * 60 * 1000 milliseconds)
  });
