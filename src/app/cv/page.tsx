"use client";
import * as React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const ResumeWrapper = styled.section`
 font-family: ${({ theme }) => theme.typography.fontFamily};
  background: ${({ theme }) => theme.gradients.hero};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ResumeCard = styled.article`
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;
  max-width: 30rem;
  text-align: center;
 
    @media (max-width: 767px) {
    padding: 3rem 1rem;
  }
  .title {
   text-align: center;
    margin-bottom: 2.5rem;
    background: ${({ theme }) => theme.gradients.brand};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;


const DownloadLink = styled.a`
 background: ${({ theme }) => theme.gradients.brand};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.18);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.gradients.brandAlt};
     
  }
`;
export default function Cv() {
   
  return (
    <ResumeWrapper>
      <ResumeCard>
        <Typography variant="h1" className="title">Download CV</Typography>
        <DownloadLink
          href="https://drive.google.com/file/d/1ikfFLxPoFlWCbSjjQnKLBWDPd3AfKcXM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          download="My_Resume.pdf"
        >
          📄 Download
        </DownloadLink>
      </ResumeCard>
    </ResumeWrapper>
  );
}
