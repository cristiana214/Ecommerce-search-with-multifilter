import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { GridItemFour, GridItemSix } from "@/components/GridLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-12 ">
        <GridItemSix className="h-full bg-blue-900 py-4">
          <div className="w-200 items-center justify-between px-8  py-8">
            <h1 className="font-size- py-8 text-4xl font-bold leading-9 text-white text-opacity-100">
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

            <p className="bg-blue-600 px-8 py-16 ">
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
        <GridItemSix className="bg-slate-500">
          <div className="h-half items-center  justify-between ">
            <p>amet consectetur adipisicing elit.</p>
            <div className="w-200  bg-slate-800 "> product</div>
          </div>
        </GridItemSix>
        <GridItemSix className="bg-indigo-900">
          <div className="h-half items-center  justify-between ">
            <p>amet consectetur adipisicing elit.</p>
            <div className="w-200  bg-slate-800 "> product</div>
          </div>
        </GridItemSix>
      </div>
    </MainLayout>
  );
}
