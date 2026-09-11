export interface Product {
  id: number;
  nombre: string;
  categoria: string;
  presentaciones: string[];
  imagenUrl: string;
  cantidad_caja: number | number[];
  requiresBlend?: boolean;
}

export const categories = [
  "Todos",
  "Aguardientes",
  "Anís",
  "Cocuy",
  "Comestibles",
  "Cremas",
  "Energizantes",
  "Espumantes",
  "Ginebras",
  "Licores Dulces",
  "Licores de Brandy",
  "Licores de Ron",
  "Mezcladores",
  "Sangrías",
  "Tequilas y Licores de Agave",
  "Vinos",
  "Vodkas y Otros",
  "Whisky"
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    "id": 1,
    "nombre": "029 BLANCO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/1.webp"
  },
  {
    "id": 2,
    "nombre": "ANTIOQUEÑO ANISADO / SIN AZUCAR",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/2.webp"
  },
  {
    "id": 3,
    "nombre": "ANTIOQUEÑO PREMIUM",
    "categoria": "Aguardientes",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/3.webp"
  },
  {
    "id": 4,
    "nombre": "CALICANTO 30°",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/4 - Calicanto 30°.webp"
  },
  {
    "id": 5,
    "nombre": "DON TICO ANISADO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.35L.",
      "1.20L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12,
      12
    ],
    "imagenUrl": "/images/productos/5.webp"
  },
  {
    "id": 6,
    "nombre": "DON TICO ESPECIAL",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/6.webp"
  },
  {
    "id": 7,
    "nombre": "EL CHAMA",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.35L.",
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": [
      40,
      24,
      12,
      12
    ],
    "imagenUrl": "/images/productos/7.webp"
  },
  {
    "id": 8,
    "nombre": "EL RECORD BLANCO / ROJO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/8 - El Record Blanco  Rojo.webp"
  },
  {
    "id": 9,
    "nombre": "LA PLATERA",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.35L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/9.webp"
  },
  {
    "id": 172,
    "nombre": "PLATERA ESPECIAL",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/plateraa.png"
  },
  {
    "id": 10,
    "nombre": "NEVADO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.35L.",
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12,
      12
    ],
    "imagenUrl": "/images/productos/10.webp"
  },
  {
    "id": 11,
    "nombre": "SAN TROPEZ 40°",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/11.webp"
  },
  {
    "id": 12,
    "nombre": "TAWALA 32° ANISADO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/12.webp"
  },
  {
    "id": 13,
    "nombre": "ANIS BANDERA",
    "categoria": "Anís",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/13.webp"
  },
  {
    "id": 14,
    "nombre": "CARTELUO AZUL",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/14 - Carteluo Azul.webp"
  },
  {
    "id": 15,
    "nombre": "CARTUJO",
    "categoria": "Anís",
    "presentaciones": [
      "0.35L.",
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12,
      12
    ],
    "imagenUrl": "/images/productos/15.webp"
  },
  {
    "id": 16,
    "nombre": "ELECTRICO BLUE / YELLOW",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/16.webp"
  },
  {
    "id": 17,
    "nombre": "RUMBERO NATURAL / AZUL",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/17 - Rumbero Natural  Azul.webp"
  },
  {
    "id": 18,
    "nombre": "SIN RODEO",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/18.webp"
  },
  {
    "id": 19,
    "nombre": "DON ELIAS COCUY DE PENCA REPOSADO",
    "categoria": "Cocuy",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/19.webp"
  },
  {
    "id": 20,
    "nombre": "DON ELIAS COCUY DE PENCA BLANCO",
    "categoria": "Cocuy",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/20.webp"
  },
  {
    "id": 21,
    "nombre": "EL JIRAJARA",
    "categoria": "Cocuy",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/21.webp"
  },
  {
    "id": 170,
    "nombre": "CHOCOLATE SUN",
    "categoria": "Comestibles",
    "presentaciones": [
      "Varios"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/sun.png"
  },
  {
    "id": 171,
    "nombre": "ACEITE DE COCO KALDINI",
    "categoria": "Comestibles",
    "presentaciones": [
      "0.50L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Kaldini.png"
  },
  {
    "id": 22,
    "nombre": "CREMA DE RON BARRICA",
    "categoria": "Cremas",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/22 - Crema de Ron Barrica.webp"
  },
  {
    "id": 23,
    "nombre": "CREMA BAILEYS IRISH",
    "categoria": "Cremas",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/23.webp"
  },
  {
    "id": 24,
    "nombre": "CREMA DE AMARULA",
    "categoria": "Cremas",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/amarula.png"
  },
  {
    "id": 25,
    "nombre": "ELIODORO GONZALEZ",
    "categoria": "Cremas",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/25.webp"
  },
  {
    "id": 26,
    "nombre": "PONCHE CREMA DON CHUCHO",
    "categoria": "Cremas",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/26.webp"
  },
  {
    "id": 27,
    "nombre": "PONCHE CREMA NATAL",
    "categoria": "Cremas",
    "presentaciones": [
      "0.7L"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/27 - Ponche Crema Natal.webp"
  },
  {
    "id": 28,
    "nombre": "PONCHE DON JOSE",
    "categoria": "Cremas",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/28.webp"
  },
  {
    "id": 29,
    "nombre": "GATORADE MANDARINA / MORA / FRUTAS",
    "categoria": "Energizantes",
    "presentaciones": [
      "500 ML."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/29.webp"
  },
  {
    "id": 30,
    "nombre": "RED BULL",
    "categoria": "Energizantes",
    "presentaciones": [
      "250ML"
    ],
    "cantidad_caja": 24,
    "imagenUrl": "/images/productos/30.webp"
  },
  {
    "id": 31,
    "nombre": "ALEXANDER DEMI-SEC",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/31.webp"
  },
  {
    "id": 32,
    "nombre": "LA ESPAÑOLA MANZANA",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/32.webp"
  },
  {
    "id": 33,
    "nombre": "VINO LA MADRILEÑA BLANCO / ROSADO / TINTO",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/33.webp"
  },
  {
    "id": 34,
    "nombre": "VINO TENTACION MANZANA",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/34.webp"
  },
  {
    "id": 159,
    "nombre": "ESPUMANTE DUC DE PARIS",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/paris.png"
  },
  {
    "id": 35,
    "nombre": "BAJO 0",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/35.webp"
  },
  {
    "id": 36,
    "nombre": "GORDON'S",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/36.webp"
  },
  {
    "id": 37,
    "nombre": "OLD TOM",
    "categoria": "Ginebras",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/37.webp"
  },
  {
    "id": 38,
    "nombre": "TANQUERAY",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/38.webp"
  },
  {
    "id": 39,
    "nombre": "WELLINGTON",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/39.webp"
  },
  {
    "id": 40,
    "nombre": "ARANSHE LICOR",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/40.webp"
  },
  {
    "id": 41,
    "nombre": "CANELA RAMILLETE",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.35L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/41.webp"
  },
  {
    "id": 42,
    "nombre": "FRANGELICO",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/42.webp"
  },
  {
    "id": 43,
    "nombre": "KAHLUA",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/43.webp"
  },
  {
    "id": 158,
    "nombre": "COCONIS",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/coconis.png"
  },
  {
    "id": 161,
    "nombre": "TOSCANA TRIPLE SEC",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/toscana.png"
  },
  {
    "id": 174,
    "nombre": "TOSCANA SAMBUCA",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/sambuca.png"
  },
  {
    "id": 175,
    "nombre": "TOSCANA LIMÓNCELLO",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/limoncello.png"
  },
  {
    "id": 176,
    "nombre": "TOSCANA AMARETTO",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Amaretto.png"
  },
  {
    "id": 162,
    "nombre": "COINTREAU",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/cointreau.png"
  },
  {
    "id": 163,
    "nombre": "GARLIN",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "Licor de Café",
      "Licor de Cacao"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Garlin.png"
  },
  {
    "id": 165,
    "nombre": "CAMPARI",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Campari.png"
  },
  {
    "id": 166,
    "nombre": "APEROL",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Aperol.png"
  },
  {
    "id": 45,
    "nombre": "CAVA",
    "categoria": "Licores de Brandy",
    "presentaciones": [
      "0.35L.",
      "0.70L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/45.webp"
  },
  {
    "id": 46,
    "nombre": "CHEMINEAUD",
    "categoria": "Licores de Brandy",
    "presentaciones": [
      "0.35L.",
      "0.70L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/46.webp"
  },
  {
    "id": 47,
    "nombre": "DON DIEGO",
    "categoria": "Licores de Brandy",
    "presentaciones": [
      "0.35L.",
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12,
      12
    ],
    "imagenUrl": "/images/productos/47.webp"
  },
  {
    "id": 155,
    "nombre": "LABRADOR",
    "categoria": "Licores de Brandy",
    "presentaciones": [
      "1L.",
      "0.70L.",
      "0.35L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/labrador.png"
  },
  {
    "id": 48,
    "nombre": "029",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/48.webp"
  },
  {
    "id": 49,
    "nombre": "CARTA ROJA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/49.webp"
  },
  {
    "id": 50,
    "nombre": "CHAPARON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1.20L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Chaparon.png"
  },
  {
    "id": 51,
    "nombre": "CINCO ESTRELLAS",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.35L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/51.webp"
  },
  {
    "id": 52,
    "nombre": "CINCO ESTRELLAS BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/52.webp"
  },
  {
    "id": 53,
    "nombre": "DRAGON B.E.S.",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1LITRO"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/53.webp"
  },
  {
    "id": 54,
    "nombre": "EL CANTOR",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/54.webp"
  },
  {
    "id": 55,
    "nombre": "EL RUMBERO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/55.webp"
  },
  {
    "id": 56,
    "nombre": "ERRE-P",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/56.webp"
  },
  {
    "id": 57,
    "nombre": "ESTELAR ESCUDO DORADO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/57.webp"
  },
  {
    "id": 58,
    "nombre": "MACONDO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.35L."
    ],
    "cantidad_caja": 24,
    "imagenUrl": "/images/productos/58.webp"
  },
  {
    "id": 59,
    "nombre": "MAGISTRAL",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/59.webp"
  },
  {
    "id": 60,
    "nombre": "PANA RON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/60.webp"
  },
  {
    "id": 62,
    "nombre": "PIKARON LICOR DE RON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.35L",
      "1L.",
      "1.75L."
    ],
    "cantidad_caja": [
      12,
      6
    ],
    "imagenUrl": "/images/productos/62.webp"
  },
  {
    "id": 63,
    "nombre": "POPEYE",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/63 - Popeye.webp"
  },
  {
    "id": 64,
    "nombre": "ROMANO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.35L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12,
      48
    ],
    "imagenUrl": "/images/productos/64.webp"
  },
  {
    "id": 65,
    "nombre": "RONALDO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/65.webp"
  },
  {
    "id": 66,
    "nombre": "RONQUITO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.35L.",
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12,
      12
    ],
    "imagenUrl": "/images/productos/66.webp"
  },
  {
    "id": 67,
    "nombre": "RUMBARON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/67.webp"
  },
  {
    "id": 68,
    "nombre": "SAN BENITO BEBIDA ESPIRITUOSA SECA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/68.webp"
  },
  {
    "id": 69,
    "nombre": "SUPERIOR",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/69.webp"
  },
  {
    "id": 70,
    "nombre": "TAMANACO DORADO / BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/70.webp"
  },
  {
    "id": 71,
    "nombre": "TAWALA DORADO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/71.webp"
  },
  {
    "id": 72,
    "nombre": "ZATIRO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/72.webp"
  },
  {
    "id": 91,
    "nombre": "RON BARRICA 40",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/91.webp"
  },
  {
    "id": 92,
    "nombre": "RON BARRICA 80",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/92.webp"
  },
  {
    "id": 93,
    "nombre": "RON CACIQUE",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/93.webp"
  },
  {
    "id": 94,
    "nombre": "RON CACIQUE 500 AÑOS",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/94.webp"
  },
  {
    "id": 95,
    "nombre": "RON CALAZAN ESPECIAL 2 AÑOS",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/95.webp"
  },
  {
    "id": 96,
    "nombre": "RON CALAZAN ESPECIAL BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/96 - Ron Calazan Especial Blanco.webp"
  },
  {
    "id": 97,
    "nombre": "RON GRAN RESERVA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": [
      6,
      9
    ],
    "imagenUrl": "/images/productos/97.webp"
  },
  {
    "id": 98,
    "nombre": "RON PAMPERO ESPECIAL",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/98.webp"
  },
  {
    "id": 99,
    "nombre": "RON PAMPERO SELECCION 1938",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/99.webp"
  },
  {
    "id": 100,
    "nombre": "RON ROBLE VIEJO MAESTRO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/100.webp"
  },
  {
    "id": 101,
    "nombre": "RON SANTA TERESA 1796 SOLERA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/101.webp"
  },
  {
    "id": 102,
    "nombre": "RON SANTA TERESA BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/102.webp"
  },
  {
    "id": 103,
    "nombre": "RON SANTA TERESA LINAJE",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/103.webp"
  },
  {
    "id": 169,
    "nombre": "RON TEPUY MONUMENTO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/Tepuy.png"
  },
  {
    "id": 173,
    "nombre": "RON TEPUY DESTINO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/destino.png"
  },
  {
    "id": 73,
    "nombre": "9° SODA TORONJA / GINGER / AGUAKINA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 24,
    "imagenUrl": "/images/productos/73.webp"
  },
  {
    "id": 74,
    "nombre": "GRANADINA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "350ML",
      "0.70L."
    ],
    "cantidad_caja": [
      1,
      12
    ],
    "imagenUrl": "/images/productos/74.webp"
  },
  {
    "id": 75,
    "nombre": "JARABE DE FRESA / GOMA / FRAMBUESA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/75.webp"
  },
  {
    "id": 76,
    "nombre": "NAIGUATA COCO / COCO Y PIÑA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/76 - Naiguata Coco  Coco Y Piña.webp"
  },
  {
    "id": 104,
    "nombre": "CAROREÑA TINTA / BLANCA / ROSADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/104.webp"
  },
  {
    "id": 105,
    "nombre": "CARIBEÑA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/105.webp"
  },
  {
    "id": 106,
    "nombre": "CAROREÑA VERANO LATA TINTA / BLANCA",
    "categoria": "Sangrías",
    "presentaciones": [
      "250ML."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/106.webp"
  },
  {
    "id": 108,
    "nombre": "LA DIOSA TINTA / DORADA 11°",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/108.webp"
  },
  {
    "id": 110,
    "nombre": "LA MAL CRIADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/110.webp"
  },
  {
    "id": 111,
    "nombre": "LA QUE MANDA TINTA / ROSADA / BLANCA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/111.webp"
  },
  {
    "id": 112,
    "nombre": "LA TOXICA MANZANA / TINTA ROSADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/112.webp"
  },
  {
    "id": 113,
    "nombre": "LA TOXICA TINTA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/113.webp"
  },
  {
    "id": 114,
    "nombre": "MADRILEÑA",
    "categoria": "Sangrías",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/114.webp"
  },
  {
    "id": 115,
    "nombre": "MAL PORTADA TINTA / BLANCA / ROSADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/115.webp"
  },
  {
    "id": 116,
    "nombre": "MONUMENTAL",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L.",
      "1.75L PROMO 4 CAJAS"
    ],
    "cantidad_caja": [
      6,
      24
    ],
    "imagenUrl": "/images/productos/116.webp"
  },
  {
    "id": 117,
    "nombre": "EL JIMADOR REPOSADO",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "0.75L PROMOCION"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/117.webp"
  },
  {
    "id": 118,
    "nombre": "CHIAPAS",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/118.webp"
  },
  {
    "id": 119,
    "nombre": "HERENCIA DE PLATA BLANCO",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/119.webp"
  },
  {
    "id": 120,
    "nombre": "TEQUILA CUATE",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/120.webp"
  },
  {
    "id": 121,
    "nombre": "TEQUILA KAH",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/121.webp"
  },
  {
    "id": 122,
    "nombre": "LICOR DE AGAVE DEL NORTE",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/122 - Licor de Agave del Norte.webp"
  },
  {
    "id": 123,
    "nombre": "VINO DULCE KOSHER CALIFORNIANO",
    "categoria": "Vinos",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/123.webp"
  },
  {
    "id": 124,
    "nombre": "VINO BARROCO",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/124.webp"
  },
  {
    "id": 125,
    "nombre": "VINO GRAN SANSON",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/125.webp"
  },
  {
    "id": 126,
    "nombre": "VINO LA SAGRADA CENA TINTO / BLANCO",
    "categoria": "Vinos",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/126.webp"
  },
  {
    "id": 127,
    "nombre": "VINO LA SAGRADA FAMILIA TINTO BLANCO",
    "categoria": "Vinos",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/127.webp"
  },
  {
    "id": 128,
    "nombre": "VINO LA VINOTINTO ESPAÑOL",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/128.webp"
  },
  {
    "id": 129,
    "nombre": "VINO TALAMANCA",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/talamanca.png"
  },
  {
    "id": 130,
    "nombre": "VINO NUESTRA PASION",
    "categoria": "Vinos",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/130 - Vino Nuestra Pasion.webp"
  },
  {
    "id": 131,
    "nombre": "VINO DILEMA C/S. / MALBEC / CHARDONNAY",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/131.webp"
  },
  {
    "id": 156,
    "nombre": "VINO ROMEO",
    "categoria": "Vinos",
    "presentaciones": [
      "Garnacha",
      "Monastrel",
      "Tempranillo"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/romeo.png"
  },
  {
    "id": 157,
    "nombre": "VINO TINI SANGIOVESSE",
    "categoria": "Vinos",
    "presentaciones": [
      "Chardonay"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/tini.png"
  },
  {
    "id": 160,
    "nombre": "VINO LICENSIOSO",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/licensioso.png"
  },
  {
    "id": 164,
    "nombre": "CINZANO",
    "categoria": "Vinos",
    "presentaciones": [
      "Bianco 1L.",
      "Rossi 1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Cinzano.png"
  },
  {
    "id": 132,
    "nombre": "ABSOLUT",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/132.webp"
  },
  {
    "id": 133,
    "nombre": "BAJO O NATURAL",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/133 - Bajo O Natural.webp"
  },
  {
    "id": 134,
    "nombre": "BAJO 0: COCO / MANZANA / GUARANA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/134.webp"
  },
  {
    "id": 135,
    "nombre": "BAJO 0: FRUTAS SALVAJES / MARACUYA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/135.webp"
  },
  {
    "id": 136,
    "nombre": "FINLANDIA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/136.webp"
  },
  {
    "id": 137,
    "nombre": "GORDON'S: NATURAL / UVA / LIMON / CRANBERRY / PARCHI",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/137.webp"
  },
  {
    "id": 138,
    "nombre": "RELATIVE",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/138.webp"
  },
  {
    "id": 139,
    "nombre": "SONNEMA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/139.webp"
  },
  {
    "id": 140,
    "nombre": "WIMBLEDON",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/140.webp"
  },
  {
    "id": 77,
    "nombre": "COUNTRY CLUB LICOR",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/77.webp"
  },
  {
    "id": 78,
    "nombre": "12 CABALLEROS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/78.webp"
  },
  {
    "id": 79,
    "nombre": "DUNBAR",
    "categoria": "Whisky",
    "presentaciones": [
      "0.7L"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/79.webp"
  },
  {
    "id": 80,
    "nombre": "ELITE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/80.webp"
  },
  {
    "id": 81,
    "nombre": "GOLD MEMBER",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/81.webp"
  },
  {
    "id": 82,
    "nombre": "GRAN LORD",
    "categoria": "Whisky",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/82.webp"
  },
  {
    "id": 83,
    "nombre": "HIGHCLASS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/83.webp"
  },
  {
    "id": 84,
    "nombre": "HUNTER",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/84.webp"
  },
  {
    "id": 85,
    "nombre": "JHON MASTER",
    "categoria": "Whisky",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/85.webp"
  },
  {
    "id": 86,
    "nombre": "MANAGERS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L.",
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/86.webp"
  },
  {
    "id": 87,
    "nombre": "OLD 63",
    "categoria": "Whisky",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/87.webp"
  },
  {
    "id": 88,
    "nombre": "OLD LABEL",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/88.webp"
  },
  {
    "id": 89,
    "nombre": "OLD TRAFFORD",
    "categoria": "Whisky",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/89.webp"
  },
  {
    "id": 90,
    "nombre": "ROYAL CLUB",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/90.webp"
  },
  {
    "id": 141,
    "nombre": "WHISKY BLACK LABEL",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/141.webp"
  },
  {
    "id": 142,
    "nombre": "WHISKY BLACK & WHITE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L.",
      "1L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/142.webp"
  },
  {
    "id": 143,
    "nombre": "WHISKY BUCHANAN'S 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/143.webp"
  },
  {
    "id": 144,
    "nombre": "WHISKY BUCHANAN'S 18 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/144.webp"
  },
  {
    "id": 145,
    "nombre": "WHISKY CATTOS",
    "categoria": "Whisky",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/145.webp"
  },
  {
    "id": 146,
    "nombre": "WHISKY CHIVAS REGAL 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/146.webp"
  },
  {
    "id": 147,
    "nombre": "WHISKY DEWAR'S 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/147.webp"
  },
  {
    "id": 148,
    "nombre": "WHISKY GOLDEN GLEN",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 2,
    "imagenUrl": "/images/productos/148.webp"
  },
  {
    "id": 149,
    "nombre": "WHISKY GRANTS TRIPLE WOOD",
    "categoria": "Whisky",
    "presentaciones": [
      "8 AÑOS",
      "12 AÑOS"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/149.webp"
  },
  {
    "id": 150,
    "nombre": "WHISKY OLD PARR 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/150.webp"
  },
  {
    "id": 151,
    "nombre": "WHISKY OLD PARR SILVER",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/151.webp"
  },
  {
    "id": 153,
    "nombre": "WHISKY THE FAMOUS GROUSE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/153.webp"
  },
  {
    "id": 154,
    "nombre": "WHISKY WILLIAM LAWSON'S",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 2,
    "imagenUrl": "/images/productos/154.webp"
  },
  {
    "id": 167,
    "nombre": "WHISKY MACALLAN 12 AÑOS TRIPLE CASK",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/MacAllan.png"
  },
  {
    "id": 168,
    "nombre": "WHISKY GOLD LABEL RESERVE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/gold.png"
  }
];
