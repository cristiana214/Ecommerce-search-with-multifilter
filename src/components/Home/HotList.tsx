import { useInView } from "react-cool-inview";
import { useInfiniteRecentOrders } from "@/components/queries/infiniteRecentOrders";
import { Spinner } from "@/components/UI/Spinner";
import { BlurImage } from "@/components/Shared/BlurImage";
import { getImageUrl } from "@/lib/helperImage";
import Link from "next/link";
import { convertToURLFormat } from "@/lib/helperText";
import Price from "../Products/Price";

const HotList = ({ pageSize }: { pageSize: number }) => {
  // todo
  //still using the recently ordered convert it to hot list
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
    <div className="h-200 -m-4 flex flex-wrap ">
      {recentOrders.map((order) => {
        return (
          <div
            className="w-full rounded-md border-gray-900 p-4 md:w-1/2 lg:w-1/3"
            key={order.id}
          >
            <Link
              className="relative block h-48 overflow-hidden"
              href={`${
                process.env.NEXT_PUBLIC_STORE_URL
              }/product/${convertToURLFormat(order.Item.name)}-${
                order.Item.id
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlurImage
                width={100}
                height={100}
                className="mr-4  block h-full w-full flex-shrink-0 rounded-md bg-gray-100 object-cover object-center !duration-200 ease-out group-hover:scale-105"
                loader={({ src }) => src}
                src={getImageUrl({ path: order.Item.image[0], size: 374 })}
                alt={order.Item.name}
              />
            </Link>
            <div className="mt-4">
              <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 ">
                {order.Item.category}
              </h3>
              <h2 className="title-font text-lg font-medium text-gray-200">
                {order.Item.name}
              </h2>
              <Price item={order.Item} />
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
export default HotList;
