"use client";
import * as React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";

const ResumeWrapper = styled.main`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #bfdbfe, #e9d5ff, #fbcfe8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: "Inter", sans-serif;
  color: #1f2937;
`;

const ResumeCard = styled.article<{ border: string }>`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ border }) => border};
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;
  max-width: 30rem;
  text-align: center;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DownloadLink = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    !["colorVal", "hoverBg", "shadow", "shadowHover", "shadowActive"].includes(
      prop
    ),
})<{
  colorVal: string;
  hoverBg: string;
  shadow: string;
  shadowHover: string;
  shadowActive: string;
}>`
  background-color: ${({ colorVal }) => colorVal};
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: bold;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: ${({ shadow }) => shadow};

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg};
    transform: translateY(-2px);
    box-shadow: ${({ shadowHover }) => shadowHover};
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${({ shadowActive }) => shadowActive};
  }
`;

export default function Cv() {
  const theme = useTheme();

  return (
    <ResumeWrapper>
      <ResumeCard border="#f3f4f6">
        <Heading>Download My Resume</Heading>
        <DownloadLink
          colorVal={theme.palette.primary.main}
          hoverBg={theme.palette.primary.dark}
          shadow={theme.shadows[3]}
          shadowHover={theme.shadows[6]}
          shadowActive={theme.shadows[2]}
          href="https://drive.google.com/file/d/1YPMGnTAuw7J3H5y40B3dx_8L5_8g-FqR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download="My_Resume.pdf"
        >
          📄 Download Resume
        </DownloadLink>
      </ResumeCard>
    </ResumeWrapper>
  );
}
