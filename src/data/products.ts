export interface Product {
  id: number;
  nombre: string;
  categoria: string;
  presentaciones: string[];
  imagen_url: string;
  cantidad_caja?: number;
}

export const categories = [
  "Todos",
  "Ron",
  "Whisky",
  "Vodka",
  "Tequila",
  "Cerveza",
  "Vino",
  "Gin",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: 1,
    nombre: "Diplomático Reserva Exclusiva",
    categoria: "Ron",
    presentaciones: ["0.70L"],
    imagen_url: "https://img.thewhiskyexchange.com/900/rum_dip1.jpg",
    cantidad_caja: 6,
  },
  {
    id: 2,
    nombre: "Johnnie Walker Black Label",
    categoria: "Whisky",
    presentaciones: ["0.70L", "1L"],
    imagen_url: "https://img.thewhiskyexchange.com/900/blend_joh1.jpg",
    cantidad_caja: 12,
  },
  {
    id: 3,
    nombre: "Absolut Original",
    categoria: "Vodka",
    presentaciones: ["0.70L", "1L"],
    imagen_url: "https://img.thewhiskyexchange.com/900/vodka_abs1.jpg",
    cantidad_caja: 12,
  },
  {
    id: 4,
    nombre: "José Cuervo Especial Gold",
    categoria: "Tequila",
    presentaciones: ["0.70L", "0.75L"],
    imagen_url: "https://media.licoresmundiales.com/media/catalog/product/cache/521bfa0199cf24b54354aeac7a407001/0/0/001-015-079.jpg",
    cantidad_caja: 12,
  },
  {
    id: 5,
    nombre: "Heineken Lager",
    categoria: "Cerveza",
    presentaciones: ["0.33L", "0.65L"],
    imagen_url: "https://azseller.s3.amazonaws.com/5fde132ca9cc36749c65b7c4/items/059d6c1e-46d6-458c-9758-a74d92c83875/1200/4a64c66d-60d4-438d-a0ee-80aee50da42f.png",
    cantidad_caja: 24,
  },
  {
    id: 6,
    nombre: "Casillero del Diablo Cabernet",
    categoria: "Vino",
    presentaciones: ["0.75L"],
    imagen_url: "https://conchaytoro.com/wp-content/uploads/2018/07/PW_CD_R-Cabernet-Sauvignon.webp",
    cantidad_caja: 12,
  },
  {
    id: 7,
    nombre: "Bombay Sapphire",
    categoria: "Gin",
    presentaciones: ["0.70L", "1L"],
    imagen_url: "https://img.thewhiskyexchange.com/900/gin_bom1.jpg",
    cantidad_caja: 12,
  },
  {
    id: 8,
    nombre: "Jack Daniel's Old No. 7",
    categoria: "Whisky",
    presentaciones: ["0.70L", "1L", "1.75L"],
    imagen_url: "https://media.ohlq.com/products/0066B.webp",
    cantidad_caja: 12,
  },
  {
    id: 9,
    nombre: "Bacardí Superior",
    categoria: "Ron",
    presentaciones: ["0.70L", "1L"],
    imagen_url: "https://img.thewhiskyexchange.com/900/rum_bac1.jpg",
    cantidad_caja: 12,
  },
  {
    id: 10,
    nombre: "Grey Goose Original",
    categoria: "Vodka",
    presentaciones: ["0.70L", "1L", "1.75L", "3L"],
    imagen_url: "https://img.thewhiskyexchange.com/900/vodka_gre1.jpg",
    cantidad_caja: 6,
  },
];
