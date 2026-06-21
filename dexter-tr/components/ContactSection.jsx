import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Phone, Mail, Send} from "lucide-react";
import { RiGithubLine, RiTwitterXLine, RiLinkedinBoxLine, RiInstagramLine} from "react-icons/ri"
import "../styles/ContactSection.scss";

const WEB3FORMS_TOKEN = "50b9514a-dadd-45a9-827a-00533fa01b28";

const contactDetails = [
    {
        icon: <MapPin size={16} />,
        label: "Address",
        value: "Area L World Bank, New Owerri, Imo State, Nigeria",
    },
    {
        icon: <Phone size={16} />,
        label: "Phone",
        value: "07017218635",
        href: "tel:07017218635",
    },
    {
        icon: <Mail size={16} />,
        label: "Email",
        value: "contact@dextertr.pro",
        href: "mailto:contact@dextertr.pro",
    },
];

const socials = [
    { icon: <RiGithubLine size={18} />,    label: "GitHub",    href: "https://github.com" },
    { icon: <RiTwitterXLine size={18} />,   label: "Twitter",   href: "https://twitter.com" },
    { icon: <RiLinkedinBoxLine size={18} />,  label: "LinkedIn",  href: "https://linkedin.com" },
    { icon: <RiInstagramLine size={18} />, label: "Instagram", href: "https://instagram.com" },
];

export function ContactSection() {
    const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus]   = useState("idle"); // idle | loading | success | error

    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-out-quart" });
    }, []);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "50b9514a-dadd-45a9-827a-00533fa01b28",
                    ...form,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="contact-section" id="contact">

            {/* ── Header ── */}
            <div className="contact-header" data-aos="fade-up">
                <p className="contact-eyebrow">Get in touch</p>
                <h2 className="contact-title">Let's Work Together</h2>
                <p className="contact-subtitle">
                    Have a project in mind? Reach out and let's build something
                    precise, performant, and unapologetically yours.
                </p>
            </div>

            {/* ── Body ── */}
            <div className="contact-body">

                {/* Left: details + socials */}
                <div className="contact-info" data-aos="fade-right" data-aos-delay="100">

                    <div className="contact-details">
                        {contactDetails.map((d) => (
                            <div key={d.label} className="contact-detail-item">
                                <span className="contact-detail-icon">{d.icon}</span>
                                <div>
                                    <p className="contact-detail-label">{d.label}</p>
                                    {d.href
                                        ? <a href={d.href} className="contact-detail-value">{d.value}</a>
                                        : <p className="contact-detail-value">{d.value}</p>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-divider" />

                    <div className="contact-socials">
                        <p className="contact-socials-label">Follow</p>
                        <div className="contact-socials-links">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-link"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: form */}
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    data-aos="fade-right"
                    data-aos-delay="200"
                >
                    <div className="form-row">
                        <div className="form-field">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-field">
                        <label htmlFor="subject">Subject</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Project enquiry"
                            value={form.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            placeholder="Tell me about your project..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`contact-submit ${status}`}
                        disabled={status === "loading"}
                    >
                        {status === "loading" && <span className="spinner" />}
                        {status === "idle"    && <><Send size={14} /> Send Message</>}
                        {status === "loading" && "Sending..."}
                        {status === "success" && "Message Sent ✓"}
                        {status === "error"   && "Failed — Try Again"}
                    </button>

                    {status === "success" && (
                        <p className="form-feedback success">
                            Thanks! I'll get back to you shortly.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="form-feedback error">
                            Something went wrong. Email me directly at contact@dextertr.pro
                        </p>
                    )}
                </form>

            </div>

        </section>
    );
}