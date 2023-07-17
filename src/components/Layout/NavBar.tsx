/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-skin-main font-poppins sticky top-0 z-50 w-full bg-main-950 opacity-95 shadow-lg">
      <div className="px-4 md:px-6">
        <div className="relative mx-auto flex h-14 w-full max-w-screen-xl sm:h-16">
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
                <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
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
                      <div className="absolute right-0 top-1 -mr-10">
                        <button
                          type="button"
                          className="flex h-10 w-10 items-center justify-center rounded "
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <FaTimes className=" h-6 w-6 text-slate-100" />
                        </button>
                      </div>
                    </Transition.Child>
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="flex w-full items-center gap-4 md:gap-6">
            <button
              type="button"
              className="text-zinc-100 focus:outline-none lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <FaBars className="h-6 w-6 bg-slate-100" />
              hahah
            </button>
            <Link href="/" className="flex flex-shrink-0 items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded text-slate-300">
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
            <div className="group ml-auto hidden shrink-0 md:flex"></div>
            <div className="ml-auto flex shrink-0 items-center md:hidden"></div>
            <div className="flex items-center gap-4 md:gap-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
