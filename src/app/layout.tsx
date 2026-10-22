import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Adjust path if your navbar is in a different folder
import Footer from "@/components/footer"; // Adjust path if your footer is in a different folder

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AISHAAS | Next.js Development Services",
  description: "Modern web design and development using Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0d1424] text-slate-100 antialiased flex flex-col min-h-screen`}>
        {/* Global Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}