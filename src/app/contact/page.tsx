"use client";
import * as React from "react";
import styled from "styled-components";

export default function Contact() {
  const contactInfo = {
    name: "Vipin Patel",
    mobile: "+91 954070 1111",
    whatsapp: "+91 954070 1111",
    email: "vpicsd@gmail.com",
    website: "https://cv.vipinpatel.in",
  };

  return (
    <Main>
      <Article>
        <Heading>Connect With Us</Heading>
        <ContactList>
          <ContactItem
            bg="linear-gradient(to right, #eef2ff, #eff6ff)"
            border="#c7d2fe"
            as="section"
            aria-labelledby="contact-person"
          >
            <Icon color="#4338ca">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Icon>
            <Info>
              <Label id="contact-person">Contact Person</Label>
              <Value>{contactInfo.name}</Value>
            </Info>
          </ContactItem>

          <ContactItem
            bg="linear-gradient(to right, #ecfdf5, #d1fae5)"
            border="#bbf7d0"
            as="section"
            aria-labelledby="mobile-number"
          >
            <Icon color="#047857">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </Icon>
            <Info>
              <Label id="mobile-number">Mobile Number</Label>
              <Link href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`} color="#065f46">
                {contactInfo.mobile}
              </Link>
            </Info>
          </ContactItem>

          <ContactItem
            bg="linear-gradient(to right, #f0fdfa, #cffafe)"
            border="#99f6e4"
            as="section"
            aria-labelledby="whatsapp"
          >
            <Icon color="#0f766e">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              </svg>
            </Icon>
            <Info>
              <Label id="whatsapp">WhatsApp</Label>
              <Link
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                color="#115e59"
              >
                {contactInfo.whatsapp}
              </Link>
            </Info>
          </ContactItem>

          <ContactItem
            bg="linear-gradient(to right, #eff6ff, #e0f2fe)"
            border="#bfdbfe"
            as="section"
            aria-labelledby="email-address"
          >
            <Icon color="#1d4ed8">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </Icon>
            <Info>
              <Label id="email-address">Email Address</Label>
              <Link href={`mailto:${contactInfo.email}`} color="#1e40af">
                {contactInfo.email}
              </Link>
            </Info>
          </ContactItem>

          <ContactItem
            bg="linear-gradient(to right, #fffbeb, #fef3c7)"
            border="#fde68a"
            as="section"
            aria-labelledby="website"
          >
            <Icon color="#b45309">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
            </Icon>
            <Info>
              <Label id="website">Website</Label>
              <Link
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                color="#92400e"
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

const Main = styled.section`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #bfdbfe, #e9d5ff, #fbcfe8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  font-family: "Inter", sans-serif;
  color: #1f2937;
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
  margin-bottom: 2.5rem;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.75rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
`;

interface ContactItemProps {
  bg: string;
  border: string;
}

const ContactItem = styled.li<ContactItemProps>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  background: ${({ bg }) => bg};
  border-radius: 0.75rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ border }) => border};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

interface IconProps {
  color: string;
}

const Icon = styled.div<IconProps>`
  color: ${({ color }) => color};
  flex-shrink: 0;
`;

const Info = styled.div``;

const Label = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
`;

const Value = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

interface LinkProps {
  color: string;
}

const Link = styled.a<LinkProps>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ color }) => color};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
