import { memo } from "react";
import { type Product } from "@/data/products";
import { ArrowBigDownDash, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default memo(function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      id={`product-${product.id}`}
      // Añadimos h-full para que la tarjeta se estire uniformemente en el grid
      className="animate-fade-in-up group relative flex flex-col h-full overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#2c2c2e] shadow-lg ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)]"
      style={{ animationDelay: `${Math.min(index * 30, 400)}ms` }}
    >
      {/* ── Imagen en Isla Flotante Blanca Pura (Fix para iPads Antiguos) ── */}
      <div className="relative mx-2 mt-2 sm:mx-3 sm:mt-3 shrink-0 overflow-hidden rounded-[20px] sm:rounded-[24px] bg-white shadow-sm isolation-isolate transform-gpu pb-[125%]">
        
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 text-gold-500/80">
          <ArrowBigDownDash className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
        </div>

        {product.cantidad_caja && (
          <div 
            className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 flex shrink-0 items-center gap-1 sm:gap-1.5 rounded-full bg-[#1c1c1e]/90 px-2 py-1 sm:px-3 sm:py-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] ring-1 ring-white/10"
            title={`${Array.isArray(product.cantidad_caja) ? Array.from(new Set(product.cantidad_caja)).join('/') : product.cantidad_caja} unidades por caja`}
          >
            <Package 
              className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" 
              strokeWidth={2.5} 
            />
            <span className="font-poppins text-[10px] sm:text-xs font-bold tracking-wide text-white">
              x {Array.isArray(product.cantidad_caja) ? Array.from(new Set(product.cantidad_caja)).join('/') : product.cantidad_caja}
            </span>
          </div>
        )}

        <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
          <img
            src={product.imagenUrl}
            alt={product.nombre}
            className="h-full w-full object-contain transition-all mix-blend-multiply"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* ── Info del Producto (Tipografía limpia iOS) ── */}
      <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-5 pt-3 sm:pt-4">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="font-poppins text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase line-clamp-1">
            {product.categoria}
          </span>
        </div>

        {/* Removimos line-clamp-2 para que los nombres largos se lean enteros en móvil */}
        <h3 className="mb-3 sm:mb-4 font-montserrat text-sm sm:text-[15px] lg:text-[16px] font-semibold leading-tight sm:leading-snug tracking-tight text-white/95">
          {toTitleCase(product.nombre)}
        </h3>

        {/* Presentaciones (Micro-Chips 3D Premium) */}
        {/* Presentaciones (Píldoras Doradas Brillantes - Layout Fluido) */}
        <div className="border-t border-white/5 pt-3 sm:pt-4">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {product.presentaciones.map((pres) => (
              <div
                key={pres}
                className="flex items-center justify-center overflow-hidden rounded-full bg-gold-500/15 px-2.5 py-1 sm:px-3.5 sm:py-1.5 ring-1 ring-gold-500/30"
              >
                <span className="relative z-10 font-poppins text-[10px] sm:text-xs font-bold tracking-wider text-gold-400">
                  {pres}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
});