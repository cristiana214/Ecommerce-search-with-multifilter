import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className=" opacity-2 relative  box-border flex flex-wrap items-center justify-between bg-main-900 px-0 py-3 leading-6 text-neutral-800 md:flex-nowrap md:justify-start">
      <nav
        aria-label="Main navigation"
        className=" sticky mx-auto box-border flex w-full items-center justify-between px-3 md:flex-nowrap"
      >
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
          className="m-0 box-border cursor-pointer rounded border-0 border-solid border-white bg-transparent p-0 text-center text-xl normal-case leading-none text-white md:hidden"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bdNavbar"
          aria-controls="bdNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ transition: "none 0s ease 0s" }}
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
          className="box-border hidden flex-grow basis-full items-center md:flex md:basis-auto"
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
                className="box-border block cursor-pointer px-1 py-2 font-semibold text-white hover:text-white focus:text-white md:px-2"
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
              <a
                className="box-border block cursor-pointer px-1 py-2 text-white hover:text-white focus:text-white md:px-2"
                href="/docs/5.1/getting-started/introduction/"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                Docs
              </a>
            </li>
          </ul>
          <hr
            className="mx-0 my-4 box-border h-px border-0 text-white opacity-25 md:hidden"
            style={{ backgroundColor: "currentcolor" }}
          />

          <a
            className="my-2 box-border inline-block cursor-pointer select-none rounded border border-solid border-transparent bg-transparent px-3 py-1 text-center align-middle text-base font-normal leading-normal hover:border-amber-200 hover:bg-amber-200 hover:text-neutral-800 md:my-0 md:ml-4 lg:inline-block"
            href="/docs/5.1/getting-started/download/"
            style={{ textDecoration: "none", transition: "none 0s ease 0s" }}
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
