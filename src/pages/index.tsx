import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { GridItemSix, GridItemTwelve } from "@/components/GridLayout";
import HotList from "@/components/Home/HotList";
import RecentSoldList from "@/components/Home/RecentSoldList";
import Categories from "@/components/Home/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 ">
        <GridItemSix className="h-full bg-blue-900 py-4">
          <div className="w-200 items-center justify-between px-8  py-8">
            <h1 className=" py-8 text-4xl font-bold leading-9 text-white text-opacity-100">
              amet consectetur adipisicing elit. Molestias ea repellat ullam
              adipisicing elit. Molestias ea repellat ullam Molestias
            </h1>
            <p className="my-1 bg-blue-800 px-8 py-16 ">
              lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias ea repellat ullam laudantium eos possimus officia
              nostrum quae numquam consequuntur libero inventore veniam, quod
              nisi facilis voluptatibus quia maxime earum.{" "}
            </p>
          </div>
        </GridItemSix>
        <GridItemSix className="bg-green-500">
          <div className="h-half items-center  justify-between ">
            <p>amet consectetur adipisicing elit.</p>
            <div className="w-200  bg-slate-800 "> product</div>
          </div>
        </GridItemSix>
        {/* categories */}
        <GridItemTwelve className="w-200 items-center justify-between px-8 py-8">
          Categories
          <section className="body-font text-gray-500">
            <div className="container mx-auto px-5 py-10">
              <Categories />
            </div>
          </section>
        </GridItemTwelve>
        {/* hotlist */}
        <GridItemSix className="bg-sky-950">
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <HotList pageSize={10} />
            </div>
          </section>
        </GridItemSix>
        {/* tab recent list and sold */}
        <GridItemSix className="bg-zinc-700">
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
