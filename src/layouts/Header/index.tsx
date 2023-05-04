import { Link, NavLink } from "react-router-dom";
import TelephoneIcon from "../../components/Icon/TelephoneIcon";

const navMenuData = [
  {
    title: "Trang chủ",
    link: "/",
  },
  {
    title: "Sự kiện",
    link: "/su-kien",
  },
  {
    title: "Liên hệ",
    link: "/lien-he",
  },
];

const Header = () => {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center h-full bg-navigationColor gap-x-60 rounded-b-[50%] shadow-2xl">
        <Link to="/">
          <img srcSet="/logo.png 3x" alt="logo" />
        </Link>
        <div className="flex justify-center items-center gap-x-[212px]">
          <ul className="flex items-center gap-x-20">
            {navMenuData.map((item) => (
              <li
                key={item.title}
                className="flex text-lg font-bold text-titleColor"
              >
                <NavLink
                  to={item.link}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {item.title}
                </NavLink>
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
