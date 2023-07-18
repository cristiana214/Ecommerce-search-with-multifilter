import Link from "next/link";
import { Hit as AlgoliaHit } from "@algolia/client-search";
import { useHits, UseHitsProps } from "react-instantsearch-hooks-web";
import { ComponentProps } from "react";
import { Item } from "@/types/Orders";
import { BlurImage } from "@/components/Shared/BlurImage";
import { getImageUrl } from "@/lib/helperImage";

export type ItemProps = Item & {
  itemId: number;
};

export const Hit = ({ hit }: { hit: ItemProps }) => (
  <div className="hover:bg-skin-main rounded-xl p-6">
    <Link
      href={hit.name}
      className="flex h-full flex-col gap-2"
      title={hit.name}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-md shadow-black/20">
        <BlurImage
          width={400}
          height={400}
          className="mr-4  block h-full w-full flex-shrink-0 rounded-md bg-gray-100 object-cover object-center !duration-200 ease-out group-hover:scale-105"
          loader={({ src }) => src}
          src={getImageUrl({ path: hit?.image[0]?.toString(), size: 456 })}
          alt={hit.name}
        />
      </div>
      <div className="font-poppins line-clamp-2 text-sm font-bold text-skin-primary md:text-base">
        {hit.name}
      </div>
      <div className="text-sm font-semibold text-skin-secondary md:text-sm">
        {` ${hit.price} ${hit.preferredCurrency}`}
      </div>
      <div className="text-xs font-normal text-skin-secondary md:text-xs">
        {` ${hit.price} USD`}
      </div>
      <div className="text-xs font-semibold text-gray-400 md:text-sm">
        {hit.currencyAccepting}
      </div>
    </Link>
  </div>
);
export type HitsProps = ComponentProps<"tr"> & UseHitsProps;

const Hits = <THit extends AlgoliaHit<ItemProps>>(props: HitsProps) => {
  const { hits } = useHits(props);

  if (hits.length === 0) {
    return (
      <div className="col-span-12 px-6">
        <div className="flex items-center justify-center py-24 text-lg text-skin-primary sm:h-full sm:text-3xl">
          No results found
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {hits?.map((hit) => (
        <Hit key={hit.objectID} hit={hit as unknown as THit} />
      ))}
    </>
  );
};

export default Hits;
