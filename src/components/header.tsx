import Image from "next/image";
import Link from "next/link";
import "../styles/designSystem.css"

export default function Header() {
  return (
    <div className="hero">
      <div className="navbar container">
        <Link href="/" className="navbar__logo">
          <Image
            src="/images/Logo/LogoWhite.svg"
            alt=""
            height={40} width={40}
            className="navbar__logo--image"
          />
          <div className="navbar__logo--text">TechNova</div>
        </Link>
        <div className="navbar__menu hidden">
          <Link href="/" className="navbar__menu--1">Home</Link>
          <Link href="/portfolio" className="navbar__menu--2">Portfolio</Link>
          <Link href="/services" className="navbar__menu--3">Services</Link>
          <Link href="/contact" className="navbar__menu--4">Contact</Link>
        </div>

        <div className="navbar__icons">
          <i className="bi bi-list"></i>
          <i className="bi bi-x-lg hide"></i>
        </div>
      </div>
    </div>
  );
}

