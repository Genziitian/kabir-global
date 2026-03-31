import { useEffect } from 'react';
import './ThankYou.css';

const BROCHURE_URL = 'https://drive.google.com/file/d/1KK3uspwcKnlyFU02TERL7afbkaQHulwz/view?usp=sharing';

export default function ThankYou() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="thankyou">
            <div className="thankyou-card">
                <div className="ty-check-wrap">
                    <div className="ty-check">✓</div>
                </div>

                <h1 className="ty-heading">Thank You!</h1>
                <p className="ty-sub">Your enquiry has been submitted successfully.</p>
                <p className="ty-info">Our admissions team will contact you shortly. In the meantime, explore our campus brochure.</p>

                <div className="ty-brochure">
                    <div className="ty-brochure-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg>
                    </div>
                    <div className="ty-brochure-text">
                        <strong>Campus Brochure</strong>
                        <span>Explore facilities, curriculum & more</span>
                    </div>
                    <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer" className="ty-download-btn">
                        Download PDF
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                    </a>
                </div>

                <div className="ty-contact">
                    <p>Have questions? Reach us directly:</p>
                    <div className="ty-contact-row">
                        <a href="tel:+919099098479">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.37 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.33 1.54.57 2.35.7A2 2 0 0122 16.92z" /></svg>
                            +91 90990 98479
                        </a>
                        <a href="mailto:info@kabirglobalacademy.com">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                            info@kabirglobalacademy.com
                        </a>
                    </div>
                </div>

                <a href="/" className="ty-back">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    Back to Home
                </a>
            </div>
        </div>
    );
}
