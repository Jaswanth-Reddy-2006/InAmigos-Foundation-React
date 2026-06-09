import { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';

export default function Volunteer() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    why: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id.replace('vol-', '')]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApp = {
      id: 'VOL-' + Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      project: formData.project,
      why: formData.why,
      status: 'Submitted',
      timestamp: new Date().toLocaleString(),
    };

    const volunteersList = JSON.parse(localStorage.getItem('inamigos_volunteers')) || [];
    volunteersList.push(newApp);
    localStorage.setItem('inamigos_volunteers', JSON.stringify(volunteersList));

    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      why: '',
    });

    showToast('Application Registered! Welcome to InAmigos Foundation.');
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
    <main className="volunteer-page-section">
      <div className="container">
        {/* Page Title Block */}
        <div className="volunteer-header reveal fade-up reveal-visible">
          <div className="hero-badge reveal scale-in reveal-visible" style={{ margin: '0 auto 16px' }}>
            <span className="hero-badge-dot" style={{ background: 'var(--accent-orange)' }}></span>
            Join 500+ Active Change Makers
          </div>
          <h1 className="hero-name" style={{ fontSize: '3rem', marginBottom: '12px' }}>
            Become A <span>Volunteer</span>
          </h1>
          <p className="hero-tagline" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Invest your passion, coordinate localized projects, refine professional skills, and witness direct field community transformations with InAmigos.
          </p>
        </div>

        <div className="volunteer-split-grid">
          {/* Left Column: Detailed Onboarding Application Form */}
          <div className="volunteer-form-col reveal slide-left">
            <form className="form-glass-card" onSubmit={handleSubmit}>
              <h3 className="form-title" style={{ marginBottom: '8px' }}>
                Volunteer Registration Form
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
                Fill in the form to register your interest, and our HR board will contact you.
              </p>

              <div className="form-group">
                <label htmlFor="vol-name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="vol-name"
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group-grid">
                <div className="form-group">
                  <label htmlFor="vol-email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="vol-email"
                    className="form-control"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="vol-phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="vol-phone"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="vol-project" className="form-label">
                  Select Project Interest
                </label>
                <select
                  id="vol-project"
                  className="form-control"
                  style={{ backgroundColor: '#f6f8fb' }}
                  value={formData.project}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    -- Select an initiative --
                  </option>
                  <option value="Seva">Project Seva (Food &amp; Clothings)</option>
                  <option value="Bachpanshala">Project Bachpanshala (Kids Teaching)</option>
                  <option value="Jeev">Project Jeev (Stray Care &amp; Feeding)</option>
                  <option value="Udaan">Project Udaan (Women Skilling)</option>
                  <option value="Prakriti">Project Prakriti (Eco Plantation)</option>
                  <option value="Vikas">Project Vikas (Career Mentorship)</option>
                </select>
              </div>

              <div className="form-group last">
                <label htmlFor="vol-why" className="form-label">
                  Why do you want to join InAmigos?
                </label>
                <textarea
                  id="vol-why"
                  className="form-control"
                  placeholder="Briefly describe your motivation or skills..."
                  value={formData.why}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-form-submit">
                <i className="fa-solid fa-circle-check"></i>
                Submit Application
              </button>
            </form>
          </div>

          {/* Right Column: Structural Benefits Cards */}
          <div className="volunteer-info-col reveal slide-right">
            <h3 className="form-title" style={{ marginBottom: '24px' }}>
              Why Join Our Mission?
            </h3>
            <div className="why-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
              {/* Benefit 1 */}
              <div className="why-card reveal scale-in">
                <div className="why-card-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h4>Real NGO Experience</h4>
                <p>
                  Gain absolute operational exposure by organizing and leading live, localized outreach drives, distributions, and surveys.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="why-card reveal scale-in">
                <div className="why-card-icon">
                  <i className="fa-solid fa-users-rectangle"></i>
                </div>
                <h4>Leadership Development</h4>
                <p>
                  Step up to coordinate district volunteer circles, manage projects schedules, and practice real agile task management.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="why-card reveal scale-in">
                <div className="why-card-icon">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <h4>Official Certifications</h4>
                <p>
                  Receive official, globally sharable letters of internship completion, supervisor recommendations, and top volunteer honors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
