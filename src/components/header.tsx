export default function Header() {
  type MenuLink = {
    name: string,
    href: string
  }

  const menuLinks: MenuLink[] = [
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Portfolio",
      href: "#portfolio"
    },
    {
      name: "Social",
      href: "#social"
    },
  ]
  return (
    <header className="w-full border-b-1">
      <div className="max-w-5xl mx-auto p-3 flex justify-between items-center">
      <h1 className="font-bold text-xl">handle.com</h1>
      <nav>
        <ul className="flex gap-5">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-muted-foreground">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  )
}