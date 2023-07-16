import { useInView } from "react-cool-inview";
import { useInfiniteRecentOrders } from "@/components/queries/infiniteRecentOrders";
import { Spinner } from "@/components/UI/Spinner";
import { BlurImage } from "@/components/Shared/BlurImage";
import { getImageUrl } from "@/lib/helperImage";

const RecentSoldList = ({ pageSize }: { pageSize: number }) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError, error } =
    useInfiniteRecentOrders({ count: pageSize });

  const { observe } = useInView({
    onEnter: () => fetchNextPage(),
  });
  if (isLoading) {
    return <Spinner size="sm" />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const recentOrders = data?.pages.flatMap((page) => page.data) || [];
  return (
    <div className="-m-2 flex flex-wrap">
      {recentOrders.map((order) => {
        return (
          <div className="w-full p-2 " key={order.id}>
            <div className="flex h-full items-center rounded-md border border-main-700 bg-slate-800 p-4">
              <BlurImage
                width={100}
                height={100}
                className="mr-4 h-16 w-16 flex-shrink-0 rounded-md bg-main-50 object-cover object-center !duration-200 ease-out group-hover:scale-105"
                loader={({ src }) => src}
                src={getImageUrl({ path: order.Item.image[0], size: 135 })}
                alt={order.Item.name}
              />
              <div className="flex-grow">
                <h2 className="title-font font-medium text-gray-300">
                  {order.Item.name}
                </h2>
                <p className="text-gray-600">
                  sold {order.currencyPaying} /{order.price}
                </p>
                <a
                  href={`https://etherscan.io/tx/${order.txHash}`}
                  className="text-gray-500"
                >
                  trx
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination controls */}
      <button
        disabled={!hasNextPage || isLoading}
        onClick={() => fetchNextPage()}
      >
        {isLoading ? <Spinner size="sm" /> : "Load More"}
      </button>

      {
        <span ref={observe} className="flex justify-center p-5">
          <Spinner size="sm" />
        </span>
      }
    </div>
  );
};
export default RecentSoldList;
