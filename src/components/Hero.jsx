import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyuxnjG9ELpSdtEoCCwo0KWzT1pau79rCmeLnsZAcJV35_VFAX3Tz6S9Px3xXmkqgap/exec';

const slides = [
    {
        image: '/gallery-1.jpg',
        badge: "Vadodara's 1st Cambridge School",
        title: "Vadodara's first",
        titleItalic: 'Cambridge school',
        titleEnd: '35 years of Kabir behind it.',
        desc: 'Admissions open for Cambridge Early Years (Age 3+) and Grade 1 — Academic Year 2026–27',
        tags: ["Vadodara's 1st Cambridge School", '35 Years of Kabir Legacy'],
    },
    {
        image: '/gallery-5.jpg',
        badge: 'CBSE Affiliated | ISO Certified',
        title: 'Beyond',
        titleItalic: 'Textbooks,',
        titleEnd: 'Into Life',
        desc: 'Holistic development through sports, arts, and innovation.',
        tags: ['Safe School Award', '95% Parents Recommend'],
    },
    {
        image: '/gallery-8.jpg',
        badge: 'Pre-KG to Grade 12',
        title: 'Building',
        titleItalic: 'Character,',
        titleEnd: 'Shaping Futures',
        desc: 'A vibrant campus where curiosity thrives and excellence is a tradition.',
        tags: ['Smart Classrooms', '50+ Expert Faculty'],
    },
];

const gradeOptions = [
    'Select Class*',
    'Pre-KG', 'Nursery', 'Junior KG', 'Senior KG',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
    'Grade 11 (Science)', 'Grade 11 (Commerce)',
    'Grade 12 (Science)', 'Grade 12 (Commerce)',
];

export default function Hero() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [animClass, setAnimClass] = useState('active');
    const [formStatus, setFormStatus] = useState('idle');
    const timerRef = useRef(null);

    const [form, setForm] = useState({
        studentName: '',
        grade: '',
        parentName: '',
        phone: '',
        message: '',
    });

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => changeSlide('next'), 5000);
    };

    useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

    const changeSlide = (dir) => {
        setAnimClass('exit');
        setTimeout(() => {
            setCurrent((prev) => {
                if (dir === 'next') return (prev + 1) % slides.length;
                if (dir === 'prev') return (prev - 1 + slides.length) % slides.length;
                return dir;
            });
            setAnimClass('active');
        }, 350);
    };

    const goTo = (i) => { if (i === current) return; clearInterval(timerRef.current); changeSlide(i); startTimer(); };
    const handlePrev = () => { clearInterval(timerRef.current); changeSlide('prev'); startTimer(); };
    const handleNext = () => { clearInterval(timerRef.current); changeSlide('next'); startTimer(); };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');
        try {
            const payload = new FormData();
            Object.entries(form).forEach(([k, v]) => payload.append(k, v));
            payload.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
            payload.append('sourceForm', 'Header Hero Form');
            payload.append('pageUrl', window.location.href);

            const params = new URLSearchParams(window.location.search);
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
                if (params.has(param)) payload.append(param, params.get(param));
            });

            await fetch(GOOGLE_SHEET_URL, { method: 'POST', body: payload });
            setFormStatus('success');
            setForm({ studentName: '', grade: '', parentName: '', phone: '', message: '' });
            setTimeout(() => navigate('/thank-you'), 1000);
        } catch {
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 4000);
        }
    };

    const slide = slides[current];

    return (
        <section className="hero" id="home">
            <div className="hero-layout">
                {/* ===== LEFT — SLIDER ===== */}
                <div className="hero-slider">
                    <div className="hero-slider-frame">
                        <img src={slide.image} alt="" className={`hero-slider-img ${animClass}`} />
                        <div className="hero-slider-overlay"></div>

                        <div className={`hero-slider-content ${animClass}`}>
                            <span className="hero-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                {slide.badge}
                            </span>
                            <h1 className="hero-title">
                                {slide.title} <em>{slide.titleItalic}</em><br />{slide.titleEnd}
                            </h1>
                            <p className="hero-desc">{slide.desc}</p>
                            <div className="hero-tags">
                                {slide.tags.map((t, i) => (
                                    <span key={i} className="hero-tag">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            {/* Explore Academics CTA button removed per request */}
                            <div style={{ marginTop: '2rem' }}></div>
                        </div>

                        {/* Arrows */}
                        <button className="hero-arr hero-arr-l" onClick={handlePrev} aria-label="Previous">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button className="hero-arr hero-arr-r" onClick={handleNext} aria-label="Next">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>

                        {/* Dots */}
                        <div className="hero-dots">
                            {slides.map((_, i) => (
                                <button key={i} className={`hero-dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== RIGHT — FORM ===== */}
                <div className="hero-form-panel">
                    <div className="hero-form-card">
                        <h3 className="hero-form-heading">Start the conversation</h3>

                        {formStatus === 'success' ? (
                            <div className="hero-form-success">
                                <div className="hf-check">✓</div>
                                <h4>Thank You!</h4>
                                <p>Our admissions team will contact you shortly.</p>
                            </div>
                        ) : (
                            <form className="hero-form" onSubmit={handleSubmit} autoComplete="off">
                                <input type="text" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Student Name*" required />
                                <select name="grade" value={form.grade} onChange={handleChange} required>
                                    {gradeOptions.map((opt, i) => (
                                        <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>{opt}</option>
                                    ))}
                                </select>
                                <input type="text" name="parentName" value={form.parentName} onChange={handleChange} placeholder="Parent's Name*" required />
                                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone No.*" required pattern="[0-9]{10}" />
                                <textarea name="message" rows="2" value={form.message} onChange={handleChange} placeholder="Message (Optional)"></textarea>
                                <button type="submit" className="hf-submit" disabled={formStatus === 'sending'}>
                                    {formStatus === 'sending' ? <span className="hf-spinner"></span> : (
                                        <>
                                            Submit Enquiry
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                                        </>
                                    )}
                                </button>
                                {formStatus === 'error' && <p className="hf-error">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
