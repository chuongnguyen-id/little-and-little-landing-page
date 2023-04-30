import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <div className={`pb-2 bg-shadowButton rounded-xl ${className || ""}`}>
      <button
        className={`flex justify-center items-center rounded-xl font-icielKoni text-[28px] text-titleColor bg-buttonColor w-full`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
