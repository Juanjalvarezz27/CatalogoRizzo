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
        relative flex items-center overflow-hidden rounded-xl
        transition-all duration-300
        ${
          isFocused
            ? "ring-2 ring-gold-400/50 shadow-lg shadow-gold-400/10 bg-night-800"
            : "ring-1 ring-night-600/50 bg-night-800/60"
        }
      `}
    >
      {/* Search icon */}
      <svg
        className={`pointer-events-none absolute left-3.5 h-4 w-4 transition-colors duration-200 ${isFocused ? "text-gold-400" : "text-night-400"}`}
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
        placeholder="Buscar por nombre..."
        className="w-full bg-transparent py-2.5 pl-10 pr-9 font-poppins text-sm text-white placeholder-night-400 outline-none"
      />

      {/* Botón limpiar */}
      {query && (
        <button
          id="clear-search"
          onClick={handleClear}
          className="absolute right-2.5 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-night-500 text-night-300 transition-colors hover:bg-gold-400/20 hover:text-gold-400"
          aria-label="Limpiar búsqueda"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
