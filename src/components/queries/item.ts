import { useInfiniteQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { RecentOrders } from "@/types/Orders";

interface RecentOrdersResponse {
  recentOrders: RecentOrders;
}
const fetchItem = async ({
  itemId, // needed to paginated
}: {
  itemId?: number;
}) => {
  const { data } = await axios.post<RecentOrdersResponse>(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "",
    {
      query: `
      query Item($itemId: Int!) {
        item(itemId: $itemId) {
          code
          msg
          data {
            id
            name
            description
            image
            quantity
            price
            currencyAccepting
            preferredCurrency
            category
            metadata
            variants
            keywords
            shippingPrices
            totalViews
            featured
            listingId
            sellerId
            listingStatus
            listedAt
            isDeleted
            preferredCurrency
          }
        }
      }
    `,
      variables: {
        itemId: itemId,
      },
    },
  );
  return data?.recentOrders;
};
export const useItem = ({ itemId }: { itemId: number }) =>
  useInfiniteQuery<RecentOrders, Error>({
    queryKey: ["item", { itemId }],
    queryFn: () => {
      return fetchItem({ itemId: itemId });
    },
  });
