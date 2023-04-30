import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const DashboardLayout = ({ children, className = "", ...props }: Props) => {
  return (
    <section
      className={`bg-bgImage bg-cover bg-center flex justify-center items-center m-10 min-h-[961px] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </section>
  );
};

export default DashboardLayout;
