import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const adapter = new TypesenseInstantSearchAdapter({
  server: {
    // Be sure to use an API key that only allows search operations
    apiKey: "",
    sendApiKeyAsQueryParam: false,
    nodes: [{ url: "/api/search" }],
    // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
    cacheSearchResultsForSeconds: 2 * 60,
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "name,description",
    include_fields:
      "name,image,description,currencyAccepting,price,mainCategory,preferredCurrency",
  },
});
console.log(adapter);

export const { searchClient } = adapter;
