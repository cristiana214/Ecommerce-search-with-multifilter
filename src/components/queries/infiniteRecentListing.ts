import { useInfiniteQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { RecentOrders } from "@/types/Orders";

interface RecentOrdersResponse {
  recentOrders: RecentOrders;
}
const fetchRecentListing = async ({ count }: { count?: number }) => {
  const { data } = await axios.post<RecentOrdersResponse>(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "",
    {
      query: `
      query Recentlisting($count: Int!, $filter: String) {
        recentlisting(count: $count, filter: $filter) {
          code
          msg
          metainfo
          data {
            id
            name
            image
            price
            currencyAccepting
            preferredCurrency
            category
            variants
            listedAt
            sellerId
          }
        }
      }
    `,
      variables: {
        count: count,
      },
    },
  );
  return data?.recentOrders;
};
export const useInfiniteRecentListing = ({
  pageSize,
  count,
}: {
  pageSize?: number;
  count: number;
}) =>
  useInfiniteQuery<RecentOrders, Error>({
    queryKey: ["recentListing", { pageSize, count }],
    queryFn: () => {
      return fetchRecentListing({ count: count });
    },
    getNextPageParam: (lastPage) => (lastPage ? count + 1 : undefined),
  });
