import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { GridItemSix, GridItemTwelve } from "@/components/GridLayout";
import HotList from "@/components/Home/HotList";
import RecentSoldList from "@/components/Home/RecentSoldList";
import Categories from "@/components/Home/Categories";
import FeatureMerchant from "@/components/Home/FeaturedMerchant";
import Head from "next/head";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>
          Fast Multi-Filtering Marketplace | Next.js React Project by Cristiana
        </title>
        <meta
          name="description"
          content="Experience a fast and efficient multi-filtering marketplace built with Next.js and React. Discover a wide range of products and seamlessly apply multiple filters to find exactly what you need."
        />
      </Head>
      <div className="grid grid-cols-12 ">
        <GridItemSix className="h-6/7 bg-main-100 py-4">
          <div className="w-200 items-center justify-between px-8 py-8">
            <h1 className=" py-8 text-4xl font-bold leading-9 text-main-800 ">
              amet consectetur adipisicing elit. Molestias ea repellat ullam
              adipis elit.
            </h1>
            <p className="my-1 rounded-md border-2 border-main-200 bg-main-100 px-8 py-16 text-main-900 ">
              lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias ea repellat ullam laudantium eos possimus officia
              nostrum quae numquam consequuntur libero inventore veniam, quod
              nisi facilis voluptatibus quia maxime earum.{" "}
            </p>
          </div>
        </GridItemSix>
        <GridItemSix className="h-6/7 bg-main-800">
          <FeatureMerchant />
        </GridItemSix>
        {/* categories */}
        <GridItemTwelve className="w-200 items-center justify-between bg-main-700 px-8 py-8">
          <h2>Categories</h2>
          <section className="body-font text-gray-500">
            <div className="container mx-auto px-5 py-10">
              <Categories />
            </div>
          </section>
        </GridItemTwelve>
        {/* hotlist */}
        <GridItemSix className="bg-main-950">
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <HotList pageSize={10} />
            </div>
          </section>
        </GridItemSix>
        {/* tab recent list and sold */}
        <GridItemSix className="bg-main-800">
          <section className="body-font text-gray-500">
            <div className="container mx-auto px-5 py-10">
              <RecentSoldList pageSize={10} />
            </div>
          </section>
        </GridItemSix>
      </div>
    </MainLayout>
  );
}
