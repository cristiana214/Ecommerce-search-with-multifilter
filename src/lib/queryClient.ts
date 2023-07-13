import { QueryClient } from "@tanstack/react-query";

import { defaultQueryFn } from "./defaultQueryFn";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (e) => {
        if ("message" in (e as Error)) {
          console.log((e as Error).message);
        }
      },
    },
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
      queryFn: defaultQueryFn as any,
    },
  },
});
