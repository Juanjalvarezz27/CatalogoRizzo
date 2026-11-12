"use client";

import { useState } from "react";
import { Package, MessageCircle, Info, Sparkles, Check, DollarSign } from "lucide-react";
import { type Product } from "@/data/products";

interface ProductDetailViewProps {
  product: Product;
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function formatMoney(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  // Manejo del selector de presentaciones / variantes
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Determinar la variante activa
  const variantes = product.variantes && product.variantes.length > 0
    ? product.variantes
    : product.presentaciones.map((pres, idx) => ({
        presentacion: pres,
        cantidad_caja: Array.isArray(product.cantidad_caja) ? product.cantidad_caja[idx] || product.cantidad_caja[0] : product.cantidad_caja,
        precio_unidad: Array.isArray(product.precio_unidad) ? product.precio_unidad[idx] : product.precio_unidad,
        precio_caja: Array.isArray(product.precio_caja) ? product.precio_caja[idx] : product.precio_caja,
      }));

  const activeVariant = variantes[selectedIndex] || variantes[0];
  const hasPrice = activeVariant.precio_caja !== undefined && activeVariant.precio_unidad !== undefined;

  // Construcción dinámica del mensaje de WhatsApp sin caracteres especiales
  const whatsappNumber = "584166713911";
  const whatsappText = hasPrice
    ? `Hola Licorería Rizzo, deseo hacer un pedido de:\n\n*Producto:* ${product.nombre}\n*Presentación:* ${activeVariant.presentacion}\n*Precio Ref:* ${formatMoney(activeVariant.precio_unidad!)} Unidad | ${formatMoney(activeVariant.precio_caja!)} Caja (x${activeVariant.cantidad_caja} unid.)`
    : `Hola Licorería Rizzo, deseo consultar disponibilidad y precio del producto: ${product.nombre} (${product.categoria}) - Presentación: ${activeVariant.presentacion}.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
      {/* ── Columna Izquierda: Imagen del Producto ── */}
      {/* El `sticky` va en el contenedor y la animación en el hijo: animar un
          elemento sticky con transform provoca repintados erráticos del
          backdrop-filter en iOS. */}
      <div className="flex justify-center sticky top-24">
        <div className="animate-fade-in-up relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none lg:w-full aspect-square overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white shadow-2xl shadow-gold-900/20 ring-1 ring-white/10 isolate">
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
            <img
              src={product.imagenUrl}
              alt={product.nombre}
              className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
              style={{
                WebkitMaskImage: "radial-gradient(ellipse 75% 85% at 50% 50%, black 55%, transparent 100%)",
                maskImage: "radial-gradient(ellipse 75% 85% at 50% 50%, black 55%, transparent 100%)",
              }}
            />
          </div>

          {/* Badge flotante en la imagen con la cantidad de la variante actual.
              Sin backdrop-blur: al 90% de opacidad el desenfoque no aporta y,
              dentro de un contenedor sticky/animado, era el origen del parche
              difuminado que se movía sobre la imagen en Safari. */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-[#1c1c1e]/95 px-3 py-1.5 shadow-lg ring-1 ring-white/15">
            <Package className="h-3.5 w-3.5 text-gold-400" />
            <span className="font-poppins text-xs font-bold text-white">
              x {activeVariant.cantidad_caja} unid. por caja
            </span>
          </div>
        </div>
      </div>

      {/* ── Columna Derecha: Información y Precios Dinámicos ── */}
      <div className="animate-fade-in-up flex flex-col items-start" style={{ animationDelay: "100ms" }}>
        
        {/* Categoría Badge */}
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-3.5 py-1.5 ring-1 ring-gold-500/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <Sparkles className="h-3 w-3 text-gold-400" />
          <span className="font-poppins text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">
            {product.categoria}
          </span>
        </div>

        {/* Nombre del Producto */}
        <h1 className="mb-4 font-montserrat text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white">
          {toTitleCase(product.nombre)}
        </h1>

        {/* Separador Dorado */}
        <div className="mb-6 h-px w-full bg-gradient-to-r from-gold-500/50 to-transparent" />

        {/* ── Selector Interactivo de Presentaciones ── */}
        <div className="mb-6 w-full">
          <label className="mb-2.5 block font-poppins text-xs font-bold uppercase tracking-wider text-white/60">
            {variantes.length > 1 ? "Selecciona la Presentación:" : "Presentación:"}
          </label>
          <div className="flex flex-wrap gap-2">
            {variantes.map((v, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={v.presentacion}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-poppins text-sm font-semibold transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? "bg-gold-500 text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] ring-2 ring-gold-400 scale-[1.02]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 ring-1 ring-white/10 hover:text-white"
                  }`}
                >
                  <span>{v.presentacion}</span>
                  {isSelected && <Check className="h-4 w-4 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Vitrina de Precios B2B Destacada ── */}
        <div className="glass-panel mb-6 w-full rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-4 sm:p-5 ring-1 ring-white/10 shadow-xl">
          {hasPrice ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tarjeta de Precio por Caja */}
              <div className="flex flex-col rounded-xl bg-gold-500/10 p-3.5 ring-1 ring-gold-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-gold-400">
                    Precio por Caja (Mayor)
                  </span>
                  <Package className="h-4 w-4 text-gold-400" />
                </div>
                <div className="font-montserrat text-2xl sm:text-3xl font-extrabold text-gold-400 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                  {formatMoney(activeVariant.precio_caja!)}
                </div>
                <span className="mt-1 font-poppins text-xs text-white/70">
                  Caja de <strong className="text-white">{activeVariant.cantidad_caja}</strong> botellas
                </span>
              </div>

              {/* Tarjeta de Precio por Unidad */}
              <div className="flex flex-col rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-wider text-white/50">
                    Precio por Unidad
                  </span>
                  <DollarSign className="h-4 w-4 text-white/40" />
                </div>
                <div className="font-montserrat text-2xl sm:text-3xl font-bold text-white/95">
                  {formatMoney(activeVariant.precio_unidad!)}
                </div>
                <span className="mt-1 font-poppins text-xs text-white/60">
                  Precio unitario referencial
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 py-2 text-gold-400/90">
              <Info className="h-5 w-5 shrink-0" />
              <div>
                <h4 className="font-montserrat text-sm font-bold text-white">Precio bajo consulta</h4>
                <p className="font-poppins text-xs text-white/70">
                  Cotiza directamente disponibilidad y precio especial de este producto vía WhatsApp.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Especificaciones de Empaque ── */}
        <div className="glass-panel mb-8 w-full rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-night-900 ring-1 ring-gold-500/30">
              <Package className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <h3 className="font-montserrat text-sm font-semibold text-white">Empaque al Mayor</h3>
              <p className="mt-0.5 font-poppins text-xs sm:text-sm text-white/70 leading-relaxed">
                Presentación de <strong className="text-white">{activeVariant.presentacion}</strong> en caja cerrada de{" "}
                <strong className="text-white">{activeVariant.cantidad_caja} unidades</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* ── Botón de Acción Principal (WhatsApp Dinámico) ── */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold-600 to-gold-400 px-8 py-4 font-poppins text-base font-bold text-[#0a0a0c] shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] active:scale-95"
        >
          <MessageCircle className="h-5 w-5" />
          <span>{hasPrice ? "Hacer Pedido por WhatsApp" : "Consultar Disponibilidad por WhatsApp"}</span>
        </a>

      </div>
    </div>
  );
}

