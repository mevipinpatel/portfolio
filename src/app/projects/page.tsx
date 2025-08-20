"use client";
import * as React from "react";
import styled from "styled-components";

/* ============ Styled ============ */

const ProjectsSection = styled.section`
  padding: 3rem 1.5rem;
  background: linear-gradient(180deg, #f8faff 0%, #eef3ff 100%);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #1e3a8a;
  font-weight: 700;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  
   @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

const ProjectCard = styled.a`
  display: block;
  background: #fff;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #e0e7ff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardMedia = styled.div`
  position: relative;
  height: 180px;
  background: #eef3ff;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.4s ease;
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13, 17, 23, 0.45), rgba(13, 17, 23, 0));
  pointer-events: none;
`;

const CardContent = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: #1e3a8a;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0 0 1rem;
  line-height: 1.55;
`;

const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
`;

const TechBadge = styled.span`
  background: #eef3ff;
  color: #3367d6;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 9999px;
  font-weight: 500;
`;

const Hint = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0.25rem 0 0;
`;

/* ============ Helper ============ */

// Deterministic placeholder (no random URLs → avoids hydration mismatch)
const placeholderFor = (title: string) =>
  `https://placehold.co/800x450/png?text=${encodeURIComponent(title)}`;

/* ============ Component ============ */

export default function Projects() {
  const projects: {
    title: string;
    description: string;
    stack: string[];
    link: string;
    image?: string;
  }[] = [
      {
        title: "Dr. Reddys Biologics",
        description:
          "At Dr. Reddy’s, we constantly strive to bring the most advanced medicines within the reach of millions around the world. ",
        stack: ["HTML", "HTML5", "SCSS", "REACT", "NEXT", "GIT"],
        link: "https://drreddysbiologics.com/",
        image: undefined,
      },
      {
        title: "SudLife",
        description:
          "Star Union Dai-ichi Life Insurance (SUD Life) is a joint venture formed in 2009 between two major Indian PSU banks - Bank of India and Union Bank of India - and Japan's Dai-ichi Life International Holdings LLC.",
        stack: ["HTML", "HTML5", "SCSS", "REACT", "NEXT", "GIT"],
        link: "https://www.sudlife.in/",
        image: undefined,
      },
      {
        title: "Fiitjee",
        description:
          "FIITJEE was created in 1992 by the vision and toil of Mr. D. K. Goel, a Mechanical Engineering graduate from IIT Delhi. We had a very humble beginning as a forum for IIT-JEE, with a vision to provide an ideal launch pad for serious JEE aspirants.",
        stack: ["HTML", "HTML5", "SCSS", "REACT", "NEXT", "GIT"],
        link: "https://www.fiitjee.com/",
        image: undefined,
      },
      {
        title: "Bosch",
        description:
          "Bosch built its new logistics and transportation platform, L.OS, in a strategic collaboration with AWS.",
        stack: ["HTML", "HTML5", "SCSS", "REACT", "NEXT", "GIT"],
        link: "http://l-os.com/",
        image: undefined,
      },
      {
        title: "Carrerwill",
        description:
          "Careerwill is a 6 years old, Delhi-based Indian educational technology company, providing test preparation and supplemental education with engaging LIVE classes.",
        stack: ["HTML", "CSS", "Bootstrap", "JQuery"],
        link: "https://careerwill.com/",
        image: undefined,
      },
      {
        title: "Propindex",
        description:
          "Magicbricks Propindex is a quarterly research publication offering comprehensive, data-rich insights into India's housing markets.",
        stack: ["HTML", "HTML5", "CSS", "CSS3"],
        link: "https://property.magicbricks.com/microsite/buy/propindex/",
        image: undefined,
      },
      {
        title: "Saraswatam",
        description:
          "A portal providing blended learning opportunities integrated into regular education.",
        stack: ["Angular", "HTML", "CSS", "CSS", "Bootstrap"],
        link: "https://saraswatam.com/home",
        image: undefined,
      },
      {
        title: "TP Nagar",
        description:
          "India’s largest online freight and vehicle transport directory improving operational efficiency.",
        stack: ["HTML", "CSS", "jQuery UI"],
        link: "https://www.tpnagar.com/",
        image: undefined,
      },
      {
        title: "Simon Sceptre",
        description:
          "Incident management system for case files, patrols, tasks, and property security management.",
        stack: ["HTML", "CSS", "Bootstrap", "jQuery"],
        link: "https://simonsceptre.com/Login/",
        image: undefined,
      },
      {
        title: "India Bizzness",
        description:
          "Incident management system for property security, with subject/victim forms and patrol assignments.",
        stack: ["HTML", "CSS", "Bootstrap", "jQuery"],
        link: "https://www.indiabizzness.com/",
        image: undefined,
      },
      {
        title: "Mmtc Limited",
        description:
          "India's largest international trading company, striving to outperform its own records for decades.",
        stack: ["HTML", "CSS", "Foundation", "jQuery"],
        link: "https://mmtclimited.com/",
        image: undefined,
      },

    ];

  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectList>
        {projects.map((proj, idx) => {
          const src = proj.image || placeholderFor(proj.title);
          return (
            <ProjectCard key={`${proj.title}-${idx}`} href={proj.link} target="_blank" rel="noopener noreferrer">
              <CardMedia>
                <ProjectImage
                  src={src}
                  alt={`${proj.title} project thumbnail`}
                  onError={(e) => {
                    // Fallback if a custom image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = placeholderFor(proj.title);
                  }}
                />
                <MediaOverlay />
              </CardMedia>

              <CardContent>
                <ProjectTitle>{proj.title}</ProjectTitle>
                <ProjectDescription>{proj.description}</ProjectDescription>

                <TechStackWrapper>
                  {proj.stack.map((tech, i) => (
                    <TechBadge key={i}>{tech}</TechBadge>
                  ))}
                </TechStackWrapper>

                <Hint>Click to view project →</Hint>
              </CardContent>
            </ProjectCard>
          );
        })}
      </ProjectList>
    </ProjectsSection>
  );
}
