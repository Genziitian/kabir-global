import './Difference.css';

const pillars = [
    {
        image: '/cm-17.jpg',
        title: 'Inquiry-Led Learning',
        desc: "Curiosity drives every discovery. We don't just teach subjects—we help children fall in love with questions, exploration, and the joy of finding answers."
    },
    {
        image: '/cm-10.jpg',
        title: 'Personal Connections',
        desc: "With excellent student-teacher ratios from the early years, every child is known, seen, and nurtured. We're not just educators—we're partners in each child's journey."
    },
    {
        image: '/cm-7.jpg',
        title: 'Real-World Relevance',
        desc: "From creative arts to Makerspace, from community field trips to scientific investigations, learning at KGA is tangible, meaningful & connected to life beyond the classroom."
    }
];

export default function Difference() {
    return (
        <section className="diff" id="difference">
            <div className="diff-container">
                <div className="diff-header">
                    <h2 className="diff-title">The Kabir Global Difference</h2>
                    <span className="diff-sub">THREE CORE PILLARS:</span>
                </div>

                <div className="diff-grid">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="diff-card">
                            <div className="diff-img-wrap">
                                <img src={pillar.image} alt={pillar.title} />
                            </div>
                            <div className="diff-content">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
