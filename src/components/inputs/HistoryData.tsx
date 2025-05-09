"use client";
import { HistoryEvent } from "@/types"; // Define your types in a separate file

export const historyEvents: HistoryEvent[] = [
  {
    id: 1,
    title: "Чингис хааны төрсөн өдөр",
    image: "/images/history7.jpg",
    shortDescription: "1162 онд Чингис хаан төрсөн. Тэрээр дэлхийн түүхэнд хамгийн агуу эзэнт гүрнүүдийн нэгийг үндэслэгч юм.",
    date: "1162 он",
    category: "Эзэнт гүрэн"
  },
  {
    id: 2,
    title: "Монголын эзэнт гүрэн байгуулагдсан",
    image: "/images/history/mongol-empire.jpg",
    shortDescription: "1206 онд Чингис хаан Монголын эзэнт гүрнийг байгуулсан. Энэ нь дэлхийн хамгийн том эзэнт гүрэн болсон.",
    date: "1206 он",
    category: "Эзэнт гүрэн"
  },
  {
    id: 3,
    title: "Хубилай хаан Юань улс байгуулав",
    image: "/images/history/yuan-dynasty.jpg",
    shortDescription: "1271 онд Хубилай хаан Юань улсыг байгуулж, Хятадыг эзэлсэн. Энэ нь Монголын эзэнт гүрний үргэлжлэл юм.",
    date: "1271 он",
    category: "Эзэнт гүрэн"
  },
  {
    id: 4,
    title: "Мандухай сэцэн хатан",
    image: "/images/history/mandukhai.jpg",
    shortDescription: "15-р зуунд Мандухай сэцэн хатан Монголыг дахин нэгтгэхэд гол үүрэг гүйцэтгэсэн бөгөөд Монголын түүхэн дэх хамгийн нэр хүндтэй эмэгтэйчүүдийн нэг юм.",
    date: "15-р зуун",
    category: "Эмэгтэйчүүд"
  },
  {
    id: 5,
    title: "Соёмбо бичиг",
    image: "/images/history/soyombo.jpg",
    shortDescription: "1686 онд Занабазар Соёмбо бичгийг зохиосон. Энэ нь Монголын соёл, шашны хөгжилд чухал хувь нэмэр оруулсан.",
    date: "1686 он",
    category: "Соёл урлаг"
  },
  {
    id: 6,
    title: "Богд хаант Монгол улс",
    image: "/images/history/bogd-khan.jpg",
    shortDescription: "1911 онд Монгол Хятадын дарлалаас гарч, Богд хаант Монгол улсыг байгуулсан. Энэ нь 20-р зууны эхэн үеийн тусгаар тогтнолын тэмцэл юм.",
    date: "1911 он",
    category: "Тусгаар тогтнол"
  }
];

export default function HistoryData() {
  return historyEvents;
}