import { type Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div
        id="empty-state"
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-night-800 ring-1 ring-night-600/50">
          <svg
            className="h-9 w-9 text-gold-400/50"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <p className="font-montserrat text-xl font-bold text-white/80">
          Sin resultados
        </p>
        <p className="mt-2 max-w-xs font-poppins text-sm text-night-400">
          No encontramos productos con esa búsqueda. Intenta con otro término o cambia la categoría.
        </p>
      </div>
    );
  }

  // Agrupar productos por categoría
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.categoria]) {
      acc[product.categoria] = [];
    }
    acc[product.categoria].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(groupedProducts).map(([categoria, prods]) => (
        <div key={categoria} className="flex flex-col gap-6">
          {/* Título Elegante de Categoría */}
          <div className="flex items-center gap-4">
            <h2 className="font-montserrat text-2xl sm:text-3xl font-bold tracking-[0.15em] text-gold-400 uppercase">
              {categoria}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gold-500/50 via-gold-500/20 to-transparent"></div>
          </div>
          
          <section
            className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
            {prods.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
