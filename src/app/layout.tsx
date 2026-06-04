import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Licorería Rizzo — Catálogo al Mayor",
  description:
    "Catálogo B2B de Licorería Rizzo. Consulta nuestra variedad de licores, rones, whiskys, cervezas y más para ventas al mayor.",
  keywords: [
    "licorería",
    "catálogo",
    "al mayor",
    "ron",
    "whisky",
    "licores",
    "Rizzo",
  ],
  openGraph: {
    title: "Licorería Rizzo — Catálogo al Mayor",
    description: "Consulta nuestra variedad de licores para ventas al mayor.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night-950">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
