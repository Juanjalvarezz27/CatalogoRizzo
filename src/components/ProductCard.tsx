import { type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article
      id={`product-${product.id}`}
      className="animate-fade-in-up group relative flex flex-col overflow-hidden rounded-2xl bg-night-800/70 ring-1 ring-night-600/40 transition-all duration-400 hover:ring-gold-400/30 hover:shadow-xl hover:shadow-gold-900/20 hover:bg-night-800"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* ── Badge de categoría ─────────────────────────── */}
      <span className="absolute left-3 top-3 z-10 rounded-lg bg-night-950/70 px-2.5 py-1 font-poppins text-[10px] font-semibold tracking-wider text-gold-400 uppercase backdrop-blur-md ring-1 ring-gold-400/20">
        {product.categoria}
      </span>

      {/* ── Imagen (Estudio Blanco) ────────────────────── */}
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-white p-6">
        {/* Sutil sombra interior para darle profundidad al marco blanco */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />

        {/* Glow dorado en hover, adaptado para fondo blanco */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl mix-blend-multiply" />
        </div>

        {/* Decoración: línea dorada sutil en la esquina */}
        <div className="pointer-events-none absolute right-0 top-0 h-16 w-[2px] bg-gradient-to-b from-gold-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute right-0 top-0 h-[2px] w-16 bg-gradient-to-l from-gold-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/*
          Se usa <img> estándar. Como son JPEGs con fondo blanco,
          el fondo de la caja en 'bg-white' hace que se vean transparentes.
        */}
        <img
          src={product.imagen_url}
          alt={product.nombre}
          loading="lazy"
          decoding="async"
          className="relative z-[1] h-full w-full object-contain transition-all duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* ── Separador dorado ──────────────────────────── */}
      <div className="mx-4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

      {/* ── Info ───────────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-2.5 p-4 pt-3">
        {/* Nombre del producto */}
        <h3 className="font-montserrat text-[14px] font-bold leading-snug tracking-tight text-white/90 line-clamp-2 group-hover:text-gold-200 transition-colors duration-300 sm:text-[15px]">
          {product.nombre}
        </h3>

        {/* Presentaciones (pills) */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {product.presentaciones.map((pres) => (
            <span
              key={pres}
              className="inline-flex items-center rounded-md bg-gold-400/10 px-2 py-0.5 font-poppins text-[11px] font-semibold text-gold-400 ring-1 ring-gold-400/20 transition-all duration-200 group-hover:bg-gold-400/15 group-hover:ring-gold-400/30"
            >
              {pres}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
