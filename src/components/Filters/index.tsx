import { Configure, Index, InstantSearch } from "react-instantsearch-hooks-web";

import Pagination from "@/components/Filters/Widgets/Pagination";
import DesktopFilter from "@/components/Filters/DesktopFilter";
import { searchClient } from "@/components/Filters/clients/config";
import SearchBox from "@/components/Filters/Widgets/SearchBox";
import Hits from "@/components/Filters/Widgets/Hits";

import CurrentRefinements from "@/components/Filters/Widgets/CurrentRefinements";
import { ReactNode } from "react";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Filters = ({ children, title }: Props) => {
  const indexName = "category";
  return (
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      <Configure hitsPerPage={30} />
      {children}
      <Index indexName={indexName} indexId="search">
        <main className="mx-auto max-w-7xl">
          {/* header */}
          <section className="pb-6 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
            <h1 className="font-poppins text-3xl font-extrabold text-skin-primary lg:text-4xl">
              {title || "Filters"}
            </h1>
          </section>

          {/* content */}
          <section className="grid grid-cols-1 sm:gap-6 lg:grid-cols-12">
            <div className="flex items-center gap-4 py-6 lg:hidden">
              <SearchBox className="w-full" placeholder="Search" />
            </div>

            {/* desktop -- search and filters */}
            <DesktopFilter />

            {/* results */}
            <div className="lg:col-span-9">
              <CurrentRefinements />
              <Pagination />
              <div className="grid grid-cols-1 py-4 sm:grid-cols-2 sm:py-6 lg:grid-cols-3">
                <Hits />
              </div>
              <Pagination />
            </div>
          </section>
        </main>
      </Index>
    </InstantSearch>
  );
};
export default Filters;
