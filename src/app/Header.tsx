"use client";

import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onToggle: () => void;
}

export default function Header({ onToggle }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  const logo = "/logo.png";

  return (
    <HeaderWrapper>
      <Nav $open={menuOpen} ref={navRef}>
        {/* Logo */}
        <Logo>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={42} height={42} priority />
            </a>
          </Link>
        </Logo>

        {/* Hamburger */}
        <Hamburger $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        {/* Nav Items */}
        <NavList $open={menuOpen}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/timeline", label: "Timeline" },
            { href: "/projects", label: "Projects" },
            { href: "/cv", label: "Resume/CV" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <NavItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <StyledLink
                  $active={pathname === item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </StyledLink>
              </Link>
            </NavItem>
          ))}

          {/* Theme Toggle Button */}
          <ThemeToggle onClick={onToggle}>🌓</ThemeToggle>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}

//
// Styled Components
//

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
}
`;

const NavList = styled.ul<{ $open: boolean }>`
  display: flex;
  list-style: none;
  gap: 1.5rem;
 align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.palette.background.paper};
    padding: 1rem;
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

const NavItem = styled.li``;

const StyledLink = styled.a<{ $active: boolean }>`
  color: ${({ $active, theme }) =>
    $active ? theme.palette.primary.main : theme.palette.text.primary};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Hamburger = styled.div<{ $open: boolean }>`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background: ${({ theme }) => theme.palette.text.primary};
    margin: 5px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  border: none;
  background: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.palette.action.hover};
  }
`;
