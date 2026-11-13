export interface ProductVariant {
  presentacion: string;
  cantidad_caja: number;
  precio_unidad?: number;
  precio_caja?: number;
}

export interface Product {
  id: number;
  nombre: string;
  categoria: string;
  presentaciones: string[];
  imagenUrl: string;
  cantidad_caja: number | number[];
  precio_unidad?: number | number[];
  precio_caja?: number | number[];
  variantes?: ProductVariant[];
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
    "imagenUrl": "/images/productos/1.webp",
    "precio_unidad": 2.61,
    "precio_caja": 31.32,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.61,
        "precio_caja": 31.32
      }
    ]
  },
  {
    "id": 2,
    "nombre": "ANTIOQUEÑO ANISADO / SIN AZUCAR",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/2.webp",
    "precio_unidad": 4.9,
    "precio_caja": 58.8,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.9,
        "precio_caja": 58.8
      }
    ]
  },
  {
    "id": 3,
    "nombre": "ANTIOQUEÑO PREMIUM",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/3.webp",
    "precio_unidad": 9.98,
    "precio_caja": 59.88,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 9.98,
        "precio_caja": 59.88
      }
    ]
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
    "imagenUrl": "/images/productos/4 - Calicanto 30°.webp",
    "precio_unidad": [
      2.49,
      3.85
    ],
    "precio_caja": [
      29.88,
      46.2
    ],
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.49,
        "precio_caja": 29.88
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.85,
        "precio_caja": 46.2
      }
    ]
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
    "imagenUrl": "/images/productos/5.webp",
    "precio_unidad": [
      1.26,
      2.92,
      2.52
    ],
    "precio_caja": [
      30.24,
      35.04,
      30.24
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 1.26,
        "precio_caja": 30.24
      },
      {
        "presentacion": "1.20L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.92,
        "precio_caja": 35.04
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.52,
        "precio_caja": 30.24
      }
    ]
  },
  {
    "id": 6,
    "nombre": "DON TICO ESPECIAL",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/6.webp",
    "precio_unidad": 4.16,
    "precio_caja": 49.92,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.16,
        "precio_caja": 49.92
      }
    ]
  },
  {
    "id": 7,
    "nombre": "EL CHAMA",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.35L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/7.webp",
    "precio_unidad": [
      2.45,
      4.55
    ],
    "precio_caja": [
      58.8,
      54.6
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.45,
        "precio_caja": 58.8
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.55,
        "precio_caja": 54.6
      }
    ]
  },
  {
    "id": 8,
    "nombre": "EL RECORD BLANCO / ROJO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/8 - El Record Blanco  Rojo.webp",
    "precio_unidad": 2.52,
    "precio_caja": 30.24,
    "variantes": [
      {
        "presentacion": "1L",
        "cantidad_caja": 12,
        "precio_unidad": 2.52,
        "precio_caja": 30.24
      }
    ]
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
    "imagenUrl": "/images/productos/9.webp",
    "precio_unidad": [
      2.72,
      4.36
    ],
    "precio_caja": [
      65.28,
      52.32
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.72,
        "precio_caja": 65.28
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.36,
        "precio_caja": 52.32
      }
    ]
  },
  {
    "id": 172,
    "nombre": "PLATERA ESPECIAL",
    "categoria": "Aguardientes",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/plateraa.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12
      }
    ]
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
    "imagenUrl": "/images/productos/10.webp",
    "precio_unidad": [
      1.9,
      2.78,
      3.95
    ],
    "precio_caja": [
      45.6,
      33.36,
      47.4
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 1.9,
        "precio_caja": 45.6
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.78,
        "precio_caja": 33.36
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.95,
        "precio_caja": 47.4
      }
    ]
  },
  {
    "id": 11,
    "nombre": "SAN TROPEZ 40°",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/11.webp",
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12
      }
    ]
  },
  {
    "id": 12,
    "nombre": "TAWALA 32° ANISADO",
    "categoria": "Aguardientes",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/12.webp",
    "precio_unidad": 2.62,
    "precio_caja": 31.44,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.62,
        "precio_caja": 31.44
      }
    ]
  },
  {
    "id": 13,
    "nombre": "ANIS BANDERA",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/13.webp",
    "precio_unidad": 5.16,
    "precio_caja": 61.92,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.16,
        "precio_caja": 61.92
      }
    ]
  },
  {
    "id": 14,
    "nombre": "CARTELUO AZUL",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/14 - Carteluo Azul.webp",
    "precio_unidad": 4.55,
    "precio_caja": 54.6,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.55,
        "precio_caja": 54.6
      }
    ]
  },
  {
    "id": 15,
    "nombre": "CARTUJO",
    "categoria": "Anís",
    "presentaciones": [
      "0.35L.",
      "1L."
    ],
    "cantidad_caja": [
      24,
      12
    ],
    "imagenUrl": "/images/productos/15.webp",
    "precio_unidad": [
      2.92,
      5.83
    ],
    "precio_caja": [
      70.08,
      69.96
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.92,
        "precio_caja": 70.08
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.83,
        "precio_caja": 69.96
      }
    ]
  },
  {
    "id": 16,
    "nombre": "ELECTRICO BLUE / YELLOW",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/16.webp",
    "precio_unidad": 4.22,
    "precio_caja": 50.64,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.22,
        "precio_caja": 50.64
      }
    ]
  },
  {
    "id": 17,
    "nombre": "RUMBERO NATURAL / AZUL",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/17 - Rumbero Natural  Azul.webp",
    "precio_unidad": 4.16,
    "precio_caja": 49.92,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.16,
        "precio_caja": 49.92
      }
    ]
  },
  {
    "id": 18,
    "nombre": "SIN RODEO",
    "categoria": "Anís",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/18.webp",
    "precio_unidad": 3.91,
    "precio_caja": 46.92,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.91,
        "precio_caja": 46.92
      }
    ]
  },
  {
    "id": 19,
    "nombre": "DON ELIAS COCUY DE PENCA REPOSADO",
    "categoria": "Cocuy",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/19.webp",
    "precio_unidad": 2.39,
    "precio_caja": 28.68,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.39,
        "precio_caja": 28.68
      }
    ]
  },
  {
    "id": 20,
    "nombre": "DON ELIAS COCUY DE PENCA BLANCO",
    "categoria": "Cocuy",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/20.webp",
    "precio_unidad": 2.39,
    "precio_caja": 28.68,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.39,
        "precio_caja": 28.68
      }
    ]
  },
  {
    "id": 21,
    "nombre": "EL JIRAJARA",
    "categoria": "Cocuy",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/21.webp",
    "precio_unidad": 3.1,
    "precio_caja": 37.2,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.1,
        "precio_caja": 37.2
      }
    ]
  },
  {
    "id": 170,
    "nombre": "CHOCOLATE SUN",
    "categoria": "Comestibles",
    "presentaciones": [
      "Varios"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/sun.png",
    "precio_unidad": 5.1,
    "precio_caja": 30.6,
    "variantes": [
      {
        "presentacion": "Varios",
        "cantidad_caja": 6,
        "precio_unidad": 5.1,
        "precio_caja": 30.6
      }
    ]
  },
  {
    "id": 171,
    "nombre": "ACEITE DE COCO KALDINI",
    "categoria": "Comestibles",
    "presentaciones": [
      "0.50L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Kaldini.png",
    "variantes": [
      {
        "presentacion": "0.50L.",
        "cantidad_caja": 12,
        "precio_unidad": 10.5,
        "precio_caja": 126
      }
    ],
    "precio_unidad": 10.5,
    "precio_caja": 126
  },
  {
    "id": 177,
    "nombre": "AGUA BIENESTAR",
    "categoria": "Comestibles",
    "presentaciones": [
      "330ML",
      "600ML"
    ],
    "cantidad_caja": [
      16,
      16
    ],
    "imagenUrl": "/images/productos/bienestar.png",
    "precio_unidad": [
      0.53,
      0.68
    ],
    "precio_caja": [
      8.48,
      10.88
    ],
    "variantes": [
      {
        "presentacion": "330ML",
        "cantidad_caja": 16,
        "precio_unidad": 0.53,
        "precio_caja": 8.48
      },
      {
        "presentacion": "600ML",
        "cantidad_caja": 16,
        "precio_unidad": 0.68,
        "precio_caja": 10.88
      }
    ]
  },
  {
    "id": 22,
    "nombre": "CREMA DE RON BARRICA",
    "categoria": "Cremas",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/22 - Crema de Ron Barrica.webp",
    "precio_unidad": 13.9,
    "precio_caja": 13.9,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 1,
        "precio_unidad": 13.9,
        "precio_caja": 13.9
      }
    ]
  },
  {
    "id": 23,
    "nombre": "CREMA BAILEYS IRISH",
    "categoria": "Cremas",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/23.webp",
    "precio_unidad": 40.6,
    "precio_caja": 40.6,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 40.6,
        "precio_caja": 40.6
      }
    ]
  },
  {
    "id": 24,
    "nombre": "CREMA DE AMARULA",
    "categoria": "Cremas",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/amarula.png",
    "precio_unidad": 26.5,
    "precio_caja": 26.5,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 26.5,
        "precio_caja": 26.5
      }
    ]
  },
  {
    "id": 25,
    "nombre": "ELIODORO GONZALEZ",
    "categoria": "Cremas",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/25.webp",
    "precio_unidad": 15.8,
    "precio_caja": 189.6,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 15.8,
        "precio_caja": 189.6
      }
    ]
  },
  {
    "id": 26,
    "nombre": "PONCHE CREMA DON CHUCHO",
    "categoria": "Cremas",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/26.webp",
    "precio_unidad": 13.9,
    "precio_caja": 166.8,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 13.9,
        "precio_caja": 166.8
      }
    ]
  },
  {
    "id": 27,
    "nombre": "PONCHE CREMA NATAL",
    "categoria": "Cremas",
    "presentaciones": [
      "0.7L"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/27 - Ponche Crema Natal.webp",
    "precio_unidad": 13.1,
    "precio_caja": 78.6,
    "variantes": [
      {
        "presentacion": "0.7L",
        "cantidad_caja": 6,
        "precio_unidad": 13.1,
        "precio_caja": 78.6
      }
    ]
  },
  {
    "id": 29,
    "nombre": "GATORADE MANDARINA / MORA / FRUTAS",
    "categoria": "Energizantes",
    "presentaciones": [
      "500 ML."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/29.webp",
    "precio_unidad": 2.18,
    "precio_caja": 13.08,
    "variantes": [
      {
        "presentacion": "500 ML.",
        "cantidad_caja": 6,
        "precio_unidad": 2.18,
        "precio_caja": 13.08
      }
    ]
  },
  {
    "id": 30,
    "nombre": "RED BULL",
    "categoria": "Energizantes",
    "presentaciones": [
      "250ML"
    ],
    "cantidad_caja": 24,
    "imagenUrl": "/images/productos/30.webp",
    "variantes": [
      {
        "presentacion": "250ML",
        "cantidad_caja": 24,
        "precio_unidad": 4.7,
        "precio_caja": 112.8
      }
    ],
    "precio_unidad": 4.7,
    "precio_caja": 112.8
  },
  {
    "id": 31,
    "nombre": "ALEXANDER DEMI-SEC",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/31.webp",
    "precio_unidad": 8.75,
    "precio_caja": 105,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 8.75,
        "precio_caja": 105
      }
    ]
  },
  {
    "id": 32,
    "nombre": "LA ESPAÑOLA MANZANA",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/32.webp",
    "precio_unidad": 8,
    "precio_caja": 96,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 8,
        "precio_caja": 96
      }
    ]
  },
  {
    "id": 33,
    "nombre": "VINO LA MADRILEÑA BLANCO / ROSADO / TINTO",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/33.webp",
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.25,
        "precio_caja": 51
      }
    ],
    "precio_unidad": 4.25,
    "precio_caja": 51
  },
  {
    "id": 34,
    "nombre": "VINO TENTACION MANZANA",
    "categoria": "Espumantes",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/34.webp",
    "precio_unidad": 6.62,
    "precio_caja": 79.44,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 6.62,
        "precio_caja": 79.44
      }
    ]
  },
  {
    "id": 35,
    "nombre": "BAJO 0",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/35.webp",
    "precio_unidad": 8.1,
    "precio_caja": 97.2,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 8.1,
        "precio_caja": 97.2
      }
    ]
  },
  {
    "id": 36,
    "nombre": "GORDON'S",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/36.webp",
    "precio_unidad": 10.98,
    "precio_caja": 131.76,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 10.98,
        "precio_caja": 131.76
      }
    ]
  },
  {
    "id": 37,
    "nombre": "OLD TOM",
    "categoria": "Ginebras",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/37.webp",
    "precio_unidad": 12.9,
    "precio_caja": 154.8,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 12.9,
        "precio_caja": 154.8
      }
    ]
  },
  {
    "id": 38,
    "nombre": "TANQUERAY",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/38.webp",
    "precio_unidad": 33.69,
    "precio_caja": 33.69,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 33.69,
        "precio_caja": 33.69
      }
    ]
  },
  {
    "id": 39,
    "nombre": "WELLINGTON",
    "categoria": "Ginebras",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/39.webp",
    "precio_unidad": 9.9,
    "precio_caja": 9.9,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 1,
        "precio_unidad": 9.9,
        "precio_caja": 9.9
      }
    ]
  },
  {
    "id": 40,
    "nombre": "ARANSHE LICOR",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/40.webp",
    "precio_unidad": 7.2,
    "precio_caja": 43.2,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 7.2,
        "precio_caja": 43.2
      }
    ]
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
    "imagenUrl": "/images/productos/41.webp",
    "precio_unidad": [
      2.89,
      5.8
    ],
    "precio_caja": [
      69.36,
      69.6
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.89,
        "precio_caja": 69.36
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.8,
        "precio_caja": 69.6
      }
    ]
  },
  {
    "id": 42,
    "nombre": "FRANGELICO",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/42.webp",
    "precio_unidad": 43,
    "precio_caja": 43,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 1,
        "precio_unidad": 43,
        "precio_caja": 43
      }
    ]
  },
  {
    "id": 43,
    "nombre": "KAHLUA",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/43.webp",
    "precio_unidad": 18,
    "precio_caja": 18,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 18,
        "precio_caja": 18
      }
    ]
  },
  {
    "id": 158,
    "nombre": "COCONIS",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/coconis.png",
    "precio_unidad": 4.99,
    "precio_caja": 29.94,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 4.99,
        "precio_caja": 29.94
      }
    ]
  },
  {
    "id": 161,
    "nombre": "TOSCANA TRIPLE SEC",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/toscana.png",
    "precio_unidad": 9,
    "precio_caja": 54,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 9,
        "precio_caja": 54
      }
    ]
  },
  {
    "id": 174,
    "nombre": "TOSCANA SAMBUCA",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/sambuca.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 9.65,
        "precio_caja": 115.8
      }
    ],
    "precio_unidad": 9.65,
    "precio_caja": 115.8
  },
  {
    "id": 175,
    "nombre": "TOSCANA LIMÓNCELLO",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/limoncello.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 9.6,
        "precio_caja": 115.2
      }
    ],
    "precio_unidad": 9.6,
    "precio_caja": 115.2
  },
  {
    "id": 176,
    "nombre": "TOSCANA AMARETTO",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Amaretto.png",
    "precio_unidad": 9.55,
    "precio_caja": 57.3,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 9.55,
        "precio_caja": 57.3
      }
    ]
  },
  {
    "id": 162,
    "nombre": "COINTREAU",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/cointreau.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 34,
        "precio_caja": 408
      }
    ],
    "precio_unidad": 34,
    "precio_caja": 408
  },
  {
    "id": 163,
    "nombre": "CARLIN",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "Licor de Café",
      "Licor de Cacao"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Garlin.png",
    "variantes": [
      {
        "presentacion": "Licor de Café",
        "cantidad_caja": 12,
        "precio_unidad": 4.55,
        "precio_caja": 54.6
      },
      {
        "presentacion": "Licor de Cacao",
        "cantidad_caja": 12,
        "precio_unidad": 6.55,
        "precio_caja": 78.6
      }
    ],
    "precio_unidad": [
      4.55,
      6.55
    ],
    "precio_caja": [
      54.6,
      78.6
    ]
  },
  {
    "id": 165,
    "nombre": "CAMPARI",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Campari.png",
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 31,
        "precio_caja": 372
      }
    ],
    "precio_unidad": 31,
    "precio_caja": 372
  },
  {
    "id": 166,
    "nombre": "APEROL",
    "categoria": "Licores Dulces",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Aperol.png",
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 39.99,
        "precio_caja": 479.88
      }
    ],
    "precio_unidad": 39.99,
    "precio_caja": 479.88
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
    "imagenUrl": "/images/productos/45.webp",
    "precio_unidad": [
      10.3,
      16.43
    ],
    "precio_caja": [
      247.2,
      197.16
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 10.3,
        "precio_caja": 247.2
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 16.43,
        "precio_caja": 197.16
      }
    ]
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
    "imagenUrl": "/images/productos/46.webp",
    "precio_unidad": [
      2.68,
      4.99
    ],
    "precio_caja": [
      64.32,
      59.88
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.68,
        "precio_caja": 64.32
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.99,
        "precio_caja": 59.88
      }
    ]
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
    "imagenUrl": "/images/productos/47.webp",
    "precio_unidad": [
      2.71,
      4.2,
      5.3
    ],
    "precio_caja": [
      65.04,
      50.4,
      63.6
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.71,
        "precio_caja": 65.04
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.2,
        "precio_caja": 50.4
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.3,
        "precio_caja": 63.6
      }
    ]
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
    "imagenUrl": "/images/productos/labrador.png",
    "precio_unidad": [
      5.25,
      4.22,
      2.62
    ],
    "precio_caja": [
      63,
      50.64,
      62.88
    ],
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.25,
        "precio_caja": 63
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.22,
        "precio_caja": 50.64
      },
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.62,
        "precio_caja": 62.88
      }
    ]
  },
  {
    "id": 48,
    "nombre": "029",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/48.webp",
    "precio_unidad": 2.61,
    "precio_caja": 31.32,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.61,
        "precio_caja": 31.32
      }
    ]
  },
  {
    "id": 49,
    "nombre": "CARTA ROJA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/49.webp",
    "precio_unidad": 5.49,
    "precio_caja": 65.88,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.49,
        "precio_caja": 65.88
      }
    ]
  },
  {
    "id": 50,
    "nombre": "CHAPARON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1.20L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/Chaparon.png",
    "precio_unidad": 2.93,
    "precio_caja": 35.16,
    "variantes": [
      {
        "presentacion": "1.20L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.93,
        "precio_caja": 35.16
      }
    ]
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
    "imagenUrl": "/images/productos/51.webp",
    "precio_unidad": [
      1.7,
      4.5
    ],
    "precio_caja": [
      40.8,
      54
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 1.7,
        "precio_caja": 40.8
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.5,
        "precio_caja": 54
      }
    ]
  },
  {
    "id": 52,
    "nombre": "CINCO ESTRELLAS BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/52.webp",
    "precio_unidad": 4.86,
    "precio_caja": 58.32,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.86,
        "precio_caja": 58.32
      }
    ]
  },
  {
    "id": 53,
    "nombre": "DRAGON B.E.S.",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1LITRO"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/53.webp",
    "precio_unidad": 2.69,
    "precio_caja": 32.28,
    "variantes": [
      {
        "presentacion": "1LITRO",
        "cantidad_caja": 12,
        "precio_unidad": 2.69,
        "precio_caja": 32.28
      }
    ]
  },
  {
    "id": 55,
    "nombre": "EL RUMBERO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/55.webp",
    "precio_unidad": 2.48,
    "precio_caja": 29.76,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.48,
        "precio_caja": 29.76
      }
    ]
  },
  {
    "id": 56,
    "nombre": "ERRE-P",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/56.webp",
    "precio_unidad": 1.85,
    "precio_caja": 22.2,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 1.85,
        "precio_caja": 22.2
      }
    ]
  },
  {
    "id": 57,
    "nombre": "ESTELAR ESCUDO DORADO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/57.webp",
    "precio_unidad": 5.15,
    "precio_caja": 61.8,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.15,
        "precio_caja": 61.8
      }
    ]
  },
  {
    "id": 58,
    "nombre": "MACONDO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.35L."
    ],
    "cantidad_caja": 24,
    "imagenUrl": "/images/productos/58.webp",
    "precio_unidad": 1.9,
    "precio_caja": 45.6,
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 1.9,
        "precio_caja": 45.6
      }
    ]
  },
  {
    "id": 59,
    "nombre": "MAGISTRAL",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/59.webp",
    "precio_unidad": 3.55,
    "precio_caja": 42.6,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.55,
        "precio_caja": 42.6
      }
    ]
  },
  {
    "id": 60,
    "nombre": "PANA RON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/60.webp",
    "precio_unidad": 2.45,
    "precio_caja": 29.4,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.45,
        "precio_caja": 29.4
      }
    ]
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
      24,
      12,
      6
    ],
    "imagenUrl": "/images/productos/62.webp",
    "precio_unidad": [
      1.26,
      2.47,
      4.25
    ],
    "precio_caja": [
      30.24,
      29.64,
      25.5
    ],
    "variantes": [
      {
        "presentacion": "0.35L",
        "cantidad_caja": 24,
        "precio_unidad": 1.26,
        "precio_caja": 30.24
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.47,
        "precio_caja": 29.64
      },
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 4.25,
        "precio_caja": 25.5
      }
    ]
  },
  {
    "id": 63,
    "nombre": "POPEYE",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/63 - Popeye.webp",
    "precio_unidad": 2.35,
    "precio_caja": 28.2,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.35,
        "precio_caja": 28.2
      }
    ]
  },
  {
    "id": 64,
    "nombre": "ROMANO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/64.webp",
    "precio_unidad": 1.96,
    "precio_caja": 23.52,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 1.96,
        "precio_caja": 23.52
      }
    ]
  },
  {
    "id": 65,
    "nombre": "RONALDO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/65.webp",
    "precio_unidad": 2.69,
    "precio_caja": 32.28,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.69,
        "precio_caja": 32.28
      }
    ]
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
    "imagenUrl": "/images/productos/66.webp",
    "precio_unidad": [
      2.22,
      3.73,
      4.91
    ],
    "precio_caja": [
      53.28,
      44.76,
      58.92
    ],
    "variantes": [
      {
        "presentacion": "0.35L.",
        "cantidad_caja": 24,
        "precio_unidad": 2.22,
        "precio_caja": 53.28
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.73,
        "precio_caja": 44.76
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.91,
        "precio_caja": 58.92
      }
    ]
  },
  {
    "id": 67,
    "nombre": "RUMBARON",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/67.webp",
    "precio_unidad": 4.63,
    "precio_caja": 55.56,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.63,
        "precio_caja": 55.56
      }
    ]
  },
  {
    "id": 68,
    "nombre": "SAN BENITO BEBIDA ESPIRITUOSA SECA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/68.webp",
    "precio_unidad": 2.46,
    "precio_caja": 29.52,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.46,
        "precio_caja": 29.52
      }
    ]
  },
  {
    "id": 69,
    "nombre": "SUPERIOR",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/69.webp",
    "precio_unidad": 4.76,
    "precio_caja": 57.12,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.76,
        "precio_caja": 57.12
      }
    ]
  },
  {
    "id": 70,
    "nombre": "TAMANACO DORADO / BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/70.webp",
    "precio_unidad": 1.81,
    "precio_caja": 43.44,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 24,
        "precio_unidad": 1.81,
        "precio_caja": 43.44
      }
    ]
  },
  {
    "id": 71,
    "nombre": "TAWALA DORADO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/71.webp",
    "precio_unidad": 3.25,
    "precio_caja": 39,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.25,
        "precio_caja": 39
      }
    ]
  },
  {
    "id": 91,
    "nombre": "RON BARRICA 40",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/91.webp",
    "precio_unidad": 15.5,
    "precio_caja": 93,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 15.5,
        "precio_caja": 93
      }
    ]
  },
  {
    "id": 92,
    "nombre": "RON BARRICA 80",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/92.webp",
    "precio_unidad": 22.5,
    "precio_caja": 135,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 22.5,
        "precio_caja": 135
      }
    ]
  },
  {
    "id": 93,
    "nombre": "RON CACIQUE",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/93.webp",
    "precio_unidad": 7.99,
    "precio_caja": 95.88,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 7.99,
        "precio_caja": 95.88
      }
    ]
  },
  {
    "id": 94,
    "nombre": "RON CACIQUE 500 AÑOS",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/94.webp",
    "precio_unidad": 10.6,
    "precio_caja": 127.2,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 10.6,
        "precio_caja": 127.2
      }
    ]
  },
  {
    "id": 95,
    "nombre": "RON CALAZAN ESPECIAL 2 AÑOS",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/95.webp",
    "precio_unidad": 6.35,
    "precio_caja": 76.2,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 6.35,
        "precio_caja": 76.2
      }
    ]
  },
  {
    "id": 96,
    "nombre": "RON CALAZAN ESPECIAL BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/96 - Ron Calazan Especial Blanco.webp",
    "precio_unidad": 11.86,
    "precio_caja": 71.16,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 11.86,
        "precio_caja": 71.16
      }
    ]
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
    "imagenUrl": "/images/productos/97.webp",
    "precio_unidad": [
      9.95,
      12.6
    ],
    "precio_caja": [
      59.7,
      113.4
    ],
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 9.95,
        "precio_caja": 59.7
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 9,
        "precio_unidad": 12.6,
        "precio_caja": 113.4
      }
    ]
  },
  {
    "id": 98,
    "nombre": "RON PAMPERO ESPECIAL",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L.",
      "0.75L."
    ],
    "cantidad_caja": [
      12,
      12
    ],
    "imagenUrl": "/images/productos/98.webp",
    "precio_unidad": [
      7.99,
      10.16
    ],
    "precio_caja": [
      95.88,
      121.92
    ],
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 7.99,
        "precio_caja": 95.88
      },
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 10.16,
        "precio_caja": 121.92
      }
    ]
  },
  {
    "id": 99,
    "nombre": "RON PAMPERO SELECCION 1938",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/99.webp",
    "precio_unidad": 15.3,
    "precio_caja": 91.8,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 15.3,
        "precio_caja": 91.8
      }
    ]
  },
  {
    "id": 101,
    "nombre": "RON SANTA TERESA 1796 SOLERA",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/101.webp",
    "precio_unidad": 29,
    "precio_caja": 174,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 29,
        "precio_caja": 174
      }
    ]
  },
  {
    "id": 102,
    "nombre": "RON SANTA TERESA BLANCO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/102.webp",
    "precio_unidad": 10.7,
    "precio_caja": 64.2,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 10.7,
        "precio_caja": 64.2
      }
    ]
  },
  {
    "id": 103,
    "nombre": "RON SANTA TERESA LINAJE",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/103.webp",
    "precio_unidad": 17,
    "precio_caja": 102,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 17,
        "precio_caja": 102
      }
    ]
  },
  {
    "id": 169,
    "nombre": "RON TEPUY MONUMENTO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/Tepuy.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 28.9,
        "precio_caja": 173.4
      }
    ],
    "precio_unidad": 28.9,
    "precio_caja": 173.4
  },
  {
    "id": 173,
    "nombre": "RON TEPUY DESTINO",
    "categoria": "Licores de Ron",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/destino.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 20.5,
        "precio_caja": 123
      }
    ],
    "precio_unidad": 20.5,
    "precio_caja": 123
  },
  {
    "id": 73,
    "nombre": "9° SODA TORONJA / GINGER / AGUAKINA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 24,
    "imagenUrl": "/images/productos/73.webp",
    "precio_unidad": 1.15,
    "precio_caja": 27.6,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 24,
        "precio_unidad": 1.15,
        "precio_caja": 27.6
      }
    ]
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
    "imagenUrl": "/images/productos/74.webp",
    "precio_unidad": [
      3.98,
      9.8
    ],
    "precio_caja": [
      3.98,
      117.6
    ],
    "variantes": [
      {
        "presentacion": "350ML",
        "cantidad_caja": 1,
        "precio_unidad": 3.98,
        "precio_caja": 3.98
      },
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 9.8,
        "precio_caja": 117.6
      }
    ]
  },
  {
    "id": 75,
    "nombre": "JARABE DE FRESA / GOMA / FRAMBUESA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/75.webp",
    "precio_unidad": 9.8,
    "precio_caja": 117.6,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 9.8,
        "precio_caja": 117.6
      }
    ]
  },
  {
    "id": 76,
    "nombre": "NAIGUATA COCO / COCO Y PIÑA",
    "categoria": "Mezcladores",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/76 - Naiguata Coco  Coco Y Piña.webp",
    "precio_unidad": 6,
    "precio_caja": 72,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 6,
        "precio_caja": 72
      }
    ]
  },
  {
    "id": 104,
    "nombre": "CAROREÑA TINTA / BLANCA / ROSADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/104.webp",
    "precio_unidad": 7.65,
    "precio_caja": 45.9,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 7.65,
        "precio_caja": 45.9
      }
    ]
  },
  {
    "id": 105,
    "nombre": "CARIBEÑA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/105.webp",
    "precio_unidad": 4.78,
    "precio_caja": 28.68,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 4.78,
        "precio_caja": 28.68
      }
    ]
  },
  {
    "id": 106,
    "nombre": "CAROREÑA VERANO LATA TINTA / BLANCA",
    "categoria": "Sangrías",
    "presentaciones": [
      "250ML."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/106.webp",
    "precio_unidad": 1.55,
    "precio_caja": 18.6,
    "variantes": [
      {
        "presentacion": "250ML.",
        "cantidad_caja": 12,
        "precio_unidad": 1.55,
        "precio_caja": 18.6
      }
    ]
  },
  {
    "id": 108,
    "nombre": "LA DIOSA TINTA / DORADA 11°",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/108.webp",
    "precio_unidad": 4.9,
    "precio_caja": 29.4,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 4.9,
        "precio_caja": 29.4
      }
    ]
  },
  {
    "id": 110,
    "nombre": "LA MAL CRIADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/110.webp",
    "precio_unidad": 4.57,
    "precio_caja": 27.42,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 4.57,
        "precio_caja": 27.42
      }
    ]
  },
  {
    "id": 111,
    "nombre": "LA QUE MANDA TINTA / ROSADA / BLANCA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/111.webp",
    "precio_unidad": 5,
    "precio_caja": 30,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 5,
        "precio_caja": 30
      }
    ]
  },
  {
    "id": 112,
    "nombre": "LA TOXICA MANZANA / TINTA ROSADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/112.webp",
    "precio_unidad": 3.9,
    "precio_caja": 23.4,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 3.9,
        "precio_caja": 23.4
      }
    ]
  },
  {
    "id": 113,
    "nombre": "LA TOXICA TINTA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/113.webp",
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 2.72,
        "precio_caja": 32.64
      }
    ],
    "precio_unidad": 2.72,
    "precio_caja": 32.64
  },
  {
    "id": 114,
    "nombre": "MADRILEÑA",
    "categoria": "Sangrías",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/114.webp",
    "precio_unidad": 4.16,
    "precio_caja": 24.96,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 6,
        "precio_unidad": 4.16,
        "precio_caja": 24.96
      }
    ]
  },
  {
    "id": 115,
    "nombre": "MAL PORTADA TINTA / BLANCA / ROSADA",
    "categoria": "Sangrías",
    "presentaciones": [
      "1.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/115.webp",
    "precio_unidad": 4.83,
    "precio_caja": 28.98,
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 4.83,
        "precio_caja": 28.98
      }
    ]
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
    "imagenUrl": "/images/productos/116.webp",
    "precio_unidad": [
      3.9,
      3.9
    ],
    "precio_caja": [
      93.6,
      93.6
    ],
    "variantes": [
      {
        "presentacion": "1.75L.",
        "cantidad_caja": 24,
        "precio_unidad": 3.9,
        "precio_caja": 93.6
      },
      {
        "presentacion": "1.75L PROMO 4 CAJAS",
        "cantidad_caja": 24,
        "precio_unidad": 3.9,
        "precio_caja": 93.6
      }
    ]
  },
  {
    "id": 117,
    "nombre": "EL JIMADOR REPOSADO",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "0.75L PROMOCION"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/117.webp",
    "precio_unidad": 35,
    "precio_caja": 35,
    "variantes": [
      {
        "presentacion": "0.75L PROMOCION",
        "cantidad_caja": 1,
        "precio_unidad": 35,
        "precio_caja": 35
      }
    ]
  },
  {
    "id": 118,
    "nombre": "CHIAPAS",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/118.webp",
    "precio_unidad": 6.1,
    "precio_caja": 73.2,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 6.1,
        "precio_caja": 73.2
      }
    ]
  },
  {
    "id": 119,
    "nombre": "HERENCIA DE PLATA BLANCO",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/119.webp",
    "precio_unidad": 64,
    "precio_caja": 64,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 64,
        "precio_caja": 64
      }
    ]
  },
  {
    "id": 120,
    "nombre": "TEQUILA CUATE",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/120.webp",
    "precio_unidad": 6.15,
    "precio_caja": 73.8,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 6.15,
        "precio_caja": 73.8
      }
    ]
  },
  {
    "id": 121,
    "nombre": "TEQUILA KAH",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/121.webp",
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 1
      }
    ]
  },
  {
    "id": 122,
    "nombre": "LICOR DE AGAVE DEL NORTE",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/122 - Licor de Agave del Norte.webp",
    "precio_unidad": 5.68,
    "precio_caja": 68.16,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 5.68,
        "precio_caja": 68.16
      }
    ]
  },
  {
    "id": 178,
    "nombre": "TEQUILA LOS CORRALES",
    "categoria": "Tequilas y Licores de Agave",
    "presentaciones": [
      "930ml."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/corrales.png",
    "precio_unidad": 14.9,
    "precio_caja": 89.4,
    "variantes": [
      {
        "presentacion": "930ml.",
        "cantidad_caja": 6,
        "precio_unidad": 14.9,
        "precio_caja": 89.4
      }
    ]
  },
  {
    "id": 123,
    "nombre": "VINO DULCE KOSHER CALIFORNIANO",
    "categoria": "Vinos",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/123.webp",
    "precio_unidad": 19.99,
    "precio_caja": 19.99,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 1,
        "precio_unidad": 19.99,
        "precio_caja": 19.99
      }
    ]
  },
  {
    "id": 124,
    "nombre": "VINO BARROCO",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/124.webp",
    "precio_unidad": 7.33,
    "precio_caja": 87.96,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 7.33,
        "precio_caja": 87.96
      }
    ]
  },
  {
    "id": 125,
    "nombre": "VINO GRAN SANSON",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/125.webp",
    "precio_unidad": 15.5,
    "precio_caja": 186,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 12,
        "precio_unidad": 15.5,
        "precio_caja": 186
      }
    ]
  },
  {
    "id": 128,
    "nombre": "VINO LA VINOTINTO ESPAÑOL",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/128.webp",
    "precio_unidad": 6.99,
    "precio_caja": 41.94,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 6.99,
        "precio_caja": 41.94
      }
    ]
  },
  {
    "id": 129,
    "nombre": "VINO TALAMANCA",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/talamanca.png",
    "precio_unidad": 8.75,
    "precio_caja": 52.5,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 8.75,
        "precio_caja": 52.5
      }
    ]
  },
  {
    "id": 130,
    "nombre": "VINO NUESTRA PASION",
    "categoria": "Vinos",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/130 - Vino Nuestra Pasion.webp",
    "precio_unidad": 6.65,
    "precio_caja": 39.9,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 6,
        "precio_unidad": 6.65,
        "precio_caja": 39.9
      }
    ]
  },
  {
    "id": 131,
    "nombre": "VINO DILEMA C/S. / MALBEC / CHARDONNAY",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/131.webp",
    "precio_unidad": 7.35,
    "precio_caja": 44.1,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 7.35,
        "precio_caja": 44.1
      }
    ]
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
    "imagenUrl": "/images/productos/romeo.png",
    "variantes": [
      {
        "presentacion": "Garnacha",
        "cantidad_caja": 12,
        "precio_unidad": 14.2,
        "precio_caja": 170.4
      },
      {
        "presentacion": "Monastrel",
        "cantidad_caja": 12,
        "precio_unidad": 14.2,
        "precio_caja": 170.4
      },
      {
        "presentacion": "Tempranillo",
        "cantidad_caja": 12,
        "precio_unidad": 14.2,
        "precio_caja": 170.4
      }
    ],
    "precio_unidad": 14.2,
    "precio_caja": 170.4
  },
  {
    "id": 157,
    "nombre": "VINO TINI SANGIOVESSE",
    "categoria": "Vinos",
    "presentaciones": [
      "Chardonay"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/tini.png",
    "precio_unidad": 8.7,
    "precio_caja": 52.2,
    "variantes": [
      {
        "presentacion": "Chardonay",
        "cantidad_caja": 6,
        "precio_unidad": 8.7,
        "precio_caja": 52.2
      }
    ]
  },
  {
    "id": 160,
    "nombre": "VINO LICENSIOSO",
    "categoria": "Vinos",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/licensioso.png",
    "precio_unidad": 10.83,
    "precio_caja": 64.98,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 10.83,
        "precio_caja": 64.98
      }
    ]
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
    "imagenUrl": "/images/productos/Cinzano.png",
    "variantes": [
      {
        "presentacion": "Bianco 1L.",
        "cantidad_caja": 12,
        "precio_unidad": 26.5,
        "precio_caja": 318
      },
      {
        "presentacion": "Rossi 1L.",
        "cantidad_caja": 12,
        "precio_unidad": 26.5,
        "precio_caja": 318
      }
    ],
    "precio_unidad": 26.5,
    "precio_caja": 318
  },
  {
    "id": 179,
    "nombre": "SERA",
    "categoria": "Vinos",
    "presentaciones": [
      "Merlot"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/sera.png",
    "precio_unidad": 10,
    "precio_caja": 60,
    "variantes": [
      {
        "presentacion": "Merlot",
        "cantidad_caja": 6,
        "precio_unidad": 10,
        "precio_caja": 60
      }
    ]
  },
  {
    "id": 132,
    "nombre": "ABSOLUT",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/132.webp",
    "precio_unidad": 19.25,
    "precio_caja": 19.25,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 19.25,
        "precio_caja": 19.25
      }
    ]
  },
  {
    "id": 133,
    "nombre": "BAJO O NATURAL",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/133 - Bajo O Natural.webp",
    "precio_unidad": 7.45,
    "precio_caja": 89.4,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 7.45,
        "precio_caja": 89.4
      }
    ]
  },
  {
    "id": 134,
    "nombre": "BAJO 0: COCO / MANZANA / GUARANA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/134.webp",
    "precio_unidad": 6.07,
    "precio_caja": 72.84,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 6.07,
        "precio_caja": 72.84
      }
    ]
  },
  {
    "id": 135,
    "nombre": "BAJO 0: FRUTAS SALVAJES / MARACUYA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/135.webp",
    "precio_unidad": 6.07,
    "precio_caja": 72.84,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 6.07,
        "precio_caja": 72.84
      }
    ]
  },
  {
    "id": 136,
    "nombre": "FINLANDIA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/136.webp",
    "precio_unidad": 17.5,
    "precio_caja": 17.5,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 17.5,
        "precio_caja": 17.5
      }
    ]
  },
  {
    "id": 137,
    "nombre": "GORDON'S: NATURAL / UVA / LIMON / CRANBERRY / PARCHI",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/137.webp",
    "precio_unidad": 10.45,
    "precio_caja": 125.4,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 10.45,
        "precio_caja": 125.4
      }
    ]
  },
  {
    "id": 138,
    "nombre": "RELATIVE",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/138.webp",
    "precio_unidad": 5.5,
    "precio_caja": 5.5,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 1,
        "precio_unidad": 5.5,
        "precio_caja": 5.5
      }
    ]
  },
  {
    "id": 139,
    "nombre": "SONNEMA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/139.webp",
    "precio_unidad": 7.25,
    "precio_caja": 43.5,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 6,
        "precio_unidad": 7.25,
        "precio_caja": 43.5
      }
    ]
  },
  {
    "id": 140,
    "nombre": "WIMBLEDON",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/140.webp",
    "precio_unidad": 4,
    "precio_caja": 48,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4,
        "precio_caja": 48
      }
    ]
  },
  {
    "id": 180,
    "nombre": "STOLICHNAYA",
    "categoria": "Vodkas y Otros",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 6,
    "imagenUrl": "/images/productos/Stolichnaya.png",
    "precio_unidad": 25.8,
    "precio_caja": 154.8,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 6,
        "precio_unidad": 25.8,
        "precio_caja": 154.8
      }
    ]
  },
  {
    "id": 77,
    "nombre": "COUNTRY CLUB LICOR",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/77.webp",
    "precio_unidad": 6.13,
    "precio_caja": 73.56,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 6.13,
        "precio_caja": 73.56
      }
    ]
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
    "imagenUrl": "/images/productos/78.webp",
    "precio_unidad": [
      4.23,
      5.31
    ],
    "precio_caja": [
      50.76,
      63.72
    ],
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.23,
        "precio_caja": 50.76
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.31,
        "precio_caja": 63.72
      }
    ]
  },
  {
    "id": 79,
    "nombre": "DUNBAR",
    "categoria": "Whisky",
    "presentaciones": [
      "0.7L"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/79.webp",
    "precio_unidad": 10.4,
    "precio_caja": 124.8,
    "variantes": [
      {
        "presentacion": "0.7L",
        "cantidad_caja": 12,
        "precio_unidad": 10.4,
        "precio_caja": 124.8
      }
    ]
  },
  {
    "id": 80,
    "nombre": "ELITE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/80.webp",
    "precio_unidad": 3.99,
    "precio_caja": 47.88,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 3.99,
        "precio_caja": 47.88
      }
    ]
  },
  {
    "id": 81,
    "nombre": "GOLD MEMBER",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/81.webp",
    "precio_unidad": 7.09,
    "precio_caja": 85.08,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 7.09,
        "precio_caja": 85.08
      }
    ]
  },
  {
    "id": 82,
    "nombre": "GRAN LORD",
    "categoria": "Whisky",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/82.webp",
    "precio_unidad": 5.25,
    "precio_caja": 63,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.25,
        "precio_caja": 63
      }
    ]
  },
  {
    "id": 83,
    "nombre": "HIGHCLASS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/83.webp",
    "precio_unidad": 5.6,
    "precio_caja": 67.2,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.6,
        "precio_caja": 67.2
      }
    ]
  },
  {
    "id": 84,
    "nombre": "HUNTER",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/84.webp",
    "precio_unidad": 4.16,
    "precio_caja": 49.92,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 4.16,
        "precio_caja": 49.92
      }
    ]
  },
  {
    "id": 85,
    "nombre": "JHON MASTER",
    "categoria": "Whisky",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/85.webp",
    "precio_unidad": 4.22,
    "precio_caja": 50.64,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 4.22,
        "precio_caja": 50.64
      }
    ]
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
    "imagenUrl": "/images/productos/86.webp",
    "precio_unidad": [
      5.76,
      7.1
    ],
    "precio_caja": [
      69.12,
      85.2
    ],
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.76,
        "precio_caja": 69.12
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 12,
        "precio_unidad": 7.1,
        "precio_caja": 85.2
      }
    ]
  },
  {
    "id": 87,
    "nombre": "OLD 63",
    "categoria": "Whisky",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/87.webp",
    "precio_unidad": 8.95,
    "precio_caja": 107.4,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 8.95,
        "precio_caja": 107.4
      }
    ]
  },
  {
    "id": 88,
    "nombre": "OLD LABEL",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/88.webp",
    "precio_unidad": 5.6,
    "precio_caja": 67.2,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.6,
        "precio_caja": 67.2
      }
    ]
  },
  {
    "id": 89,
    "nombre": "OLD TRAFFORD",
    "categoria": "Whisky",
    "presentaciones": [
      "Única"
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/89.webp",
    "precio_unidad": 4.82,
    "precio_caja": 57.84,
    "variantes": [
      {
        "presentacion": "Única",
        "cantidad_caja": 12,
        "precio_unidad": 4.82,
        "precio_caja": 57.84
      }
    ]
  },
  {
    "id": 90,
    "nombre": "ROYAL CLUB",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 12,
    "imagenUrl": "/images/productos/90.webp",
    "precio_unidad": 5.9,
    "precio_caja": 70.8,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 12,
        "precio_unidad": 5.9,
        "precio_caja": 70.8
      }
    ]
  },
  {
    "id": 141,
    "nombre": "WHISKY BLACK LABEL",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/141.webp",
    "precio_unidad": 35.8,
    "precio_caja": 35.8,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 35.8,
        "precio_caja": 35.8
      }
    ]
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
    "imagenUrl": "/images/productos/142.webp",
    "precio_unidad": [
      14.6,
      17.59
    ],
    "precio_caja": [
      14.6,
      17.59
    ],
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 14.6,
        "precio_caja": 14.6
      },
      {
        "presentacion": "1L.",
        "cantidad_caja": 1,
        "precio_unidad": 17.59,
        "precio_caja": 17.59
      }
    ]
  },
  {
    "id": 143,
    "nombre": "WHISKY BUCHANAN'S 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/143.webp",
    "precio_unidad": 36.99,
    "precio_caja": 36.99,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 36.99,
        "precio_caja": 36.99
      }
    ]
  },
  {
    "id": 144,
    "nombre": "WHISKY BUCHANAN'S 18 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/144.webp",
    "precio_unidad": 116,
    "precio_caja": 116,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 116,
        "precio_caja": 116
      }
    ]
  },
  {
    "id": 145,
    "nombre": "WHISKY CATTOS",
    "categoria": "Whisky",
    "presentaciones": [
      "1L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/145.webp",
    "precio_unidad": 19.95,
    "precio_caja": 19.95,
    "variantes": [
      {
        "presentacion": "1L.",
        "cantidad_caja": 1,
        "precio_unidad": 19.95,
        "precio_caja": 19.95
      }
    ]
  },
  {
    "id": 146,
    "nombre": "WHISKY CHIVAS REGAL 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/146.webp",
    "precio_unidad": 40,
    "precio_caja": 40,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 40,
        "precio_caja": 40
      }
    ]
  },
  {
    "id": 147,
    "nombre": "WHISKY DEWAR'S 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/147.webp",
    "precio_unidad": 35.25,
    "precio_caja": 35.25,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 35.25,
        "precio_caja": 35.25
      }
    ]
  },
  {
    "id": 148,
    "nombre": "WHISKY GOLDEN GLEN",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 2,
    "imagenUrl": "/images/productos/148.webp",
    "precio_unidad": 16,
    "precio_caja": 32,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 2,
        "precio_unidad": 16,
        "precio_caja": 32
      }
    ]
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
    "imagenUrl": "/images/productos/149.webp",
    "precio_unidad": [
      18.75,
      31.75
    ],
    "precio_caja": [
      18.75,
      31.75
    ],
    "variantes": [
      {
        "presentacion": "8 AÑOS",
        "cantidad_caja": 1,
        "precio_unidad": 18.75,
        "precio_caja": 18.75
      },
      {
        "presentacion": "12 AÑOS",
        "cantidad_caja": 1,
        "precio_unidad": 31.75,
        "precio_caja": 31.75
      }
    ]
  },
  {
    "id": 150,
    "nombre": "WHISKY OLD PARR 12 AÑOS",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/150.webp",
    "precio_unidad": 31.85,
    "precio_caja": 31.85,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 31.85,
        "precio_caja": 31.85
      }
    ]
  },
  {
    "id": 151,
    "nombre": "WHISKY OLD PARR SILVER",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/151.webp",
    "precio_unidad": 26.3,
    "precio_caja": 26.3,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 26.3,
        "precio_caja": 26.3
      }
    ]
  },
  {
    "id": 153,
    "nombre": "WHISKY THE FAMOUS GROUSE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/153.webp",
    "precio_unidad": 18.7,
    "precio_caja": 18.7,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 18.7,
        "precio_caja": 18.7
      }
    ]
  },
  {
    "id": 154,
    "nombre": "WHISKY WILLIAM LAWSON'S",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 2,
    "imagenUrl": "/images/productos/154.webp",
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 2,
        "precio_unidad": 19.5,
        "precio_caja": 39
      }
    ],
    "precio_unidad": 19.5,
    "precio_caja": 39
  },
  {
    "id": 167,
    "nombre": "WHISKY MACALLAN 12 AÑOS TRIPLE CASK",
    "categoria": "Whisky",
    "presentaciones": [
      "0.75L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/MacAllan.png",
    "precio_unidad": 199,
    "precio_caja": 199,
    "variantes": [
      {
        "presentacion": "0.75L.",
        "cantidad_caja": 1,
        "precio_unidad": 199,
        "precio_caja": 199
      }
    ]
  },
  {
    "id": 168,
    "nombre": "WHISKY GOLD LABEL RESERVE",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/gold.png",
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 1,
        "precio_unidad": 78,
        "precio_caja": 78
      }
    ],
    "precio_unidad": 78,
    "precio_caja": 78
  },
  {
    "id": 181,
    "nombre": "MACALLAN",
    "categoria": "Whisky",
    "presentaciones": [
      "0.70L."
    ],
    "cantidad_caja": 1,
    "imagenUrl": "/images/productos/themacallan.png",
    "precio_unidad": 220,
    "precio_caja": 220,
    "variantes": [
      {
        "presentacion": "0.70L.",
        "cantidad_caja": 1,
        "precio_unidad": 220,
        "precio_caja": 220
      }
    ]
  }
];
