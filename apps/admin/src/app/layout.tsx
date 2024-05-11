// import { AppDataSource } from '@repo/database-service';
import "./globals.css";
import "@repo/react-kit/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo Admin Web",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ke">
      <body className={inter.className}>{children}</body>
    </html>
  );
}