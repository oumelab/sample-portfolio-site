import {useEffect, useState} from "react";
import {IoMdMenu} from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { useWindowSize } from "@/hooks/useWindowSize";


export default function Header() {
  const windowWidth = useWindowSize();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (windowWidth > 768) {
      setMenuIsOpen(false);
    }
  }, [windowWidth]);

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
        <nav className={clsx("md:static md:block gap-0", menuIsOpen ? "block fixed w-full" : "hidden")}>
          <ul className="fixed top-[50px] left-0 w-full bg-white px-4 pt-8 pb-5 flex flex-col gap-3 md:static md:flex-row md:w-fit md:p-0 md:gap-6">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-muted-foreground" onClick={toggleMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {menuIsOpen ? (
          <IoMdClose className="cursor-pointer md:hidden text-2xl relative z-10" onClick={toggleMenu} />
        ) : (
          <IoMdMenu className="cursor-pointer md:hidden text-2xl" onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
}
