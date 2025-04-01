import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="w-full mx-auto flex flex-col gap-5 justify-center items-center text-muted-foreground bg-muted py-20 px-5">
      <p className="size-12 rounded-full grid place-content-center bg-yellow-300/30 border border-zinc-200 text-2xl">👋</p>
      <h2 className="text-[58px] font-bold text-foreground">Welcome to My Portfolio</h2>
      <p>React と Tailwind CSS が好きな、初心者プログラマの @handle です！</p>
      <Button className="bg-emerald-600 text-white" asChild>
        <a href="/"><FaGithub />GitHub</a>
      </Button>
    </div>
  )
}