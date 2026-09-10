import { notFound } from "next/navigation";
import { Package, MessageCircle, Info } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generar rutas estáticas para todos los productos en build time
export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  const cantidadCajas = Array.isArray(product.cantidad_caja)
    ? Array.from(new Set(product.cantidad_caja)).join(' / ')
    : product.cantidad_caja;

  const whatsappMessage = encodeURIComponent(`Hola Licorería Rizzo, estoy interesado en información sobre el producto: ${product.nombre} (${product.categoria}).`);
  const whatsappUrl = `https://wa.me/584166713911?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] selection:bg-gold-500/30 selection:text-white flex flex-col">
      {/* ── Fondo Iluminado Premium ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            #0a0a0c
            radial-gradient(ellipse 800px 800px at 50% -20%, rgba(212,175,55,0.15) 0%, transparent 70%) no-repeat,
            radial-gradient(ellipse 600px 600px at 100% 50%, rgba(212,175,55,0.08) 0%, transparent 70%) no-repeat
          `,
        }}
      />

      {/* ── Navbar simplificado ── */}
      <header className="relative z-20 flex items-center p-4 sm:p-6 lg:px-8 max-w-7xl mx-auto w-full">
        <BackButton />
      </header>

      {/* ── Contenido Principal ── */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12 flex-1 w-full flex items-center">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center w-full">
          
          {/* Columna Izquierda: Imagen del Producto */}
          <div className="animate-fade-in-up flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden rounded-[32px] sm:rounded-[40px] bg-white shadow-2xl shadow-gold-900/20 ring-1 ring-white/10">
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                <img
                  src={product.imagenUrl}
                  alt={product.nombre}
                  className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                  style={{
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 50% 50%, black 55%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 75% 85% at 50% 50%, black 55%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información del Producto */}
          <div className="animate-fade-in-up flex flex-col items-start" style={{ animationDelay: '100ms' }}>
            
            {/* Categoría Badge */}
            <div className="mb-4 inline-flex items-center rounded-full bg-gold-500/10 px-4 py-1.5 ring-1 ring-gold-500/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <span className="font-poppins text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">
                {product.categoria}
              </span>
            </div>

            {/* Nombre del Producto */}
            <h1 className="mb-6 font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              {product.nombre.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </h1>

            {/* Separador */}
            <div className="mb-8 h-px w-full max-w-md bg-gradient-to-r from-gold-500/50 to-transparent" />

            {/* Detalles */}
            <div className="mb-10 w-full max-w-md space-y-6">
              
              {/* Unidades por caja */}
              {product.cantidad_caja && (
                <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10 backdrop-blur-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-night-900 ring-1 ring-gold-500/30">
                    <Package className="h-6 w-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-sm font-semibold text-white">Unidades por Caja</h3>
                    <p className="mt-1 font-poppins text-sm text-white/70">
                      Este producto viene en presentación de <strong className="text-white">{cantidadCajas}</strong> unidades por caja.
                    </p>
                  </div>
                </div>
              )}

              {/* Presentaciones (Volúmenes) */}
              <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10 backdrop-blur-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-night-900 ring-1 ring-gold-500/30">
                  <Info className="h-6 w-6 text-gold-400" />
                </div>
                <div className="w-full">
                  <h3 className="mb-3 font-montserrat text-sm font-semibold text-white">Presentaciones Disponibles</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.presentaciones.map((pres) => (
                      <div
                        key={pres}
                        className="flex items-center justify-center rounded-lg bg-gold-500/10 px-4 py-2 ring-1 ring-gold-500/20 shadow-sm"
                      >
                        <span className="font-poppins text-sm font-bold tracking-wider text-gold-400">
                          {pres}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action (WhatsApp) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 font-poppins text-base font-bold text-[#0a0a0c] shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Consultar Precio por WhatsApp</span>
            </a>

          </div>
        </div>
      </main>
    </div>
  );
}
