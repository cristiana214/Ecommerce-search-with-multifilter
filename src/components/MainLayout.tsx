import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: Props) => (
  <div className={`relative min-h-full ${className}`}>
    <header className="flex relative flex-wrap justify-between items-center py-3 px-0 leading-6 bg-green-800 md:flex-nowrap md:justify-start box-border text-neutral-800">
      <nav
        className="flex justify-between items-center px-3 mx-auto w-full box-border md:flex-nowrap"
        aria-label="Main navigation"
      >
        <Link
          className="p-0 mr-2 text-xl leading-7 text-white whitespace-nowrap cursor-pointer box-border hover:text-white focus:text-white"
          href="/"
          style={{ textDecoration: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={32}
            className="block my-1 align-middle box-border"
            viewBox="0 0 118 94"
            role="img"
          >
            <title className="box-border">Bootstrap</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
              fill="currentColor"
              className="box-border"
            />
          </svg>
        </Link>
        <button
          className="p-0 m-0 text-xl leading-none text-center text-white normal-case bg-transparent rounded border-0 border-white border-solid cursor-pointer md:hidden box-border"
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
            className="leading-5 align-middle box-border"
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
          className="hidden flex-grow items-center md:flex md:basis-auto box-border basis-full"
          id="bdNavbar"
        >
          <ul
            className="flex flex-row flex-wrap pt-2 pl-0 my-0 md:flex-row md:py-0 box-border"
            style={{ listStyle: "none" }}
          >
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <Link
                className="block py-2 px-1 font-semibold text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
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
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
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
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="/docs/5.1/examples/"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                Examples
              </a>
            </li>
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://icons.getbootstrap.com/"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                Icons
              </a>
            </li>
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://themes.getbootstrap.com/"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                Themes
              </a>
            </li>
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://blog.getbootstrap.com/"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                Blog
              </a>
            </li>
          </ul>
          <hr
            className="my-4 mx-0 h-px text-white border-0 opacity-25 md:hidden box-border"
            style={{ backgroundColor: "currentcolor" }}
          />
          <ul
            className="flex flex-row flex-wrap pl-0 my-0 md:ml-auto md:flex-row box-border"
            style={{ listStyle: "none" }}
          >
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://github.com/twbs"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  className="inline-block w-4 h-4 align-text-top box-border"
                  viewBox="0 0 512 499.36"
                  role="img"
                  style={{ listStyle: "outside none none" }}
                >
                  <title
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  >
                    GitHub
                  </title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  />
                </svg>
                <small
                  className="ml-2 text-sm leading-5 md:hidden box-border"
                  style={{ listStyle: "outside none none" }}
                >
                  GitHub
                </small>
              </a>
            </li>
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://twitter.com/getbootstrap"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  className="inline-block w-4 h-4 align-text-top box-border"
                  viewBox="0 0 512 416.32"
                  role="img"
                  style={{ listStyle: "outside none none" }}
                >
                  <title
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  >
                    Twitter
                  </title>
                  <path
                    fill="currentColor"
                    d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  />
                </svg>
                <small
                  className="ml-2 text-sm leading-5 md:hidden box-border"
                  style={{ listStyle: "outside none none" }}
                >
                  Twitter
                </small>
              </a>
            </li>
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://bootstrap-slack.herokuapp.com/"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  className="inline-block w-4 h-4 align-text-top box-border"
                  viewBox="0 0 512 512"
                  role="img"
                  style={{ listStyle: "outside none none" }}
                >
                  <title
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  >
                    Slack
                  </title>
                  <path
                    fill="currentColor"
                    d="M210.787 234.832l68.31-22.883 22.1 65.977-68.309 22.882z"
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  />
                  <path
                    fill="currentColor"
                    d="M490.54 185.6C437.7 9.59 361.6-31.34 185.6 21.46S-31.3 150.4 21.46 326.4 150.4 543.3 326.4 490.54 543.34 361.6 490.54 185.6zM401.7 299.8l-33.15 11.05 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.38-68.36 22.92 11.46 34.38c4.5 13.92-2.87 29.06-16.78 33.56-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18l-11.46-34.43-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.5-13.92 2.87-29.06 16.78-33.56l33.12-11.03-22.1-65.9-33.15 11.05c-2.87.82-6.14 1.64-9 1.23a27.32 27.32 0 0 1-24.56-18c-4.48-13.93 2.89-29.07 16.81-33.58l33.15-11.05-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.46 34.38 68.36-22.92-11.46-34.38c-4.5-13.92 2.87-29.06 16.78-33.56s29.06 2.87 33.56 16.78l11.47 34.42 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.87 29.06-16.78 33.56L329.7 194.6l22.1 65.9 33.15-11.05c13.92-4.5 29.06 2.87 33.56 16.78s-2.88 29.07-16.81 33.57z"
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  />
                </svg>
                <small
                  className="ml-2 text-sm leading-5 md:hidden box-border"
                  style={{ listStyle: "outside none none" }}
                >
                  Slack
                </small>
              </a>
            </li>
            <li
              className="flex-none w-1/2 text-left md:w-auto md:flex-none box-border"
              style={{ listStyle: "outside none none" }}
            >
              <a
                className="block py-2 px-1 text-white cursor-pointer md:px-2 box-border hover:text-white focus:text-white"
                href="https://opencollective.com/bootstrap"
                target="_blank"
                rel="noopener"
                style={{
                  textDecoration: "none",
                  transition: "none 0s ease 0s",
                  listStyle: "outside none none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  fill="currentColor"
                  fillRule="evenodd"
                  className="inline-block w-4 h-4 align-text-top box-border"
                  viewBox="0 0 40 41"
                  role="img"
                  style={{ listStyle: "outside none none" }}
                >
                  <title
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  >
                    Open Collective
                  </title>
                  <path
                    fillOpacity=".4"
                    d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  />
                  <path
                    d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"
                    className="box-border"
                    style={{ listStyle: "outside none none" }}
                  />
                </svg>
                <small
                  className="ml-2 text-sm leading-5 md:hidden box-border"
                  style={{ listStyle: "outside none none" }}
                >
                  Open Collective
                </small>
              </a>
            </li>
          </ul>
          <a
            className="inline-block py-1 px-3 my-2 text-base font-normal leading-normal text-center align-middle bg-transparent rounded border border-transparent border-solid cursor-pointer select-none md:my-0 md:ml-4 lg:inline-block box-border hover:border-amber-200 hover:bg-amber-200 hover:text-neutral-800"
            href="/docs/5.1/getting-started/download/"
            style={{ textDecoration: "none", transition: "none 0s ease 0s" }}
          >
            Download
          </a>
        </div>
      </nav>
    </header>
    <main className="lg:col-span-5 xl:col-span-6">{children}</main>
  </div>
);

export default MainLayout;