import { notFound } from "next/navigation";
import { BackButton } from "@/components/BackButton";
import ProductDetailView from "@/components/ProductDetailView";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

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
      <header className="relative z-20 flex items-center p-4 sm:p-5 max-w-5xl mx-auto w-full">
        <BackButton />
      </header>

      {/* ── Contenido Principal ── */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-12 pt-2 sm:px-6 lg:px-8 lg:pt-6 lg:pb-16 flex-1 w-full">
        <ProductDetailView product={product} />
      </main>
    </div>
  );
}
