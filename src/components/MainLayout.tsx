import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "./Layout/NavBar";
import Header from "./Layout/Header";
interface Props {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: Props) => (
  <div className={` sticky min-h-full  ${className}`}>
    <Navbar />
    <Header />
    <main className="">{children}</main>
  </div>
);

export default MainLayout;
