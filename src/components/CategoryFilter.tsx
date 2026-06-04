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
          rounded-xl px-4 py-3 font-poppins text-sm font-medium
          transition-all duration-200
          ${
            isOpen
              ? "bg-night-700 ring-2 ring-gold-400/40 text-white"
              : "bg-night-800 ring-1 ring-night-600/50 text-night-300 hover:bg-night-700 hover:text-white"
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
          className={`h-4 w-4 text-night-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl bg-night-800 shadow-xl shadow-black/40 ring-1 ring-night-600/50 animate-fade-in-up" style={{ animationDuration: "0.15s" }}>
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
                  px-4 py-2.5 font-poppins text-sm
                  transition-colors duration-150
                  ${
                    isActive
                      ? "bg-gold-400/10 text-gold-400 font-semibold"
                      : "text-night-300 hover:bg-night-700 hover:text-white"
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
