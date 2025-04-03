import {useEffect, useState} from "react";
import clsx from "clsx";
import {useMatchMedia} from "@/hooks/useMatchMedia";
import {MOBILE_MEDIA_QUERY} from "@/constants";
import {Button} from "./ui/button";
import {Menu, X} from "lucide-react";
import {ModeToggle} from "./mode-toggle";

export default function Header() {
  const isMobile = useMatchMedia(MOBILE_MEDIA_QUERY);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    setMenuIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, [isMobile]);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    document.body.classList.toggle("overflow-hidden");
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
    <header className="w-full border-b-1 dark:bg-zinc-800">
      {menuIsOpen && (
        <div
          className="fixed inset-0 mt-60 bg-black/30"
          onClick={() => {
            setMenuIsOpen(false);
          }}
        />
      )}
      <div className="max-w-5xl mx-auto pl-5 pr-3 py-3 sm:px-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">handle.com</h1>
        <nav
          className={clsx(
            "sm:static sm:block gap-0",
            menuIsOpen
              ? "block absolute top-[60px] left-0 w-full px-4 pt-6 pb-5 bg-white dark:bg-zinc-800 border-y-1 dark:border-zinc-700"
              : "hidden"
          )}
        >
          <ul className="flex flex-col gap-1 sm:static sm:flex-row sm:items-center sm:w-fit sm:gap-4">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Button
                  variant="ghost"
                  className="w-full justify-start py-5 sm:py-2 sm:justify-center sm:w-fit sm:px-2 text-md dark:hover:bg-zinc-700/80"
                  asChild
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground"
                    onClick={() => {
                      setMenuIsOpen(false);
                      document.body.classList.remove("overflow-hidden");
                    }}
                  >
                    {link.name}
                  </a>
                </Button>
              </li>
            ))}
            <li className="pl-4 pt-4 sm:pl-0 sm:pt-0">
              <ModeToggle />
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer sm:hidden dark:hover:bg-zinc-700/80"
          onClick={toggleMenu}
        >
          {menuIsOpen ? (
            <X size={24} className="size-7" />
          ) : (
            <Menu size={24} className="size-7" />
          )}
          <span className="sr-only">{menuIsOpen ? "閉じる" : "開く"}</span>
        </Button>
      </div>
    </header>
  );
}
