import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";

export default function Social() {
  return (
    <div id="social" className="py-28 text-center">
      <h3 className="font-bold text-[40px]">Social</h3>
      <p className="mt-6 text-center text-muted-foreground">
        私は、主に下記の媒体で、活動の記録を更新しています。
        <br />
        そして、多くの開発者と繋がれることを、楽しみにしています🙌
      </p>
      <ul className="flex justify-center gap-6 mt-6">
        <li className="relative size-40 grid place-content-center border-[1px] rounded-xl">
        <FaGithub className="size-14" />
          <a href="#" className="absolute inset-0"><span className="sr-only">GitHub</span></a>
        </li>
        <li className="relative size-40 grid place-content-center border-[1px] rounded-xl">
          <FaXTwitter className="size-14" />
          <a href="#" className="absolute inset-0"><span className="sr-only">GitHub</span></a>
        </li>
        <li className="relative size-40 grid place-content-center border-[1px] rounded-xl">
          <FaRegFileLines className="size-14" />
          <a href="#" className="absolute inset-0"><span className="sr-only">GitHub</span></a>
        </li>
      </ul>
    </div>
  );
}
