import {useState} from "react";
import {Button} from "./ui/button";
import {PROJECTS, BASE_URL} from "@/constants";
import clsx from "clsx";

export default function Portfolio() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  const selectedProject = PROJECTS[selectedProjectIndex];

  const handleSelectProjectIndex = (index: number) => {
    setSelectedProjectIndex(index);
  };

  return (
    <section id="portfolio" className="bg-muted py-28 px-4 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-[40px] font-bold">Portfolio</h3>
        <p className="mt-6 text-muted-foreground">
          学習を通じて、実際に開発した成果物のリストです🤖
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <ul className="w-full sm:w-[340px] flex flex-col gap-3">
            {PROJECTS.map((item, index) => (
              <li key={index} className="w-full">
                <Button
                  key={index}
                  onClick={() => handleSelectProjectIndex(index)}
                  variant="outline"
                  className={clsx("w-full h-full flex justify-start gap-2 border border-zinc-200 dark:text-muted-foreground bg-muted dark:bg-zinc-900 hover:border-zinc-400 hover:bg-white dark:hover:text-foreground rounded-xl py-2 sm:py-7 px-2 cursor-pointer", index === selectedProjectIndex && "dark:text-foreground bg-white border-zinc-400 dark:border-zinc-500 dark:bg-input/50")}
                >
                  <span className="size-11 border border-zinc-200 dark:border-zinc-500 rounded-full bg-white dark:bg-zinc-800 grid place-content-center text-xl">
                    {item.emoji}
                  </span>
                  <span>{item.title}</span>
                </Button>
              </li>
            ))}
          </ul>
          {selectedProject && (
            <div className="w-full h-full bg-zinc-100 border border-zinc-400 dark:border-zinc-500 rounded-xl flex flex-col text-center overflow-hidden shadow-lg">
              <div className="w-full h-[334px] overflow-hidden relative">
                <img
                  src={BASE_URL + selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-[50%_0%]"
                />
                <div className="absolute inset-0 bg-transparent dark:bg-accent/20" />
              </div>
              <div className="place-self-end text-left bg-white dark:bg-zinc-800/95 py-4 px-5">
                <p className="text-sm">{selectedProject.desc}</p>
                <Button
                  variant="link"
                  className="text-emerald-600 font-normal underline underline-offset-1 px-0"
                  asChild
                >
                  <a href={selectedProject.githubUrl}>👀 View on GitHub</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
