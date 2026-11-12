import { memo } from "react";
import Link from "next/link";
import { type Product } from "@/data/products";
import { ArrowBigDownDash, Package, MessageCircle } from "lucide-react";

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

function formatMoney(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export default memo(function ProductCard({ product, index }: ProductCardProps) {
  // Extraer información de precios desde variantes o campos directos
  const pricedVariants = product.variantes?.filter(
    (v) => v.precio_caja !== undefined && v.precio_unidad !== undefined
  ) ?? [];

  const hasPrice = pricedVariants.length > 0;
  const isMultiVariant = pricedVariants.length > 1;

  // Precios mínimos para mostrar en la tarjeta
  const displayBoxPrice = hasPrice
    ? Math.min(...pricedVariants.map((v) => v.precio_caja!))
    : 0;

  const displayUnitPrice = hasPrice
    ? Math.min(...pricedVariants.map((v) => v.precio_unidad!))
    : 0;

  return (
    <Link href={`/producto/${product.id}`} className="block h-full">
      <article
        id={`product-${product.id}`}
        className="animate-fade-in-up group relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] sm:rounded-[28px] bg-[#2c2c2e] shadow-lg ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)]"
        style={{ animationDelay: `${Math.min(index * 30, 400)}ms` }}
      >
        <div>
          {/* ── Imagen en Isla Flotante Blanca Pura (Aspecto Compacto 1:1) ── */}
          <div className="relative mx-2 mt-2 sm:mx-2.5 sm:mt-2.5 shrink-0 overflow-hidden rounded-[18px] sm:rounded-[22px] bg-white shadow-sm isolation-isolate transform-gpu pb-[100%]">
            <div className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 z-20 text-gold-500/80">
              <ArrowBigDownDash className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2} />
            </div>

            {product.cantidad_caja && (
              <div 
                className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 z-20 flex shrink-0 items-center gap-1 sm:gap-1.5 rounded-full bg-[#1c1c1e]/90 px-2 py-0.5 sm:px-2.5 sm:py-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)] ring-1 ring-white/10"
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

            <div className="absolute inset-0 z-10 flex items-center justify-center p-2.5 sm:p-3">
              <img
                src={product.imagenUrl}
                alt={product.nombre}
                className="h-full w-full object-contain transition-all mix-blend-multiply"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* ── Info del Producto Compacta ── */}
          <div className="flex flex-col p-2.5 sm:p-3 pb-1.5">
            <div className="mb-0.5 flex items-center gap-1">
              <span className="font-poppins text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase line-clamp-1">
                {product.categoria}
              </span>
            </div>

            <h3 className="mb-1.5 min-h-[2.2rem] sm:min-h-[2.5rem] font-montserrat text-xs sm:text-[13px] md:text-sm font-semibold leading-snug tracking-tight text-white/95 line-clamp-2">
              {toTitleCase(product.nombre)}
            </h3>

            {/* Presentaciones (Píldoras Doradas Compactas) */}
            <div className="flex min-h-[1.5rem] flex-wrap items-center gap-1 sm:gap-1.5">
              {product.presentaciones.map((pres) => (
                <div
                  key={pres}
                  className="flex items-center justify-center overflow-hidden rounded-full bg-gold-500/15 px-2 py-0.5 ring-1 ring-gold-500/30"
                >
                  <span className="relative z-10 font-poppins text-[9px] sm:text-[10px] font-bold tracking-wider text-gold-400">
                    {pres}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bloque de Precios B2B Compacto y Ajustado ── */}
        <div className="p-2 sm:p-2.5 md:p-3 pt-1">
          <div className="rounded-xl sm:rounded-2xl bg-[#1c1c1e]/90 p-2 sm:p-2.5 ring-1 ring-white/10 backdrop-blur-sm transition-all group-hover:bg-[#242428] group-hover:ring-gold-500/30 shadow-inner">
            {hasPrice ? (
              <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                {/* Precio Caja (Destacado B2B) */}
                <div className="flex shrink-0 flex-col">
                  <span className="font-poppins text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-gold-300/80">
                    {isMultiVariant ? "Caja desde" : "Caja"}
                  </span>
                  <span className="font-montserrat text-sm sm:text-base md:text-[17px] font-bold text-gold-400 whitespace-nowrap drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                    {formatMoney(displayBoxPrice)}
                  </span>
                </div>

                {/* Separador vertical sutil */}
                <div className="h-5 sm:h-6 w-[1px] bg-white/10 shrink-0" />

                {/* Precio Unidad */}
                <div className="flex shrink-0 flex-col text-right">
                  <span className="font-poppins text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white/50">
                    {isMultiVariant ? "Unid. desde" : "Unidad"}
                  </span>
                  <span className="font-poppins text-xs sm:text-[13px] md:text-sm font-semibold text-white/95 whitespace-nowrap">
                    {formatMoney(displayUnitPrice)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1.5 py-0.5 text-gold-400/80">
                <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span className="font-poppins text-[10px] sm:text-[11px] font-semibold tracking-wide">
                  Consultar Precio
                </span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
});
