import {Button} from "./ui/button";
import {FaGithub} from "react-icons/fa";

export default function Hero() {
  return (
    <div className="w-full mx-auto flex flex-col gap-6 justify-center items-center text-muted-foreground bg-muted py-20 px-5">
      <p className="size-12 rounded-full grid place-content-center bg-yellow-300/30 border border-zinc-200 text-2xl">
        👋
      </p>
      <h2 className="text-center text-5xl sm:text-[58px] font-bold text-foreground">
        Welcome to{" "}<span className="inline-block">My Portfolio</span>
      </h2>
      <p>React と Tailwind CSS が好きな、<br className="sm:hidden" />初心者プログラマの @handle です！</p>
      <Button className="bg-emerald-600 text-white w-10/12 sm:w-28" asChild>
        <a href="/">
          <FaGithub />
          GitHub
        </a>
      </Button>
    </div>
  );
}
