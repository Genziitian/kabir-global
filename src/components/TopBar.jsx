import './TopBar.css';

const marqueeItems = [
    { text: 'Academic Year 2026-27 — Enroll Now for Pre-KG to Grade 12!' },
    { text: 'CBSE Affiliated  |  ISO 9001:2015 Certified  |  10+ Years of Academic Excellence' },
    { text: '100% Board Result  |  State-Level Sports Champions' },
    { text: 'Smart Classrooms  |  AI-Integrated Learning  |  Holistic Development' },
    { text: 'Global Exposure Programs  |  International Collaborations' },
];

export default function TopBar() {
    return (
        <div className="topbar" role="banner" aria-label="Announcements">
            <div className="topbar-track">
                <div className="topbar-content">
                    {marqueeItems.map((item, i) => (
                        <span key={i} className="topbar-item">
                            {item.text}
                            <span className="topbar-divider">✦</span>
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {marqueeItems.map((item, i) => (
                        <span key={`dup-${i}`} className="topbar-item" aria-hidden="true">
                            {item.text}
                            <span className="topbar-divider">✦</span>
                        </span>
                    ))}
                </div>
            </div>
            <a href="#apply" className="topbar-cta">
                APPLY NOW
            </a>
        </div>
    );
}
