import { BASE_URL } from "@/constants"

export default function About() {
  return (
    <section id="about" className="w-full py-28 px-4 dark:bg-zinc-800">
      <div className="max-w-3xl mx-auto flex flex-col-reverse sm:flex-row justify-center gap-5">
      <div className="sm:w-[680px] h-auto rounded-md overflow-hidden">
        <img src={`${BASE_URL}/camp-coffee.webp`} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="sm:w-[640px] flex flex-col gap-4">
        <h3 className="font-bold text-[40px]">About</h3>
        <p className="text-muted-foreground leading-7">私は、プログラミングを始めて約１年半となる、ビギナーの開発者です。<br />
        現在は、React、TypeScript、Tailwind CSS などを使用した、 フロントエンド開発のスキルアップに、情熱を注いでいます。</p>
        <p className="text-muted-foreground">趣味は、キャンプです🏕️</p>
      </div>
      </div>
    </section>
  )
}