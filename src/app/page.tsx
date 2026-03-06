"use client";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #c2185b 0%, #e64a19 50%, #f9a825 100%)" }}>
      <div className="text-center">
        <h1
          className={`text-7xl md:text-9xl text-white ${bebasNeue.className}`}
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)"
          }}
        >
          Website4You
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mt-4">
          Coming Soon
        </p>
      </div>
    </div>
  );
}