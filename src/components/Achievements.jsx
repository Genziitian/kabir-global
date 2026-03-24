import { useRef } from 'react';
import './Achievements.css';

const achievements = [
    {
        title: "Christmas Cup – Skating Tournament",
        date: "December 27, 2024",
        desc: "Heeyan Dalal of Jr. KG-B secured 1st prize in the Recreational Inline Under-6 category, organized by BFA Mangalpore Sports.",
        image: "/Heeyan-Dalal-768x654.jpg"
    },
    {
        title: "Inter School Competition 2024",
        date: "December 04, 2024",
        desc: "Dhyana Boghani (1st in Kavya Manch), Dravya Mehta (1st in Show N Tell), and Ditya Pandya (1st in Story Telling) shined at the Inter School Competition.",
        image: "/Dravy-Mehta-and-Ditya-Pandya-768x485.jpg"
    },
    {
        title: "UCMAS State Level Examination",
        date: "July 23, 2024",
        desc: "Anika Jaiswal (Sr. KG-D) achieved the impressive position of 3rd Runner-up in the UCMAS State Level Examination.",
        image: "/Anika-Jaiswal-768x1016.jpg"
    },
    {
        title: "Inter Club Speed Skating Trials",
        date: "June 10, 2024",
        desc: "Ravit Joshi secured 1st Rank and Veeha Patel secured 2nd Rank in the BSA Inter Club Speed Skating Trials.",
        image: "/veeha-patel-768x822.jpg"
    },
    {
        title: "IIRA Fancy Dress Competition",
        date: "January 10, 2024",
        desc: "Tashya Thakkar secured the 2nd Position in Fancy Dress at the IIRA International School Competition.",
        image: "/Tashya-Thakkar-Sr.-KG-E-768x457.jpg"
    },
    {
        title: "UCMAS International Competition",
        date: "January 13, 2023",
        desc: "Vansh Thakkar of Jr. KG-E proudly secured the 2nd Runner Up Trophy in the UCMAS International Competition.",
        image: "/Vansh-Thakkar-Jr-768x750.jpg"
    },
    {
        title: "Itosu Ryu Karatedo India",
        date: "January 13, 2023",
        desc: "Vansh Thakkar secured the 3rd Position in the National Tournament of Itosu-Ryu-Karatedo India.",
        image: "/Vansh-Thakkar-Jr-3-659x1024.jpg"
    },
    {
        title: "Kick Boxing President Cup",
        date: "January 12, 2023",
        desc: "Jenny Chudiwala from Jr. KG-E secured the 1st Position in the Kick Boxing President Cup.",
        image: "/jenny-chudiwala-768x807.jpg"
    }
];

export default function Achievements() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
        }
    };

    return (
        <section className="achievements" id="achievements">
            <div className="ach-container">
                <div className="ach-header">
                    <div>
                        <span className="ach-tag">Student Excellence</span>
                        <h2 className="ach-title">Our <span>Achievements</span></h2>
                        <p className="ach-sub">Celebrating the extraordinary talents and victories of our students.</p>
                    </div>
                    <div className="ach-arrows">
                        <button className="ach-arr" onClick={() => scroll('left')} aria-label="Previous">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button className="ach-arr" onClick={() => scroll('right')} aria-label="Next">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                <div className="ach-track" ref={scrollRef}>
                    {/* Triplicate array for infinite scrolling feel */}
                    {[...achievements, ...achievements, ...achievements].map((item, i) => (
                        <div key={i} className="ach-card">
                            <div className="ach-img-wrap">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="ach-date-badge">{item.date}</div>
                            </div>
                            <div className="ach-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
