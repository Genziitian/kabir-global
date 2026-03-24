import { useState } from 'react';
import './FAQs.css';

const faqs = [
    { q: 'Which board/curriculum does KGA offer?', a: 'Kabir Global Academy follows the Cambridge International curriculum, offering a coherent path from Early Years (age 3) through Cambridge Advanced (age 19), including Cambridge IGCSE and AS & A Levels.' },
    { q: 'Which grades are offered at KGA?', a: 'We offer Pre-KG, Nursery, LKG, UKG, and Grades 1 through 12. Our programmes cover Early Years, Primary, Lower Secondary, Upper Secondary (IGCSE), and Advanced levels.' },
    { q: 'What are the school timings?', a: 'Pre-Primary: 9:00 AM to 12:30 PM. Primary & Secondary: 8:00 AM to 2:30 PM. Extended day care is available upon request.' },
    { q: 'What is the admission process?', a: 'Fill out the admission enquiry form on our website or visit the campus. Our admissions team will schedule an interaction, followed by a campus tour. Documents and registration can then be completed.' },
    { q: 'What co-curricular activities are available?', a: 'We offer sports (football, cricket, swimming), performing arts (dance, drama, music), visual arts, robotics, coding, yoga, and various clubs for holistic development.' },
    { q: 'What is the student-teacher ratio?', a: 'We maintain a healthy 12:1 student-teacher ratio, ensuring personalized attention and effective learning for every child.' },
];

export default function FAQs() {
    const [open, setOpen] = useState(null);

    return (
        <section className="faqs" id="faqs">
            <div className="faqs-container">
                {/* Left — Image */}
                <div className="faqs-img-col">
                    <div className="faqs-img-card">
                        <img src="/cm-13.jpg" alt="Life at KGA" loading="lazy" />
                        <div className="faqs-img-overlay">
                            <h3>Life at KGA</h3>
                            <p>Curious about our campus? Find answers to common questions here.</p>
                        </div>
                    </div>
                </div>

                {/* Right — FAQs */}
                <div className="faqs-content">
                    <span className="faqs-tag">Information</span>
                    <h2 className="faqs-title">Frequently Asked Questions</h2>

                    <div className="faqs-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                                    <span>{i + 1}. {faq.q}</span>
                                    <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>
                                <div className="faq-a">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
