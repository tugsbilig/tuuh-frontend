// src/components/StickyMongolianFrame.tsx
import Image from "next/image";

const StickyMongolianFrame = () => {
  return (
    <div className="sticky-frame">
      <Image
        src="/heee.png"
        alt="Mongolian Triangle"
        className="absolute top-12 rotate-270"
        width={80}
        height={80}
      />
      <Image
        src="/heee.png"
        alt="Mongolian Triangle"
        className="top-12 right-0 rotate-0"
        width={80}
        height={80}
      />
      <Image
        src="/heee.png"
        alt="Mongolian Triangle"
        className="bottom-left rotate-180"
        width={80}
        height={80}
      />
      <Image
        src="/heee.png"
        alt="Mongolian Triangle"
        className="bottom-right rotate-90"
        width={80}
        height={80}
      />
    </div>
  );
};

export default StickyMongolianFrame;
