import {Button} from "./ui/button";

export default function Portfolio() {
  type Item = {
    title: string;
    emoji: string;
  };

  const Items: Item[] = [
    {
      title: "ポートフォリオサイト",
      emoji: "👋",
    },
    {
      title: "名言ジェネレーター",
      emoji: "💬",
    },
    {
      title: "作業用メモアプリ",
      emoji: "✏️",
    },
    {
      title: "割り勘計算機",
      emoji: "💰",
    },
  ];
  return (
    <div id="portfolio" className="bg-muted py-28 px-4">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-[40px] font-bold">Portfolio</h3>
        <p className="mt-6 text-muted-foreground">
          学習を通じて、実際に開発した成果物のリストです🤖
        </p>
        <div className="mt-6 flex gap-4">
          <ul className="w-[340px] flex flex-col gap-2">
            {Items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 border border-zinc-200 rounded-xl py-6 px-2"
              >
                <span className="size-11 border border-zinc-200 rounded-full bg-white grid place-content-center text-xl">
                  {item.emoji}
                </span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="h-auto bg-zinc-100 border border-zinc-200 rounded-xl flex flex-col text-center overflow-hidden shadow-lg">
            <div className="w-full h-full">screen shot</div>
            <div className="place-self-end text-left bg-white py-4 px-5">
              <p className="text-sm">
                このプロジェクトでは、useEffect
                フックを使ったデータフェッチと、その注意点について重点的に学習しました。
              </p>
              <Button
                variant="link"
                className="text-emerald-600 font-normal underline underline-offset-1 px-0"
                asChild
              >
                <a href="">👀 View on GitHub</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
