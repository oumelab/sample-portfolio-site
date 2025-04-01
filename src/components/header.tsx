import {useEffect, useState} from "react";
import {IoMdMenu} from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { MOBILE_MEDIA_QUERY } from "@/constants";

export default function Header() {
  const isMobile = useMatchMedia(MOBILE_MEDIA_QUERY);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  useEffect(() => {
    setMenuIsOpen(false);
  }, [isMobile]);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  type MenuLink = {
    name: string;
    href: string;
  };

  const menuLinks: MenuLink[] = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "Social",
      href: "#social",
    },
  ];

  return (
    <header className="w-full border-b-1">
      <div className="max-w-5xl mx-auto p-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">handle.com</h1>
        <nav className={clsx("sm:static sm:block gap-0", menuIsOpen ? "block absolute top-[50px] left-0 w-full px-4 pt-8 pb-5 bg-white" : "hidden")}>
          <ul className="flex flex-col gap-3 sm:static sm:flex-row sm:w-fit sm:gap-6">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-muted-foreground" onClick={() => setMenuIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuIsOpen ? (
          <IoMdClose className="cursor-pointer sm:hidden text-2xl relative z-10" onClick={toggleMenu} />
        ) : (
          <IoMdMenu className="cursor-pointer sm:hidden text-2xl" onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
}
