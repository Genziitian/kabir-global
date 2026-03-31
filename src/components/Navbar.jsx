import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Campus Life', href: '#campus-life' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
            <div className="navbar-inner">
                {/* Logo — Left */}
                <a href="#home" className="navbar-logo">
                    <img
                        src="/logo-kabir-global-academy.png"
                        alt="Kabir Global Academy"
                        className="navbar-logo-img"
                        style={{ height: '50px', width: 'auto' }}
                    />
                </a>

                {/* Nav Links — Center */}
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="navbar-link">{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Cambridge Logo — Right */}
                <div className="navbar-badge">
                    <img src="/cambridge.webp" alt="Cambridge Assessment International Education" className="navbar-cambridge" />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`navbar-hamburger ${mobileOpen ? 'active' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
                <ul className="navbar-mobile-links">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="navbar-mobile-link" onClick={() => setMobileOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className="btn-gold navbar-mobile-cta" onClick={() => setMobileOpen(false)}>
                    Book a Visit
                </a>
            </div>

            {mobileOpen && <div className="navbar-overlay" onClick={() => setMobileOpen(false)} />}
        </nav>
    );
}
