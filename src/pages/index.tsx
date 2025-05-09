"use client";
import { useState, useEffect } from "react";
import MongolianText from "@/components/MongolianText";
import Navbar from "@/components/Navbar";
import StickyMongolianFrame from "@/components/Patternframe";
import MainText from "@/components/Hometext";
import { motion } from "framer-motion";
import SearchBar from '@/components/searchbar';
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import DecorativeBackground from "@/components/DecorativeBackground";
import HeroBanner from "@/components/HeroBanner";
import Logo from "@/components/Logo";
import Layout from "@/components/Layout";
import { TopContributors } from "@/components/TopContributers";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleText = () => setIsExpanded(!isExpanded);

  const fullText = `
    Монголын эзэнт гүрэн нь 1206 онд Чингис хаан төрийг байгуулснаар дэлхийн түүхэнд хамгийн том газар нутгийг эзэгнэсэн эзэнт гүрэн болжээ.XII зууны сүүлийн хагаст Монголын газар нутагт Хамаг Монгол, Хэрэйд, Мэргид, Татар, Найман зэрэг олон арван нүүдэлчин аймгууд мөнхийн дайн дажинтай байлаа. Хамаг Монгол аймгийн хаанаар 1189 онд өргөмжлөгдсөн Чингис хаан улс төр болон цэрэг зэвсгийн хүчээр зэргэлдээх аймгуудыг өөртөө нэгтгэж 1206 онд Их Монгол Улсыг байгуулсан байна. Нүүдэлчин аймгуудын нэгдлийг хөрш зэргэлдээ орнууд эерэгээр хүлээж авсангүй. Улмаар улс төр, эдийн засгийн зөрчил нь дайн үүсэх шалтгаан болж Чингис хаан Зүрчидийн Алтан улс, Тангуд болон Хорезм эзэнт улсад цэрэглэн халдаж цаашлан Азербайжан, Гүржийг эзэлж Калка голын хөвөөн дээр Оросын вангуудын цэргийг бут цохьжээ. Тангудын эсрэг хийсэн сүүлчийн аян дайндаа Чингис хаан өвчнөөр таалал төгссөн бөгөөд өөрийн байгуулсан эзэнт улсаа хүү нартаа гэрээслэн үлдээсэн түүхтэй юм. XII зууны монголчуудьн өмнө тархай бутархай оршиж, өөр хоорондоо ямагт харгалдан бусдын зууш болох уу, эсвэл нэгэн дээвэр дор нэгдэн нягтарч, өгсөн дээшлэх үү гэсэн ацан зам тулгарчээ. Тэрхүү түүхэн сонголтыг зөв ухамсарласан Хамаг Монголын хан Тэмүжин эсгий туургатныг нэгтгэх тэмцэлд эргэлт буцалтгүй оржээ. Хамаг Монголын дотор Тэмүжинээс гадна Жамухын толгойлсон хүчний нөгөө туйл үүсэж, тэд тус тусдаа хүчээ зузаатгахыг эрмэлээж байв. Харин цагийн байдал Тэмүжиний талд аятай эргэж, Жамухын харъяат нараас түүний талд дагаар орсоор байлаа. Хэрэйдийн ханлигийн дотор эвдрэл гарч, Тоорил ханыг хүчин мөхөсдөхөд Тэмүжин ивээлдээ авч дахин тэнхрүүлэв. Ингээд түүнтэй хамт 1196 онд Алтан улсад туслан, Татарт хамтын хүчээр цохилт өгчээ. Тэд 1199 онд Найманы ханлигтай нүүр тулж байлдсанаас гадна Монгол угсааны олон аймгийг байлдан дагуугав. Гэвч Тайчууд, Хонгирад, Ихирэс, Горлос, Татар, Ойрад, Найман аймгийн ноёд эвсэж, Чингисийн эсрэг шинэ холбоо байгуулжээ. Тэд 1201 онд Эргүнэ мөрний хөвөөн дээр хуралдаж, Жамуха сэцэнийг Гүр хаан хэмээн өргөмжилжээ. Эл бүлэглэлийн эсрэг Тэмүжин Тоорил хантай хүч хавсран тулалдаж бут цохижээ. Жамухын эвслийг бут цохисны дараа Тэмүжин 1202 онд Татарыг эрхэндээ бүрмөсөн оруулав. 
  `;

  const previewText = fullText.split("\n")[0] + "...";const mockContributors = [
    { id: '1', name: 'Bat Erdene', avatar: '/avatars/1.jpg', contributions: 42 },
    { id: '2', name: 'Temuulen', avatar: '/avatars/2.jpg', contributions: 37 },
    { id: '3', name: 'Nomin', avatar: '/avatars/3.jpg', contributions: 29 },
    { id: '4', name: 'Bold', avatar: '/avatars/4.jpg', contributions: 18 },
    { id: '5', name: 'Saraa', avatar: '/avatars/5.jpg', contributions: 15 },
  ];

  return (
    <Layout>
    <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
  <DecorativeBackground />
  
  <div className="relative top-16 left-0 w-full flex justify-center">
    <Logo />
  </div>

  <StickyMongolianFrame />
  <MongolianText />
  
  <motion.header 
    className="w-full text-white py-3 fixed top-0 left-0 flex justify-center z-50 backdrop-blur-sm"
    initial={{ y: -100 }}
  >

  </motion.header>

 
      <main className="relative flex flex-col gap-12 items-center mx-auto mt-20 z-10 w-full max-w-6xl px-4 sm:px-6">
        <div className="w-full">
          <HeroBanner
            imageUrl="/images/history9.jpg"
            altText="Mongolian Steppe Landscape"
            title="Монголын эзэнт гүрэн бутарсан шалтгаан?"
          />

          <MainText
            isExpanded={isExpanded}
            toggleText={toggleText}
            fullText={fullText}
            previewText={previewText}
          />

          <FeatureGrid />
        </div>
        <div className="my-12">
       
      </div>
      </main>
     
    </div>
    </Layout>
  );
}