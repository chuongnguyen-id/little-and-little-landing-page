import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const TitleCard = ({ children, className = "", ...props }: Props) => {
  return (
    <div
      className={`mt-[-30px] mb-[22px] p-1 rounded-b-[50%] rounded-t-2xl bg-titleCardGradient h-[76.34px] ${
        className || ""
      }`}
      {...props}
    >
      <div className="flex justify-center items-center rounded-b-[50%] rounded-t-xl border-dashed border-2 border-white font-icielKoni text-[28px] text-titleColor uppercase h-full">
        {children}
      </div>
    </div>
  );
};

export default TitleCard;
