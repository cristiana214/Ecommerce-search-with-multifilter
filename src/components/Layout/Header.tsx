import Link from "next/link";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { usePriceIndex } from "@/components/queries/priceIndex";
import usePriceIndexStore from "@/components/store/usePriceIndexStore";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data } = usePriceIndex();
  const { setPriceIndexData } = usePriceIndexStore();
  useEffect(() => {
    if (data) {
      setPriceIndexData(data);
    }
  }, [data]);

  return (
    <nav
      aria-label="Main navigation"
      className="font-poppins sticky top-0 z-50 mx-auto box-border flex  w-full items-center justify-between bg-main-950 px-3 py-3 opacity-95 shadow-lg md:flex-nowrap"
    >
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[999] lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md"></div>
          </Transition.Child>

          <div className="fixed inset-0 z-[999999] flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="bg-skin-body relative flex w-full max-w-xs flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="">
                    <div className="absolute right-0 top-1 -mr-10">
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded "
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <FaTimes className="h-6 w-6 text-slate-100" />
                      </button>
                    </div>
                  </div>
                </Transition.Child>
                <>
                  <Link
                    href="/"
                    className="bg-skin-main flex items-center gap-2 p-4"
                  >
                    <div className="relative h-8 w-8 overflow-hidden rounded">
                      <Image
                        loader={({ src }) => src}
                        src="https://avatars.githubusercontent.com/u/122364922?s=400"
                        alt="bg"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                  </Link>
                  <ul
                    className="my-0 box-border flex flex-row flex-wrap justify-center pl-0 pt-2 md:flex-row md:py-0"
                    style={{ listStyle: "none" }}
                  >
                    <li
                      className="box-border w-1/2 flex-none text-left md:w-auto md:flex-none"
                      style={{ listStyle: "outside none none" }}
                    >
                      <Link
                        className="box-border block cursor-pointer px-1 py-2 text-white hover:text-main-300 focus:text-white md:px-2"
                        href="/category/"
                        style={{
                          textDecoration: "none",
                          transition: "none 0s ease 0s",
                          listStyle: "outside none none",
                        }}
                      >
                        Advance Filter
                      </Link>
                    </li>
                  </ul>
                </>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-10 flex-shrink-0"></div>
          </div>
        </Dialog>
      </Transition.Root>
      <Link
        className="mr-2 box-border cursor-pointer whitespace-nowrap p-0 text-xl leading-7 text-white hover:text-white focus:text-white"
        href="/"
        style={{ textDecoration: "none" }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/122364922?s=400"
          className="my-1 box-border block rounded align-middle"
          width={"30"}
          height={"30"}
          alt={"web3n1"}
        />
      </Link>
      <button
        className="m-0 box-border cursor-pointer rounded border-0 border-solid border-white bg-transparent p-0 text-center text-xl normal-case leading-none text-main-100 md:hidden"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#bdNavbar"
        aria-controls="bdNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ transition: "none 0s ease 0s" }}
        onClick={() => setSidebarOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          className="box-border align-middle leading-5"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            className="box-border"
          />
        </svg>
      </button>
      <div
        className="box-border hidden   flex-grow basis-full items-center justify-end md:flex md:basis-auto"
        id="bdNavbar"
      >
        <ul
          className="my-0 box-border flex flex-row flex-wrap pl-0 pt-2 md:flex-row md:py-0"
          style={{ listStyle: "none" }}
        >
          <li
            className="box-border w-1/2 flex-none text-left md:w-auto md:flex-none"
            style={{ listStyle: "outside none none" }}
          >
            <Link
              className="box-border block  cursor-pointer px-1 py-2 font-semibold text-white hover:text-main-300 focus:text-white md:px-2"
              aria-current="page"
              href="/"
              style={{
                textDecoration: "none",
                transition: "none 0s ease 0s",
                listStyle: "outside none none",
              }}
            >
              Home
            </Link>
          </li>
          <li
            className="box-border w-1/2 flex-none text-left md:w-auto md:flex-none"
            style={{ listStyle: "outside none none" }}
          >
            <Link
              className="box-border block cursor-pointer px-1 py-2 text-white hover:text-main-300 focus:text-white md:px-2"
              href="/category/"
              style={{
                textDecoration: "none",
                transition: "none 0s ease 0s",
                listStyle: "outside none none",
              }}
            >
              Advance Filter
            </Link>
          </li>
        </ul>
        <hr
          className="mx-0 my-4 box-border h-px border-0 text-white opacity-25 md:hidden"
          style={{ backgroundColor: "currentcolor" }}
        />

        <a
          className="my-2 box-border  cursor-pointer select-none rounded border border-solid border-transparent bg-transparent px-3 py-1 text-center align-middle text-base font-normal leading-normal text-main-300 hover:border-amber-200 hover:bg-amber-200 hover:text-neutral-800 md:my-0 md:ml-4 lg:inline-block  "
          href="#"
          style={{ textDecoration: "none", transition: "none 0s ease 0s" }}
        >
          Connect
        </a>
      </div>
    </nav>
  );
};

export default Header;
