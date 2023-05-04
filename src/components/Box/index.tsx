import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const Box = ({ children, className = "", ...props }: Props) => {
  return (
    <div
      className={`relative pb-4 rounded-[30px] bg-shadowBox z-20`}
      {...props}
    >
      <div className="rounded-[30px] bg-coverBox p-3 h-full">
        <div className="rounded-[20px] bg-contentBox border-dashed border-2 border-contentBorder h-full">
          <div className={`${className || ""}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Box;
