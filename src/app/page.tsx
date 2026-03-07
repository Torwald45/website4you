"use client";
import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from "react";
import ToolsSlider from "../components/ToolsSlider";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const typingTexts = ["Coming Soon", "Something great is coming", "Stay tuned"];

function Logo() {
  return (
    <a href="/" className={"flex items-start gap-0 leading-none " + bebasNeue.className}>
      <span style={{ fontSize: "20px", color: "#f9a825", lineHeight: 1, marginTop: "2px" }}>W</span>
      <span style={{ fontSize: "52px", color: "white", lineHeight: 1 }}>4</span>
      <span style={{ fontSize: "20px", color: "#f9a825", lineHeight: 1, marginTop: "2px" }}>Y</span>
      <span style={{ fontSize: "20px", color: "white", marginLeft: "10px", lineHeight: 1, alignSelf: "center" }}>Website4You</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(charIndex + 1); }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(charIndex - 1); }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((textIndex + 1) % typingTexts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #c2185b 0%, #e64a19 50%, #f9a825 100%)" }}>
      <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors text-sm">Start</a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm">Services</a>
            <a href="#how-we-work" className="text-white/80 hover:text-white transition-colors text-sm">How We Work</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</a>
            <a href="/case-studies" className="bg-white text-[#c2185b] font-semibold px-4 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">Case Studies</a>
          </div>
          <button className="md:hidden text-white border border-white/30 px-3 py-1 rounded text-sm" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/30 px-6 py-4 flex flex-col gap-4">
            <a href="/" className="text-white/80 hover:text-white text-sm">Start</a>
            <a href="#services" className="text-white/80 hover:text-white text-sm">Services</a>
            <a href="#how-we-work" className="text-white/80 hover:text-white text-sm">How We Work</a>
            <a href="#contact" className="text-white/80 hover:text-white text-sm">Contact</a>
            <a href="/case-studies" className="text-white font-semibold text-sm">Case Studies</a>
          </div>
        )}
      </nav>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <h1 className={`text-6xl md:text-8xl text-white leading-none ${bebasNeue.className}`}
              style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}>
              Your business.<br/>Your stack.<br/>Your rules.
            </h1>
            <p className="text-white/80 text-lg max-w-md">
              Websites, servers, SEO and custom software built on open source tools you own and control.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#how-we-work" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">How We Work</a>
              <a href="/case-studies" className="bg-white text-[#c2185b] font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors">Case Studies</a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className={"text-2xl md:text-4xl text-white/90 flex items-center gap-1 " + bebasNeue.className}>
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-8 bg-white" style={{ animation: "typing-cursor 1s infinite" }} />
            </div>
          </div>
        </div>
        <ToolsSlider />
      </div>
    </div>
  );
}