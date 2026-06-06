"use client";

import { useState, useMemo, useDeferredValue } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { products, type Category } from "@/data/products";
import { LayoutGrid, MapPin, Phone, Package, Mail } from "lucide-react";
import Image from "next/image";


export default function CatalogView() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Resetear a la primera página al filtrar
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Resetear a la primera página al buscar
  };


  const deferredSearchQuery = useDeferredValue(searchQuery);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((p) => p.categoria === selectedCategory);
    }

    // Filtrar por búsqueda (nombre, categoría y presentaciones) usando el valor diferido
    if (deferredSearchQuery.trim()) {
      const q = deferredSearchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.nombre.toLowerCase().includes(q) ||
          p.categoria.toLowerCase().includes(q) ||
          p.presentaciones.some((pres) => pres.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [selectedCategory, deferredSearchQuery]);

  const ITEMS_PER_PAGE = 40;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* ── Fondo Iluminado Premium (Gradientes estáticos — cero costo GPU) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            #0a0a0c
            radial-gradient(ellipse 600px 500px at 8% 8%, rgba(212,175,55,0.12) 0%, transparent 70%) no-repeat,
            radial-gradient(ellipse 500px 450px at 85% 15%, rgba(212,175,55,0.09) 0%, transparent 70%) no-repeat,
            radial-gradient(ellipse 400px 400px at 18% 50%, rgba(180,140,30,0.08) 0%, transparent 70%) no-repeat,
            radial-gradient(ellipse 550px 500px at 90% 55%, rgba(212,175,55,0.10) 0%, transparent 70%) no-repeat,
            radial-gradient(ellipse 450px 400px at 35% 85%, rgba(212,175,55,0.09) 0%, transparent 70%) no-repeat,
            radial-gradient(ellipse 500px 450px at 78% 92%, rgba(180,140,30,0.10) 0%, transparent 70%) no-repeat,
            #0a0a0c
          `,
        }}
      />

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
                <SearchBar query={searchQuery} onSearch={handleSearch} />
              </div>
              <CategoryFilter
                selected={selectedCategory}
                onSelect={handleCategorySelect}
              />
            </div>

            {/* Indicador de resultados */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-night-900/80 px-4 py-2 ring-1 ring-white/10 shadow-lg shadow-black/20">
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
          <ProductGrid products={paginatedProducts} />

          {/* ── Controles de Paginación ──────────────────── */}
          {totalPages > 1 && (
            <div className="mt-12 mb-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/5 text-white/80 font-poppins text-sm font-medium hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all ring-1 ring-white/10"
              >
                Anterior
              </button>
              
              <div className="flex flex-wrap justify-center items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-poppins text-sm font-semibold transition-all ${
                      currentPage === page
                        ? "bg-gold-500 text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                        : "bg-white/5 text-white/70 hover:bg-white/10 ring-1 ring-white/10"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/5 text-white/80 font-poppins text-sm font-medium hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all ring-1 ring-white/10"
              >
                Siguiente
              </button>
            </div>
          )}
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
                
                <a href="https://wa.me/584166713911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-poppins text-sm text-white/70 transition-colors hover:text-[#25D366]">
                  <Phone className="h-4 w-4" />
                  <span>0416-6713911</span>
                </a>

                <a href="mailto:licoreriarizzo@gmail.com" className="flex items-center gap-2 font-poppins text-sm text-white/70 transition-colors hover:text-gold-400">
                  <Mail className="h-4 w-4" />
                  <span>licoreriarizzo@gmail.com</span>
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
