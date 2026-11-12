"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el || !el.clientWidth) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="gallery-wrap">
      <div className="gallery" ref={ref} onScroll={onScroll}>
        {images.map((src, i) => (
          <div className="gallery__item" key={src}>
            <Image
              src={src}
              alt={i === 0 ? alt : `${alt} — фото ${i + 1}`}
              fill
              priority={i < 2}
              quality={85}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        ))}
      </div>
      <span className="gallery__count" aria-hidden>
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
