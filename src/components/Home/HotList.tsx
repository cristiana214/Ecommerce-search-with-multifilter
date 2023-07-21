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
    // <div className="h-200 -m-4 flex flex-wrap ">
    <>
      {recentOrders?.map((order) => {
        return (
          <div className="rounded-xl p-6 hover:bg-slate-800" key={order.id}>
            <Link
              href={`${
                process.env.NEXT_PUBLIC_STORE_URL
              }/product/${convertToURLFormat(order.Item.name)}-${
                order.Item.id
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col gap-2"
              title={order.Item.name}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-md shadow-black/20">
                <BlurImage
                  width={400}
                  height={400}
                  className="mr-4  block h-full w-full flex-shrink-0 rounded-md bg-gray-100 object-cover object-center !duration-200 ease-out group-hover:scale-105"
                  loader={({ src }) => src}
                  src={getImageUrl({
                    path: order?.Item.image[0]?.toString(),
                    size: 456,
                  })}
                  alt={order.Item.name}
                />
              </div>
              <div className="font-poppins line-clamp-2 text-sm font-bold text-gray-300 md:text-base">
                {order.Item.name}
              </div>
              <Price className="text-gray-600 " item={order.Item} />
              <div className="text-xs font-normal">
                {order.Item?.category.length
                  ? order.Item?.category
                      .toString()
                      .split(",")
                      .filter((category: string) => category !== "")
                      .map((category: string, index: number) => (
                        <span
                          key={index}
                          className=" tag mr-1 mt-1 inline-block max-w-max bg-slate-900 md:text-xs"
                        >
                          {category}
                        </span>
                      ))
                  : null}
              </div>
            </Link>
          </div>
        );
      })}

      {
        <span ref={observe} className="flex justify-center p-5">
          <Spinner size="sm" />
        </span>
      }
      {/* </div> */}
    </>
  );
};
export default HotList;
