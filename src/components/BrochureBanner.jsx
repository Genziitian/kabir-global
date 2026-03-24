import { useState, useEffect } from 'react';
import './BrochureBanner.css';

const BROCHURE_URL = 'https://drive.google.com/file/d/1KK3uspwcKnlyFU02TERL7afbkaQHulwz/view?usp=sharing';

export default function BrochureBanner() {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '' });
    const [status, setStatus] = useState('idle');

    const open = () => { setShow(true); document.body.style.overflow = 'hidden'; };
    const close = () => { setShow(false); document.body.style.overflow = ''; };

    useEffect(() => {
        const handleOpen = () => open();
        window.addEventListener('openPopup', handleOpen);
        return () => window.removeEventListener('openPopup', handleOpen);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending'); // Optionally you can just use 'done' if you don't want a loader, but 'sending' matches others.
        try {
            const payload = new FormData();
            Object.entries(form).forEach(([k, v]) => payload.append(k, v));
            // Standardize field names to match Hero/Contact for GS compatibility
            payload.append('studentName', form.name);
            payload.delete('name');

            payload.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
            payload.append('sourceForm', 'Brochure Popup Form');
            payload.append('pageUrl', window.location.href);

            const params = new URLSearchParams(window.location.search);
            ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
                if (params.has(param)) payload.append(param, params.get(param));
            });

            await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', { method: 'POST', body: payload });
        } catch (err) {
            console.error(err);
        }

        setStatus('done');
        setTimeout(() => { close(); setStatus('idle'); setForm({ name: '', email: '', phone: '' }); window.open(BROCHURE_URL, '_blank'); }, 1500);
    };

    return (
        <>
            <div className="brochure-banner" id="brochure">
                <div className="brochure-container">
                    <div className="brochure-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg>
                    </div>
                    <div className="brochure-text">
                        <span className="brochure-tag">Free Resource</span>
                        <h3>Download Our <span>Campus Brochure</span></h3>
                        <p>Explore our world-class facilities, comprehensive curriculum, and the unique Kabir learning experience.</p>
                    </div>
                    <div className="brochure-cta">
                        <button className="brochure-btn" onClick={open}>
                            Get Brochure Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                        </button>
                        <span className="brochure-meta">PDF Format • Free Download</span>
                    </div>
                </div>
            </div>

            {show && (
                <>
                    <div className="bp-overlay" onClick={close}></div>
                    <div className="bp-modal">
                        <button className="bp-close" onClick={close}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                        {status === 'done' ? (
                            <div className="bp-success">
                                <div className="bp-check">✓</div>
                                <h4>Starting Download...</h4>
                                <p>Your brochure will open in a new tab.</p>
                            </div>
                        ) : (
                            <>
                                <div className="bp-header">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M12 18v-6" /><path d="m9 15 3 3 3-3" /></svg>
                                    <h3>Download Campus Brochure</h3>
                                    <p>Fill in your details to receive the brochure</p>
                                </div>
                                <form className="bp-form" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                    <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                    <input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required pattern="[0-9]{10}" />
                                    <button type="submit">Download Brochure</button>
                                </form>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
