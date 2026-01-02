import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Godwin — Fullstack Web Developer (React & Next.js)",
  description: "ZenCode — silent coding with modern React & Next.js projects. Hire me for landing pages, SaaS UIs and animations.",
  openGraph: {
    title: "Godwin - React & Next.js developer",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
