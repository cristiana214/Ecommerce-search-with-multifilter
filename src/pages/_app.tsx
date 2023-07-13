import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production' ? (
      <ReactQueryDevtools initialIsOpen />
    ) : null}
    </QueryClientProvider>
  );
}
