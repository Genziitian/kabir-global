import './Achievements.css';

const credentials = [
    { number: '815 years', label: "Cambridge University, world's 3rd oldest" },
    { number: '121', label: "Nobel Laureates — produced by Cambridge alumni" },
    { number: '56%', label: "of Cambridge students globally are in India" },
];

export default function Achievements() {
    return (
        <section className="achievements" id="achievements">
            <div className="ach-container">
                <div className="ach-header">
                    <span className="ach-tag">Cambridge Recognition</span>
                    <h2 className="ach-title">Global <span>Excellence</span></h2>
                </div>

                <div className="ach-slider-wrap">
                    <div className="ach-cards">
                        {credentials.map((item, i) => (
                            <div key={i} className="ach-card">
                                <div className="ach-card-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m22 4-10 10.01-3-3" /></svg>
                                </div>
                                <h2 className="ach-card-num">{item.number}</h2>
                                <p className="ach-card-label">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ach-footer">
                    <div className="ach-recognition-pill">
                        <span className="ach-pill-icon">✦</span>
                        <p>Cambridge qualifications are recognised by IIT-JEE, AIIMS, and universities across India and the world.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
