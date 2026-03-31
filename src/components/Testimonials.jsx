import './Testimonials.css';

export default function Testimonials() {
    return (
        <section className="testi" id="testimonials">
            <div className="testi-container">
                <div className="testi-header">
                    <h2 className="testi-title">Voices of KGA</h2>
                    <p className="testi-sub">What our students and families say</p>
                </div>

                <div className="testi-featured">
                    <div className="testi-featured-card">
                        <div className="testi-featured-badge">Featured Student</div>
                        <p className="testi-case">
                            Parth Agrawal studied Cambridge A Levels and applied to IIT Delhi for BTech Computer Science. He describes the admissions process as straightforward.
                        </p>
                        <blockquote className="testi-quote-large">
                            "Cambridge didn't close any doors. It opened more."
                        </blockquote>
                        <div className="testi-author-info">
                            <span className="author-name">— Parth Agrawal</span>
                            <span className="author-tag">Cambridge A Level Alumnus, IIT Delhi</span>
                        </div>
                    </div>
                </div>

                <div className="testi-recognition">
                    <div className="testi-recognition-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        <p>
                            Cambridge qualifications are accepted for IIT-JEE and AIIMS. The Association of Indian Universities grants full equivalence — IGCSE = Class 10, A Levels = Class 12.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
