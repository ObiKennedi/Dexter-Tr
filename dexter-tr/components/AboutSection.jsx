import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/AboutSection.scss";

export function AboutSection() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    }, []);

    return (
        <section className="about-section" id="about">

            {/* ── Row 1: Title + Two-column intro ── */}
            <div className="about-intro">
                <h2
                    className="about-title"
                    data-aos="fade-right"
                    data-aos-delay="0"
                >
                    Who is <span>Dexter Tr</span>?
                </h2>

                <div className="about-intro-body">
                    <p
                        className="about-lead"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Technical precision, bespoke aesthetics, and an uncompromising
                        commitment to raw execution — that's what I bring to every project.
                    </p>

                    <div className="about-intro-cols">
                        <p data-aos="fade-up" data-aos-delay="200">
                            I'm a senior software developer based in Owerri, Nigeria,
                            operating on a singular belief: great digital architecture
                            should be unapologetically personal, scalable, and completely
                            free of artificial bloat. Every system I build is crafted from
                            the ground up — rejecting template dependencies and plugin-heavy
                            shortcuts in favour of pure, tailor-made engineering.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="320">
                            From advanced application infrastructure to high-end interface
                            animations, I deliver digital experiences defined by structural
                            depth, absolute refinement, and functional individuality. My
                            expertise spans product architecture, digital monetisation
                            mechanics, and luxury branding — positioning me at the precise
                            intersection of high-performance engineering and minimalist
                            premium design.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Row 2: Banner image ── */}
            <div
                className="about-banner"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <img src="/about-portrait.png" alt="Dexter Tr work banner" />
            </div>

            {/* ── Row 3: Portrait + editorial columns ── */}
            <div className="about-profile">
                <div
                    className="about-portrait"
                    data-aos="fade-right"
                    data-aos-delay="0"
                >
                    <img src="/about-me.jfif" alt="Dexter Tr" />
                </div>

                <div className="about-profile-body">
                    <div
                        className="about-profile-col"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <p>
                            I build for people who refuse to compromise on digital
                            execution. My work — an intentional harmony of flawless code
                            and aesthetic minimalism — is rooted in narrative structure,
                            absolute technical performance, and a deep, intuitive
                            understanding of user experience.
                        </p>
                        <p>
                            By bypassing rigid content management platforms, I construct
                            clean, lightning-fast ecosystems using a modern core stack of
                            Next.js, TypeScript, and robust database layers like PostgreSQL
                            — ensuring that every line of code serves a deliberate purpose.
                        </p>
                    </div>

                    <div
                        className="about-profile-col"
                        data-aos="fade-up"
                        data-aos-delay="280"
                    >
                        <p>
                            I handle the entire lifecycle of a digital product —
                            transforming complex entrepreneurial logic into functional,
                            beautifully orchestrated realities. From structuring
                            comprehensive project milestones to deploying content-gated
                            architectures and secure digital wallets, my focus remains
                            entirely on custom durability.
                        </p>
                        <p>
                            True luxury in the digital space isn't about unnecessary
                            decoration. It's about seamless velocity, invisible complexity,
                            and elite craftsmanship. I invite you to experience a web where
                            performance and premium design converge — built personally,
                            by me, for you.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}