import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
  className?: string;
}

const AppLayout = ({ children, className }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main className={twMerge(className, "layout")}>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
