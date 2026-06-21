import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/TechStackSection.scss";

const stack = [
    {
        category: "Languages",
        items: [
            "JavaScript / TypeScript",
            "Python",
            "Rust",
            "HTML5 / CSS3 (SCSS)",
        ],
    },
    {
        category: "Frameworks",
        items: [
            "Next.js / React",
            "NestJS / Angular",
            "Django",
        ],
    },
    {
        category: "Infrastructure",
        items: [
            "Prisma ORM",
            "PostgreSQL",
        ],
    },
];

export function TechStackSection() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    }, []);

    return (
        <section className="tech-section" id="tech-stack">

            <div className="tech-header" data-aos="fade-up">
                <p className="tech-eyebrow">Under the hood</p>
                <h2 className="tech-title">Tech Stack</h2>
                <p className="tech-subtitle">
                    The tools and technologies I reach for when precision matters.
                </p>
            </div>

            <div className="tech-grid">
                {stack.map((group, gi) => (
                    <div
                        key={group.category}
                        className="tech-group"
                        data-aos="fade-up"
                        data-aos-delay={gi * 120}
                    >
                        <p className="tech-group-label">{group.category}</p>
                        <ul className="tech-group-items">
                            {group.items.map((item, ii) => (
                                <li
                                    key={item}
                                    className="tech-item"
                                    data-aos="fade-up"
                                    data-aos-delay={gi * 120 + ii * 60}
                                >
                                    <span className="tech-item-dot" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    );
}