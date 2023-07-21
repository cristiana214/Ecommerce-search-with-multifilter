import { convertCurrency } from "@/lib/helperConversion";
import { Item } from "@/types/Orders";
import React from "react";
import usePriceIndexStore from "../store/usePriceIndexStore";
import { twMerge } from "tailwind-merge";

interface Props {
  item: Item;
  className?: string;
}
const Price = ({ item, className = "" }: Props) => {
  const { priceIndex }: any = usePriceIndexStore();
  return (
    <>
      <div
        className={`${twMerge(
          "text-sm font-semibold text-skin-secondary md:text-sm",
          className,
        )}`}
      >
        {` ${convertCurrency({
          usdValue: item.price,
          currency: item.preferredCurrency,
          priceIndex: priceIndex,
        })} ${item.preferredCurrency} `}
      </div>
      <div
        className={`${twMerge(
          "text-xs font-normal text-skin-secondary md:text-xs",
          className,
        )}`}
      >
        {item.price} USD{" "}
      </div>
      <div className="text-xs font-semibold text-gray-400 md:text-sm">
        {item.currencyAccepting.filter(
          (currency) => currency !== item.preferredCurrency,
        ).length > 0 && (
          <>
            or pay{" "}
            {item.currencyAccepting
              .filter((currency) => currency !== item.preferredCurrency)
              .map((currency) => (
                <React.Fragment key={currency}>
                  {`${convertCurrency({
                    usdValue: item.price,
                    currency: currency,
                    priceIndex: priceIndex,
                  })} ${currency} `}
                </React.Fragment>
              ))}
          </>
        )}
      </div>
    </>
  );
};
export default Price;
