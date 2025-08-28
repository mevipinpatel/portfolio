"use client";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState, useEffect } from "react"; 
import getAppTheme from "@/theme";
import Header from "./header/page";
import Footer from "./footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // You can wire this to a toggle in Header via context or props
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Persist mode (optional)
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("mode") : null;
    if (stored === "dark" || stored === "light") setMode(stored);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("mode", mode);
  }, [mode]);

  const theme = useMemo(() => getAppTheme(mode), [mode]);


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MuiThemeProvider theme={theme}>
            {/* 👇 Give styled-components the SAME theme object */}
            <StyledThemeProvider theme={theme}>
              <CssBaseline />
              {/* Example: pass a setter so header can toggle */}
              <Header onToggle={() => setMode((m) => (m === "light" ? "dark" : "light"))} />
              <main>{children}</main>
              <Footer />
            </StyledThemeProvider>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
