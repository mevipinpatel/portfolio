"use client";
import styled from "styled-components";

export default function Home() {
  const projects: {
    title: string;
    description?: string;
    stack?: string[];
    link?: string;
    image?: string; // optional, will fall back to placeholder
  }[] = [
      {
        title: "Dr. Reddys Biologics",
        description:
          "At Dr. Reddy’s, we constantly strive to bring the most advanced medicines within the reach of millions around the world. ",
        stack: ["HTML", "HTML5", "CSS", "REACT", "NEXT", "GIT"],
        link: "https://drreddysbiologics.com/",
        image: undefined,
      },
      {
        title: "SudLife",
        description:
          "Star Union Dai-ichi Life Insurance (SUD Life) is a joint venture formed in 2009 between two major Indian PSU banks - Bank of India and Union Bank of India - and Japan's Dai-ichi Life International Holdings LLC.",
        stack: ["HTML", "HTML5", "CSS", "REACT", "NEXT", "GIT"],
        link: "https://www.sudlife.in/",
        image: undefined,
      },
      {
        title: "Fiitjee",
        description:
          "FIITJEE was created in 1992 by the vision and toil of Mr. D. K. Goel, a Mechanical Engineering graduate from IIT Delhi. We had a very humble beginning as a forum for IIT-JEE, with a vision to provide an ideal launch pad for serious JEE aspirants.",
        stack: ["HTML", "HTML5", "CSS", "REACT", "NEXT", "GIT"],
        link: "https://www.fiitjee.com/",
        image: undefined,
      },
      {
        title: "Bosch",
        description:
          "Bosch built its new logistics and transportation platform, L.OS, in a strategic collaboration with AWS.",
        stack: ["HTML", "HTML5", "CSS", "REACT", "NEXT", "GIT"],
        link: "http://l-os.com/",
        image: undefined,
      },

    ];

     const skills: string[] = [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3 / SASS",
        "Tailwind CSS",
      ];
  return (
    <Main>
      {/* Hero Section */}
      <HeroSection>
        <Title>Senior Frontend Developer</Title>
        <Subtitle>
  Hello, I&apos;m <strong>Vipin</strong>, a passionate and experienced Senior
  Frontend Developer based in Delhi (NCR). I specialize in building
  high-performance, accessible, and responsive web applications with a
  focus on modern JavaScript frameworks like{" "}
  <strong>React</strong> and <strong>Next.js</strong>.
</Subtitle>

        <PrimaryButton href="/projects">🚀 View My Work</PrimaryButton>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
  <SectionTitle>About Me</SectionTitle>
  <AboutContent>
    <ImageWrapper>
      <AboutImage
        src="vipin.png"
        alt="Vipin - Frontend Developer"
      />
    </ImageWrapper>
    <AboutTextCard>
      <AboutText>
        With over <strong>8+ years</strong> of experience in frontend
        development, I have worked on projects ranging from small startups
        to enterprise-level applications. My mission is to create
        experiences that blend clean design, accessibility, and cutting-edge
        technology.
      </AboutText>
    </AboutTextCard>
  </AboutContent>
</AboutSection>

      {/* Skills Section */}
      <SkillsSection>
        <SectionTitle>Core Skills</SectionTitle>
        <SkillList>
           {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillList>
      </SkillsSection>

      {/* Projects Section */}
      <ProjectsSection>
        <SectionTitle>Recent Projects</SectionTitle>
        <ProjectsGrid>
         {projects.map((proj, idx) => {
          return (
            <ProjectCard key={idx}>
              <Image src="/projects.svg" alt={proj.title} />
              <ProjectTitle>{proj.title}</ProjectTitle>
              <ProjectDesc>
               {proj.description}
              </ProjectDesc>
            </ProjectCard>
          );
        })}


        </ProjectsGrid>
      </ProjectsSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <SectionTitle>Testimonials</SectionTitle>
        <TestimonialList>
          <TestimonialCard>
  <Quote>
    &ldquo;Vipin’s attention to detail and technical expertise transformed
    our project into a smooth, high-performance application.&rdquo;
  </Quote>
  <Author>- Xavier RIVIERE, CTO</Author>
</TestimonialCard>

<TestimonialCard>
  <Quote>
    &ldquo;Working with Vipin was an absolute pleasure. He brought creative
    solutions and delivered on time.&rdquo;
  </Quote>
  <Author>- Arun Kumar, Project Manager</Author>
</TestimonialCard>
        </TestimonialList>
      </TestimonialsSection>

      {/* Call-to-Action Footer */}
      <CTASection>
        <CTAHeading>🚀 Ready to work together?</CTAHeading>
        <PrimaryButton href="/contact">Contact Me</PrimaryButton>
      </CTASection>
    </Main>
  );
}

/* ===================== */
/* Styled Components     */
/* ===================== */

const Main = styled.section`
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: #1f2937;
  background: linear-gradient(to bottom right, #bfdbfe, #e9d5ff, #fbcfe8);
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #374151;
  max-width: 700px;
  margin: 1rem 0 2rem;
  strong {
    color: #4f46e5;
  }
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #4338ca, #6d28d9);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.5);
  }
`;

/* About Section */
const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #f472b6, #60a5fa);
  display: inline-block;
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
  max-width: 200px;
  max-height: 200px;
`;

const AboutImage = styled.img`
  width: 180px;
  height: 180px;
 
  border-radius: 50%;
  border: 5px solid white;
  display: block;
`;

const AboutTextCard = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #1f2937;

  strong {
    color: #7c3aed;
  }
`;
/* Skills Section */
const SkillsSection = styled.section`
  background: rgba(255, 255, 255, 0.6);
  padding: 4rem 2rem;
  backdrop-filter: blur(10px);
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled.div`
  background: linear-gradient(135deg, #c4b5fd, #fbcfe8);
  color: #3b0764;
  padding: 1rem 1.25rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 4px 10px rgba(196, 181, 253, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(196, 181, 253, 0.5);
    background: linear-gradient(135deg, #a78bfa, #f472b6);
  }
`;
/* Projects Section */
const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  gap: 2rem;
  @media (max-width: 480px) {
     grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.1);
  text-align: center;
  padding: 1rem 1rem 2rem;
`;

const Image = styled.img`
  width: 40%;
  height: 180px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 1rem;
  font-weight: 700;
`;

const ProjectDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

/* Testimonials Section */
const TestimonialsSection = styled.section`
  background: rgba(255, 255, 255, 0.8);
  padding: 4rem 2rem;
`;

const TestimonialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 350px;
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.1);
`;

const Quote = styled.p`
  font-style: italic;
  color: #444;
`;

const Author = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: #4f46e5;
`;

/* CTA Section */
const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(to bottom right, #bfdbfe, #e9d5ff, #fbcfe8);
    color: #6640e9;
`;

const CTAHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
