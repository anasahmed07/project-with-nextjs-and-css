import Image from "next/image";
import '../styles/designSystem.css'

export default function Header() {
  return (
    <div className="hero">
      <div className="navbar container">
        <div className="navbar__logo">
          <Image
            src="/images/Logo/LogoWhite.svg"
            alt=""
            height={40} width={40}
            className="navbar__logo--image"
          />
          <div className="navbar__logo--text">Start</div>
        </div>
        <div className="navbar__menu hidden">
          <a href="/" className="navbar__menu--1">
            Home
          </a>
          <a href="/portfolio" className="navbar__menu--2">
            Portfolio
          </a>
          <a href="/services" className="navbar__menu--3">
            Services
          </a>
          <a href="/contact" className="navbar__menu--4">
            Contact
          </a>
        </div>

        <div className="navbar__icons">
          <i className="bi bi-list"></i>
          <i className="bi bi-x-lg hide"></i>
        </div>
      </div>
    </div>
  );
}

