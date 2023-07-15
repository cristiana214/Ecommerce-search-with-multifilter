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
      query RecentOrders($count: Int!) {
        recentOrders(count: $count) {
          code
          msg
          data {
            id
            uuid
            price
            currencyPaying
            pendingTimestamp
            Item 
            txHash
            claimBy
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
    queryKey: ["recentOrders", { pageSize, count }],
    queryFn: (param) => {
      return fetchRecentOrders({ count: count });
    },
    getNextPageParam: (lastPage) => (lastPage ? count + 1 : undefined),
  });
