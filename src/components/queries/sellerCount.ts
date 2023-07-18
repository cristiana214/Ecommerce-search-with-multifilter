import { useInfiniteQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { RecentOrders } from "@/types/Orders";

interface RecentOrdersResponse {
  recentOrders: RecentOrders;
}
const fetchCurrentUser = async ({
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
      query GetSellerCount {
        getSellerCount {
          code
          data
          msg
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
    queryKey: ["currentUser", { pageSize, count }],
    queryFn: () => {
      return fetchCurrentUser({ count: count });
    },
  });
