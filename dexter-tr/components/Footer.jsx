import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"
import { ArrowUpRight } from "lucide-react";
import "../styles/Footer.scss";

const footerLinks = [
    { name: "Home",         href: "#home"         },
    { name: "About",        href: "#about"         },
    { name: "Tech Stack",   href: "#tech-stack"    },
    { name: "Portfolio",    href: "#portfolio"     },
    { name: "Testimonials", href: "#testimonials"  },
    { name: "Contact",      href: "#contact"       },
];

const socials = [
    { icon: <FiGithub size={16} />,    label: "GitHub",    href: "https://github.com"    },
    { icon: <FiTwitter size={16} />,   label: "Twitter",   href: "https://twitter.com"   },
    { icon: <FiLinkedin size={16} />,  label: "LinkedIn",  href: "https://linkedin.com"  },
    { icon: <FiInstagram size={16} />, label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="footer">

            {/* ── Top bar ── */}
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Dexter Tr logo" />
                        <span>Dexter <em>Tr</em></span>
                    </div>
                    <p className="footer-tagline">
                        Custom engineering. Premium design.<br />
                        Built from scratch — every time.
                    </p>
                    <div className="footer-socials">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="footer-social-link"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <nav className="footer-nav" aria-label="Footer navigation">
                    <p className="footer-col-label">Navigation</p>
                    <ul>
                        {footerLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="footer-contact">
                    <p className="footer-col-label">Contact</p>
                    <ul>
                        <li>
                            <a href="mailto:contact@dextertr.pro">
                                contact@dextertr.pro
                            </a>
                        </li>
                        <li>
                            <a href="tel:07017218635">07017218635</a>
                        </li>
                        <li>
                            <span>Area L World Bank,<br />New Owerri, Imo State,<br />Nigeria</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-cta">
                    <p className="footer-col-label">Ready to build?</p>
                    <p className="footer-cta-text">
                        Let's create something precise, performant, and
                        unapologetically yours.
                    </p>
                    <a href="#contact" className="footer-cta-btn">
                        Start a Project <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="footer-divider" />

            {/* ── Bottom bar ── */}
            <div className="footer-bottom">
                <p className="footer-copy">
                    © {year} Dexter Tr. All rights reserved.
                </p>
                <p className="footer-made">
                    Designed & built by <span>Dexter Tr</span> · Owerri, Nigeria
                </p>
                <button
                    className="footer-back-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    ↑ Back to top
                </button>
            </div>

        </footer>
    );
}