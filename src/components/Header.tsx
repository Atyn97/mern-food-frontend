import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";

const TOP_OFFSET = 66;

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white w-full fixed z-40 bg-gradient-to-b from-zinc-900  ...">
      <div
        className={`"
        px-6
        md:px-16
        py-4
        flex
        flex-row
        item-center
        justify-between
        transition
        duration-500
        ${showBackground ? "bg-white shadow-lg text-black" : ""}
        `}
      >
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-green-500"
        >
          SpeedyEats
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
