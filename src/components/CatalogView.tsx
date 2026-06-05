"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { products, type Category } from "@/data/products";
import { LayoutGrid, MapPin, Phone, Package } from "lucide-react";
import Image from "next/image";


export default function CatalogView() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");


  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((p) => p.categoria === selectedCategory);
    }

    // Filtrar por búsqueda (nombre, categoría y presentaciones)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.nombre.toLowerCase().includes(q) ||
          p.categoria.toLowerCase().includes(q) ||
          p.presentaciones.some((pres) => pres.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ── Fondo Iluminado Premium (Manchas esparcidas) ──────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#0a0a0c]">
        {/* Superior Izquierda */}
        <div className="absolute left-[-10%] top-[5%] h-[200px] w-[200px] md:left-[5%] md:h-[350px] md:w-[350px] bg-gold-400/15 md:bg-gold-400/25 blur-[80px] md:blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Superior Derecha (Solo Desktop) */}
        <div className="hidden md:block absolute right-[-20%] top-[15%] h-[350px] w-[350px] md:right-[10%] md:top-[15%] md:h-[400px] md:w-[400px] bg-gold-500/20 blur-[90px] md:blur-[120px] rounded-full mix-blend-screen" />
        
        {/* Medio Izquierda (Solo Desktop) */}
        <div className="hidden md:block absolute left-[-15%] top-[45%] h-[350px] w-[350px] md:left-[15%] md:h-[300px] md:w-[300px] bg-gold-600/20 blur-[90px] rounded-full mix-blend-screen" />
        
        {/* Medio Derecha */}
        <div className="absolute right-[-10%] top-[40%] h-[250px] w-[250px] md:right-[5%] md:top-[55%] md:h-[450px] md:w-[450px] bg-gold-400/15 md:bg-gold-400/20 blur-[90px] md:blur-[110px] rounded-full mix-blend-screen" />
        
        {/* Inferior Centro-Izquierda */}
        <div className="absolute left-[-5%] bottom-[10%] h-[200px] w-[200px] md:left-[30%] md:bottom-[10%] md:h-[350px] md:w-[350px] bg-gold-500/15 md:bg-gold-500/20 blur-[80px] md:blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Inferior Derecha (Solo Desktop) */}
        <div className="hidden md:block absolute right-[-15%] bottom-[-5%] h-[350px] w-[350px] md:right-[20%] md:bottom-[-5%] md:h-[400px] md:w-[400px] bg-gold-600/25 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* ── Contenido principal ──────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        {/* ── Hero Banner ────────────────────────────── */}
        <HeroBanner />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-5 sm:px-6 sm:py-6">
          {/* ── Controles superiores ──────────── */}
          <div className="mb-6">

            {/* ── Barra de búsqueda + Filtro de categoría ── */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex-1">
                <SearchBar query={searchQuery} onSearch={setSearchQuery} />
              </div>
              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            {/* Indicador de resultados */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur-md shadow-lg shadow-black/20">
              <Package className="h-4 w-4 text-gold-400" />
              <span className="font-poppins text-sm font-medium text-white/90">
                {filteredProducts.length} <span className="text-white/60 font-normal">{filteredProducts.length === 1 ? "producto" : "productos"}</span>
                {selectedCategory !== "Todos" && (
                  <span className="text-gold-400"> en {selectedCategory}</span>
                )}
                {searchQuery && (
                  <span className="text-white/60 font-normal"> para <span className="text-gold-400 font-medium">&quot;{searchQuery}&quot;</span></span>
                )}
              </span>
            </div>
          </div>

          {/* ── Grilla de productos ──────────────────── */}
          <ProductGrid products={filteredProducts} />
        </main>

        {/* ── Footer ────────────────────────────────────── */}
        <footer
          id="footer"
          className="mt-auto border-t border-white/5 bg-night-950 py-12"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
              
              {/* Logo y Descripción */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <Image
                  src="/Logo.jpg"
                  alt="Licorería Rizzo"
                  width={64}
                  height={64}
                  className="mb-4 h-16 w-16 rounded-full object-cover ring-2 ring-gold-400/30 shadow-lg"
                />
                <h3 className="font-montserrat text-lg font-bold text-white">
                  Licorería Rizzo
                </h3>
                <p className="mt-2 max-w-xs font-poppins text-sm text-white/60">
                  El mejor surtido al mayor para tu negocio, eventos y celebraciones especiales.
                </p>
              </div>

              {/* Enlaces de Contacto Rápido */}
              <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
                <h4 className="mb-2 font-montserrat text-sm font-semibold text-gold-400 uppercase tracking-widest">Atención</h4>
                
                <a href="https://instagram.com/licoreriarizzo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-poppins text-sm text-white/70 transition-colors hover:text-[#E1306C]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>@licoreriarizzo</span>
                </a>
                
                <a href="https://wa.me/584127510158" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-poppins text-sm text-white/70 transition-colors hover:text-[#25D366]">
                  <Phone className="h-4 w-4" />
                  <span>+58 412 751 0158</span>
                </a>

                <div className="flex items-center gap-2 font-poppins text-sm text-white/70">
                  <MapPin className="h-4 w-4 text-gold-400" />
                  <span>Ventas a nivel nacional</span>
                </div>
              </div>
            </div>

            {/* Separador */}
            <div className="my-8 h-[1px] w-full bg-white/5" />

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 font-poppins text-xs text-white/40 md:flex-row">
              <p>© {new Date().getFullYear()} Licorería Rizzo. Todos los derechos reservados.</p>
              <p className="text-center md:text-right text-gold-400/60 font-medium">
                Los precios y disponibilidad se manejan directamente por WhatsApp.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
