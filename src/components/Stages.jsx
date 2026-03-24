import { useState } from 'react';
import './Stages.css';

const stages = [
    {
        image: '/cm-7.jpg',
        ageBadge: 'Age 3–5',
        color: '#f5a623',
        title: 'Early Years',
        subtitle: 'Headstart Programme',
        desc: 'Nurturing young minds with our Headstart program. Watch them thrive in a nurturing environment tailored for their growth.',
        points: ['Celebrate Uniqueness', 'Independence & Empowerment', 'Strong Bonds & Close Connections'],
        grades: ['Nursery', 'LKG', 'UKG'],
    },
    {
        image: '/cm-10.jpg',
        ageBadge: 'Age 5–10',
        color: '#2e7d32',
        title: 'Primary School',
        subtitle: 'Launch Programme',
        desc: 'Inspiring curiosity and inquiry. Our rigorous curriculum challenges students to think critically, question, analyse, and solve problems.',
        points: ['Warm & Intimate Environment', 'Versatile Learning Approach', 'Strengthened Foundations'],
        grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'],
    },
    {
        image: '/cm-13.jpg',
        ageBadge: 'Age 11–14',
        color: '#1565c0',
        title: 'Secondary Years',
        subtitle: 'Middle Years Programme',
        desc: 'A transitional phase focusing on holistic development and preparing students for the rigors of senior school academics and life skills.',
        points: ['Critical Thinking', 'Subject Specialization', 'Holistic Growth'],
        grades: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
    },
    {
        image: '/cm-17.jpg',
        ageBadge: 'Age 14–16',
        color: '#1a3a6b',
        title: 'Upper Secondary',
        subtitle: 'Cambridge IGCSE',
        desc: 'Broad adaptable curriculum with fair and reliable assessment — 70+ subjects preparing students for global certifications.',
        points: ['Cambridge IGCSE™', 'Fair & Reliable Assessment', 'Insight to Optimise Achievement'],
        grades: ['Grade 9', 'Grade 10'],
    },
    {
        image: '/cm-18.jpg',
        ageBadge: 'Age 16–19',
        color: '#b22234',
        title: 'Senior School',
        subtitle: 'Cambridge A Levels',
        desc: 'World-class finishing programmes preparing students for university success and beyond with global recognition.',
        points: ['Cambridge AS & A Levels', 'Career Counselling', 'Predictive Performance Insight'],
        grades: ['Grade 11', 'Grade 12'],
    },
];

export default function Stages() {
    const [popup, setPopup] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', grade: '' });
    const [submitted, setSubmitted] = useState(false);

    const openPopup = (stage) => {
        setPopup(stage);
        setFormData({ name: '', email: '', grade: '' });
        setSubmitted(false);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setPopup(null);
        document.body.style.overflow = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => closePopup(), 2000);
    };

    return (
        <section className="stages" id="academics">
            <div className="stages-container">
                <div className="stages-header">
                    <h2 className="stages-title">Stages of Excellence</h2>
                    <p className="stages-sub">One coherent path from age 3 to 19 — each stage builds on the previous, creating deep understanding and confidence.</p>
                </div>

                <div className="stages-scroll">
                    <div className="stages-grid">
                        {stages.map((s, i) => (
                            <div key={i} className="scard">
                                {/* Image */}
                                <div className="scard-img-wrap">
                                    <img src={s.image} alt={s.title} loading="lazy" />
                                    <span className="scard-age" style={{ background: s.color }}>{s.ageBadge}</span>
                                </div>

                                {/* Content */}
                                <div className="scard-body">
                                    <h3 className="scard-title">{s.title}</h3>
                                    <span className="scard-subtitle" style={{ color: s.color }}>{s.subtitle}</span>
                                    <p className="scard-desc">{s.desc}</p>

                                    <ul className="scard-points">
                                        {s.points.map((p, j) => (
                                            <li key={j}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="scard-grades">
                                        {s.grades.map((g, j) => (
                                            <span key={j} className="scard-grade" style={{ borderColor: s.color, color: s.color }}>{g}</span>
                                        ))}
                                    </div>

                                    <button className="scard-btn" style={{ background: s.color }} onClick={() => openPopup(s)}>
                                        Know More
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {popup && (
                <>
                    <div className="stages-overlay" onClick={closePopup}></div>
                    <div className="stages-modal">
                        <button className="stages-modal-close" onClick={closePopup}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="stages-modal-header" style={{ background: popup.color }}>
                            <h3>{popup.title}</h3>
                            <span>{popup.subtitle} • {popup.ageBadge}</span>
                        </div>

                        {submitted ? (
                            <div className="stages-modal-success">
                                <div className="smodal-check">✓</div>
                                <h4>Thank You!</h4>
                                <p>We'll share detailed information shortly.</p>
                            </div>
                        ) : (
                            <form className="stages-modal-form" onSubmit={handleSubmit}>
                                <p className="smodal-info">Get detailed programme information</p>
                                <input type="text" placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                <select value={formData.grade} onChange={(e) => setFormData({ ...formData, grade: e.target.value })} required>
                                    <option value="" disabled>Select Class *</option>
                                    {popup.grades.map((g, i) => (
                                        <option key={i} value={g}>{g}</option>
                                    ))}
                                </select>
                                <button type="submit" style={{ background: popup.color }}>Send Me Details</button>
                            </form>
                        )}
                    </div>
                </>
            )}
        </section>
    );
}
