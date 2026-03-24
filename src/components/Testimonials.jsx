import { useRef } from 'react';
import './Testimonials.css';

const testimonials = [
    { quote: "We have a strong sense of belonging at KGA because we are part of such a positive learning environment. The teachers are incredibly supportive.", name: "Meera Sharma", role: "Parent" },
    { quote: "Each child is encouraged to grow at their own pace. The school's focus on values alongside academics has helped my child become more confident.", name: "Rajesh Patel", role: "Parent" },
    { quote: "The holistic education I received at KGA gave me the tools to think critically and adapt to any challenge. It laid the foundation for my university success.", name: "Ananya Desai", role: "Alumnus" },
    { quote: "The warm and inclusive atmosphere makes every day special for our daughter. We are delighted with their progress and happiness.", name: "Priya Mehta", role: "Parent" },
    { quote: "KGA's emphasis on creative expression through art, dance and drama truly sets it apart. My son discovered his love for theatre here.", name: "Vikram Tandon", role: "Parent" },
    { quote: "The Cambridge curriculum combined with Indian values gives our children a globally competitive education rooted in culture.", name: "Sunita Rao", role: "Parent" },
    { quote: "As an alumnus, I can confidently say KGA shaped who I am today. The discipline, confidence and compassion I learnt here stay with me.", name: "Arjun Iyer", role: "Alumnus" },
];

export default function Testimonials() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scroller = scrollRef.current;
        if (!scroller) return;

        let animId;
        let isPaused = false;

        const pause = () => isPaused = true;
        const play = () => isPaused = false;

        scroller.addEventListener('mouseenter', pause);
        scroller.addEventListener('mouseleave', play);
        scroller.addEventListener('touchstart', pause, { passive: true });
        scroller.addEventListener('touchend', play);

        const step = () => {
            if (!isPaused) {
                scroller.scrollLeft += 1;
                // Seamlessly jump back to 0 when the first cluster finishes flowing to guarantee the infinite loop
                if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
                    scroller.scrollLeft = 0;
                }
            }
            animId = requestAnimationFrame(step);
        };
        animId = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(animId);
            scroller.removeEventListener('mouseenter', pause);
            scroller.removeEventListener('mouseleave', play);
            scroller.removeEventListener('touchstart', pause);
            scroller.removeEventListener('touchend', play);
        };
    }, []);

    return (
        <section className="testi" id="testimonials">
            <div className="testi-container">
                <div className="testi-header">
                    <div>
                        <h2 className="testi-title">Voices of KGA</h2>
                        <p className="testi-sub">What our community says about us</p>
                    </div>
                    <div className="testi-arrows">
                        <button className="testi-arr" onClick={() => scroll('left')} aria-label="Previous">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button className="testi-arr" onClick={() => scroll('right')} aria-label="Next">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                <div className="testi-track" ref={scrollRef}>
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="testi-card">
                            <div className="testi-card-top"></div>
                            <blockquote className="testi-quote">"{t.quote}"</blockquote>
                            <div className="testi-author">
                                <span className="testi-dash">—</span>
                                <strong>{t.name},</strong> <em>{t.role}</em>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
