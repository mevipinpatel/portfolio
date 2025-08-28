"use client";
import { Typography } from "@mui/material";
import * as React from "react";
import styled from "styled-components";
 
export default function About() {
  
  return (
    <Main>
      <Article>
        <Typography variant="h1" className="title">About Me</Typography>
        <Paragraph>
          Hi, I’m a passionate <strong>Frontend Developer</strong> with a strong
          focus on creating responsive, accessible, and user-friendly web
          applications.
        </Paragraph>

        <Paragraph>
          My core skills include <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
          <strong>JavaScript</strong>, along with modern frameworks like{" "}
          <strong>React</strong> and <strong>Next.js</strong>. I specialize in
          building clean, maintainable UI components and delivering smooth user
          experiences.
        </Paragraph>

        <Paragraph>
          I enjoy turning complex problems into intuitive interfaces, and I’m
          always eager to learn the latest frontend technologies to improve my
          workflow and stay ahead of industry trends.
        </Paragraph>

        <Paragraph>
          Let’s collaborate and build something amazing together!
        </Paragraph>

        <ContactButton href="/contact">
          Contact Me
        </ContactButton>
      </Article>
    </Main>
  );
}

/* ===================== */
/* Styled Components     */
/* ===================== */

const Main = styled.section`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background: ${({ theme }) => theme.gradients.hero};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem 4rem;
`;

const Article = styled.article`
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  max-width: 50rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  backdrop-filter: blur(8px);
  transition: all 0.5s ease; 
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

// const Heading = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 800;
//   text-align: center;
//   margin-bottom: 2rem;
//   background: ${({ theme }) => theme.gradients.brand};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

const ContactButton = styled.a`
 background: ${({ theme }) => theme.gradients.brand};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  font-size: 1.1rem;
  text-decoration: none;
   box-shadow: ${({ theme }) => theme.shadows[2]};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.gradients.brandAlt};
     
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;

  color: ${({ theme }) => theme.palette.text.secondary};

  strong {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
