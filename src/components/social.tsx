import {FaGithub} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {FaRegFileLines} from "react-icons/fa6";
import {Button} from "./ui/button";

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const buttonClassName: string =
  "group-hover:text-foreground size-10 sm:size-14 text-zinc-600";
const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "#",
    icon: <FaGithub className={buttonClassName} />,
  },
  {
    name: "Twitter",
    url: "#",
    icon: <FaXTwitter className={buttonClassName} />,
  },
  {
    name: "Blog",
    url: "#",
    icon: <FaRegFileLines className={buttonClassName} />,
  },
];

export default function Social() {
  return (
    <section id="social" className="w-full py-28 px-4 mx-auto">
      <h3 className="font-bold text-[40px] text-center">Social</h3>
      <p className="mt-6 sm:text-center text-muted-foreground">
        私は、主に下記の媒体で、活動の記録を更新しています。
        <br />
        そして、多くの開発者と繋がれることを、楽しみにしています🙌
      </p>
      <ul className="w-full grid grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(3,10rem)] justify-center gap-4 sm:gap-6 mt-6">
        {SOCIAL_LINKS.map((link, index) => (
          <li key={index} className="w-full h-auto aspect-square">
            <Button
              variant="outline"
              className="relative w-full h-full group grid place-content-center border-[1px] rounded-xl bg-inherit hover:bg-muted cursor-pointer"
              asChild
            >
              <a href={link.url} className="absolute inset-0">
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
