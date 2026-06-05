import type { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Contacto — Licorería Rizzo",
  description: "Contáctanos para pedidos al mayor. Escríbenos por WhatsApp o síguenos en Instagram.",
};

export default function ContactPage() {
  const phoneNumber = "584127510158";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola, me interesa hacer un pedido al mayor 🍸")}`;
  const instagramUrl = "https://instagram.com/licoreriarizzo";
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ── Iluminación de Fondo ───── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Luces superiores (Igual al Hero) */}
        <div className="absolute left-[-10%] top-0 h-[250px] w-[350px] md:left-[10%] md:h-[400px] md:w-[600px] bg-gold-400/15 blur-[90px] md:blur-[120px] rounded-full mix-blend-screen" />
        <div className="hidden md:block absolute right-[10%] top-[10%] h-[300px] w-[400px] bg-gold-300/20 blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Luces centrales y bajas para dar más vida a las tarjetas */}
        <div className="absolute left-[50%] top-[40%] h-[400px] w-[80vw] max-w-[800px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-[120px] md:h-[600px] md:blur-[150px] mix-blend-screen" />
        <div className="hidden md:block absolute bottom-[-10%] left-[0%] h-[400px] w-[500px] rounded-full bg-gold-500/15 blur-[130px] mix-blend-screen" />
      </div>


      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 relative z-10">
          
          {/* ── Header de contacto más premium ───────── */}
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="relative mb-6">
            <Image
              src="/Logo.jpg"
              alt="Licorería Rizzo"
              width={128}
              height={128}
              priority
              className="relative h-24 w-24 rounded-full object-cover ring-1 ring-gold-400/30 sm:h-32 sm:w-32"
            />
            </div>
            <h2 className="font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Hablemos de <span className="text-gradient-gold">Negocios</span>
            </h2>
            <p className="mt-4 max-w-lg font-poppins text-sm leading-relaxed text-night-300 sm:text-base">
              Atención personalizada para tus eventos, bodegones y pedidos al mayor. Estamos listos para asesorarte con el mejor servicio.
            </p>
          </div>

          {/* ── Grid de Contacto (2 columnas) ────────── */}
          <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">

            {/* WhatsApp Premium Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white/5 p-1 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20 hover:shadow-2xl hover:shadow-[#25D366]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative flex h-full flex-col items-center justify-center rounded-[22px] bg-night-950/80 p-8 backdrop-blur-sm">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/10 ring-1 ring-[#25D366]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#25D366]/20">
                  <svg className="h-8 w-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">Ventas WhatsApp</h3>
                <p className="mt-2 text-center font-poppins text-sm text-night-300">
                  +58 412 751 0158
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#25D366] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-widest">Escribir ahora</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </a>

            {/* Instagram Premium Card */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-white/5 p-1 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20 hover:shadow-2xl hover:shadow-[#E1306C]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E1306C]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative flex h-full flex-col items-center justify-center rounded-[22px] bg-night-950/80 p-8 backdrop-blur-sm">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E1306C]/10 ring-1 ring-[#E1306C]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#E1306C]/20">
                  <svg className="h-8 w-8 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <h3 className="font-montserrat text-lg font-bold text-white group-hover:text-[#E1306C] transition-colors">Síguenos en IG</h3>
                <p className="mt-2 text-center font-poppins text-sm text-night-300">
                  @licoreriarizzo
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#E1306C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-widest">Visitar perfil</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          </div>

          {/* ── Volver al catálogo ────────────────────── */}
          <div className="mt-12 flex flex-col items-center">
            <div className="mb-6 flex w-full max-w-sm items-center gap-4">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-900/50" />
              <div className="h-1.5 w-1.5 rounded-full bg-gold-600/50" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-900/50" />
            </div>

            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl bg-white/5 px-6 py-3 font-poppins text-sm font-medium text-white/80 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white hover:ring-white/20"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Regresar al catálogo
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
