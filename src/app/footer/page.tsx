"use client";
import * as React from "react";
import { Box, Typography, Button, IconButton, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

export default function Footer() {
  const theme = useTheme();
  const [year, setYear] = React.useState<number | null>(null);
  const logo = "logo.png";

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(
          to right, 
          ${theme.palette.background.default}, 
          ${theme.palette.background.paper}
        )`,
        color: theme.palette.text.primary,
        py: 4,
        mt: 6,
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        <Image
          src={logo}
          alt="Logo"
          width={120}
          height={50}
          style={{ objectFit: "contain" }}
        />
      </Box>

      {/* Branding */}
      <Typography variant="h6" gutterBottom>
        Vipin | Senior Frontend Developer
      </Typography>
      <Typography
        variant="body2"
        sx={{ maxWidth: 500, mx: "auto", mb: 2, textAlign: "center" }}
      >
        Crafting modern, responsive, and high-performance web applications
        using React, Next.js, and cutting-edge frontend technologies.
      </Typography>

      {/* Social Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
        <IconButton
          color="inherit"
          href="https://github.com/mevipinpatel"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://linkedin.com/in/vipinpatels"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton> 
      </Box>

      {/* Footer Links */}
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          listStyle: "none",
          p: 0,
          m: 0,
          mb: 2,
        }}
      >
        <li>
          <Button color="inherit" href="/about">
            About Me
          </Button>
        </li>
        <li>
          <Button color="inherit" href="/projects">
            Projects
          </Button>
        </li>
        <li>
          <Button color="inherit" href="/contact">
            Contact
          </Button>
        </li>
      </Box>

      {/* Copyright */}
      <Typography variant="caption" color="text.secondary">
        © {year} — Made with ❤️ by Vipin Patel
      </Typography>
    </Box>
  );
}
