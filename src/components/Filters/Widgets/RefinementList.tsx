import { ComponentProps, useEffect, useRef, useState } from "react";
import {
  useRefinementList,
  UseRefinementListProps,
} from "react-instantsearch-hooks-web";
import { FaCheck } from "react-icons/fa";
import clsx from "clsx";

import { ControlledSearchBox } from "./ControlledSearchBox";

export type RefinementListProps = ComponentProps<"div"> &
  UseRefinementListProps & {
    label: string;
    searchable: boolean;
    searchablePlaceholder: string;
  };

const RefinementList = (props: RefinementListProps) => {
  const {
    canToggleShowMore,
    isFromSearch,
    isShowingMore,
    items,
    refine,
    searchForItems,
    toggleShowMore,
  } = useRefinementList(props);
  const [query, setQuery] = useState<string>("");
  const previousQueryRef = useRef(query);
  const inputRef = useRef(null);

  useEffect(() => {
    if (previousQueryRef.current !== query) {
      previousQueryRef.current = query;
      searchForItems(query);
    }
  }, [query, searchForItems]);

  return (
    <>
      <span className="text-skin-primary">{props.label}</span>
      <div className="relative">
        {props.searchable && (
          <div className="mb-4">
            <ControlledSearchBox
              inputRef={inputRef}
              placeholder={props.searchablePlaceholder}
              issearchstalled={false}
              onChange={(event) => {
                const target = event.target as HTMLInputElement;
                setQuery(target?.value);
              }}
              onReset={() => setQuery("")}
              onSubmit={() => {
                if (items.length > 0) {
                  refine(items[0].value);
                  setQuery("");
                }
              }}
              value={query}
            />
          </div>
        )}
        {props.searchable && isFromSearch && items.length === 0 && (
          <div className="py-2 pl-10 pr-4 text-sm text-skin-primary">
            No results found
          </div>
        )}

        <ul>
          {items
            .filter((item) => item.value !== "")
            .map((item) => (
              <li
                key={item.value}
                className="hover:bg-skin-main-hover/50 group relative cursor-pointer select-none rounded-md py-2 pl-10 pr-4"
                onClick={() => {
                  refine(item.value);
                  setQuery("");
                }}
              >
                <span
                  className={clsx(
                    item.isRefined ? "font-semibold" : "font-normal",
                    "block truncate text-xs text-skin-primary hover:text-main-600",
                  )}
                >
                  {`${item.value}   (${item.count})`}
                </span>
                <span
                  className={clsx(
                    item.isRefined ? "font-semibold" : "font-normal",
                    "right-0 block truncate text-xs text-skin-primary ",
                  )}
                ></span>

                {item.isRefined ? (
                  <span
                    className={clsx(
                      { "text-skin-accent": item.isRefined },
                      "absolute inset-y-0 left-0 flex items-center pl-3",
                    )}
                  >
                    <FaCheck className="h-3 w-3" aria-hidden="true" />
                  </span>
                ) : null}
              </li>
            ))}
        </ul>

        {props.showMore && (
          <button
            type="button"
            disabled={!canToggleShowMore}
            onClick={toggleShowMore}
          >
            {isShowingMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </>
  );
};
export default RefinementList;
