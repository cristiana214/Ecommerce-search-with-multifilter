import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { PriceIndex } from "@/types/PriceIndex";

const fetchPriceIndex = async () => {
  const { data } = await axios.post<PriceIndex>(
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
  useQuery<PriceIndex, Error>({
    queryKey: ["priceIndex"],
    queryFn: () => {
      return fetchPriceIndex();
    },
  });
