import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { GridItemSix, GridItemTwelve } from "@/components/GridLayout";
import HotList from "@/components/Home/HotList";

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
        <GridItemTwelve className="w-200 items-center justify-between px-8 py-8">
          {" "}
          Categories
          <div className="mb-32 flex items-center justify-center  bg-cyan-600 py-8 text-center lg:mb-0 lg:grid-cols-4  lg:text-left ">
            <div className="">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </div>
            <div className="">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </div>

            <div className="">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </div>

            <div className="">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </div>

            <div className="">
              <h2 className="mb-3 text-2xl font-semibold">Docs </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </div>
          </div>
        </GridItemTwelve>
        <GridItemSix className="bg-slate-500">
          <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-24">
              <div className="-m-4 flex flex-wrap">
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/420x260"
                      width={400}
                      height={400}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/421x261"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/422x262"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/423x263"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/424x264"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      The Catalyzer
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/425x265"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      Shooting Stars
                    </h2>
                    <p className="mt-1">$21.15</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/427x267"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      Neptune
                    </h2>
                    <p className="mt-1">$12.00</p>
                  </div>
                </div>
                <div className="w-full p-4 md:w-1/2 lg:w-1/3">
                  <a className="relative block h-48 overflow-hidden rounded">
                    <Image
                      alt="ecommerce"
                      className="block h-full w-full object-cover object-center"
                      src="https://dummyimage.com/428x268"
                      width={40}
                      height={40}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      CATEGORY
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      The 400 Blows
                    </h2>
                    <p className="mt-1">$18.40</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </GridItemSix>
        <GridItemSix className="  bg-zinc-700">
          <section className="body-font text-gray-500">
            <div className="container mx-auto px-5 py-10">
              <HotList pageSize={3} />
            </div>
          </section>
        </GridItemSix>
      </div>
    </MainLayout>
  );
}
