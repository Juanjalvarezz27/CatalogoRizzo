"use client";

import { useState, useRef, useEffect } from "react";
import { categories, products, type Category } from "@/data/products";

interface CategoryFilterProps {
  selected: Category;
  onSelect: (cat: Category) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Conteo por categoría ───────────────────────── */
  const getCategoryCount = (cat: Category): number => {
    if (cat === "Todos") return products.length;
    return products.filter((p) => p.categoria === cat).length;
  };

  /* ── Cerrar al hacer click fuera ────────────────── */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full sm:w-64" id="category-filter">
      {/* ── Botón del desplegable ──────────────────── */}
      <button
        id="category-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex w-full cursor-pointer items-center justify-between
          rounded-2xl px-5 py-3.5 font-poppins text-sm font-medium
          backdrop-blur-xl shadow-xl transition-all duration-300
          ${
            isOpen
              ? "bg-white/10 ring-2 ring-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.2)] text-white"
              : "bg-white/5 ring-1 ring-white/20 text-white hover:bg-white/10 hover:ring-white/30"
          }
        `}
      >
        <div className="flex items-center gap-2">
          <span className="text-gold-400 text-xs">Categoría:</span>
          <span className="text-white font-semibold">{selected}</span>
          {selected !== "Todos" && (
            <span className="ml-1 rounded-full bg-gold-400/15 px-2 py-0.5 text-[10px] font-bold text-gold-400">
              {getCategoryCount(selected)}
            </span>
          )}
        </div>

        {/* Chevron */}
        <svg
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180 text-gold-400" : "text-white/60"}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* ── Lista desplegable ─────────────────────── */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-2xl bg-[#111116]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 ring-1 ring-white/20 animate-fade-in-up" style={{ animationDuration: "0.15s" }}>
          {categories.map((cat) => {
            const isActive = selected === cat;
            const count = getCategoryCount(cat);

            return (
              <button
                key={cat}
                id={`category-${cat.toLowerCase()}`}
                onClick={() => {
                  onSelect(cat);
                  setIsOpen(false);
                }}
                className={`
                  flex w-full cursor-pointer items-center justify-between
                  px-5 py-3 font-poppins text-sm
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-gold-500/20 text-gold-400 font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span>{cat}</span>
                <span
                  className={`
                    rounded-full px-2 py-0.5 text-[10px] font-bold
                    ${isActive ? "bg-gold-400/20 text-gold-400" : "bg-night-600/50 text-night-400"}
                  `}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
