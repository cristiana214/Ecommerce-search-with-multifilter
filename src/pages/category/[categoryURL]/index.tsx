import { NextPage } from "next";
import { Configure } from "react-instantsearch-hooks-web";

import { GridItemTwelve, GridLayout } from "@/components/GridLayout";

import Filters from "@/components/Filters";
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { convertToTitleCase, convertToURLFormat } from "@/lib/helperText";
import Head from "next/head";

const EachCategory: NextPage = () => {
  const router = useRouter();
  const { categoryURL } = router.query;

  const validCategories = [
    "menswear",
    "womenswear",
    "luxury",
    "art-and-collectibles",
    "electronics",
    "homeware-and-furniture",
    "others",
    "all",
  ];

  let url = "all";
  if (categoryURL) {
    //convert to url format lowercase
    url = convertToURLFormat(categoryURL?.toString() || "");
  }

  const isValidCategory = validCategories.includes(url);

  if (!isValidCategory) return <div>404 page</div>;

  return (
    <MainLayout>
      <Head>
        <title>{`Filter category by ${convertToTitleCase(
          categoryURL?.toString() || "",
        )}`}</title>
        <meta name="description" content="" />
      </Head>
      <GridLayout className="max-w-screen-xl">
        <GridItemTwelve>
          <Filters title={convertToTitleCase(url)}>
            {categoryURL !== "all" ? (
              <Configure
                hitsPerPage={30}
                filters={`mainCategory:${url.replaceAll("-", " ")}`}
              />
            ) : null}
          </Filters>
        </GridItemTwelve>
      </GridLayout>
    </MainLayout>
  );
};

export default EachCategory;
