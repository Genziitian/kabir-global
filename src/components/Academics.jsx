import './Academics.css';

const programs = [
    {
        level: 'Pre-Primary',
        grades: 'Pre-KG – KG',
        icon: '🧒',
        color: '#E8B82E',
        features: ['Play-based learning', 'Montessori approach', 'Creative exploration', 'Social skill building'],
    },
    {
        level: 'Primary',
        grades: 'Grade 1 – 5',
        icon: '📖',
        color: '#1A3A6B',
        features: ['CBSE curriculum', 'STEM integration', 'Language proficiency', 'Activity-based learning'],
    },
    {
        level: 'Middle School',
        grades: 'Grade 6 – 8',
        icon: '🔬',
        color: '#B22234',
        features: ['Advanced sciences', 'Olympiad training', 'Leadership programs', 'Digital literacy'],
    },
    {
        level: 'Senior Secondary',
        grades: 'Grade 9 – 12',
        icon: '🎓',
        color: '#D4A017',
        features: ['Board exam prep', 'Career counseling', 'Competitive exam coaching', 'Research projects'],
    },
];

export default function Academics() {
    return (
        <section className="academics section-white" id="academics">
            <div className="container">
                <span className="about-label" style={{ textAlign: 'center', display: 'block' }}>Academic Programs</span>
                <h2 className="section-title">
                    Curriculum Designed for <span className="gold-accent">Future Leaders</span>
                </h2>
                <div className="gold-line"></div>
                <p className="section-subtitle">
                    Our comprehensive CBSE curriculum is enriched with 21st-century skills, ensuring students are prepared for a rapidly evolving world.
                </p>

                <div className="academics-grid">
                    {programs.map((prog, i) => (
                        <div className="academics-card" key={i} style={{ '--card-accent': prog.color }}>
                            <div className="academics-card-header">
                                <span className="academics-card-icon">{prog.icon}</span>
                                <div>
                                    <h3 className="academics-card-level">{prog.level}</h3>
                                    <span className="academics-card-grades">{prog.grades}</span>
                                </div>
                            </div>
                            <ul className="academics-card-features">
                                {prog.features.map((f, fi) => (
                                    <li key={fi} className="academics-card-feature">
                                        <span className="academics-card-check">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="academics-card-link">
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
