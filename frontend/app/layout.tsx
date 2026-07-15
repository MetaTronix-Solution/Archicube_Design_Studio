import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* Add top padding because the navbar is fixed */}
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}