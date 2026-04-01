import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackLeadCAPI } from '../utils/trackLead';
import './Contact.css';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyuxnjG9ELpSdtEoCCwo0KWzT1pau79rCmeLnsZAcJV35_VFAX3Tz6S9Px3xXmkqgap/exec';

const gradeOptions = ['Select Class*', 'Pre-KG', 'Nursery', 'Junior KG', 'Senior KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

export default function Contact() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('idle');
    const [form, setForm] = useState({ studentName: '', grade: '', parentName: '', phone: '', email: '', message: '' });
    const isSubmitting = useRef(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting.current) return;
        isSubmitting.current = true;
        setStatus('sending');

        try {
            const eventId = "lead_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);

            // 1. Fire Browser Pixel Lead Event with Deduplication ID
            if (window.fbq) {
                window.fbq('track', 'Lead', {
                    content_name: 'Admission Enquiry',
                    content_category: 'Leads'
                }, { eventID: eventId });
            }

            const payload = new FormData();
            Object.entries(form).forEach(([k, v]) => payload.append(k, v));
            payload.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
            payload.append('sourceForm', 'Footer Contact Section');
            payload.append('pageUrl', window.location.href);

            const params = new URLSearchParams(window.location.search);
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
                if (params.has(param)) payload.append(param, params.get(param));
            });

            await fetch(GOOGLE_SHEET_URL, { method: 'POST', body: payload });

            // 2. Send to Facebook Conversions API (CAPI) with same eventID
            await trackLeadCAPI({
                firstName: form.studentName,
                lastName: form.parentName,
                phone: form.phone,
                email: form.email,
                eventID: eventId
            });

            setStatus('success');
            setForm({ studentName: '', grade: '', parentName: '', phone: '', email: '', message: '' });
            setTimeout(() => {
                isSubmitting.current = false;
                navigate('/thank-you');
            }, 1000);
        } catch {
            setStatus('error');
            isSubmitting.current = false;
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                {/* Left — Contact Info */}
                <div className="contact-info">
                    <span className="contact-tag">Get in Touch</span>
                    <h2 className="contact-heading">Contact <span>Info</span></h2>

                    <div className="contact-cards">
                        <div className="c-card">
                            <div className="c-card-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                            </div>
                            <div>
                                <h4>Call Us</h4>
                                <a href="tel:+919099098479">+91 90990 98479</a>
                            </div>
                        </div>

                        <div className="c-card">
                            <div className="c-card-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                            </div>
                            <div>
                                <h4>Email Us</h4>
                                <a href="mailto:info@kabirglobalacademy.com">info@kabirglobalacademy.com</a>
                            </div>
                        </div>

                        <div className="c-card">
                            <div className="c-card-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4>Visit Us</h4>
                                <p>Makrand Desai Road, Vadodara – 390 015, Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right — Form */}
                <div className="contact-form-wrap">
                    <h3 className="cf-heading">Admission Enquiry</h3>
                    <span className="cf-sub">Admissions open for AY 2026–27</span>

                    {status === 'success' ? (
                        <div className="cf-success">
                            <div className="cf-check">✓</div>
                            <h4>Thank You!</h4>
                            <p>We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className="cf-form" onSubmit={handleSubmit}>
                            <input type="text" name="studentName" value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} placeholder="Student Name*" required />
                            <select name="grade" value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} required>
                                {gradeOptions.map((o, i) => <option key={i} value={i === 0 ? '' : o} disabled={i === 0}>{o}</option>)}
                            </select>
                            <input type="text" name="parentName" value={form.parentName} onChange={(e) => setForm({ ...form, parentName: e.target.value })} placeholder="Parent's Name*" required />
                            <div className="form-row-2">
                                <input type="tel" name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone No.*" required pattern="[0-9]{10}" />
                                <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Address (Optional)" />
                            </div>
                            <textarea name="message" rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message (Optional)"></textarea>
                            <button type="submit" disabled={status === 'sending'}>
                                {status === 'sending' ? <span className="cf-spinner"></span> : 'Submit Enquiry'}
                            </button>
                            {status === 'error' && <p className="cf-error">Something went wrong. Try again.</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
