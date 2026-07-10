import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState("");

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSending(true);
    // simulate async send
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      setToast("Message Sent Successfully!");
      setTimeout(() => setToast(""), 3500);
    }, 900);
  }

  return (
    <main className="contact-page" aria-labelledby="contact-heading">
      <div className="contact-wrapper">
        <div className="contact-inner">
          <section className="contact-form-card">
            <h2 id="contact-heading">Send Message</h2>
            <form onSubmit={handleSubmit} noValidate>
              <label>
                <span className="label">Name</span>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                {errors.name && <div className="field-error">{errors.name}</div>}
              </label>

              <label>
                <span className="label">Email</span>
                <input name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </label>

              <label>
                <span className="label">Subject</span>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject (optional)" />
              </label>

              <label>
                <span className="label">Message</span>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Write your message..." />
                {errors.message && <div className="field-error">{errors.message}</div>}
              </label>

              <div className="form-actions">
                <button type="submit" className="btn-send" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
              </div>
            </form>
          </section>

          <aside className="contact-details-card" aria-label="Contact details">
            <h3>Contact Information</h3>
            <div className="detail"><strong>Address</strong><div>Bangalore, Karnataka, India</div></div>
            <div className="detail"><strong>Phone</strong><div>+91 98765 43210</div></div>
            <div className="detail"><strong>Email</strong><div>reactcompany@gmail.com</div></div>
            <div className="detail"><strong>Website</strong><div>www.reactcompany.com</div></div>
            <div className="detail"><strong>Hours</strong><div>Mon - Sat • 9:00 AM - 6:00 PM</div></div>
          </aside>
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </main>
  );
};

export default Contact;

