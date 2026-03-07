"use client";
import { tools } from "../data/tools";

export default function ToolsSlider() {
  const doubled = [...tools, ...tools];
  return (
    <div className="w-full bg-black/20 py-4 overflow-hidden relative">
      <div
        className="absolute inset-y-0 left-0 w-[15%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #c2185b, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[15%] z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #f9a825, transparent)" }}
      />
      <div
        className="flex gap-10 w-max"
        style={{ animation: "scroll-left 40s linear infinite" }}
      >
        {doubled.map((tool, i) => (
          <a
            key={i}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-opacity whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/60" xmlns="http://www.w3.org/2000/svg">
              <path d={tool.svgPath} />
            </svg>
            <span className="text-sm">{tool.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}