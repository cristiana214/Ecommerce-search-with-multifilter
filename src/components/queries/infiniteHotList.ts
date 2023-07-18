import { useInfiniteQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { RecentOrders } from "@/types/Orders";

interface RecentOrdersResponse {
  recentOrders: RecentOrders;
}
const fetchRecentOrders = async ({
  pageParam = 1, // needed to paginated
  count,
}: {
  pageParam?: number;
  count?: number;
}) => {
  const { data } = await axios.post<RecentOrdersResponse>(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "",
    {
      query: `
      query Hotlisting($count: Int!) {
        hotlisting(count: $count) {
          code
          msg
          metainfo
          data {
            id
            name
            image
            quantity
            price
            currencyAccepting
            preferredCurrency
            category
            variants
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
export const useInfiniteRecentOrders = ({
  pageSize,
  count,
}: {
  pageSize?: number;
  count: number;
}) =>
  useInfiniteQuery<RecentOrders, Error>({
    queryKey: ["hotList", { pageSize, count }],
    queryFn: () => {
      return fetchRecentOrders({ count: count });
    },
    getNextPageParam: (lastPage) => (lastPage ? count + 1 : undefined),
  });
