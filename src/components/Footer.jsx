import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    showToast(`Registered successfully! Thank you for subscribing, ${email}.`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo & About */}
          <div className="footer-col-logo reveal reveal-visible">
            <Link to="/" className="logo" onClick={scrollToTop}>
              InAmigos<span>.</span>
            </Link>
            <p className="footer-about-text">
              A government-licensed Section 8 NGO providing scalable structural developments in kids education, ladies vocational training, ecosystem plantation, and stray rescues.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/inamigos.inamigos"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.youtube.com/@inamigosfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/inamigos"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/inamigos-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col reveal reveal-visible">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/" onClick={scrollToTop}>Home Navigation</Link>
              </li>
              <li>
                <a href="#about">Our Story Info</a>
              </li>
              <li>
                <a href="#impact">Field Statistics</a>
              </li>
              <li>
                <a href="#gallery">Activity Pictures</a>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>Reach HQ Base</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Projects */}
          <div className="footer-col reveal reveal-visible">
            <h5>Our Projects</h5>
            <ul className="footer-links">
              <li>
                <a href="#projects">Project Seva</a>
              </li>
              <li>
                <a href="#projects">Project Bachpanshala</a>
              </li>
              <li>
                <a href="#projects">Project Jeev</a>
              </li>
              <li>
                <a href="#projects">Project Udaan</a>
              </li>
              <li>
                <a href="#projects">Project Prakriti</a>
              </li>
              <li>
                <a href="#projects">Project Vikas</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col reveal reveal-visible">
            <h5>Newsletter</h5>
            <div className="footer-subscribe-box">
              <p className="footer-subscribe-text">
                Subscribe to receive quarterly field operation reports and volunteer invites.
              </p>
              <form className="subscribe-form-wrapper" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="subscribe-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright bars */}
        <div className="footer-bottom">
          <p className="copyright-line">&copy; 2026 InAmigos Foundation. All Rights Reserved.</p>
          <p className="copyright-line">
            Designed &amp; Maintained by{' '}
            <a
              href="https://jaswanth-reddy-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              R Jaswanth Reddy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
