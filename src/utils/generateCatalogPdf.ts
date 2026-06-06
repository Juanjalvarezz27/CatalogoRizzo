import { jsPDF } from "jspdf";
import { type Product } from "@/data/products";

/**
 * Carga una imagen desde una URL, la redimensiona en un canvas simulando 'object-fit: contain'
 * dentro del aspect ratio de destino. Esto previene que jsPDF estire las imágenes.
 */
async function toJpegBase64(url: string, targetRatio: number = 1): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) return "";
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const MAX_W = 300;
          const MAX_H = Math.round(MAX_W / targetRatio);

          const canvas = document.createElement("canvas");
          canvas.width = MAX_W;
          canvas.height = MAX_H;
          const ctx = canvas.getContext("2d")!;
          
          // Fondo blanco para la isla de la imagen
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          let imgW = img.naturalWidth;
          let imgH = img.naturalHeight;
          const imgRatio = imgW / imgH;

          let drawW, drawH, drawX, drawY;

          // object-fit: contain math
          if (imgRatio > targetRatio) {
            drawW = MAX_W;
            drawH = MAX_W / imgRatio;
            drawX = 0;
            drawY = (MAX_H - drawH) / 2;
          } else {
            drawH = MAX_H;
            drawW = MAX_H * imgRatio;
            drawY = 0;
            drawX = (MAX_W - drawW) / 2;
          }

          // Padding interior del 8% basado en la dimensión limitante
          const pad = Math.min(MAX_W, MAX_H) * 0.08; 
          
          let scale = 1;
          if (imgRatio > targetRatio) {
            scale = (drawW - pad*2) / drawW;
          } else {
            scale = (drawH - pad*2) / drawH;
          }
          
          const innerDrawW = drawW * scale;
          const innerDrawH = drawH * scale;
          const innerDrawX = drawX + (drawW - innerDrawW)/2;
          const innerDrawY = drawY + (drawH - innerDrawH)/2;

          // Usar multiply para que el fondo blanco de la foto se vuelva transparente frente al canvas blanco
          ctx.globalCompositeOperation = "multiply";
          // Aumentar ligeramente brillo/contraste para forzar los grises claros/blancos sucios a blanco puro
          ctx.filter = "contrast(1.05) brightness(1.02)";

          ctx.drawImage(img, innerDrawX, innerDrawY, innerDrawW, innerDrawH);
          
          // Restaurar contexto por seguridad
          ctx.globalCompositeOperation = "source-over";
          ctx.filter = "none";
          
          const data = canvas.toDataURL("image/jpeg", 0.90);
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

async function toCircularPngBase64(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) return "";
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const SIZE = 300;
          const canvas = document.createElement("canvas");
          canvas.width = SIZE;
          canvas.height = SIZE;
          const ctx = canvas.getContext("2d")!;
          
          // Crear recorte circular (clip)
          ctx.beginPath();
          ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          
          // Llenar el fondo de blanco para asegurar que el logo no quede transparente si era un PNG sin fondo
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, SIZE, SIZE);

          let imgW = img.naturalWidth;
          let imgH = img.naturalHeight;
          const imgRatio = imgW / imgH;
          let drawW, drawH, drawX, drawY;

          // object-fit: cover logic
          if (imgRatio > 1) {
            drawH = SIZE;
            drawW = SIZE * imgRatio;
            drawY = 0;
            drawX = (SIZE - drawW) / 2;
          } else {
            drawW = SIZE;
            drawH = SIZE / imgRatio;
            drawX = 0;
            drawY = (SIZE - drawH) / 2;
          }
          
          ctx.drawImage(img, drawX, drawY, drawW, drawH);
          
          // PNG soporta esquinas transparentes
          const data = canvas.toDataURL("image/png");
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

async function fetchFontBase64(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) return "";
    const blob = await res.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve(dataUrl.split(",")[1]);
      };
      reader.onerror = () => resolve("");
      reader.readAsDataURL(blob);
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
  
  // Ajustes de diseño fieles a la imagen
  const MARGIN_X = 12;
  const MARGIN_Y = 12;
  
  const COLS = 4;
  const ROWS = 4;
  const ITEMS_PER_PAGE = COLS * ROWS;
  
  const GRID_GAP = 5;
  const USABLE_WIDTH = PAGE_WIDTH - (MARGIN_X * 2);
  const CARD_WIDTH = (USABLE_WIDTH - (GRID_GAP * (COLS - 1))) / COLS;
  
  const HEADER_HEIGHT = 22;
  const FOOTER_HEIGHT = 8;
  
  const USABLE_HEIGHT = PAGE_HEIGHT - MARGIN_Y - HEADER_HEIGHT - FOOTER_HEIGHT - MARGIN_Y;
  const CARD_HEIGHT = (USABLE_HEIGHT - (GRID_GAP * (ROWS - 1))) / ROWS;

  const imgIslandHeight = CARD_HEIGHT * 0.53; // 53% de la altura de la tarjeta
  const islandRatio = (CARD_WIDTH - 4) / imgIslandHeight;

  // Pre-cargar logo ajustado a círculo con esquinas transparentes
  const logoB64 = await toCircularPngBase64("/Logo.jpg");
  
  // Pre-cargar fuentes premium (Montserrat)
  const fontBoldB64 = await fetchFontBase64("/fonts/Montserrat-Bold.ttf");
  const fontRegB64 = await fetchFontBase64("/fonts/Montserrat-Regular.ttf");
  
  let fontBold = "helvetica";
  let fontReg = "helvetica";
  
  if (fontBoldB64 && fontRegB64) {
    doc.addFileToVFS("Montserrat-Bold.ttf", fontBoldB64);
    doc.addFont("Montserrat-Bold.ttf", "Montserrat", "bold");
    fontBold = "Montserrat";
    
    doc.addFileToVFS("Montserrat-Regular.ttf", fontRegB64);
    doc.addFont("Montserrat-Regular.ttf", "Montserrat", "normal");
    fontReg = "Montserrat";
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  for (let i = 0; i < totalPages; i++) {
    const start = i * ITEMS_PER_PAGE;
    const chunk = products.slice(start, start + ITEMS_PER_PAGE);

    // Fondo global oscuro (#151515)
    doc.setFillColor(...hexToRgb("#151515"));
    doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");

    // --- HEADER ---
    let currentY = MARGIN_Y;
    
    if (logoB64) {
      // Dibujar fondo blanco circular sutil por si el logo tiene transparencia irregular
      doc.setFillColor(...hexToRgb("#ffffff"));
      doc.circle(MARGIN_X + 8, currentY + 8, 8.2, "F");
      // Añadir la imagen PNG transparente sobre el fondo
      doc.addImage(logoB64, "PNG", MARGIN_X, currentY, 16, 16);
    }
    
    // Textos Header
    doc.setTextColor(...hexToRgb("#ffffff"));
    doc.setFont(fontBold, "bold");
    doc.setFontSize(22);
    doc.text("LICORERÍA RIZZO", MARGIN_X + 22, currentY + 7);
    
    doc.setTextColor(...hexToRgb("#d4af37"));
    doc.setFont(fontBold, "bold");
    doc.setFontSize(9);
    doc.text("CATÁLOGO DE PRODUCTOS", MARGIN_X + 23, currentY + 12);
    
    // Textos Header (Derecha)
    doc.setTextColor(...hexToRgb("#999999"));
    doc.setFont(fontReg, "normal");
    doc.setFontSize(8);
    doc.text("IG: @licoreriarizzo", PAGE_WIDTH - MARGIN_X, currentY + 4, { align: "right" });
    doc.text("Tel: 0416-6713911", PAGE_WIDTH - MARGIN_X, currentY + 9, { align: "right" });
    doc.text("Email: licoreriarizzo@gmail.com", PAGE_WIDTH - MARGIN_X, currentY + 14, { align: "right" });
    
    // Línea dorada separadora tenue
    doc.setDrawColor(...hexToRgb("#d4af37"));
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, currentY + 18, PAGE_WIDTH - MARGIN_X, currentY + 18);
    
    currentY += HEADER_HEIGHT;

    // --- GRID DE PRODUCTOS ---
    const images: string[] = [];
    for (const p of chunk) {
      images.push(await toJpegBase64(p.imagenUrl, islandRatio));
    }

    for (let index = 0; index < chunk.length; index++) {
      const p = chunk[index];
      const imgB64 = images[index];
      
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      
      const x = MARGIN_X + col * (CARD_WIDTH + GRID_GAP);
      const y = currentY + row * (CARD_HEIGHT + GRID_GAP);
      
      // Fondo de la tarjeta (gris oscuro elegante)
      doc.setFillColor(...hexToRgb("#262628"));
      doc.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 3, 3, "F");
      
      // Isla blanca para la imagen
      const pad = 2; // Margen interno de la tarjeta
      
      if (imgB64) {
        // La isla blanca ya está incrustada en la imagen B64 gracias a la modificación en toJpegBase64
        // que dibuja el fondo blanco y ajusta la imagen con object-fit.
        // Solo la dibujamos con esquinas redondeadas simuladas agregando pequeños rectángulos blancos si quisiéramos,
        // pero jsPDF no permite clipping fácil, así que dibujaremos la isla blanca con `roundedRect` y la 
        // imagen se superpondrá. Si la imagen ya tiene fondo blanco cuadrado, tapará las esquinas redondeadas arriba.
        doc.setFillColor(...hexToRgb("#ffffff"));
        doc.roundedRect(x + pad, y + pad, CARD_WIDTH - (pad*2), imgIslandHeight, 2, 2, "F");
        
        // Hacemos que la imagen cubra toda la isla blanca menos un mínimo borde inferior para que no tape 
        // las esquinas redondeadas inferiores (que no las hay en la isla superior).
        // Sin embargo, jsPDF tapará los bordes redondeados.
        doc.addImage(imgB64, "JPEG", x + pad + 0.5, y + pad + 0.5, CARD_WIDTH - (pad*2) - 1, imgIslandHeight - 1);
      } else {
        doc.setFillColor(...hexToRgb("#ffffff"));
        doc.roundedRect(x + pad, y + pad, CARD_WIDTH - (pad*2), imgIslandHeight, 2, 2, "F");
        doc.setTextColor(...hexToRgb("#cccccc"));
        doc.setFontSize(6);
        doc.text("Sin imagen", x + CARD_WIDTH/2, y + pad + imgIslandHeight/2, { align: "center" });
      }
      
      // Textos del producto
      let textY = y + pad + imgIslandHeight + 4.5;
      
      // Categoría
      doc.setTextColor(...hexToRgb("#d4af37"));
      doc.setFont(fontBold, "bold");
      doc.setFontSize(6);
      doc.text(p.categoria.toUpperCase(), x + pad + 1, textY);
      textY += 4;
      
      // Nombre
      doc.setTextColor(...hexToRgb("#ffffff"));
      doc.setFont(fontBold, "bold");
      doc.setFontSize(8.5);
      
      const nameLines = doc.splitTextToSize(toTitleCase(p.nombre), CARD_WIDTH - (pad*2) - 2);
      doc.text(nameLines.slice(0, 2), x + pad + 1, textY);
      
      // Línea separadora dorada oscura
      const bottomAreaY = y + CARD_HEIGHT - 6;
      doc.setDrawColor(...hexToRgb("#8a7122"));
      doc.setLineWidth(0.15);
      doc.line(x + pad + 1, bottomAreaY - 2.5, x + CARD_WIDTH - pad - 1, bottomAreaY - 2.5);
      
      // Presentaciones
      doc.setTextColor(...hexToRgb("#d4af37"));
      doc.setFont(fontBold, "bold");
      doc.setFontSize(6.5);
      const presentacionesText = p.presentaciones.join("  |  ");
      const presLines = doc.splitTextToSize(presentacionesText, CARD_WIDTH - (pad*2) - 2);
      doc.text(presLines.slice(0,1), x + pad + 1, bottomAreaY + 1);
    }

    // --- FOOTER ---
    doc.setTextColor(...hexToRgb("#666666"));
    doc.setFont(fontReg, "normal");
    doc.setFontSize(7);
    doc.text(`Página ${i + 1} de ${totalPages}`, PAGE_WIDTH / 2, PAGE_HEIGHT - (MARGIN_Y / 2), { align: "center" });

    if (i < totalPages - 1) {
      doc.addPage();
    }

    if (onProgress) {
      await new Promise((resolve) => setTimeout(resolve, 10));
      const percent = Math.round(((i + 1) / totalPages) * 100);
      onProgress(percent);
    }
  }

  return doc.output("blob");
}
