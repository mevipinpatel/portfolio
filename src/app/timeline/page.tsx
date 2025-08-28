"use client";
import * as React from "react";
import styled from "styled-components";
import { Typography, useTheme } from "@mui/material";
export default function Timeline() {
  const theme = useTheme();
  const timelineData = [
    {
      year: "DEC-2022 - PRESENT",
      title: "Senior Frontend Developer",
      company: "EKINO - HAVAS WORLD WIDE (BENGALURU)",
      description:
        "Built and maintained enterprise-level marketing and product websites using JSX, Styled-component, Next.js, React, and modern JavaScript. Developed reusable component libraries and documentation to ensure consistent UX across multiple projects. Integrated REST APIs with robust form validation and error handling. Collaborated with designers to translate Figma assets into responsive, pixel-perfect layouts. Delivered projects from scratch, including Dr. Reddy Biologics, Fiitjee, Canon, Sudlife, Bosch and Canon Photo Marathon.",
    },
    {
      year: "DEC-2021 - OCT-2022",
      title: "Senior UI Developer",
      company: "ARETEANS (GURUGRAM)",
      description:
        "Created COSMOS-based UI layouts as per design mockups and implemented HTML, CSS, JavaScript customizations. Fixed UI bugs and cross-browser defects to ensure consistent performance across platforms. Developed enterprise skins based on style guides for the entire application. Worked on projects including Unilever and AlterDomus in a PEGA environment.",
    },
    {
      year: "SEPT-2017 - DEC-2021",
      title: "UX/UI Developer",
      company: "AADYA TECHNO BYTES PVT. LTD. (NOIDA)",
      description:
        "Led and guided a 7-member team, building Angular components and delivering responsive UIs using HTML, CSS, Bootstrap, and Angular Material. Created wireframes with Mock Flow and utilized tools such as Photoshop, VS Code, SVN, and Mock Flow, with SVN for version control.",
    },
    {
      year: "DEC-2014 - AUG-2016",
      title: "UI Developer",
      company: "MAGICBRICKS (PAYROLL: SHARP & YOUNG IT SOLUTIONS PVT. LTD.). (NOIDA)",
      description:
        "Built responsive user interfaces using HTML, CSS, and Bootstrap. Developed cross-platform, compatible HTML/CSS email templates. Converted PSD designs into pixel-perfect HTML/CSS implementations",
    },
    {
      year: "2018",
      title: "MCA Graduation",
      company: "Swami Vivekananda Subharti University, Meerut",
      description: "Completed Master in Computer Applications with A Grade.",
    },
    {
      year: "2014",
      title: "BCA Graduation",
      company: "Mahatma Gandhi Kashi Vidyapith, Varanasi",
      description: "Completed Bachelor in Computer Applications with 71%.",
    },
  ];
 return (
    <Main theme={theme}>
      <Article theme={theme}> 
        <Typography variant="h1" className="title">My Journey</Typography>
        <TimelineWrapper theme={theme}>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} theme={theme}>
              <TimelineContent>
                <Year theme={theme}>{item.year}</Year>
                <Title theme={theme}>{item.title}</Title>
                <Company theme={theme}>{item.company}</Company>
                <Description theme={theme}>{item.description}</Description>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineWrapper>
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
 
const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-left: 1rem; 
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    left: -1.25rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.palette.primary.main};
    border: 3px solid ${({ theme }) => theme.palette.background.paper};
    border-radius: 50%;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.palette.primary.light};
  }
`;

const TimelineContent = styled.div`
  margin-left: 1rem;
`;

const Year = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 0.25rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Company = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.palette.text.secondary};
`;