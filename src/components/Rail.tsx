"use client";

import { useRef } from "react";

// Горизонтальная лента со скролл-снапом и стрелками.
export default function Rail({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <div className={`rail ${className}`}>
      <div className="rail__track" ref={ref} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <div className="rail__nav">
        <button onClick={() => scroll(-1)} aria-label="Назад">
          ←
        </button>
        <button onClick={() => scroll(1)} aria-label="Вперёд">
          →
        </button>
      </div>
    </div>
  );
}
