import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mannie's Portfolio",
  description: "Personal portfolio showcasing work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F1F7FE] text-[#060606]">{children}</body>
    </html>
  );
}
