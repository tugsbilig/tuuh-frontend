// components/MainText.tsx


import Image from "next/image";

interface MainTextProps {
  isExpanded: boolean;
  toggleText: () => void;
  fullText: string;
  previewText: string;
}

const MainText: React.FC<MainTextProps> = ({ isExpanded, toggleText, fullText, previewText }) => {
  return (
    <div>
      <section className="flex flex-col md:flex-row gap-9 items-center justify-center">
        <section className="flex flex-col items-center md:items-start">
          <h1 className="text-6xl font-bold">Монголын эзэнт гүрэн</h1>
          <p>{isExpanded ? fullText : previewText}</p>
          <div className="text-blue-200 cursor-pointer mt-4 border p-2" onClick={toggleText}>
            {isExpanded ? "See less" : "See more"}
          </div>
        </section>
        <section className="flex gap-4">
          <Image
            src="/images/Mongol_warrior-removebg-preview.png"
            alt="Mongol Warrior"
            width={300}
            height={300}
            className="object-cover"
          />
        </section>
      </section>
    </div>
  );
};

export default MainText;
