import './Footer.css';

const quickLinks = [
    { label: 'Know KGA', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admission', href: '#contact' },
    { label: 'Our Campus', href: '#campus' },
    { label: 'FAQs', href: '#faqs' },
];

const academics = [
    { label: 'Cambridge Early Years', href: '#academics' },
    { label: 'Cambridge Primary', href: '#academics' },
    { label: 'Cambridge Lower Secondary', href: '#academics' },
    { label: 'Cambridge IGCSE', href: '#academics' },
    { label: 'Cambridge AS & A Levels', href: '#academics' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Col 1 — Logo & About */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo-kabir-global-academy.png" alt="KGA" style={{ height: '60px', width: 'auto' }} />
                        </div>
                        <p className="footer-desc">Kabir Global Academy is dedicated to nurturing unique potential in every child through a holistic and future-ready curriculum.</p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></a>
                            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                            <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" /></svg></a>
                            <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.85-.46-5.7a3 3 0 00-2.12-2.12C18.54 3.72 12 3.72 12 3.72s-6.54 0-8.42.46A3 3 0 001.46 6.3C1 8.15 1 12 1 12s0 3.85.46 5.7a3 3 0 002.12 2.12c1.88.46 8.42.46 8.42.46s6.54 0 8.42-.46a3 3 0 002.12-2.12C23 15.85 23 12 23 12zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg></a>
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((l, i) => (
                                <li key={i}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Academics */}
                    <div className="footer-col">
                        <h4>Academics</h4>
                        <ul>
                            {academics.map((l, i) => (
                                <li key={i}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Contact */}
                    <div className="footer-col footer-contact">
                        <h4>Contact Us</h4>
                        <div className="fc-items">
                            <div className="fc-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.37 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.33 1.54.57 2.35.7A2 2 0 0122 16.92z" /></svg>
                                <div>
                                    <strong>Call Us</strong>
                                    <span>+91 90990 98479</span>
                                </div>
                            </div>
                            <div className="fc-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                                <div>
                                    <strong>Email Us</strong>
                                    <span>info@kabirglobalacademy.com</span>
                                </div>
                            </div>
                            <div className="fc-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <div>
                                    <strong>Visit Us</strong>
                                    <span>Makrand Desai Road, Vadodara</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kabir Global Academy. All Rights Reserved.</p>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
