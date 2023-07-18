import { useMediaQuery } from "react-responsive";
import {
  usePagination,
  UsePaginationProps,
} from "react-instantsearch-hooks-web";
import { ComponentProps, useEffect, useState } from "react";
import clsx from "clsx";

export type PaginationItemProps = ComponentProps<"a"> &
  Pick<ReturnType<typeof usePagination>, "refine"> & {
    isDisabled: boolean;
    value: number;
  };

export const PaginationItem = ({ ...props }: PaginationItemProps) => {
  const { isDisabled, className, value, refine, ...rest } = props;

  if (isDisabled) {
    return (
      <li
        className={clsx(
          className,
          "relative inline-flex items-center border border-skin-border px-4 py-2 text-skin-primary/20",
        )}
      >
        <span className="text-sm font-medium duration-100 ease-out" {...rest} />
      </li>
    );
  }

  return (
    <li
      className={clsx(
        className,
        "hover:bg-skin-main relative inline-flex items-center border border-skin-border text-skin-primary",
      )}
    >
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          refine(value);
        }}
        className="block px-4 py-2 text-sm font-medium duration-100 ease-out"
        {...rest}
      />
    </li>
  );
};
export type PaginationProps = ComponentProps<"div"> & UsePaginationProps;

const Pagination = ({ className, ...props }: PaginationProps) => {
  const MOBILE_PADDING = 2;

  const [isTabletOrMobile, setIsTabletOrMobile] = useState<boolean>();
  const mb = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsTabletOrMobile(mb);
  }, [mb]);

  const {
    pages,
    refine,
    currentRefinement,
    isFirstPage,
    isLastPage,
    nbPages,
    nbHits,
  } = usePagination({
    ...props,
    padding: isTabletOrMobile ? MOBILE_PADDING : props.padding,
  });

  if (nbPages === 0) {
    return null;
  }

  return (
    <div
      className={`flex min-w-full items-center justify-center px-4 lg:justify-between ${className}`}
    >
      <div className="flex flex-col items-center gap-6 sm:flex-1 sm:flex-row sm:justify-between">
        <div className="order-1 sm:order-2">
          <ul
            className="relative z-0 inline-flex list-none -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <PaginationItem
              aria-label="Previous"
              value={currentRefinement - 1}
              isDisabled={isFirstPage}
              refine={refine}
              className="rounded-l-md"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </PaginationItem>
            {pages.map((page) => (
              <PaginationItem
                key={page}
                aria-label={String(page)}
                value={page}
                isDisabled={false}
                refine={refine}
                className={clsx(
                  page === currentRefinement
                    ? "bg-skin-main-hover"
                    : "hover:bg-skin-main",
                )}
              >
                {page + 1}
              </PaginationItem>
            ))}
            <PaginationItem
              aria-label="Next"
              value={currentRefinement + 1}
              isDisabled={isLastPage}
              refine={refine}
              className="rounded-r-md"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </PaginationItem>
          </ul>
        </div>
        <div className="order-2 sm:order-1">
          <p className="text-xs text-skin-primary lg:text-sm">
            Page
            <span className="mx-1 font-medium">{currentRefinement + 1}</span> of
            <span className="mx-1 font-medium">{nbPages}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
