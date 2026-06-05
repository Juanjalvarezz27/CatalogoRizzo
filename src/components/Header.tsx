"use client";

import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si hacemos scroll hacia abajo (hacia el contenido), ocultamos el header.
      // Si hacemos scroll hacia arriba, lo mostramos.
      // El margen de 60px evita que se oculte nada más cargar la página.
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      id="header"
      className={`glass-night sticky top-0 z-50 border-b border-white/5 shadow-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          {/* ── Logo + nombre ─────────────────────────── */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo.jpg"
              alt="Licorería Rizzo"
              width={48}
              height={48}
              priority
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-400/40 shadow-lg shadow-gold-900/30 sm:h-11 sm:w-11"
            />
            <div>
              <h1 className="font-montserrat text-lg font-extrabold tracking-tight text-white sm:text-xl">
                Licorería{" "}
                <span className="text-gradient-gold">Rizzo</span>
              </h1>
              <p className="font-poppins text-[10px] font-medium tracking-[0.2em] text-gold-400/70 uppercase">
                Catálogo al Mayor
              </p>
            </div>
          </Link>

          {/* ── Botones de navegación ──────────────────── */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl px-3 py-2 sm:px-4 font-poppins text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-white/5"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Catálogo</span>
            </Link>

            <Link
              href="/contacto"
              id="contact-btn"
              className="flex items-center gap-2 rounded-xl bg-night-900 px-4 py-2 font-poppins text-sm font-semibold text-gold-400 ring-1 ring-gold-400/40 transition-all duration-300 hover:bg-gold-400/10 hover:ring-gold-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
