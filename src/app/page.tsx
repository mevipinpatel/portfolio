"use client";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3 / SCSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Git", icon: <FaGitAlt /> },
];

  return (
    <Main>
      {/* Hero */}
      <HeroSection>
        <ImageWrapper>
          <AboutImage src="vipin.png" alt="Vipin - Frontend Developer" />
        </ImageWrapper>
        <Typography variant="h1" className="title">Senior Frontend Developer</Typography>
        <Subtitle>
          Hello, I&apos;m <strong>Vipin</strong>, a passionate and experienced
          Senior Frontend Developer based in Delhi (NCR). I specialize in
          building high-performance, accessible, and responsive web applications
          with a focus on modern JavaScript frameworks like{" "}
          <strong>React</strong> and <strong>Next.js</strong>.
        </Subtitle>
        <PrimaryButton href="/projects">🚀 View My Work</PrimaryButton>
      </HeroSection>

      {/* Skills */}
      <Section $bg="paper">
        <Typography variant="h2" className="section-title">Skills</Typography>
         
        <SkillList>
          {skills.map((s) => (
            <SkillItem key={s.name}>
              <span className="icon">{s.icon}</span>
              <span>{s.name}</span>
            </SkillItem>
          ))}
        </SkillList>
      </Section>

      {/* Testimonials */}
      <Section $bg="default">
        <Typography variant="h2" className="section-title">Testimonials</Typography>
        <TestimonialList>
          <Card>
            <Quote>
              &ldquo;Vipin’s attention to detail and technical expertise
              transformed our project into a smooth, high-performance
              application.&rdquo;
            </Quote>
            <Author>- Xavier RIVIERE, CTO</Author>
          </Card>
          <Card>
            <Quote>
              &ldquo;Working with Vipin was an absolute pleasure. He brought
              creative solutions and delivered on time.&rdquo;
            </Quote>
            <Author>- Arun Kumar, Project Manager</Author>
          </Card>
        </TestimonialList>
      </Section>

      {/* CTA */}
      <CTASection>
        <Typography variant="h2" className="section-title">🚀 Ready to work together?</Typography>
        {/* <CTAHeading>🚀 Ready to work together?</CTAHeading> */}
        <PrimaryButton href="/contact">Contact Me</PrimaryButton>
      </CTASection>
    </Main>
  );
}

/* ===================== */
/* Styled Components     */
/* ===================== */

const Main = styled.section`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  line-height: 1.6;
  background: ${({ theme }) => theme.gradients.hero};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  text-align: center;

  .title {
   background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
`;



const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 1rem 0 2rem;
  color: ${({ theme }) => theme.palette.text.secondary};

  strong {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const PrimaryButton = styled.a`
  background: ${({ theme }) => theme.gradients.brand};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  font-size: 1.1rem;
  text-decoration: none;
   box-shadow: ${({ theme }) => theme.shadows[2]};
  transition: all 0.3s ease;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.gradients.brandAlt};
  }
`;

const Section = styled.section<{ $bg: "default" | "paper" }>`
  padding: 4rem 2rem;
  background: ${({ theme, $bg }) => theme.palette.background[$bg]};

  .section-title {
    margin-bottom: 2rem;
    background: ${({ theme }) => theme.gradients.brand};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
`;
 



const ImageWrapper = styled.div`
  padding: 8px;
  display: flex;
  background: ${({ theme }) => theme.gradients.brand};
  margin-bottom: 2rem;
`;

const AboutImage = styled.img`
  width: 180px;
  height: 180px;
  border: 5px solid ${({ theme }) => theme.palette.common.white};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows[2]};
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  background: ${({ theme }) => theme.gradients.skill};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.contrastText}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  .icon {
    font-size: 2rem;
  }
`;
 
const TestimonialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

   .section-title {
      margin-bottom: 2rem;
      text-align: center;
    }
`;

const Quote = styled.p`
  font-style: italic;
`;

const Author = styled.p`
 font-size: 1.25rem;
  max-width: 700px; 
  margin-top: 1rem; 
  color: ${({ theme }) => theme.palette.primary.main};
  strong {
    color: ${({ theme }) => theme.palette.primary.main};
  }
 
`;

const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.gradients.cta};
  color: ${({ theme }) => theme.palette.text.primary};

  .section-title {
    margin-bottom: 2rem; 
  }
`;
 
