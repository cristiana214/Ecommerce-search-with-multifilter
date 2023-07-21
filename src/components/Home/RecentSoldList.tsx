import { useInView } from "react-cool-inview";
import { useInfiniteRecentOrders } from "@/components/queries/infiniteRecentOrders";
import { Spinner } from "@/components/UI/Spinner";
import { BlurImage } from "@/components/Shared/BlurImage";
import { getImageUrl } from "@/lib/helperImage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ClockIcon } from "lucide-react";
import { convertCurrency } from "@/lib/helperConversion";
import usePriceIndexStore from "../store/usePriceIndexStore";
import { convertTrxtoShort } from "@/lib/helperText";

dayjs.extend(relativeTime);
const RecentSoldList = ({ pageSize }: { pageSize: number }) => {
  const { priceIndex }: any = usePriceIndexStore();
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
              <div className="w-2/6-md w-4/6 flex-grow ">
                <h2 className="title-font font-medium text-gray-300">
                  {order.Item.name}
                </h2>
                <time className="flex text-xs">
                  <ClockIcon className="mr-1 h-3 w-3" /> sold{" "}
                  {dayjs(parseInt(order.pendingTimestamp) * 1000).fromNow()}
                </time>
                <a
                  href={`https://etherscan.io/tx/${order.txHash}`}
                  className="text-xs text-gray-500 hover:text-main-300"
                >
                  {convertTrxtoShort(order.txHash)}
                </a>
              </div>
              <div className="flex-1  ">
                <span className="text-xs text-gray-600   ">Sold for</span>
                <p className="text-xs   ">
                  {convertCurrency({
                    usdValue: order.price,
                    currency: order.currencyPaying,
                    priceIndex: priceIndex,
                  })}{" "}
                  {order.currencyPaying}
                </p>
                <span className="mr-1  flex-1 text-xs  text-gray-600">
                  {order.price} USD
                </span>
              </div>
            </div>
          </div>
        );
      })}

      {
        <span ref={observe} className="flex justify-center p-5">
          <Spinner size="sm" />
        </span>
      }
    </div>
  );
};
export default RecentSoldList;
