import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wave",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + "min-h-screen transition-colors"}>
        <Providers>
          <div className="main antialiased  "></div>
          <main className="app bg-white dark:bg-gray-900/25">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
