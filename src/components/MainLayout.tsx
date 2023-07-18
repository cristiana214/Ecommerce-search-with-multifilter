import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "./Layout/NavBar";
import Header from "./Layout/Header";
import Script from "next/script";
import Head from "next/head";
interface Props {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: Props) => (
  <>
    <Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PJ339PFQRE"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PJ339PFQRE');
              `,
        }}
      />
    </Head>
    <div className={` sticky min-h-full  ${className}`}>
      <Header />
      <main className="">{children}</main>
    </div>
  </>
);

export default MainLayout;
