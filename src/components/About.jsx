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
                        <img src="/logo-kabir-global-academy.png" alt="KGA" className="about-kga-logo" />

                        <h2 className="about-aim-title">Our aim is to…</h2>

                        <ul className="about-aim-list">
                            <li><span className="aim-bullet">✦</span> Devise and implement a programme that is based on the latest global theories of learning & child development, within the context of a deep Indian ethos.</li>
                            <li><span className="aim-bullet">✦</span> Ignite individual creativity and problem solving skills through the implementation of a flexible, non-formal programme that engages children in collaborative work, experiential learning and creative expressions.</li>
                            <li><span className="aim-bullet">✦</span> Promote the art of story-telling in both traditional and modern formats to enhance expression through varied forms & languages and with it learn about vocabulary, history, customs, festivals, morality and values.</li>
                            <li><span className="aim-bullet">✦</span> Provide opportunities & experiences for learning basic life skills that will help children to be independent, self sufficient and socially well-adjusted.</li>
                            <li><span className="aim-bullet">✦</span> We believe that Parents are Partners in Education and with their support one can unleash a child’s real potential.</li>
                            <li><span className="aim-bullet">✦</span> Provide holistic education that allows children to develop and grow – physically, mentally, emotionally & spiritually.</li>
                        </ul>
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
                            <strong>Three Pathways</strong>
                            <span>State Board, CBSE, Cambridge</span>
                        </div>
                    </div>
                    <div className="astat">
                        <span className="astat-star">✦</span>
                        <div>
                            <strong>8K+ Trusting Parents</strong>
                            <span>Growing community of families</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
