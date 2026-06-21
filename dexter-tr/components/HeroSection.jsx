import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HeroSection.scss";

export function HeroSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section className="hero-section" id="home">
            <video
                className="hero-video"
                src="/hero-bg.mp4"
                autoPlay
                muted
                loop
            />
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                <div>
                    <p>Hello, I'm</p>
                    <h1>Dexter <span>Tr</span></h1>
                </div>
                <p>The architect of digital luxury ...</p>
                <div className="buttons">
                    <button
                        onClick={() => window.location.href = "#contact"}
                        className="btn-primary"
                    >Contact Me</button>
                    <button
                        onClick={() => window.location.href = "#work"}
                        className="btn-secondary"
                    >View My Work</button>
                </div>
            </div>
        </section>
    )
}   