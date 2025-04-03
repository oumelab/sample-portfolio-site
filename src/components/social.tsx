import {FaGithub} from "react-icons/fa";
import {FaXTwitter, FaRegFileLines} from "react-icons/fa6";
import {SOCIAL} from "@/constants";
import {Button} from "./ui/button";
import {IconType} from "react-icons/lib";

type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: SOCIAL.github,
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: SOCIAL.X,
    icon: FaXTwitter,
  },
  {
    name: "Blog",
    url: SOCIAL.blog,
    icon: FaRegFileLines,
  },
];

const SocialLinkCard = ({url, children}: {url:string, children: React.ReactNode}) => {
  return (
    <li className="w-full h-auto aspect-square">
      <Button
        variant="outline"
        className="relative w-full h-full group grid place-content-center border-[1px] rounded-xl bg-inherit hover:bg-muted cursor-pointer"
        asChild
      >
        <a href={url} className="absolute inset-0">
        {children}
        </a>
      </Button>
    </li>
  );
};

export default function Social() {
  return (
    <section id="social" className="w-full py-28 px-4 mx-auto dark:bg-zinc-900">
      <h3 className="font-bold text-[40px] text-center">Social</h3>
      <p className="mt-6 sm:text-center text-muted-foreground">
        私は、主に下記の媒体で、活動の記録を更新しています。
        <br />
        そして、多くの開発者と繋がれることを、楽しみにしています🙌
      </p>
      <ul className="w-full grid grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(3,10rem)] justify-center gap-4 sm:gap-6 mt-6">
        {SOCIAL_LINKS.map(({name, url, icon: Icon}) => (
          <SocialLinkCard key={name} url={url}>
              <Icon className="group-hover:text-foreground dark:group-hover:text-white size-10 sm:size-14 text-zinc-600 dark:text-zinc-400" />
              <span className="sr-only">{name}</span>
          </SocialLinkCard>
        ))}
      </ul>
    </section>
  );
}
