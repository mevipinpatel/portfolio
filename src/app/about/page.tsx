"use client";
import * as React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Main>
      <Article>
        <Heading>About Me</Heading>


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
        <ContactButton href="/contact">Contact Me</ContactButton>
      </Article>
    </Main>
  );
}

/* ===================== */
/* Styled Components     */
/* ===================== */

const Main = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #bfdbfe, #e9d5ff, #fbcfe8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
`;

const Article = styled.article`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 50rem;
  width: 100%;
  border: 1px solid #f3f4f6;
  backdrop-filter: blur(8px);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #4338ca, #6d28d9);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(79, 70, 229, 0.3);
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
  margin-bottom: 1.25rem;

  strong {
    color: #4f46e5;
  }
`;
