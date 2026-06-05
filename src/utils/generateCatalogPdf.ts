import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { type Product } from "@/data/products";

// Convierte la URL a Base64 directamente. Al usar html2canvas, el navegador puede renderizar WEBP
// sin problemas, así que no necesitamos forzar la conversión a JPEG con un canvas, lo cual 
// evita el error de CORS / [object Event] por fallos de renderizado de imagen.
async function getBase64Image(imageUrl: string): Promise<string> {
  const urlToFetch = imageUrl.startsWith("/") 
    ? imageUrl 
    : `/_next/image?url=${encodeURIComponent(imageUrl)}&w=640&q=75`;

  try {
    const res = await fetch(urlToFetch);
    
    if (!res.ok) {
      console.warn(`Error HTTP ${res.status} al cargar imagen: ${urlToFetch}`);
      return "";
    }

    const blob = await res.blob();
    
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => {
        console.warn(`Error de FileReader en la imagen: ${imageUrl}`);
        resolve("");
      };
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error fetching image", error);
    return "";
  }
}

export async function generateCatalogPdf(products: Product[]) {
  // Dimensiones en píxeles para el renderizado HTML (Alta resolución)
  const RENDER_WIDTH = 1200;
  const RENDER_HEIGHT = 1697; 

  // El documento PDF se creará en formato A4 estándar (mm) para que no requiera zoom masivo
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pdfWidth = doc.internal.pageSize.getWidth();
  const pdfHeight = doc.internal.pageSize.getHeight();

  // 1. Pre-cargar todas las imágenes en Base64
  const productsWithBase64 = await Promise.all(
    products.map(async (p) => {
      const base64 = await getBase64Image(p.imagen_url);
      return { ...p, base64 };
    })
  );

  // Filas de 4 en 4. (4 columnas x 4 filas = 16 productos por página)
  const ITEMS_PER_PAGE = 16;
  const pages = Math.ceil(productsWithBase64.length / ITEMS_PER_PAGE);

  // 2. Crear contenedor oculto
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "-9999px";
  container.style.left = "-9999px";
  document.body.appendChild(container);

  const logoBase64 = await getBase64Image("/Logo.jpg");

  for (let i = 0; i < pages; i++) {
    const start = i * ITEMS_PER_PAGE;
    const chunk = productsWithBase64.slice(start, start + ITEMS_PER_PAGE);

    const pageDiv = document.createElement("div");
    pageDiv.style.width = `${RENDER_WIDTH}px`;
    pageDiv.style.height = `${RENDER_HEIGHT}px`;
    pageDiv.style.backgroundColor = "#121214"; // Fondo Noche
    pageDiv.style.position = "relative";
    pageDiv.style.overflow = "hidden";
    pageDiv.style.fontFamily = "'Poppins', system-ui, -apple-system, sans-serif";
    // 3. Diseño Profesional ajustado para 4 columnas y compatible con html2canvas
    pageDiv.innerHTML = `
      <!-- Destellos Dorados de fondo (Luces de Alta Intensidad para eliminar oscuridad) -->
      <div style="position: absolute; top: -10%; left: -10%; width: 1200px; height: 1200px; background: radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(18, 18, 20, 0) 70%);"></div>
      <div style="position: absolute; bottom: -10%; right: -10%; width: 1200px; height: 1200px; background: radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(18, 18, 20, 0) 70%);"></div>
      
      <div style="position: absolute; top: 20%; left: 10%; width: 1600px; height: 1600px; background: radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(18, 18, 20, 0) 65%); transform: translate(-50%, -50%);"></div>
      <div style="position: absolute; top: 70%; right: 10%; width: 1600px; height: 1600px; background: radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(18, 18, 20, 0) 65%); transform: translate(50%, -50%);"></div>
      <div style="position: absolute; top: 50%; left: 50%; width: 2000px; height: 1000px; background: radial-gradient(ellipse, rgba(212, 175, 55, 0.15) 0%, rgba(18, 18, 20, 0) 70%); transform: translate(-50%, -50%);"></div>

      <div style="position: absolute; top: 15%; left: 35%; width: 800px; height: 800px; background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; top: 35%; right: 25%; width: 900px; height: 900px; background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; top: 60%; left: 20%; width: 1000px; height: 1000px; background: radial-gradient(circle, rgba(212, 175, 55, 0.20) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; top: 80%; left: 45%; width: 800px; height: 800px; background: radial-gradient(circle, rgba(212, 175, 55, 0.30) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; top: 5%; right: 5%; width: 700px; height: 700px; background: radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; top: 45%; left: -5%; width: 900px; height: 900px; background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      <div style="position: absolute; bottom: 25%; right: -5%; width: 1100px; height: 1100px; background: radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, rgba(18, 18, 20, 0) 60%);"></div>
      
      <div style="padding: 35px 55px; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; position: relative; z-index: 10;">
        
        <!-- HEADER PREMIUM -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 25px; margin-bottom: 25px;">
          <div style="display: flex; align-items: center; gap: 25px;">
            ${logoBase64 ? `<img src="${logoBase64}" style="width: 85px; height: 85px; border-radius: 50%; box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); object-fit: cover;" />` : ''}
            <div style="display: flex; flex-direction: column; justify-content: center;">
              <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0; padding: 0; line-height: 1; letter-spacing: -1px; font-family: 'Montserrat', sans-serif;">LICORERÍA RIZZO</h1>
              <p style="color: #d4af37; font-size: 18px; font-weight: 600; margin: 6px 0 0 0; padding: 0; letter-spacing: 2px;">CATÁLOGO DE PRODUCTOS</p>
            </div>
          </div>
          <div style="text-align: right; font-family: 'Poppins', sans-serif;">
            <p style="color: #999999; font-size: 16px; margin: 0;">Instagram: @licoreriarizzo</p>
            <p style="color: #999999; font-size: 16px; margin: 5px 0 0 0;">WhatsApp: +58 412 7510158</p>
          </div>
        </div>

        <!-- GRID DE PRODUCTOS (4 Columnas) -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;">
          ${chunk.map(p => `
            <div style="background-color: #2c2c2e; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.3); display: flex; flex-direction: column;">
              
              <!-- Isla Flotante Blanca -->
              <div style="background-color: #ffffff; margin: 12px 12px 0 12px; border-radius: 14px; height: 200px; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden;">
                ${p.base64 ? `<div style="width: 80%; height: 80%; background-image: url('${p.base64}'); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>` : `<div style="color: #ccc;">Sin imagen</div>`}
              </div>

              <!-- Info del Producto -->
              <div style="padding: 18px 20px 24px 20px; display: flex; flex-direction: column; flex-grow: 1;">
                <p style="color: #d4af37; font-size: 12px; font-weight: 700; letter-spacing: 2px; margin: 0 0 8px 0; text-transform: uppercase;">${p.categoria}</p>
                
                <!-- Contenedor con altura fija aumentada para mayor holgura -->
                <div style="height: 58px; overflow: hidden; margin: 0 0 4px 0;">
                  <h3 style="color: #ffffff; font-size: 19px; font-weight: 600; margin: 0; line-height: 1.25; font-family: 'Montserrat', sans-serif;">${p.nombre}</h3>
                </div>
                <!-- Presentaciones (Rediseño Tipográfico Premium sin Cajas) -->
                <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid rgba(212, 175, 55, 0.15);">
                  <p style="color: #d4af37; font-size: 14px; font-weight: 600; font-family: 'Poppins', sans-serif; margin: 0; letter-spacing: 1px;">
                    ${p.presentaciones.join(' <span style="color: rgba(255,255,255,0.2); font-weight: 300; margin: 0 6px;">|</span> ')}
                  </p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;

    container.appendChild(pageDiv);

    // Esperar a que el navegador procese el CSS del DOM
    await new Promise(resolve => setTimeout(resolve, 300));

    // Tomar fotografía de alta calidad
    const canvas = await html2canvas(pageDiv, {
      scale: 1.5, // 1.5x mejora la nitidez al reducirse a A4
      useCORS: true,
      backgroundColor: "#121214",
      logging: false,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);

    if (i > 0) {
      doc.addPage();
    }
    
    // Pegar la fotografía encajando perfectamente en el formato A4 estándar
    doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    container.innerHTML = ""; 
  }

  // Limpiar
  document.body.removeChild(container);

  doc.save("Catalogo_Premium_Rizzo.pdf");
}
