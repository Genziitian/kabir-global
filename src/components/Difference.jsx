import './Difference.css';

const pillars = [
    {
        image: '/cm-17.jpg',
        title: 'Inquiry-Led Learning',
        desc: "In a Cambridge classroom, the lesson begins with a question. Students explore concepts — in Science they design experiments, in Economics they run a mock market. Learning happens through doing, and through thinking about what they did."
    },
    {
        image: '/cm-10.jpg',
        title: 'Personal Connections',
        desc: "With excellent student-teacher ratios from the early years, every child is known, seen, and nurtured. Every child at KGA is known by name, by strength, and by what they find hard."
    },
    {
        image: '/cm-7.jpg',
        title: 'Real-World Relevance',
        desc: "Global Perspectives — a subject with no equivalent in CBSE or State Board — asks students to research a real-world issue, build an argument, and defend it. This is the kind of thinking universities and employers look for."
    }
];

export default function Difference() {
    return (
        <section className="diff" id="difference">
            <div className="diff-container">
                <div className="diff-header">
                    <h2 className="diff-title">What makes a Cambridge education different</h2>
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
