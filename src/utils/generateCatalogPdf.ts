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
  
  const MARGIN_X = 12;
  const MARGIN_Y = 12;
  
  const COLS = 4;
  const ROWS = 4; // Referencia de cálculo
  
  const GRID_GAP = 5;
  const USABLE_WIDTH = PAGE_WIDTH - (MARGIN_X * 2);
  const CARD_WIDTH = (USABLE_WIDTH - (GRID_GAP * (COLS - 1))) / COLS;
  
  const HEADER_HEIGHT = 22;
  const FOOTER_HEIGHT = 8;
  
  const USABLE_HEIGHT = PAGE_HEIGHT - MARGIN_Y - HEADER_HEIGHT - FOOTER_HEIGHT - MARGIN_Y;
  const CARD_HEIGHT = (USABLE_HEIGHT - (GRID_GAP * (ROWS - 1))) / ROWS;

  const imgIslandHeight = 25;
  const islandRatio = (CARD_WIDTH - 4) / imgIslandHeight;

  // Pre-cargar recursos
  const logoB64 = await toCircularPngBase64("/Logo.jpg");
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

  // Agrupar productos
  const groupedProducts: Record<string, Product[]> = {};
  for (const p of products) {
    if (!groupedProducts[p.categoria]) {
      groupedProducts[p.categoria] = [];
    }
    groupedProducts[p.categoria].push(p);
  }

  const categories = Object.keys(groupedProducts).sort();
  const totalProducts = products.length;
  let processedCount = 0;
  
  let currentY = MARGIN_Y;
  let currentCol = 0;
  let pageCount = 1;
  const TOTAL_PAGES_EXP = "{totalPages}";

  function drawPageShell() {
    doc.setFillColor(...hexToRgb("#151515"));
    doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, "F");

    currentY = MARGIN_Y;
    
    if (logoB64) {
      doc.setFillColor(...hexToRgb("#ffffff"));
      doc.circle(MARGIN_X + 8, currentY + 8, 8.2, "F");
      doc.addImage(logoB64, "PNG", MARGIN_X, currentY, 16, 16);
    }
    
    doc.setTextColor(...hexToRgb("#ffffff"));
    doc.setFont(fontBold, "bold");
    doc.setFontSize(20);
    doc.text("LICORERÍA RIZZO", MARGIN_X + 22, currentY + 6.5);
    
    doc.setTextColor(...hexToRgb("#d4af37"));
    doc.setFont(fontBold, "bold");
    doc.setFontSize(8.5);
    doc.text("CATÁLOGO MAYORISTA — PRECIOS B2B", MARGIN_X + 22.5, currentY + 11.5);

    doc.setTextColor(...hexToRgb("#888888"));
    doc.setFont(fontReg, "normal");
    doc.setFontSize(6);
    doc.text("* Precios referenciales sujetos a cambio sin previo aviso. Tasa BCV del día.", MARGIN_X + 22.5, currentY + 15.5);
    
    doc.setTextColor(...hexToRgb("#cccccc"));
    doc.setFont(fontReg, "normal");
    doc.setFontSize(7.5);
    doc.text("IG: @licoreriarizzo", PAGE_WIDTH - MARGIN_X, currentY + 4, { align: "right" });
    doc.text("Tel: 0416-6713911", PAGE_WIDTH - MARGIN_X, currentY + 8.5, { align: "right" });
    doc.text("Email: licoreriarizzo@gmail.com", PAGE_WIDTH - MARGIN_X, currentY + 13, { align: "right" });
    
    doc.setDrawColor(...hexToRgb("#d4af37"));
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, currentY + 18, PAGE_WIDTH - MARGIN_X, currentY + 18);
    
    currentY += HEADER_HEIGHT;
    currentCol = 0;
    
    // Pie de página con numeración y nota legal
    doc.setTextColor(...hexToRgb("#777777"));
    doc.setFont(fontReg, "normal");
    doc.setFontSize(6.5);
    doc.text("Licorería Rizzo — Distribución de licores al mayor", MARGIN_X, PAGE_HEIGHT - (MARGIN_Y / 2));
    doc.text(`Página ${pageCount} de ${TOTAL_PAGES_EXP}`, PAGE_WIDTH - MARGIN_X, PAGE_HEIGHT - (MARGIN_Y / 2), { align: "right" });
  }

  // Primera página
  drawPageShell();

  const TITLE_HEIGHT = 16;

  for (const cat of categories) {
    const catProducts = groupedProducts[cat];
    const spaceNeeded = TITLE_HEIGHT + CARD_HEIGHT;

    // Si no estamos en la primera columna, saltar de línea para el título
    if (currentCol > 0) {
      currentY += CARD_HEIGHT + GRID_GAP;
      currentCol = 0;
    }

    // Espaciado extra antes de nueva categoría (si no está al inicio de la página)
    if (currentY > MARGIN_Y + HEADER_HEIGHT + 2) {
      currentY += 8;
    }

    // Salto de página si el título y la primera fila no caben
    if (currentY + spaceNeeded > PAGE_HEIGHT - FOOTER_HEIGHT - MARGIN_Y) {
      doc.addPage();
      pageCount++;
      drawPageShell();
    }

    // Dibujar Título Categoría
    doc.setTextColor(...hexToRgb("#d4af37"));
    doc.setFont(fontBold, "bold");
    doc.setFontSize(14);
    doc.text(cat.toUpperCase(), MARGIN_X, currentY + 6);
    
    // Línea separadora de categoría
    doc.setDrawColor(...hexToRgb("#d4af37"));
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, currentY + 9, PAGE_WIDTH - MARGIN_X, currentY + 9);
    
    currentY += TITLE_HEIGHT;

    for (const p of catProducts) {
      const imgB64 = await toJpegBase64(p.imagenUrl, islandRatio);
      
      // Control de Columnas y Filas
      if (currentCol >= COLS) {
        currentCol = 0;
        currentY += CARD_HEIGHT + GRID_GAP;
      }

      if (currentY + CARD_HEIGHT > PAGE_HEIGHT - FOOTER_HEIGHT - MARGIN_Y) {
        doc.addPage();
        pageCount++;
        drawPageShell();
      }

      const x = MARGIN_X + currentCol * (CARD_WIDTH + GRID_GAP);
      const y = currentY;

      // Fondo tarjeta
      doc.setFillColor(...hexToRgb("#262628"));
      doc.roundedRect(x, y, CARD_WIDTH, CARD_HEIGHT, 3, 3, "F");
      
      const pad = 2;
      
      if (imgB64) {
        doc.setFillColor(...hexToRgb("#ffffff"));
        doc.roundedRect(x + pad, y + pad, CARD_WIDTH - (pad*2), imgIslandHeight, 2, 2, "F");
        doc.addImage(imgB64, "JPEG", x + pad + 0.5, y + pad + 0.5, CARD_WIDTH - (pad*2) - 1, imgIslandHeight - 1);
      } else {
        doc.setFillColor(...hexToRgb("#ffffff"));
        doc.roundedRect(x + pad, y + pad, CARD_WIDTH - (pad*2), imgIslandHeight, 2, 2, "F");
        doc.setTextColor(...hexToRgb("#cccccc"));
        doc.setFontSize(6);
        doc.text("Sin imagen", x + CARD_WIDTH/2, y + pad + imgIslandHeight/2, { align: "center" });
      }
      
      // Categoría
      const catY = y + pad + imgIslandHeight + 3.2;
      doc.setTextColor(...hexToRgb("#d4af37"));
      doc.setFont(fontBold, "bold");
      doc.setFontSize(5.5);
      doc.text(p.categoria.toUpperCase(), x + pad + 1, catY);
      
      // Nombre del producto
      const nameY = catY + 3.2;
      doc.setTextColor(...hexToRgb("#ffffff"));
      doc.setFont(fontBold, "bold");
      doc.setFontSize(7.5);
      const nameLines = doc.splitTextToSize(toTitleCase(p.nombre), CARD_WIDTH - (pad * 2) - 2);
      doc.text(nameLines.slice(0, 2), x + pad + 1, nameY);
      
      // Presentaciones y empaque
      const presY = nameY + (nameLines.length > 1 ? 5.8 : 3.8);
      doc.setTextColor(...hexToRgb("#aaaaaa"));
      doc.setFont(fontReg, "normal");
      doc.setFontSize(5.5);
      const empaqueSuffix = p.cantidad_caja ? ` · Caja x${Array.isArray(p.cantidad_caja) ? p.cantidad_caja.join('/') : p.cantidad_caja}` : "";
      const presentacionesText = p.presentaciones.join(" · ") + empaqueSuffix;
      const presLines = doc.splitTextToSize(presentacionesText, CARD_WIDTH - (pad * 2) - 2);
      doc.text(presLines.slice(0, 1), x + pad + 1, presY);

      // Precios mayoristas por variante o base
      const pricedVariants = p.variantes?.filter(
        (v) => v.precio_caja !== undefined && v.precio_unidad !== undefined
      ) ?? [];

      const hasPrice = pricedVariants.length > 0;
      const isMultiVariant = pricedVariants.length > 1;

      const displayBoxPrice = hasPrice
        ? Math.min(...pricedVariants.map((v) => v.precio_caja!))
        : 0;

      const displayUnitPrice = hasPrice
        ? Math.min(...pricedVariants.map((v) => v.precio_unidad!))
        : 0;

      // Caja de precios inferior
      const priceBoxY = y + CARD_HEIGHT - 11.5;
      const priceBoxH = 9.5;
      const priceBoxW = CARD_WIDTH - (pad * 2);
      const priceBoxX = x + pad;

      doc.setFillColor(...hexToRgb("#1a1a1c"));
      doc.setDrawColor(...hexToRgb("#38383c"));
      doc.setLineWidth(0.2);
      doc.roundedRect(priceBoxX, priceBoxY, priceBoxW, priceBoxH, 1.5, 1.5, "FD");

      if (hasPrice) {
        // Precio caja B2B
        const col1X = priceBoxX + 1.8;
        doc.setFont(fontBold, "bold");
        doc.setFontSize(4.2);
        doc.setTextColor(...hexToRgb("#d4af37"));
        doc.text(isMultiVariant ? "CAJA DESDE" : "PRECIO CAJA", col1X, priceBoxY + 3.1);

        doc.setFont(fontBold, "bold");
        doc.setFontSize(7.2);
        doc.setTextColor(...hexToRgb("#d4af37"));
        doc.text(`$${displayBoxPrice.toFixed(2)}`, col1X, priceBoxY + 7.5);

        // Separador vertical
        const dividerX = priceBoxX + 20;
        doc.setDrawColor(...hexToRgb("#44444a"));
        doc.setLineWidth(0.18);
        doc.line(dividerX, priceBoxY + 1.8, dividerX, priceBoxY + priceBoxH - 1.8);

        // Precio unitario
        const col2X = dividerX + 1.8;
        doc.setFont(fontBold, "bold");
        doc.setFontSize(4.2);
        doc.setTextColor(...hexToRgb("#999999"));
        doc.text(isMultiVariant ? "UNID. DESDE" : "POR UNIDAD", col2X, priceBoxY + 3.1);

        doc.setFont(fontBold, "bold");
        doc.setFontSize(6.8);
        doc.setTextColor(...hexToRgb("#ffffff"));
        doc.text(`$${displayUnitPrice.toFixed(2)}`, col2X, priceBoxY + 7.5);
      } else {
        // Estado sin precio
        doc.setFont(fontBold, "bold");
        doc.setFontSize(5.5);
        doc.setTextColor(...hexToRgb("#d4af37"));
        doc.text("PRECIO BAJO CONSULTA", priceBoxX + (priceBoxW / 2), priceBoxY + 4.1, { align: "center" });

        doc.setFont(fontReg, "normal");
        doc.setFontSize(4.5);
        doc.setTextColor(...hexToRgb("#aaaaaa"));
        doc.text("Disponibilidad vía WhatsApp", priceBoxX + (priceBoxW / 2), priceBoxY + 7.6, { align: "center" });
      }

      currentCol++;
      processedCount++;

      if (onProgress) {
        await new Promise((resolve) => setTimeout(resolve, 5));
        const percent = Math.round((processedCount / totalProducts) * 100);
        onProgress(percent);
      }
    }
  }

  if (typeof doc.putTotalPages === 'function') {
    doc.putTotalPages(TOTAL_PAGES_EXP);
  }

  return doc.output("blob");
}
