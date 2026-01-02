import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("flowadmin-theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    // Fail silently to avoid blocking rendering.
  }
})();
`;

export const metadata: Metadata = {
  title: "FlowAdmin | B2B SaaS Admin Dashboard",
  description:
    "Modern B2B SaaS admin dashboard with scalable layout, RBAC-ready screens, and reusable UI components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        {children}
      </body>
    </html>
  );
}
