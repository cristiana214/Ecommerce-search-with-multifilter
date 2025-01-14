import RefinementList from "@/components/Filters/Widgets/RefinementList";

const Refinements = () => (
  <>
    <RefinementList
      label="Accepted Currency"
      attribute="currencyAccepting"
      searchable={false}
      searchablePlaceholder=""
      operator="or"
    />
    <RefinementList
      className="border-none"
      label="Main Category"
      attribute="mainCategory"
      searchable={false}
      searchablePlaceholder=""
      operator="or"
    />

    <RefinementList
      label="Category"
      attribute="category"
      searchable={false}
      searchablePlaceholder="Search category"
      operator="or"
      limit={10}
      showMore
      showMoreLimit={15}
    />
  </>
);

export default Refinements;
