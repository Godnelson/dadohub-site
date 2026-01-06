// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DadoHub — Software guiado por dados",
  description:
    "Projetamos, construímos e escalamos sistemas com foco em arquitetura, performance e decisões baseadas em métricas.",
  metadataBase: new URL("https://dadohub.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
