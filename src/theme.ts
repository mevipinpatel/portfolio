// src/theme.ts
import { createTheme, PaletteMode } from "@mui/material/styles";
import { Roboto } from "next/font/google";

// ---- Module augmentation to add `gradients` on the theme ----
declare module "@mui/material/styles" {
  interface Theme {
    gradients: {
      brand: string;
      brandAlt: string;
      hero: string;
      cta: string;
      skill: string;
    };
  }
  interface ThemeOptions {
    gradients?: Partial<Theme["gradients"]>;
  }
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const getAppTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
          primary: { main: "#4c0b0b", contrastText: "#ffffff" }, // indigo-600
          secondary: { main: "#7c3aed" },                        // purple-600
          background: { default: "#f9fafb", paper: "#ffffff" },  // slate-50 / white
          text: { primary: "#1f2937", secondary: "#4b5563" },    // slate-800/600
        }
        : {
          primary: { main: "#fcd53f", contrastText: "#3e3e3e" }, // violet-300
          secondary: { main: "#9333ea" },                        // purple-600
          background: { default: "#3e3e3e", paper: "#111111" },  // gray-900 / gray-800
          text: { primary: "#f9fafb", secondary: "#d1d5db" },    // gray-50/300
        }),
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: roboto.style.fontFamily,
      h1: {
        fontWeight: 800,
        fontSize: "3rem",
        "@media (max-width:768px)": {
          fontSize: "2.4rem", // smaller on mobile
        },
      },
      h2: {
        fontWeight: 700,
        fontSize: "2rem",
        "@media (max-width:768px)": {
          fontSize: "1.75rem",
        },
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.75rem",
        lineHeight: 1.35,
        "@media (max-width:768px)": {
          fontSize: "1.5rem",
        },
      },
      body1: { fontSize: "1rem", lineHeight: 1.6 },
    },
    // All gradients live here (no hardcoded colors in components)
    gradients:
      mode === "light"
        ? {
          brand: "linear-gradient(90deg, #3e3e3e, #3e3e3e)",
          brandAlt: "linear-gradient(90deg, #4c0b0b, #3e3e3e)",
          hero: "linear-gradient(to bottom right, #eeeeee, #eeeeee, #eeeeee)",
          cta: "linear-gradient(90deg, #eeeeee, #eeeeee)",
          skill: "linear-gradient(135deg, #3e3e3e, #3e3e3e)",
        }
        : {
          brand: "linear-gradient(90deg, #fcd53f, #fcd53f)",
          brandAlt: "linear-gradient(90deg, #eeeeee, #eeeeee)",
          hero: "linear-gradient(to bottom right, #3e3e3e, #3e3e3e, #3e3e3e)",
          cta: "linear-gradient(90deg, #111111, #111111)",
          skill: "linear-gradient(135deg, #cfcfcf, #cfcfcf)",
        },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            padding: "0.5rem 1.25rem",
            fontWeight: 500,
          },
        },
      },
    },
  });

export default getAppTheme;
