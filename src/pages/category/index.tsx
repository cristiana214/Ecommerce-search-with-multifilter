import { NextPage } from "next";
import { Configure } from "react-instantsearch-hooks-web";

import { GridItemTwelve, GridLayout } from "@/components/GridLayout";

import MainLayout from "@/components/MainLayout";

import Filters from "@/components/Filters";

const Category: NextPage = () => {
  return (
    <MainLayout>
      <GridLayout className="max-w-screen-xl">
        <GridItemTwelve>
          {/* reusable advance filter */}
          <Filters>
            <Configure hitsPerPage={30} />
          </Filters>
        </GridItemTwelve>
      </GridLayout>
    </MainLayout>
  );
};

export default Category;
