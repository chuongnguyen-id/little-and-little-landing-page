import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const Title = ({ children, className = "", ...props }: Props) => {
  return (
    <div
      className={`relative flex justify-center items-center mb-12 font-icielKoni text-8xl text-titleColor z-20 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Title;
