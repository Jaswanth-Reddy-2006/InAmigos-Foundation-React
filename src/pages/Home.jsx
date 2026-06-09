import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DomeGallery from '../components/DomeGallery';

function CountUpValue({ target }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const steps = 50;
          const stepIncrement = Math.ceil(target / steps);
          const intervalTime = duration / steps;

          const timer = setInterval(() => {
            start += stepIncrement;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, intervalTime);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

const teamMembers = [
  {
    id: 1,
    name: 'Govind Shukla',
    role: 'Founder & CEO',
    category: 'management',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738077310.png',
    email: 'govind.shukla@inamigosfoundation.org.in',
    linkedin: 'https://www.linkedin.com/in/govind-shukla-7500631a0/',
  },
  {
    id: 2,
    name: 'Madhusoodan M',
    role: 'CSR Lead',
    category: 'management',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078519.jpg',
    email: 'madhusoodanm@inamigosfoundation.org.in',
    linkedin: 'https://www.linkedin.com/in/madhusoodanmurali',
  },
  {
    id: 3,
    name: 'Raman Swarnakar',
    role: 'Back-end Operation Support',
    category: 'management',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078606.jpg',
    email: 'ghfxd@gmail.com',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Sagarika Jaiswal',
    role: 'Head of Core Members',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738077444.jpg',
    email: 'adilali@gmail.com',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Khush Gupta',
    role: 'Deputy Head of Core Members',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738077677.jpg',
    email: 'hgsv@gmail.com',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Iniya Radhakrishnan',
    role: 'Head of Internship Department',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738077748.jpg',
    email: 'gdfjdhk@gmail.com',
    linkedin: '#',
  },
  {
    id: 7,
    name: 'Shiwani .',
    role: 'Team Leader of Core Members',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738077915.jpg',
    email: 'htydghdcuyj@gmail.com',
    linkedin: '#',
  },
  {
    id: 8,
    name: 'Shaik Shahira Bhanu',
    role: 'Senior Core Member',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078064.jpg',
    email: 'shahirabanushaik.s@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shaik-shahirabhanu-641599185',
  },
  {
    id: 9,
    name: 'Vignesh N',
    role: 'Senior Core Member',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078173.jpg',
    email: 'mechv2433@gmail.com',
    linkedin: '#',
  },
  {
    id: 10,
    name: 'Padmasri .',
    role: 'Junior Core Member',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078247.jpg',
    email: 'hsvbjlkdvh@gmail.com',
    linkedin: '#',
  },
  {
    id: 11,
    name: 'Anusha .',
    role: 'Junior Core Member',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078410.jpg',
    email: 'jksbhl@gmail.com',
    linkedin: '#',
  },
  {
    id: 12,
    name: 'Faiz Khan',
    role: 'Volunteer Supervisor (Uttar Pradesh)',
    category: 'supervisors',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738081237.jpg',
    email: 'kfaiz3662@gmail.com',
    linkedin: '#',
  },
  {
    id: 13,
    name: 'Anam Fatima',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078664.jpg',
    email: 'anamf5415@gmail.com',
    linkedin: 'https://www.linkedin.com/in/anam-fatima-31501331a',
  },
  {
    id: 14,
    name: 'Vedanshi Chaudhari',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078733.jpg',
    email: 'vedanshichahdhary584@gmail.com',
    linkedin: '#',
  },
  {
    id: 15,
    name: 'Riddhima Barthwal',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738078891.jpg',
    email: 'ridhs2925@gmail.com',
    linkedin: '#',
  },
  {
    id: 16,
    name: 'Roshi .',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079012.jpg',
    email: 'jhfgiysg@gmail.com',
    linkedin: '#',
  },
  {
    id: 17,
    name: 'Tannu Sharma',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079069.jpg',
    email: 'Tannusharma022001@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tanu-sharma-a24660320',
  },
  {
    id: 18,
    name: 'Anchal .',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079126.jpg',
    email: 'anchalsharma1890@gmail.com',
    linkedin: '#',
  },
  {
    id: 19,
    name: 'Jai Chandela',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079176.jpg',
    email: 'jfydtg@gmail.com',
    linkedin: '#',
  },
  {
    id: 20,
    name: 'Simranjeet .',
    role: 'HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079264.jpg',
    email: 'simmy62c@gmail.com',
    linkedin: 'https://www.linkedin.com/in/simranjeet-kaur-5b39a9314',
  },
  {
    id: 21,
    name: 'Gloria Fredy Carvalho',
    role: 'Junior HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079427.jpg',
    email: 'gloriagraphic2002@gmail.com',
    linkedin: '#',
  },
  {
    id: 22,
    name: 'Khushi Rai',
    role: 'Junior HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079490.jpg',
    email: 'aadirai63@gmail.com',
    linkedin: 'https://www.linkedin.com/in/khushi-r-aabbb2344',
  },
  {
    id: 23,
    name: 'Paree Nagpal',
    role: 'Junior HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079564.jpg',
    email: 'pareehn1412@gmail.com',
    linkedin: '#',
  },
  {
    id: 24,
    name: 'Bhavya .',
    role: 'Junior HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079613.jpg',
    email: 'khgcfyjhxcfg@gmail.com',
    linkedin: '#',
  },
  {
    id: 25,
    name: 'Vivek .',
    role: 'Junior HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079692.jpg',
    email: 'jhgcfiy@gmail.com',
    linkedin: '#',
  },
  {
    id: 26,
    name: 'Megha Kelvi',
    role: 'Junior HR Executive',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079799.jpg',
    email: 'meghakelvi11@gmail.com',
    linkedin: '#',
  },
  {
    id: 27,
    name: 'Sagar Solanki',
    role: 'Lead Volunteer (Haryana)',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738079917.jpg',
    email: 'SagarS@inamigosfoundation.org.in',
    linkedin: 'https://www.linkedin.com/in/sagarsolanki3266',
  },
  {
    id: 28,
    name: 'Dr. Akash .',
    role: 'Lead Volunteer (Karnataka)',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/173808182.jpg', // Fix standard path
    email: 'akashrj1998@gmail.com',
    linkedin: '#',
  },
  {
    id: 29,
    name: 'Adil Ali',
    role: 'Social Media Specialist',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738080378.jpg',
    email: 'adila@inamigosfoundation.org.in',
    linkedin: 'https://www.linkedin.com/in/aliadil18/',
  },
  {
    id: 30,
    name: 'Komal Kushwaha',
    role: 'Volunteer Associate',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738080460.jpg',
    email: 'komalkushwaha3114@gmail.com',
    linkedin: 'https://www.linkedin.com/in/komal-kushwaha-0940922b6',
  },
  {
    id: 31,
    name: 'Suhaliya Khan',
    role: 'Volunteer Associate',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738080526.jpg',
    email: 'suhaliyak538@gmail.com',
    linkedin: 'https://www.linkedin.com/in/suhaliya-khan-3b8a8833a',
  },
  {
    id: 32,
    name: 'Sonam Singh',
    role: 'Volunteer Associate',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738080620.jpg',
    email: 'sonamrajputzzz1120@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sonam-singh-298a0b26b',
  },
  {
    id: 33,
    name: 'Akash .',
    role: 'Volunteer Associate',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738080678.jpg',
    email: 'jhfgjufv@gmail.com',
    linkedin: '#',
  },
  {
    id: 34,
    name: 'Manavi Jaiswal',
    role: 'Junior Volunteer Associate',
    category: 'associates',
    img: 'https://inamigosfoundation.org.in/public/storage/volunteers/1738127845.jpg',
    email: 'manavijaiswal67@gmail.com',
    linkedin: 'https://www.linkedin.com/in/manavi-jaiswal-07a7662bb',
  },
];

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(0); // 0 = Mission, 1 = Vision, 2 = Values
  const [searchText, setSearchText] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const teamSectionRef = useRef(null);

  // Stagger items count
  const itemsPerPage = 10;

  // Filter logic
  const filteredMembers = teamMembers.filter((member) => {
    const categoryMatch = categoryFilter === 'all' || member.category === categoryFilter;
    const searchMatch =
      !searchText ||
      member.name.toLowerCase().includes(searchText.toLowerCase()) ||
      member.role.toLowerCase().includes(searchText.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Pagination index slices
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage) || 1;
  const actualCurrentPage = currentPage > totalPages ? totalPages : currentPage;
  const startIndex = (actualCurrentPage - 1) * itemsPerPage;
  const visibleMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (cat) => {
    setCategoryFilter(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  // Trigger animations on page load
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
  }, [categoryFilter, currentPage, searchText]);

  return (
    <>
      {/* 2. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-watermark">INAMIGOS</div>
        <div className="container">
          <div className="hero-grid-layout">
            {/* Hero Left Details */}
            <div className="hero-details-col reveal fade-up reveal-visible">
              <h1 className="hero-name reveal fade-up reveal-delay-2 reveal-visible">
                Uniting Minds<br />
                <span>For A Change</span>
              </h1>

              <p className="hero-tagline reveal fade-up reveal-delay-3 reveal-visible">
                Together we create opportunities, empower underprivileged communities, protect nature, support animal welfare, and build a brighter tomorrow through collective action.
              </p>

              <ul className="hero-bullets reveal fade-up reveal-delay-4 reveal-visible">
                <li>
                  <span className="bullet-icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </span>
                  <div>
                    <strong>Bachpanshala</strong> Education Projects in 28 States
                  </div>
                </li>
                <li>
                  <span className="bullet-icon">
                    <i className="fa-solid fa-leaf"></i>
                  </span>
                  <div>
                    <strong>Prakriti</strong> Plantation &amp; Cleanliness Drives
                  </div>
                </li>
                <li>
                  <span className="bullet-icon">
                    <i className="fa-solid fa-ribbon"></i>
                  </span>
                  <div>
                    <strong>80G &amp; 12A Tax-Exempt</strong> Certified Transparency
                  </div>
                </li>
              </ul>

              <div className="hero-ctas reveal scale-in reveal-delay-5 reveal-visible">
                <Link to="/volunteer" className="btn-primary" id="hero-join-btn">
                  <i className="fa-solid fa-heart"></i>
                  Join Our Mission
                </Link>
                <Link to="/volunteer" className="btn-secondary" id="hero-vol-btn">
                  Become a Volunteer
                </Link>
              </div>
            </div>

            {/* Hero Right Media */}
            <div className="hero-avatar-col reveal scale-in reveal-delay-2 reveal-visible">
              <div className="avatar-frame-container">
                <div className="avatar-glow-effect"></div>
                <div className="avatar-media-box">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop"
                    alt="InAmigos Community Outreach"
                    className="avatar-main-img"
                  />
                </div>

                {/* Floating badges in image block */}
                <div className="avatar-floating-label top-left">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  <span>100% Non-Profit</span>
                </div>
                <div className="avatar-floating-label top-right">
                  <i className="fa-solid fa-shield-halved"></i>
                  <span>ISO 9001:2015</span>
                </div>
                <div className="avatar-floating-label bottom-left">
                  <i className="fa-solid fa-briefcase"></i>
                  <span>CSR-1 Registered</span>
                </div>
                <div className="avatar-floating-label bottom-right">
                  <i className="fa-solid fa-globe"></i>
                  <span>NITI Aayog Linked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE TICKER */}
      <div className="ticker-wrap reveal fade-in reveal-visible">
        <div className="ticker-track">
          <div className="ticker-group">
            <div className="ticker-item"><span className="ticker-dot"></span>InAmigos Foundation</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Bachpanshala: Educating Children</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Seva: Feeding the Hungry</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Jeev: Animal Rescue Drives</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Udaan: Women Skill Initiatives</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Prakriti: Clean-up Drives</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Join 500+ Active Volunteers</div>
          </div>
          <div className="ticker-group">
            <div className="ticker-item"><span className="ticker-dot"></span>InAmigos Foundation</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Bachpanshala: Educating Children</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Seva: Feeding the Hungry</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Jeev: Animal Rescue Drives</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Udaan: Women Skill Initiatives</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Project Prakriti: Clean-up Drives</div>
            <div className="ticker-item"><span class="ticker-dot"></span>Join 500+ Active Volunteers</div>
          </div>
        </div>
      </div>

      {/* 3. ABOUT NGO SECTION */}
      <section id="about">
        <div className="section-watermark">ABOUT US</div>
        <div className="container">
          <div className="section-heading reveal fade-up reveal-visible">
            <h2 className="section-title">
              About <span>InAmigos Foundation</span>
            </h2>
            <p className="section-subtitle">
              A registered, ISO-certified social impact organization driving structural welfare, human development, and environmental empowerment across India.
            </p>
          </div>

          <div className="about-grid-layout">
            {/* Narrative Profile Card */}
            <div className="about-card strengths-card reveal slide-left">
              <div className="about-card-tag">GOVERNMENT REGISTERED NGO</div>
              <h3 className="about-card-title">Our Story &amp; Accreditations</h3>
              <p className="narrative-text">
                Founded on September 23, 2020, by Mr. Govind Shukla (Founder &amp; CEO), InAmigos Foundation is a Section 8 licensed non-profit headquartered in Chhattisgarh, India.
              </p>
              <p className="narrative-text">
                We hold 80G &amp; 12A tax certifications ensuring extreme transparency, are CSR-1 registered for corporate partnerships, NITI Aayog registered aligning with India's national development goals, and IAF ISO 9001:2015 certified for peak operational quality.
              </p>

              <h3 className="about-card-title" style={{ fontSize: '1.25rem', marginTop: '24px', marginBottom: '12px' }}>
                Accreditation Profile
              </h3>
              <div className="facts-grid-custom">
                <div className="fact-item">
                  <span className="fact-lbl">Registrations</span>
                  <span className="fact-val">Section 8 Act / NITI Aayog</span>
                </div>
                <div className="fact-item">
                  <span className="fact-lbl">Tax Benefits</span>
                  <span className="fact-val">80G &amp; 12A Approved</span>
                </div>
                <div className="fact-item">
                  <span className="fact-lbl">Standards</span>
                  <span className="fact-val">ISO 9001:2015 Quality</span>
                </div>
                <div className="fact-item">
                  <span className="fact-lbl">Corporate Collabs</span>
                  <span className="fact-val">CSR-1 Certified Code</span>
                </div>
              </div>
            </div>

            {/* Accordions Card */}
            <div className="about-card facts-card reveal slide-right">
              <div className="about-card-tag">CORE PHILOSOPHY</div>
              <h3 className="about-card-title">Mission, Vision &amp; Core Values</h3>

              <div className="shimmer-accordion-container">
                {/* Accordion 1: Mission */}
                <div className={`shimmer-accordion-card ${activeAccordion === 0 ? 'active' : ''}`}>
                  <div className="shimmer-border"></div>
                  <button
                    className="shimmer-accordion-header"
                    aria-expanded={activeAccordion === 0}
                    onClick={() => setActiveAccordion(activeAccordion === 0 ? -1 : 0)}
                  >
                    <div className="shimmer-header-left">
                      <div className="shimmer-icon-wrapper">
                        <i className="fa-solid fa-bullseye"></i>
                      </div>
                      <span className="shimmer-question-text">Our Mission</span>
                    </div>
                    <div className="shimmer-chevron-arrow">
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </button>
                  <div
                    className="shimmer-content-wrapper"
                    style={{ height: activeAccordion === 0 ? 'auto' : '0px', overflow: 'hidden' }}
                  >
                    <div className="shimmer-content-inner">
                      <p className="shimmer-answer-text">
                        To unite passionate individuals under the motto "Uniting Minds For A Change" and transform vulnerable, underprivileged communities through scalable, high-impact social welfare initiatives in education, healthcare, and nature conservation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion 2: Vision */}
                <div className={`shimmer-accordion-card ${activeAccordion === 1 ? 'active' : ''}`}>
                  <div className="shimmer-border"></div>
                  <button
                    className="shimmer-accordion-header"
                    aria-expanded={activeAccordion === 1}
                    onClick={() => setActiveAccordion(activeAccordion === 1 ? -1 : 1)}
                  >
                    <div className="shimmer-header-left">
                      <div className="shimmer-icon-wrapper">
                        <i className="fa-solid fa-eye"></i>
                      </div>
                      <span className="shimmer-question-text">Our Vision</span>
                    </div>
                    <div className="shimmer-chevron-arrow">
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </button>
                  <div
                    className="shimmer-content-wrapper"
                    style={{ height: activeAccordion === 1 ? 'auto' : '0px', overflow: 'hidden' }}
                  >
                    <div className="shimmer-content-inner">
                      <p className="shimmer-answer-text">
                        To build a sustainable, inclusive, and empowered society where every child gets access to learning materials, women are economically independent, animals are cared for with deep compassion, and natural ecosystems are protected for future generations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion 3: Core Values */}
                <div className={`shimmer-accordion-card ${activeAccordion === 2 ? 'active' : ''}`}>
                  <div className="shimmer-border"></div>
                  <button
                    className="shimmer-accordion-header"
                    aria-expanded={activeAccordion === 2}
                    onClick={() => setActiveAccordion(activeAccordion === 2 ? -1 : 2)}
                  >
                    <div className="shimmer-header-left">
                      <div className="shimmer-icon-wrapper">
                        <i className="fa-solid fa-handshake-angle"></i>
                      </div>
                      <span className="shimmer-question-text">Core Values</span>
                    </div>
                    <div className="shimmer-chevron-arrow">
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </button>
                  <div
                    className="shimmer-content-wrapper"
                    style={{ height: activeAccordion === 2 ? 'auto' : '0px', overflow: 'hidden' }}
                  >
                    <div className="shimmer-content-inner">
                      <p className="shimmer-answer-text">
                        • <strong>Transparency &amp; Accountability</strong> in all donor contributions and allocations.<br />
                        • <strong>Compassion &amp; Empathy</strong> towards humans and animals alike.<br />
                        • <strong>Collective Social Action</strong>: Empowering youth and permanent interns to lead initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects">
        <div className="section-watermark">KEY PROJECTS</div>
        <div className="container">
          <div className="section-heading reveal fade-up reveal-visible">
            <h2 className="section-title">
              Our Active <span>Welfare Projects</span>
            </h2>
            <p className="section-subtitle">
              We run six key national-level initiatives addressing hunger, primary education, animal care, skill empowerment, and environmental health.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project 1: Seva */}
            <div className="project-card seva reveal scale-in reveal-delay-1">
              <div className="project-tags">
                <span className="project-tag">Food Distribution</span>
                <span className="project-tag">Necessities</span>
              </div>
              <div className="project-icon-box">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h3 className="project-title">Project Seva</h3>
              <p className="project-desc">
                Distributing warm nutritious meals, clean drinking water, protective seasonal clothing, and critical basic necessities to daily wage workers, homeless families, and vulnerable communities.
              </p>
              <div className="project-impact-box">
                <div className="project-impact-label">Primary Goal</div>
                <div className="project-impact-desc">Reducing local hardships &amp; immediate hunger.</div>
              </div>
            </div>

            {/* Project 2: Bachpanshala */}
            <div className="project-card bachpanshala reveal scale-in reveal-delay-2">
              <div className="project-tags">
                <span className="project-tag">Child Education</span>
                <span className="project-tag">Mentorship</span>
              </div>
              <div className="project-icon-box">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <h3 class="project-title">Project Bachpanshala</h3>
              <p class="project-desc">
                Setting up localized non-formal learning centers, providing free textbooks, stationery, custom educational tools, mentorship, and high-quality tutoring for underprivileged children.
              </p>
              <div className="project-impact-box">
                <div className="project-impact-label">Primary Goal</div>
                <div className="project-impact-desc">Unlocking opportunities through quality learning.</div>
              </div>
            </div>

            {/* Project 3: Jeev */}
            <div className="project-card jeev reveal scale-in reveal-delay-3">
              <div className="project-tags">
                <span className="project-tag">Animal Welfare</span>
                <span className="project-tag">Rescue &amp; Feed</span>
              </div>
              <div className="project-icon-box">
                <i className="fa-solid fa-paw"></i>
              </div>
              <h3 className="project-title">Project Jeev</h3>
              <p className="project-desc">
                Providing rescue assistance, emergency veterinary first-aid care, feeding programs, and safe community shelters for stray animals while cultivating human-animal harmony.
              </p>
              <div className="project-impact-box">
                <div className="project-impact-label">Primary Goal</div>
                <div className="project-impact-desc">Fostering public empathy &amp; protecting stray fauna.</div>
              </div>
            </div>

            {/* Project 4: Udaan */}
            <div className="project-card udaan reveal scale-in reveal-delay-1">
              <div className="project-tags">
                <span className="project-tag">Empowerment</span>
                <span className="project-tag">Skill Workshops</span>
              </div>
              <div className="project-icon-box">
                <i className="fa-solid fa-venus"></i>
              </div>
              <h3 className="project-title">Project Udaan</h3>
              <p className="project-desc">
                Empowering rural and marginalized women through basic vocational skill courses, tailor workshops, computer literacy classes, leadership modules, and financial independence guides.
              </p>
              <div className="project-impact-box">
                <div className="project-impact-label">Primary Goal</div>
                <div className="project-impact-desc">Building women's economic self-reliance.</div>
              </div>
            </div>

            {/* Project 5: Prakriti */}
            <div className="project-card prakriti reveal scale-in reveal-delay-2">
              <div className="project-tags">
                <span className="project-tag">Climate Action</span>
                <span className="project-tag">Eco Drives</span>
              </div>
              <div className="project-icon-box">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3 className="project-title">Project Prakriti</h3>
              <p className="project-desc">
                Organizing massive tree sapling plantation drives in urban areas, plastic clean-up campaigns in parks, waste segregation education, and ecological conservation seminars.
              </p>
              <div className="project-impact-box">
                <div className="project-impact-label">Primary Goal</div>
                <div className="project-impact-desc">Cultivating cleaner, greener urban landscapes.</div>
              </div>
            </div>

            {/* Project 6: Vikas */}
            <div className="project-card vikas reveal scale-in reveal-delay-3">
              <div className="project-tags">
                <span className="project-tag">Youth Internships</span>
                <span className="project-tag">Employability</span>
              </div>
              <div className="project-icon-box">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h3 className="project-title">Project Vikas</h3>
              <p className="project-desc">
                Offering structured corporate/NGO internship structures, communication skills development, technical training workshops, and employment preparation guidance for college youth.
              </p>
              <div className="project-impact-box">
                <div className="project-impact-label">Primary Goal</div>
                <div className="project-impact-desc">Enabling youth to become industry-ready professionals.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL IMPACT SECTION */}
      <section id="impact" className="achievement-area">
        <div className="section-watermark">SOCIAL IMPACT</div>
        <div className="container">
          <div className="section-heading reveal fade-up reveal-visible">
            <h2 className="section-title">
              Our Quantifiable <span>Impact Counters</span>
            </h2>
            <p className="section-subtitle">
              Numbers that tell stories of change. Our field operations are powered by a growing force of interns and volunteers.
            </p>
          </div>

          <div className="stats-grid">
            {/* Counter 1: Permanent Interns */}
            <div className="single-counter-box reveal fade-up reveal-delay-1" data-metric="interns">
              <span className="icon">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <p className="counter-number">
                <CountUpValue target={250} />+
              </p>
              <h6>Permanent Interns</h6>
            </div>

            {/* Counter 2: Lives Impacted */}
            <div className="single-counter-box reveal fade-up reveal-delay-2" data-metric="lives">
              <span className="icon">
                <i className="fa-solid fa-face-smile"></i>
              </span>
              <p className="counter-number">
                <CountUpValue target={50000} />+
              </p>
              <h6>Beneficiaries Helped</h6>
            </div>

            {/* Counter 3: Major Projects */}
            <div className="single-counter-box reveal fade-up reveal-delay-3" data-metric="projects">
              <span className="icon">
                <i className="fa-solid fa-diagram-project"></i>
              </span>
              <p className="counter-number">
                <CountUpValue target={6} />+
              </p>
              <h6>Active Key Initiatives</h6>
            </div>

            {/* Counter 4: Volunteers */}
            <div className="single-counter-box reveal fade-up reveal-delay-4" data-metric="volunteers">
              <span className="icon">
                <i className="fa-solid fa-users"></i>
              </span>
              <p className="counter-number">
                <CountUpValue target={500} />+
              </p>
              <h6>Dedicated Volunteers</h6>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM SECTION (PAGINATED & SEARCHABLE) */}
      <section id="volunteers" ref={teamSectionRef}>
        <div className="section-watermark">OUR FOUNDATION</div>
        <div className="container">
          <div className="section-heading reveal fade-up reveal-visible">
            <h2 className="section-title">
              Our Dedicated <span>Foundation Team</span>
            </h2>
            <p className="section-subtitle">
              Meet the core leaders, regional supervisors, and associates driving positive change. Filter by categories to explore.
            </p>
          </div>

          {/* Category Filtering Pill Buttons */}
          <div className="team-filters-container reveal scale-in">
            <button
              className={`filter-btn ${categoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All Members
            </button>
            <button
              className={`filter-btn ${categoryFilter === 'management' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('management')}
            >
              Management
            </button>
            <button
              className={`filter-btn ${categoryFilter === 'supervisors' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('supervisors')}
            >
              Supervisors
            </button>
            <button
              className={`filter-btn ${categoryFilter === 'associates' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('associates')}
            >
              Associates
            </button>
          </div>

          {/* Team Search input */}
          <div
            className="team-search-container reveal scale-in"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '35px', width: '100%' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
              <span
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by name or designation..."
                value={searchText}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '14px 20px 14px 46px',
                  borderRadius: '30px',
                  border: '1px solid var(--border-glass-active)',
                  background: '#ffffff',
                  boxShadow: 'var(--shadow-soft)',
                  fontSize: '0.95rem',
                  textAlign: 'left',
                  transition: 'var(--transition-fast)',
                }}
              />
            </div>
          </div>

          {/* Team Grid */}
          <div className="team-grid" id="team-members-container">
            {visibleMembers.map((member, idx) => (
              <div
                key={member.id}
                className={`single-team-member ${member.category} reveal scale-in`}
                style={{
                  transitionDelay: `${idx * 0.05}s`,
                }}
              >
                <div className="team-member-bg" style={{ backgroundImage: `url(${member.img})` }}></div>
                <div className="team-content-wrapper">
                  <h4 className="team-title">{member.name}</h4>
                  <p className="team-subtitle">
                    {member.role}{' '}
                    <span style={{ textTransform: 'capitalize' }}>
                      ({member.category})
                    </span>
                  </p>
                  <ul className="team-social">
                    <li>
                      <a href={`mailto:${member.email}`} title="Email">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Paginator */}
          {totalPages > 1 && (
            <div
              id="team-pagination-container"
              className="reveal scale-in"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {/* Prev control */}
              <button
                className={`filter-btn ${actualCurrentPage === 1 ? 'disabled' : ''}`}
                style={{
                  padding: '8px 16px',
                  opacity: actualCurrentPage === 1 ? '0.4' : '1',
                  cursor: actualCurrentPage === 1 ? 'not-allowed' : 'pointer',
                }}
                onClick={() => actualCurrentPage > 1 && handlePageChange(actualCurrentPage - 1)}
                disabled={actualCurrentPage === 1}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>

              {/* Page pills */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`filter-btn ${actualCurrentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}

              {/* Next control */}
              <button
                className={`filter-btn ${actualCurrentPage === totalPages ? 'disabled' : ''}`}
                style={{
                  padding: '8px 16px',
                  opacity: actualCurrentPage === totalPages ? '0.4' : '1',
                  cursor: actualCurrentPage === totalPages ? 'not-allowed' : 'pointer',
                }}
                onClick={() => actualCurrentPage < totalPages && handlePageChange(actualCurrentPage + 1)}
                disabled={actualCurrentPage === totalPages}
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3D DOME GALLERY SECTION */}
      <section id="gallery">
        <div className="section-watermark">WORK IN PICTURES</div>
        <div className="container">
          <div className="section-heading reveal fade-up reveal-visible">
            <h2 className="section-title">
              Welfare <span>Action Gallery</span>
            </h2>
            <p className="section-subtitle">
              Explore InAmigos Foundation's live campaign archives in our interactive 3D Dome. Drag to spin the cylinder, hover for highlights, and click to view campaign details.
            </p>
          </div>

          <DomeGallery />
        </div>
      </section>

      {/* WHY JOIN US SECTION */}
      <section id="why-join">
        <div className="section-watermark">WHY JOIN US</div>
        <div className="container">
          <div className="section-heading reveal fade-up reveal-visible">
            <h2 className="section-title">
              Why <span>Join Our Mission</span>
            </h2>
            <p className="section-subtitle">
              Earn certifications, build corporate leadership capabilities, expand your local networks, and drive direct grass-root transformations.
            </p>
          </div>

          <div className="why-grid">
            {/* Benefit 1 */}
            <div className="why-card reveal scale-in reveal-delay-1">
              <div className="why-card-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h4>Real NGO Experience</h4>
              <p>
                Gain absolute operational exposure by organizing and leading live, localized outreach drives, distributions, and surveys.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="why-card reveal scale-in reveal-delay-2">
              <div className="why-card-icon">
                <i className="fa-solid fa-users-rectangle"></i>
              </div>
              <h4>Leadership Development</h4>
              <p>
                Step up to coordinate district volunteer circles, manage projects schedules, and practice real agile task management.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="why-card reveal scale-in reveal-delay-3">
              <div className="why-card-icon">
                <i className="fa-solid fa-hands-holding"></i>
              </div>
              <h4>Direct Social Impact</h4>
              <p>
                Witness tangible field transformations in underprivileged kids' education, eco stability, and strays safety through your actions.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="why-card reveal scale-in reveal-delay-1">
              <div className="why-card-icon">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <h4>Team Collaboration</h4>
              <p>
                Build valuable nationwide peer circles with passionate college students, corporate partners, and social activists.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="why-card reveal scale-in reveal-delay-2">
              <div className="why-card-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <h4>Skill Building</h4>
              <p>
                Refine your public communication, project documentation, creative design writing, and digital campaign marketing skills.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="why-card reveal scale-in reveal-delay-3">
              <div className="why-card-icon">
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h4>Certificate Opportunities</h4>
              <p>
                Receive official, globally sharable letters of internship completion, supervisor recommendations, and top volunteer honors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta-area">
        <div className="container">
          <div className="cta-glass-box reveal scale-in">
            <h2 className="cta-heading">
              Become a <span>Change Maker</span>
            </h2>
            <p className="cta-text">
              Join InAmigos Foundation's growing community network today and contribute your skills to direct action projects that empower communities and create long-lasting structural changes.
            </p>
            <div className="cta-ctas">
              <Link to="/volunteer" className="btn-primary" id="cta-vol-btn">
                <i className="fa-solid fa-users-gear"></i>
                Volunteer Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
