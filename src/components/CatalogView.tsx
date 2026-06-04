"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/ProductGrid";
import { products, type Category } from "@/data/products";
import { LayoutGrid, MapPin, Phone, Share2, Check } from "lucide-react";

export default function CatalogView() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Licorería Rizzo - Catálogo al Mayor",
      text: "Descubre nuestro catálogo de licores al mayor con los mejores precios.",
      url: "https://catalogo-rizzo.vercel.app",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // Usuario canceló u ocurrió un error
      }
    } else {
      // Fallback: Copiar al portapapeles
      try {
        await navigator.clipboard.writeText(shareData.url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Error al copiar al portapapeles", error);
      }
    }
  };

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
      {/* ── Fondo de negro con dorado ──────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-night-950">
        {/* Gradiente central dorado oscuro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-night-950 to-night-950" />
        
        {/* Orbes dorados amplios para iluminar el negro */}
        <div className="absolute -right-[20%] -top-[10%] h-[70vh] w-[70vw] rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[70vh] w-[70vw] rounded-full bg-gold-600/10 blur-[120px]" />
        
        {/* Patrón de líneas diagonales doradas sutiles */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #d4af37 0px,
            #d4af37 1px,
            transparent 1px,
            transparent 24px
          )`
        }} />
      </div>

      {/* ── Contenido principal ──────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-5 sm:px-6 sm:py-6">
          {/* ── Título + filtros ─────────────────────── */}
          <div className="mb-6">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-7 w-7 text-gold-400" />
                  <h2 className="font-montserrat text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Nuestro Catálogo
                  </h2>
                </div>
                <p className="font-poppins text-sm text-night-300">
                  Filtra por categoría o busca por nombre
                </p>
              </div>

              {/* Botón Compartir Catálogo */}
              <button
                onClick={handleShare}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-night-800/60 px-4 py-2.5 font-poppins text-sm font-medium text-night-200 ring-1 ring-night-700/50 transition-all duration-200 hover:bg-night-800 hover:text-white hover:ring-gold-400/50 hover:shadow-lg hover:shadow-gold-400/10 focus:outline-none"
              >
                {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Share2 className="h-4 w-4 text-gold-400" />}
                <span>{isCopied ? "¡Enlace copiado!" : "Compartir Catálogo"}</span>
              </button>
            </div>

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
            <div className="mt-3 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-gold" />
              <span className="font-poppins text-xs font-medium text-night-300">
                {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
                {selectedCategory !== "Todos" && (
                  <span className="text-gold-400"> en {selectedCategory}</span>
                )}
                {searchQuery && (
                  <span className="text-gold-400"> · &quot;{searchQuery}&quot;</span>
                )}
              </span>
            </div>
          </div>

          {/* ── Grilla de productos ──────────────────── */}
          <ProductGrid products={filteredProducts} />
        </main>

        {/* ── Footer Premium ──────────────────────────── */}
        <footer
          id="footer"
          className="relative mt-auto border-t border-gold-900/30 bg-night-950 py-12"
        >
          {/* Línea de gradiente superior */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-900/50 to-transparent" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
              
              {/* Logo y Descripción */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <img
                  src="/Logo.jpg"
                  alt="Licorería Rizzo"
                  className="mb-4 h-16 w-16 rounded-full object-cover ring-2 ring-gold-400/30 shadow-lg"
                />
                <h3 className="font-montserrat text-lg font-bold text-white">
                  Licorería Rizzo
                </h3>
                <p className="mt-2 max-w-xs font-poppins text-sm text-night-300">
                  El mejor surtido al mayor para tu negocio, eventos y celebraciones especiales.
                </p>
              </div>

              {/* Enlaces de Contacto Rápido */}
              <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
                <h4 className="mb-2 font-montserrat text-sm font-semibold text-gold-400 uppercase tracking-widest">Atención</h4>
                
                <a href="https://instagram.com/licoreriarizzo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-poppins text-sm text-night-300 transition-colors hover:text-[#E1306C]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>@licoreriarizzo</span>
                </a>
                
                <a href="https://wa.me/584127510158" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-poppins text-sm text-night-300 transition-colors hover:text-[#25D366]">
                  <Phone className="h-4 w-4" />
                  <span>+58 412 751 0158</span>
                </a>

                <div className="flex items-center gap-2 font-poppins text-sm text-night-300">
                  <MapPin className="h-4 w-4 text-gold-600" />
                  <span>Ventas a nivel nacional</span>
                </div>
              </div>
            </div>

            {/* Separador */}
            <div className="my-8 h-[1px] w-full bg-night-800" />

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 font-poppins text-[11px] text-night-400 md:flex-row">
              <p>© {new Date().getFullYear()} Licorería Rizzo. Todos los derechos reservados.</p>
              <p className="text-center md:text-right text-gold-400/50">
                Los precios y disponibilidad se manejan directamente por WhatsApp.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
