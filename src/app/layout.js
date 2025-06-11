import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense } from "react";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen />
        <Header />
        <Suspense>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
