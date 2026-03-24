import { useRef } from 'react';
import './CampusLife.css';

const row1 = [
    { type: 'text', bg: '#b22234', icon: '⚽', quote: "Age-appropriate athletic development emphasizing balance, coordination, teamwork, and sportsmanship. Access to football fields, outdoor courts.", label: 'Sports & Physical Education' },
    { type: 'img', src: '/cm-7.jpg', label: 'MakerSpace' },
    { type: 'text', bg: '#1565c0', icon: '🔬', quote: "Hands-on learning environments where imagination meets engineering. Students prototype, tinker, build, and turn ideas into tangible creations.", label: 'Maker Spaces & Innovation Labs' },
    { type: 'img', src: '/cm-10.jpg', label: 'Performing Arts' },
    { type: 'text', bg: '#2e7d32', icon: '🎭', quote: "Music, Theatre, Creative Expression — Students explore, develop and perform. Building confidence through artistic development.", label: 'Performing Arts' },
    { type: 'img', src: '/cm-13.jpg', label: 'Library & Media' },
    { type: 'img', src: '/cm-17.jpg', label: 'Assembly' },
    { type: 'text', bg: '#0d47a1', icon: '📚', quote: "A rich collection and nurturing environment that fosters a lifelong love of reading, research, and independent learning.", label: 'Library & Reading Culture' },
    { type: 'img', src: '/cm-18.jpg', label: 'Citizenship' },
    { type: 'text', bg: '#f5a623', icon: '🌱', quote: "Eco-clubs, organic gardens, and sustainability projects teach students environmental responsibility and real-world problem solving.", label: 'Sustainability & Environment' }
];

const images = ['/cm-7.jpg', '/cm-10.jpg', '/cm-13.jpg', '/cm-17.jpg', '/cm-18.jpg', '/slide-1.png', '/slide-2.png', '/slide-3.png'];
const eventsList = [
    "Day at School", "Talent Time", "Geeta Chanting Competition", "Handwriting Event",
    "Math Cracker", "Spelling Bee", "Community Helpers Mela", "IDS Culmination",
    "Marrs Play 2 Learn Carnival", "Mum and Me", "Annual Sports Day", "Annual Concert",
    "Annual Picnic", "Graduation"
];

const row2 = eventsList.map((ev, i) => ({ type: 'img', src: images[i % images.length], label: ev }));

function Card({ item }) {
    if (item.type === 'img') {
        return (
            <div className="cl-card cl-card-img">
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="cl-card-label">{item.label}</div>
            </div>
        );
    }

    return (
        <div className="cl-card cl-card-text" style={{ background: item.bg }}>
            <span className="cl-card-icon">{item.icon}</span>
            <p className="cl-card-quote">"{item.quote}"</p>
            <strong className="cl-card-cat">{item.label}</strong>
        </div>
    );
}

export default function CampusLife() {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    const scroll = (ref, dir) => {
        if (ref.current) {
            ref.current.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
        }
    };

    return (
        <section className="cl" id="campus-life">
            <div className="cl-container">
                <div className="cl-header-wrap">
                    <div className="cl-header-content">
                        <span className="cl-tag">Holistic Development</span>
                        <h2 className="cl-title">Life at <span>Kabir Global Academy</span></h2>
                        <p className="cl-sub">Beyond classrooms, we cultivate a vibrant environment where arts, sports, events, and innovation thrive.</p>
                    </div>
                </div>

                <div className="cl-slider-group">
                    {/* Row 1 — Core Facilities */}
                    <div className="cl-slider-row">
                        <div className="cl-slider-nav">
                            <h3 className="cl-row-title">Core Facilities</h3>
                            <div className="cl-arrows">
                                <button className="cl-arr" onClick={() => scroll(row1Ref, 'left')} aria-label="Previous">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                </button>
                                <button className="cl-arr" onClick={() => scroll(row1Ref, 'right')} aria-label="Next">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="cl-track" ref={row1Ref}>
                            {[...row1, ...row1, ...row1].map((item, i) => <Card key={i} item={item} />)}
                        </div>
                    </div>

                    {/* Row 2 — Events */}
                    <div className="cl-slider-row">
                        <div className="cl-slider-nav">
                            <h3 className="cl-row-title">School Events</h3>
                            <div className="cl-arrows">
                                <button className="cl-arr" onClick={() => scroll(row2Ref, 'left')} aria-label="Previous">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                </button>
                                <button className="cl-arr" onClick={() => scroll(row2Ref, 'right')} aria-label="Next">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="cl-track" ref={row2Ref}>
                            {[...row2, ...row2].map((item, i) => <Card key={i} item={item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
