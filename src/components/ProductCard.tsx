import { type Product } from "@/data/products";
import { ArrowBigDownDash } from "lucide-react";
import Image from "next/image";


interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      id={`product-${product.id}`}
      // Añadimos h-full para que la tarjeta se estire uniformemente en el grid
      className="animate-fade-in-up group relative flex flex-col h-full overflow-hidden rounded-[32px] bg-[#2c2c2e] shadow-lg ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)] hover:ring-gold-500/50"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* ── Imagen en Isla Flotante Blanca Pura ── */}
      <div className="relative mx-3 mt-3 flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[24px] bg-white shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
        
        <div className="absolute right-4 top-4 z-20 text-gold-500/80 transition-all duration-500 group-hover:text-gold-400 group-hover:scale-110">
          <ArrowBigDownDash className="h-5 w-5" strokeWidth={2} />
        </div>
        
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-10 h-[85%] w-[85%] transition-transform duration-700 ease-out group-hover:scale-[1.15] group-hover:-translate-y-2">
          <Image
            src={product.imagen_url}
            alt={product.nombre}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* ── Info del Producto (Tipografía limpia iOS) ── */}
      <div className="flex flex-1 flex-col p-5 pt-4">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="font-poppins text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase">
            {product.categoria}
          </span>
        </div>

        {/* Añadimos min-h-[44px] para igualar la altura de títulos cortos y largos */}
        <h3 className="mb-4 font-montserrat text-[16px] font-semibold leading-snug tracking-tight text-white/95 line-clamp-2 min-h-[44px] transition-colors duration-300 group-hover:text-gold-400">
          {product.nombre}
        </h3>

        {/* Presentaciones (Micro-Chips 3D Premium) */}
        {/* Presentaciones (Píldoras Doradas Brillantes - Layout Fluido) */}
        <div className="border-t border-white/5 pt-4">
          <div className="flex flex-wrap gap-2">
            {product.presentaciones.map((pres) => (
              <div
                key={pres}
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-gold-500/15 px-3.5 py-1.5 ring-1 ring-gold-500/30 shadow-[0_0_10px_rgba(212,175,55,0.15)] transition-all duration-300 hover:scale-105 hover:bg-gold-500/25 hover:ring-gold-400/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              >
                <span className="relative z-10 font-poppins text-xs font-bold tracking-wider text-gold-400">
                  {pres}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}