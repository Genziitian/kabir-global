import './TopBar.css';

const marqueeItems = [
    { text: "Vadodara's 1st Cambridge Pathway School · Admissions Open AY 2026–27 · Cambridge Early Years (Age 3+) & Grade 1 · Makrand Desai Road · Call: +91 90990 98479" },
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
