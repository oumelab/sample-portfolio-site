import {Button} from "./ui/button";
import {FaGithub} from "react-icons/fa";
import { SOCIAL } from "@/constants";

export default function Hero() {
  return (
    <section className="w-full mx-auto flex flex-col gap-6 justify-center items-center text-muted-foreground bg-muted py-20 px-5 dark:bg-zinc-900">
      <p className="size-12 rounded-full grid place-content-center bg-yellow-300/30 border border-zinc-200 dark:border-zinc-400 text-2xl">
        👋
      </p>
      <h2 className="text-center text-5xl sm:text-[58px] font-bold text-foreground">
        Welcome to{" "}<span className="inline-block">My Portfolio</span>
      </h2>
      <p>React と Tailwind CSS が好きな、<br className="sm:hidden" />初心者プログラマの @handle です！</p>
      <Button className="bg-emerald-600 text-white w-10/12 sm:w-28 hover:bg-emerald-300/30" asChild>
        <a href={SOCIAL.github} target="_blank">
          <FaGithub className="size-6" />
          GitHub
        </a>
      </Button>
    </section>
  );
}
