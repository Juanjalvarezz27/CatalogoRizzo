import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { type Product } from "@/data/products";

/**
 * Carga una imagen desde una URL y la convierte a JPEG base64
 * usando un canvas del navegador. Necesario porque html2canvas
 * puede fallar con WEBP en ciertos navegadores.
 */
async function toJpegBase64(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) return "";
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d")!;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          const data = canvas.toDataURL("image/jpeg", 0.85);
          canvas.width = 0;
          canvas.height = 0;
          URL.revokeObjectURL(objectUrl);
          resolve(data);
        } catch {
          URL.revokeObjectURL(objectUrl);
          resolve("");
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        resolve("");
      };
      img.src = objectUrl; // Cargamos el blob local, 0 problemas de CORS
    });
  } catch {
    return "";
  }
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateCatalogPdf(
  products: Product[],
  onProgress?: (percent: number) => void
) {
  // ── Dimensiones del render HTML ─────────────────────────────
  const RENDER_WIDTH = 1200;
  const COLS = 5;
  const ROWS = 5;
  const ITEMS_PER_PAGE = COLS * ROWS; // 25 por página

  // Alturas de cada sección (en px del render) — más compactas para 5×5
  const HEADER_HEIGHT = 110;
  const GRID_GAP = 16;
  const CARD_IMG_HEIGHT = 150;
  const CARD_TEXT_HEIGHT = 105;
  const CARD_HEIGHT = CARD_IMG_HEIGHT + CARD_TEXT_HEIGHT + 10;
  const PAGE_PAD_TOP = 30;
  const PAGE_PAD_BOTTOM = 30;
  const PAGE_PAD_X = 40;
  
  // Calcular alto total de la página basado en el contenido real
  const GRID_HEIGHT = ROWS * CARD_HEIGHT + (ROWS - 1) * GRID_GAP;
  const RENDER_HEIGHT = PAGE_PAD_TOP + HEADER_HEIGHT + 20 + GRID_HEIGHT + PAGE_PAD_BOTTOM + 30;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pdfWidth = doc.internal.pageSize.getWidth();
  const pdfHeight = doc.internal.pageSize.getHeight();

  // Pre-cargar logo
  const logoB64 = await toJpegBase64("/Logo.jpg");

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Contenedor oculto
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "-9999px";
  container.style.left = "-9999px";
  document.body.appendChild(container);

  for (let i = 0; i < totalPages; i++) {
    const start = i * ITEMS_PER_PAGE;
    const chunk = products.slice(start, start + ITEMS_PER_PAGE);

    // ── Pre-cargar imágenes de ESTA página secuencialmente ──────────
    // En móviles, hacer 25 peticiones concurrentes puede congelar la red (Connection Limit).
    const images: string[] = [];
    for (const p of chunk) {
      const b64 = await toJpegBase64(p.imagenUrl);
      images.push(b64);
    }

    // Asociar las imágenes a los productos
    const chunkWithImages = chunk.map((p, idx) => ({
      ...p,
      base64: images[idx],
    }));

    const pageDiv = document.createElement("div");
    pageDiv.style.width = `${RENDER_WIDTH}px`;
    pageDiv.style.height = `${RENDER_HEIGHT}px`;
    pageDiv.style.backgroundColor = "#121214";
    pageDiv.style.position = "relative";
    pageDiv.style.overflow = "hidden";
    pageDiv.style.fontFamily = "'Poppins', system-ui, -apple-system, sans-serif";

    pageDiv.innerHTML = `
      <!-- Destellos Dorados de fondo (Optimizados para Mobile) -->
      <div style="position: absolute; top: -10%; left: -10%; width: 800px; height: 800px; background: radial-gradient(circle, rgba(212, 175, 55, 0.20) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; bottom: -10%; right: -10%; width: 800px; height: 800px; background: radial-gradient(circle, rgba(212, 175, 55, 0.20) 0%, rgba(18, 18, 20, 0) 60%);"></div>

      <div style="padding: ${PAGE_PAD_TOP}px ${PAGE_PAD_X}px ${PAGE_PAD_BOTTOM}px ${PAGE_PAD_X}px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; position: relative; z-index: 10;">
        
        <!-- HEADER PREMIUM -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 18px; margin-bottom: 18px; flex-shrink: 0;">
          <div style="display: flex; align-items: center; gap: 18px;">
            ${logoB64 ? `<img src="${logoB64}" style="width: 65px; height: 65px; border-radius: 50%; box-shadow: 0 0 15px rgba(212, 175, 55, 0.3); object-fit: cover;" />` : ""}
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <h1 style="color: #ffffff; font-size: 34px; font-weight: 800; margin: 0; padding: 0; line-height: 1; letter-spacing: -1px; font-family: 'Montserrat', sans-serif;">LICORERÍA RIZZO</h1>
              <p style="color: #d4af37; font-size: 14px; font-weight: 600; margin: 4px 0 0 0; padding: 0; letter-spacing: 2px;">CATÁLOGO DE PRODUCTOS</p>
            </div>
          </div>
          <div style="text-align: right; font-family: 'Poppins', sans-serif;">
            <p style="color: #999999; font-size: 13px; margin: 0;">IG: @licoreriarizzo</p>
            <p style="color: #999999; font-size: 13px; margin: 4px 0 0 0;">Tel: 0416-6713911</p>
            <p style="color: #999999; font-size: 13px; margin: 4px 0 0 0;">Email: licoreriarizzo@gmail.com</p>
          </div>
        </div>

        <!-- GRID DE PRODUCTOS (5 Columnas) -->
        <div style="display: grid; grid-template-columns: repeat(${COLS}, 1fr); grid-auto-rows: ${CARD_HEIGHT}px; gap: ${GRID_GAP}px; flex: 1; align-content: start;">
          ${chunkWithImages
            .map(
              (p) => `
            <div style="background-color: #2c2c2e; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 0 8px 24px rgba(0,0,0,0.3); display: flex; flex-direction: column;">
              
              <!-- Isla Flotante Blanca -->
              <div style="background-color: #ffffff; margin: 8px 8px 0 8px; border-radius: 12px; height: ${CARD_IMG_HEIGHT}px; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden;">
                ${
                  p.base64
                    ? `<div style="width: 80%; height: 80%; background-image: url('${p.base64}'); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>`
                    : `<div style="color: #ccc; font-size: 11px;">Sin imagen</div>`
                }
              </div>

              <!-- Info del Producto -->
              <div style="padding: 10px 12px 14px 12px; display: flex; flex-direction: column; flex-grow: 1;">
                <p style="color: #d4af37; font-size: 9px; font-weight: 700; letter-spacing: 1.5px; margin: 0 0 5px 0; text-transform: uppercase;">${p.categoria}</p>
                
                <div style="height: 42px; overflow: hidden; margin: 0 0 3px 0;">
                  <h3 style="color: #ffffff; font-size: 14px; font-weight: 600; margin: 0; line-height: 1.25; font-family: 'Montserrat', sans-serif;">${toTitleCase(p.nombre)}</h3>
                </div>

                <div style="margin-top: auto; padding-top: 8px; border-top: 1px solid rgba(212, 175, 55, 0.15);">
                  <p style="color: #d4af37; font-size: 10px; font-weight: 600; font-family: 'Poppins', sans-serif; margin: 0; letter-spacing: 0.5px;">
                    ${p.presentaciones.join(' <span style="color: rgba(255,255,255,0.2); font-weight: 300; margin: 0 4px;">|</span> ')}
                  </p>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <!-- Pie de página -->
        <div style="text-align: center; padding-top: 12px; flex-shrink: 0;">
          <p style="color: #666; font-size: 11px; margin: 0; font-family: 'Poppins', sans-serif;">Página ${i + 1} de ${totalPages}</p>
        </div>
      </div>
    `;

    container.appendChild(pageDiv);

    // Forzar un "respiro" al navegador para que la animación del loader no se trabe
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => setTimeout(resolve, 50));

    // Determinar de forma agresiva si estamos en un dispositivo móvil (iOS tiene estrictos límites de VRAM)
    const isMobile = typeof window !== "undefined" && (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);

    // Capturar con html2canvas
    const canvas = await html2canvas(pageDiv, {
      scale: isMobile ? 1 : 1.5,
      backgroundColor: "#121214",
      logging: false,
    });

    // Bajar la calidad ligeramente en móvil ayuda a reducir la saturación de memoria
    const imgData = canvas.toDataURL("image/jpeg", isMobile ? 0.75 : 0.92);
    
    // Destruir canvas masivo inmediatamente para liberar la VRAM de la gráfica
    canvas.width = 0;
    canvas.height = 0;

    if (i > 0) {
      doc.addPage();
    }

    doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    container.innerHTML = "";

    // Otro respiro antes de la siguiente página
    await new Promise((resolve) => setTimeout(resolve, 10));

    if (onProgress) {
      const percent = Math.round(((i + 1) / totalPages) * 100);
      onProgress(percent);
    }
  }

  document.body.removeChild(container);
  doc.save("Catalogo_Premium_Rizzo.pdf");
}
