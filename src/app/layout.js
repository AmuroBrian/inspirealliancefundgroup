import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense } from "react";
import { metadata } from "./metadata";
import I18nProvider from "./components/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          <LoadingScreen />
          <Header />
          <Suspense>
            {children}
          </Suspense>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
