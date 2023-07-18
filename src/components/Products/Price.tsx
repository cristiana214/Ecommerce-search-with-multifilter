import { convertCurrency } from "@/lib/helperConversion";
import { Item } from "@/types/Orders";
import React from "react";
interface Props {
  item: Item;
}
const Price = ({ item }: Props) => {
  return (
    <>
      <div className="text-sm font-semibold text-skin-secondary md:text-sm">
        {` ${convertCurrency({
          usdValue: item.price,
          currency: item.preferredCurrency,
        })} ${item.preferredCurrency} `}
      </div>
      <div className="text-xs font-normal text-skin-secondary md:text-xs">
        {` ${item.price} USD`}
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
