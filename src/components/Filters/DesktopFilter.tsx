import ClearRefinements from "@/components/Filters/Widgets/ClearRefinements";
import SearchBox from "@/components/Filters/Widgets/SearchBox";

import Refinements from "./Refinements";

const DesktopFilter = () => (
  <div className="px-4 lg:col-span-3">
    <SearchBox className="mb-6 px-2" placeholder="Search" />
    <div>
      <div className="flex items-center gap-2 px-4 py-6">
        <span className="text-base font-medium uppercase text-skin-primary">
          Filters
        </span>
      </div>
      <Refinements />
      <ClearRefinements />
    </div>
  </div>
);

export default DesktopFilter;
