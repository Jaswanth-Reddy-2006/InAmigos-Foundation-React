import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when routing changes
  useEffect(() => {
    setMobileActive(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileActive(!mobileActive);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container">
        <Link to="/" className="logo" id="nav-logo">
          InAmigos<span>.</span>
        </Link>

        <nav
          className={`nav-menu nav-links-capsule ${mobileActive ? 'mobile-active' : ''}`}
          id="nav-menu"
          style={
            mobileActive
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '70px',
                  left: '24px',
                  width: 'calc(100% - 48px)',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid var(--border-glass-active)',
                  borderRadius: '20px',
                  padding: '20px',
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }
              : {}
          }
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-btn-pill ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `nav-btn-pill ${isActive ? 'active' : ''}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-btn-pill ${isActive ? 'active' : ''}`}
          >
            Contact us
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link
            to="/volunteer"
            className={`btn-header-social ${location.pathname === '/volunteer' ? 'active' : ''}`}
            id="header-volunteer-btn"
            title="Become a Volunteer"
          >
            <i className="fa-solid fa-users"></i>
            <span>Volunteer Now</span>
          </Link>
          <button
            className={`mobile-toggle ${mobileActive ? 'active' : ''}`}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
