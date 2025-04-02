import { Project } from "@/types";

export const BASE_URL: string = import.meta.env.VITE_PUBLIC_URL || "";

export const MOBILE_MEDIA_QUERY: string = "(width >= 40rem)"; // 640px mobile screen size

export const PROJECTS: Project[] = [ // プロジェクトのリスト
  {
    emoji: "👋",
    title: "ポートフォリオサイト",
    desc: "今表示しているこのサイト。シンプルな Web サイトを作成しながら、Reactの基本的な概念を学びました。",
    img: `${BASE_URL}/react-portfolio.webp`,
    githubUrl: "#",
  },
  {
    emoji: "💬",
    title: "名言ジェネレーター",
    desc: "このプロジェクトでは、useEffect フックを使ったデータフェッチと、その注意点について重点的に学習しました。",
    img: `${BASE_URL}/random-quote.webp`,
    githubUrl: "#",
  },
  {
    emoji: "✏️",
    title: "作業用メモアプリ",
    desc: "このプロジェクトでは、stateの配列やオブジェクトを、イミュータブルに扱うReactの作法を学習しました。",
    img: `${BASE_URL}/simple-memo.webp`,
    githubUrl: "#",
  },
  {
    emoji: "💰",
    title: "割り勘計算機",
    desc: "このプロジェクトでは、Zustandを使用して、グローバルに状態を管理する実装を学習しました。",
    img: `${BASE_URL}/warikan-culculator.webp`,
    githubUrl: "#",
  },
];