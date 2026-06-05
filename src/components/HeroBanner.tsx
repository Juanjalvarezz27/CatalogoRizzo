"use client";

import { Sparkles, Share2, Check, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import { generateCatalogPdf } from "@/utils/generateCatalogPdf";

export default function HeroBanner() {
  const [isCopied, setIsCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

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
        // Usuario canceló
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Error al copiar", error);
      }
    }
  };

  const handleDownloadPdf = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      await generateCatalogPdf(products);
    } catch (error) {
      console.error("Error al generar PDF:", error);
      alert("Hubo un error al generar el PDF. Asegúrate de tener conexión a internet.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section className="relative overflow-visible">
      {/* ── Iluminación exclusiva del Hero ───── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz detrás de los textos */}
        <div className="absolute left-[-10%] top-0 h-[250px] w-[350px] md:left-[10%] md:h-[400px] md:w-[600px] bg-gold-400/15 blur-[90px] md:blur-[120px] rounded-full mix-blend-screen" />
        {/* Luz detrás de la imagen de licores (Solo Desktop) */}
        <div className="hidden md:block absolute right-[10%] top-[10%] h-[300px] w-[400px] bg-gold-300/20 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* ── Contenido ─────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-4 pb-6 sm:px-6 sm:pt-12 sm:pb-8">
        <div className="flex flex-col-reverse items-center text-center sm:flex-row sm:text-left sm:justify-center gap-6 sm:gap-16 lg:gap-24">
          {/* ── Lado izquierdo: Textos ─────── */}
          <div className="flex flex-col items-center sm:items-start max-w-lg mt-2 sm:mt-0">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-400/10 px-3.5 py-1.5 ring-1 ring-gold-400/20">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <span className="font-poppins text-[11px] font-semibold tracking-wider text-gold-400 uppercase">
                Catálogo al Mayor
              </span>
            </div>

            {/* Título principal */}
            <h2 className="font-montserrat text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Explora nuestro{" "}
              <span className="text-gradient-gold">catálogo</span>
            </h2>

            <p className="mt-4 font-poppins text-sm sm:text-base leading-relaxed text-white/90 drop-shadow-md">
              Filtra por categoría, busca por nombre y descubre nuestra selección premium de licores al mayor.
            </p>

            {/* Botones de Acción */}
            <div className="mt-6 flex w-full flex-col sm:flex-row justify-center sm:justify-start gap-3">
              <button
                onClick={handleShare}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-night-800/80 px-5 py-2.5 font-poppins text-sm font-medium text-white ring-1 ring-night-700/50 transition-all duration-200 hover:bg-night-800 hover:ring-gold-400/50 hover:shadow-lg hover:shadow-gold-400/10 focus:outline-none"
              >
                {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Share2 className="h-4 w-4 text-gold-400" />}
                <span>{isCopied ? "¡Enlace copiado!" : "Compartir Catálogo"}</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold-500/10 px-5 py-2.5 font-poppins text-sm font-medium text-gold-400 ring-1 ring-gold-500/30 transition-all duration-200 hover:bg-gold-500/20 hover:ring-gold-500/50 hover:shadow-lg hover:shadow-gold-400/10 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGeneratingPdf ? (
                  <Loader2 className="h-4 w-4 animate-spin text-gold-400" />
                ) : (
                  <Download className="h-4 w-4 text-gold-400" />
                )}
                <span>{isGeneratingPdf ? "Generando PDF..." : "Descargar Catálogo"}</span>
              </button>
            </div>
          </div>

          {/* ── Lado derecho (Mobile Arriba): Logo ────────── */}
          <div className="flex flex-shrink-0 items-center justify-center">
            <div className="relative">
              {/* Halo dorado detrás */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gold-400/15 blur-2xl animate-pulse-gold" />
              <img
                src="/Logo.jpg"
                alt="Licorería Rizzo Logo"
                className="relative h-32 w-32 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-full object-cover ring-2 ring-gold-400/50 shadow-2xl shadow-gold-500/20"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
