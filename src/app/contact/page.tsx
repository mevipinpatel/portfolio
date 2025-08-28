"use client";
import * as React from "react";
import styled from "styled-components";
import { Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";


export default function Contact() {
  const theme = useTheme();

  const contactInfo = {
    name: "Vipin Patel",
    mobile: "+91 954070 1111",
    whatsapp: "+91 954070 1111",
    email: "vipinpateldev@gmail.com",
    website: "https://cv.vipinpatel.in",
  };

  return (
    <Main theme={theme}>
      <Article theme={theme}>
        <Typography variant="h1" className="title">Connect With Us</Typography>
        <ContactList>
          <ContactItem theme={theme} as="section" aria-labelledby="contact-person">
            <Icon color={theme.palette.primary.main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Icon>
            <Info>
              <Label theme={theme} id="contact-person">Contact Person</Label>
              <Value theme={theme}>{contactInfo.name}</Value>
            </Info>
          </ContactItem>

          <ContactItem theme={theme} as="section" aria-labelledby="mobile-number">
            <Icon color={theme.palette.success.main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0
                  1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0
                  0 1 22 16.92z"/>
              </svg>
            </Icon>
            <Info>
              <Label theme={theme} id="mobile-number">Mobile Number</Label>
              <Link href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
                theme={theme} color={theme.palette.success.dark}>
                {contactInfo.mobile}
              </Link>
            </Info>
          </ContactItem>

          <ContactItem theme={theme} as="section" aria-labelledby="whatsapp">
            <Icon color={theme.palette.secondary.main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </Icon>
            <Info>
              <Label theme={theme} id="whatsapp">WhatsApp</Label>
              <Link
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                color={theme.palette.secondary.dark}
              >
                {contactInfo.whatsapp}
              </Link>
            </Info>
          </ContactItem>

          <ContactItem theme={theme} as="section" aria-labelledby="email-address">
            <Icon color={theme.palette.info.main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Icon>
            <Info>
              <Label theme={theme} id="email-address">Email Address</Label>
              <Link href={`mailto:${contactInfo.email}`}
                theme={theme} color={theme.palette.info.dark}>
                {contactInfo.email}
              </Link>
            </Info>
          </ContactItem>

          <ContactItem theme={theme} as="section" aria-labelledby="website">
            <Icon color={theme.palette.warning.main}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </Icon>
            <Info>
              <Label theme={theme} id="website">Website</Label>
              <Link
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                color={theme.palette.warning.dark}
              >
                {contactInfo.website.replace(/(^\w+:|^)\/\//, "")}
              </Link>
            </Info>
          </ContactItem>
        </ContactList>
      </Article>
    </Main>
  );
}

/* ===================== */
/*  Styled Components    */
/* ===================== */

const Main = styled.section<{ theme: Theme }>`
 font-family: ${({ theme }) => theme.typography.fontFamily};
  background: ${({ theme }) => theme.gradients.hero};
  color: ${({ theme }) => theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem 4rem;
  font-family: "Inter", sans-serif; 
`;

const Article = styled.article<{ theme: Theme }>`
   background: ${({ theme }) => theme.palette.background.paper};
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  max-width: 50rem;
  width: 100%; 
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



const ContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.li<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? theme.palette.action.hover
      : theme.palette.background.paper};
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.palette.divider};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 640px) {
    gap: 0.5rem;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Icon = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  flex-shrink: 0;
  @media (max-width: 640px) {
    display: flex;
  }
`;

const Info = styled.div``;

const Label = styled.h2<{ theme: Theme }>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const Value = styled.p<{ theme: Theme }>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (max-width: 767px) {
     font-size: 1rem;
  }
`;

const Link = styled.a<{ color: string; theme: Theme }>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ color }) => color};
  text-decoration: none;
 @media (max-width: 767px) {
     font-size: 1rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;
