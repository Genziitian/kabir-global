import './WhyChoose.css';

const reasons = [
    { number: '15:1', label: 'Student–Teacher Ratio', icon: '👨‍🏫' },
    { number: '50+', label: 'Expert Faculty', icon: '🎓' },
    { number: '25+', label: 'Clubs & Activities', icon: '🏅' },
    { number: '5★', label: 'Parent Satisfaction', icon: '⭐' },
    { number: '100%', label: 'Board Results', icon: '📊' },
    { number: '10+', label: 'Acres Green Campus', icon: '🌳' },
];

export default function WhyChoose() {
    return (
        <section className="why-choose section-navy" id="campus">
            <div className="container">
                <span className="about-label" style={{ textAlign: 'center', display: 'block', color: 'var(--gold)' }}>Why Kabir Global Academy</span>
                <h2 className="section-title" style={{ color: 'var(--white)' }}>
                    Numbers That Speak for <span className="gold-accent">Themselves</span>
                </h2>
                <div className="gold-line"></div>
                <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Our commitment to excellence reflects in every metric — from academic results to parent satisfaction.
                </p>

                <div className="why-grid">
                    {reasons.map((item, i) => (
                        <div className="why-card" key={i}>
                            <div className="why-card-icon">{item.icon}</div>
                            <div className="why-card-number">{item.number}</div>
                            <div className="why-card-label">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
