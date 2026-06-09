import { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id.replace('contact-', '')]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMsg = {
      id: 'MSG-' + Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
    };

    const messagesList = JSON.parse(localStorage.getItem('inamigos_messages')) || [];
    messagesList.push(newMsg);
    localStorage.setItem('inamigos_messages', JSON.stringify(messagesList));

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    showToast('Message Sent! InAmigos Support Board will contact you shortly.');
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page-section">
      <div className="container">
        {/* Page Title Block */}
        <div className="contact-header reveal fade-up reveal-visible">
          <div className="hero-badge reveal scale-in reveal-visible" style={{ margin: '0 auto 16px' }}>
            <span className="hero-badge-dot" style={{ background: 'var(--accent-emerald)' }}></span>
            Active Communications Portal
          </div>
          <h1 className="hero-name" style={{ fontSize: '3rem', marginBottom: '12px' }}>
            Connect <span>With Us</span>
          </h1>
          <p className="hero-tagline" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Have queries about our grassroot welfare projects, CSR collaborations, corporate sponsorship clearances, or supervisor certificates? Drop us a line!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Profile details & Map */}
          <div className="contact-info-col reveal slide-left">
            <div className="contact-info-card">
              {/* Org License */}
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-building-ngo"></i>
                </div>
                <div className="contact-info-texts">
                  <h5>Organization Identity</h5>
                  <p>InAmigos Foundation (Licensed Section 8 Non-Profit)</p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="contact-info-texts">
                  <h5>HQ Base Address</h5>
                  <p>Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh, Pin-495555</p>
                </div>
              </div>

              {/* Phones */}
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-info-texts">
                  <h5>Direct Call / WhatsApp</h5>
                  <p>
                    <a href="tel:+916267309902" style={{ fontWeight: 700 }}>
                      +91 626 730 9902
                    </a>
                  </p>
                </div>
              </div>

              {/* Direct Emails */}
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div className="contact-info-texts">
                  <h5>Official Inquiries</h5>
                  <p>
                    <a href="mailto:support@inamigosfoundation.org.in">support@inamigosfoundation.org.in</a>
                    <br />
                    <a href="mailto:inamigosfoundation@gmail.com">inamigosfoundation@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Social Coordinates Hashtags */}
              <div className="contact-hashtags">
                <span className="tag-hashtag">#InAmigosNGO</span>
                <span className="tag-hashtag">#UnitingMinds</span>
                <span className="tag-hashtag">#BilaspurBase</span>
                <span className="tag-hashtag">#ActiveImpact</span>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="map-wrapper reveal scale-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.65934676559!2d82.08051786561073!3d22.091176214197778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b13ab222efd%3A0xc34b7f8c057cd440!2sBilaspur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="map-frame"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="InAmigos HQ Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Message Form Column */}
          <div className="contact-form-col reveal slide-right">
            <form className="form-glass-card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Quick Message</h3>

              <div className="form-group-grid">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-control"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-control"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  className="form-control"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group last">
                <label htmlFor="contact-msg" class="form-label">
                  Your Message
                </label>
                <textarea
                  id="contact-msg"
                  className="form-control"
                  placeholder="Write down your inquiry in detail..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-form-submit" id="btn-submit-message">
                <i className="fa-solid fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
