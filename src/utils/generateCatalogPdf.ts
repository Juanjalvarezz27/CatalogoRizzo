import { jsPDF } from "jspdf";
import { type Product } from "@/data/products";

/**
 * Carga una imagen desde una URL, la redimensiona en un canvas (max 300px)
 * y la convierte a JPEG base64. Esto es CRÍTICO para no agotar la RAM en móviles.
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
          
          // Redimensionar para evitar agotar la memoria en móviles
          const MAX_SIZE = 300;
          let width = img.naturalWidth;
          let height = img.naturalHeight;

          if (width > MAX_SIZE || height > MAX_SIZE) {
            if (width > height) {
              height = Math.round((height * MAX_SIZE) / width);
              width = MAX_SIZE;
            } else {
              width = Math.round((width * MAX_SIZE) / height);
              height = MAX_SIZE;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d")!;
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, width, height);
          
          // Calidad 0.85 para un buen equilibrio entre nitidez y peso (menor consumo de memoria y tamaño de archivo final)
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
      img.src = objectUrl;
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

// Helpers para jsPDF
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}

export async function generateCatalogPdf(
  products: Product[],
  onProgress?: (percent: number) => void
): Promise<Blob> {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;
  const MARGIN_X = 15;
  const MARGIN_Y = 15;
  
  const COLS = 4;
  const ROWS = 5;
  const ITEMS_PER_PAGE = COLS * ROWS; // 20 por página
  
  const GRID_GAP = 4;
  const USABLE_WIDTH = PAGE_WIDTH - (MARGIN_X * 2);
  const CARD_WIDTH = (USABLE_WIDTH - (GRID_GAP * (COLS - 1))) / COLS;
  
  const HEADER_HEIGHT = 25;
  const FOOTER_HEIGHT = 10;
  
  const USABLE_HEIGHT = PAGE_HEIGHT - MARGIN_Y - HEADER_HEIGHT - FOOTER_HEIGHT - MARGIN_Y;
  const CARD_HEIGHT = Math.min((USABLE_HEIGHT - (GRID_GAP * (ROWS - 1))) / ROWS, 46); // Max 46mm

  // Pre-cargar logo
  const logoB64 = await toJpegBase64("/Logo.jpg");

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  for (let i = 0; i < totalPages; i++) {
    const start = i * ITEMS_PER_PAGE;
    const chunk = products.slice(start, start + ITEMS_PER_PAGE);

    // Fondo de la página (#121214)
    doc.setFillColor(...hexToRgb("#121214"));
    doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");

    // --- HEADER ---
    let currentY = MARGIN_Y;
    
    if (logoB64) {
      // jsPDF no tiene clip circular nativo fácil, así que dibujamos la imagen cuadrada
      doc.addImage(logoB64, "JPEG", MARGIN_X, currentY, 16, 16);
    }
    
    // Textos Header
    doc.setTextColor(...hexToRgb("#ffffff"));
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("LICORERÍA RIZZO", MARGIN_X + 20, currentY + 7);
    
    doc.setTextColor(...hexToRgb("#d4af37"));
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("CATÁLOGO DE PRODUCTOS", MARGIN_X + 20, currentY + 12);
    
    // Textos Header (Derecha)
    doc.setTextColor(...hexToRgb("#999999"));
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("IG: @licoreriarizzo", PAGE_WIDTH - MARGIN_X, currentY + 4, { align: "right" });
    doc.text("Tel: 0416-6713911", PAGE_WIDTH - MARGIN_X, currentY + 9, { align: "right" });
    doc.text("Email: licoreriarizzo@gmail.com", PAGE_WIDTH - MARGIN_X, currentY + 14, { align: "right" });
    
    // Línea dorada separadora tenue
    doc.setDrawColor(...hexToRgb("#d4af37"));
    doc.setLineWidth(0.2);
    doc.line(MARGIN_X, currentY + 20, PAGE_WIDTH - MARGIN_X, currentY + 20);
    
    currentY += HEADER_HEIGHT;

    // --- GRID DE PRODUCTOS ---
    // Pre-cargar imágenes para esta página (max 20)
    // Se hace secuencial para no ahogar la red en móviles
    const images: string[] = [];
    for (const p of chunk) {
      images.push(await toJpegBase64(p.imagenUrl));
    }

    for (let index = 0; index < chunk.length; index++) {
      const p = chunk[index];
      const imgB64 = images[index];
      
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      
      const x = MARGIN_X + col * (CARD_WIDTH + GRID_GAP);
      const y = currentY + row * (CARD_HEIGHT + GRID_GAP);
      
      // Fondo de la tarjeta (#2c2c2e)
      doc.setFillColor(...hexToRgb("#2c2c2e"));
      // roundedRect(x, y, w, h, rx, ry, style)
      doc.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 2, 2, "F");
      
      // Isla blanca para la imagen
      const imgIslandHeight = 22;
      const pad = 2;
      doc.setFillColor(...hexToRgb("#ffffff"));
      doc.roundedRect(x + pad, y + pad, CARD_WIDTH - (pad*2), imgIslandHeight, 1.5, 1.5, "F");
      
      // Colocar Imagen
      if (imgB64) {
        // Asumimos que queremos centrarla y hacer que encaje
        const imgPad = 1;
        doc.addImage(imgB64, "JPEG", x + pad + imgPad, y + pad + imgPad, CARD_WIDTH - (pad*2) - (imgPad*2), imgIslandHeight - (imgPad*2));
      } else {
        doc.setTextColor(...hexToRgb("#cccccc"));
        doc.setFontSize(6);
        doc.text("Sin imagen", x + CARD_WIDTH/2, y + pad + imgIslandHeight/2, { align: "center" });
      }
      
      // Textos del producto
      let textY = y + pad + imgIslandHeight + 4;
      
      // Categoría
      doc.setTextColor(...hexToRgb("#d4af37"));
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6);
      doc.text(p.categoria.toUpperCase(), x + pad, textY);
      textY += 3.5;
      
      // Nombre
      doc.setTextColor(...hexToRgb("#ffffff"));
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      
      // Truncar nombre si es muy largo o separarlo en líneas
      const nameLines = doc.splitTextToSize(toTitleCase(p.nombre), CARD_WIDTH - (pad*2));
      doc.text(nameLines.slice(0, 2), x + pad, textY); // Max 2 lineas
      
      // Línea separadora tenue
      const bottomAreaY = y + CARD_HEIGHT - 5;
      doc.setDrawColor(...hexToRgb("#d4af37"));
      doc.setLineWidth(0.1);
      doc.line(x + pad, bottomAreaY - 2, x + CARD_WIDTH - pad, bottomAreaY - 2);
      
      // Presentaciones
      doc.setTextColor(...hexToRgb("#d4af37"));
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6);
      const presentacionesText = p.presentaciones.join(" | ");
      const presLines = doc.splitTextToSize(presentacionesText, CARD_WIDTH - (pad*2));
      doc.text(presLines.slice(0,1), x + pad, bottomAreaY + 1);
    }

    // --- FOOTER ---
    doc.setTextColor(...hexToRgb("#666666"));
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.text(`Página ${i + 1} de ${totalPages}`, PAGE_WIDTH / 2, PAGE_HEIGHT - MARGIN_Y, { align: "center" });

    if (i < totalPages - 1) {
      doc.addPage();
    }

    // Reportar progreso
    if (onProgress) {
      // Damos un pequeño respiro para que UI se actualice
      await new Promise((resolve) => setTimeout(resolve, 10));
      const percent = Math.round(((i + 1) / totalPages) * 100);
      onProgress(percent);
    }
  }

  return doc.output("blob");
}
