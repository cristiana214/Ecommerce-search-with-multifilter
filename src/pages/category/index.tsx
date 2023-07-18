import { NextPage } from "next";
import { Configure } from "react-instantsearch-hooks-web";

import { GridItemTwelve, GridLayout } from "@/components/GridLayout";

import MainLayout from "@/components/MainLayout";

import Filters from "@/components/Filters";
import Head from "next/head";

const Category: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Advance Filter | Marketplace</title>
        <meta name="description" content="" />
      </Head>
      <GridLayout className="max-w-screen-xl">
        <GridItemTwelve>
          {/* reusable advance filter */}
          <Filters title="Advance Filter">
            <Configure hitsPerPage={25} />
          </Filters>
        </GridItemTwelve>
      </GridLayout>
    </MainLayout>
  );
};

export default Category;
