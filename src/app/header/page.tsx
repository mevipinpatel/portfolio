"use client";
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
  background: #0d1117;
  color: #fff;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Nav = styled.nav<{ $open?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul<{ $open?: boolean }>`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 56px;
    right: ${(props) => (props.$open ? "0" : "-100%")};
    flex-direction: column;
    background: #0d1117;
    width: 220px;
    padding: 1rem;
    gap: 1rem;
    transition: right 0.3s ease;
    border-left: 1px solid #21262d;
    height: calc(100vh - 56px);
  }
`;

const NavItem = styled.li``;

const StyledLink = styled.a<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "#58a6ff" : "#c9d1d9")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #58a6ff;
  }

  ${(props) =>
    props.$active &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #58a6ff;
      border-radius: 2px;
    }
  `}
`;

// Hamburger with X animation
const Hamburger = styled.div<{ $open: boolean }>`
  display: none;
  cursor: pointer;
  width: 25px;
  height: 20px;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    position: absolute;
    width: 100%;
    height: 3px;
    background: #c9d1d9;
    transition: 0.3s;
    left: 0;
  }

  div:nth-child(1) {
    top: ${(props) => (props.$open ? "9px" : "0")};
    transform: ${(props) => (props.$open ? "rotate(45deg)" : "none")};
  }
  div:nth-child(2) {
    top: 9px;
    opacity: ${(props) => (props.$open ? 0 : 1)};
  }
  div:nth-child(3) {
    top: ${(props) => (props.$open ? "9px" : "18px")};
    transform: ${(props) => (props.$open ? "rotate(-45deg)" : "none")};
  }
`;

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logo = "/logo.png";

  return (
    <HeaderWrapper>
      <Nav $open={menuOpen} ref={navRef}>
        {/* ✅ Logo with next/image */}
        <Logo>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={40} height={40} priority />
            </a>
          </Link>
        </Logo>

        {/* Hamburger */}
        <Hamburger $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>

        {/* ✅ Nav Items */}
        <NavList $open={menuOpen}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/cv", label: "Resume/CV" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <NavItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <StyledLink
                  $active={isActive(item.href)}
                  onClick={() => setMenuOpen(false)} // ✅ close menu on click
                >
                  {item.label}
                </StyledLink>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}
