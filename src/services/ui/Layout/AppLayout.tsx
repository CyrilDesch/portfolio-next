import { twMerge } from "tailwind-merge";
import React, { ReactElement, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SmoothScrolling from "../SmoothScroll";

interface Props {
  children: ReactNode;
  className?: string;
}

const AppLayout = ({ children, className }: Props): ReactElement => {
  return (
    <>
      <Header />
      <main className={twMerge(className, "layout")}>
        <SmoothScrolling>
          <div>{children}</div>
        </SmoothScrolling>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
