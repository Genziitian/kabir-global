import './About.css';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                {/* TOP — Split Hero */}
                <div className="about-split">
                    {/* Left — Blue card with text */}
                    <div className="about-left">
                        <div className="about-left-card" style={{ display: 'none' }}>
                            {/* Text removed per request as the new image includes this text natively */}
                        </div>
                        <div className="about-left-imgwrap">
                            <img src="/about us .png" alt="Kabir Family of Educators" />
                        </div>
                    </div>

                    {/* Right — White content */}
                    <div className="about-right">
                        <img src="/logo-kabir-global-academy.png" alt="KGA" className="about-kga-logo" style={{ height: '70px', width: 'auto' }} />

                        <h2 className="about-aim-title">A Legacy shaped by Care & Conviction</h2>
                        <div className="about-legacy-text">
                            <p>For 35 years, Kabir families have trusted us with something they cannot get back — their children's time. That trust shapes everything we do.</p>
                            <p>In 2023, we asked ourselves which curriculum best prepares children for the world they are about to inherit. We reviewed every option available. The answer was Cambridge.</p>
                            <p>The Kabir Global Academy is that answer — Vadodara's first Cambridge school, built on three and a half decades of Kabir education.</p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM — Stats strip */}
                <div className="about-stats-strip">
                    <div className="astat">
                        <span className="astat-star">✦</span>
                        <div>
                            <strong>Founded in 1990</strong>
                            <span>Kabir Group begins in Vadodara</span>
                        </div>
                    </div>
                    <div className="astat">
                        <span className="astat-star">✦</span>
                        <div>
                            <strong>35 Years of Excellence</strong>
                            <span>Growth in academics and values</span>
                        </div>
                    </div>
                    <div className="astat">
                        <span className="astat-star">✦</span>
                        <div>
                            <strong>10,000+ Schools</strong>
                            <span>In the worldwide Cambridge network</span>
                        </div>
                    </div>
                    <div className="astat">
                        <span className="astat-star">✦</span>
                        <div>
                            <strong>160+ Countries</strong>
                            <span>Cambridge is used across the globe</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
