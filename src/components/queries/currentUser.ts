import { useInfiniteQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { RecentOrders } from "@/types/Orders";

interface RecentOrdersResponse {
  recentOrders: RecentOrders;
}
const fetchCurrentUser = async ({ userId }: { userId: number }) => {
  const { data } = await axios.post<RecentOrdersResponse>(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "",
    {
      query: `
      query {
        profile {
          data {
            id
            pfp
            cover
            bio
            wallet
            email
            avgRating
            successfulSales
            visits
            fullName
            userName
            roles
            status
            preferredShippingLocation
            preferredCurrency
          }
          code
          msg
          metainfo
        }
      }
    `,
      variables: {
        userId: userId,
      },
    },
  );
  return data?.recentOrders;
};
export const useCurrentUser = ({ userId }: { userId: number }) =>
  useInfiniteQuery<RecentOrders, Error>({
    queryKey: ["currentUser", { userId }],
    queryFn: () => {
      return fetchCurrentUser({ userId: userId });
    },
  });
