"use client";
import { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../../i18n/locales/en.json";
import ja from "../../i18n/locales/ja.json";

const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
};

let initPromise = null;

export default function I18nProvider({ children }) {
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    const initializeI18n = async () => {
      if (i18n.isInitialized) {
        setI18nInitialized(true);
        return;
      }

      if (initPromise) {
        await initPromise;
        setI18nInitialized(true);
        return;
      }

      initPromise = i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          resources,
          fallbackLng: "en",
          debug: false,
          lng: "en", // Set default language explicitly

          interpolation: {
            escapeValue: false,
          },

          detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
          },

          react: {
            useSuspense: false, // Disable suspense mode
          },
        });

      try {
        await initPromise;
        setI18nInitialized(true);
      } catch (error) {
        console.error("i18n initialization failed:", error);
        setI18nInitialized(true); // Continue even if init fails
      }
    };

    initializeI18n();
  }, []);

  // Show loading state while i18n is initializing
  if (!i18nInitialized) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return children;
}
