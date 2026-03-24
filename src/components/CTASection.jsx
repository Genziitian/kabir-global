import './CTASection.css';

export default function CTASection() {
    return (
        <section className="cta-section" id="contact">
            <div className="cta-bg"></div>
            <div className="container cta-content">
                <div className="cta-left">
                    <h2 className="cta-title">
                        Begin Your Child's Journey to <span className="cta-title-gold">Excellence</span>
                    </h2>
                    <p className="cta-desc">
                        Admissions are open for the Academic Year 2026-27. Schedule a campus visit or apply online to secure your child's spot at one of the region's finest educational institutions.
                    </p>
                    <div className="cta-actions">
                        <a href="#apply" className="btn-gold">
                            Apply Now →
                        </a>
                        <a href="tel:+911234567890" className="btn-outline">
                            📞 Call Us
                        </a>
                    </div>
                </div>
                <div className="cta-right">
                    <div className="cta-info-card">
                        <div className="cta-info-item">
                            <span className="cta-info-icon">📍</span>
                            <div>
                                <strong>Campus Address</strong>
                                <p>Kabir Global Academy, Main Road, Near City Centre</p>
                            </div>
                        </div>
                        <div className="cta-info-item">
                            <span className="cta-info-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>+91 12345 67890</p>
                            </div>
                        </div>
                        <div className="cta-info-item">
                            <span className="cta-info-icon">✉️</span>
                            <div>
                                <strong>Email</strong>
                                <p>admissions@kabirglobalacademy.edu</p>
                            </div>
                        </div>
                        <div className="cta-info-item">
                            <span className="cta-info-icon">🕐</span>
                            <div>
                                <strong>Office Hours</strong>
                                <p>Mon – Sat, 8:00 AM – 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
