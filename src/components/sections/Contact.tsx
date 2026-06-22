import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact__header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            I'm always open to discussing embedded systems, interesting projects,
            or potential collaborations. Reach out anytime!
          </p>
        </div>

        <div className="contact__card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              disabled={formStatus === "sending" || formStatus === "success"}
            >
              {formStatus === "sending" && "Sending..."}
              {formStatus === "success" && "✅ Sent!"}
              {formStatus === "error" && "❌ Error, try again"}
              {formStatus === "idle" && "Send Message"}
            </button>
          </form>

          {/* ✅ Contact details (email & phone) */}
          <div className="contact__details">
            <a href={`mailto:${personalInfo.email}`} className="contact__detail-item">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </a>
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`} className="contact__detail-item">
                <Phone size={20} />
                <span>{personalInfo.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;