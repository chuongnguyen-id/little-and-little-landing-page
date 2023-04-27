import React from "react";
import { Link } from "react-router-dom";
import TelephoneIcon from "../components/icons/TelephoneIcon";

const navMenuData = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Sự kiện",
    link: "#",
  },
  {
    title: "Liên hệ",
    link: "#",
  },
];

const Header = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0">
      <div className="flex justify-center h-full bg-navigationColor gap-x-60 rounded-b-[50%] shadow-2xl">
        <Link to="/">
          <img srcSet="/logo.png 3x" alt="logo" />
        </Link>
        <div className="flex justify-center items-center gap-x-[212px]">
          <ul className="flex items-center gap-x-20">
            {navMenuData.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.link}
                  className="p-3 text-lg font-bold text-titleColor"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <TelephoneIcon />
            <div className="text-[16px] font-bold text-titleColor">
              0123456789
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
