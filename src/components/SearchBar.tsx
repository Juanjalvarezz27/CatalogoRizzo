"use client";

import { useState, useCallback } from "react";

interface SearchBarProps {
  query: string;
  onSearch: (q: string) => void;
}

export default function SearchBar({ query, onSearch }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = useCallback(() => {
    onSearch("");
  }, [onSearch]);

  return (
    <div
      id="search-bar"
      className={`
        relative flex items-center overflow-hidden rounded-2xl
        backdrop-blur-xl shadow-xl transition-all duration-300
        ${
          isFocused
            ? "ring-2 ring-gold-400 bg-white/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            : "ring-1 ring-white/20 bg-white/5 hover:bg-white/10 hover:ring-white/30"
        }
      `}
    >
      {/* Search icon */}
      <svg
        className={`pointer-events-none absolute left-4 h-5 w-5 transition-colors duration-200 ${isFocused ? "text-gold-400" : "text-white/60"}`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Buscar por nombre, categoría..."
        className="w-full bg-transparent py-3.5 pl-12 pr-10 font-poppins text-sm text-white placeholder-white/50 outline-none"
      />

      {/* Botón limpiar */}
      {query && (
        <button
          id="clear-search"
          onClick={handleClear}
          className="absolute right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-night-600/50 text-night-200 transition-all hover:bg-gold-500 hover:text-night-950"
          aria-label="Limpiar búsqueda"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
