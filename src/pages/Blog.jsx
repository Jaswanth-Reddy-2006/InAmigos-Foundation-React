import { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';

const blogArticles = [
  {
    id: 1,
    category: 'education',
    categoryName: 'Education',
    date: 'Feb 15, 2026',
    readTime: '5 min read',
    title: 'Shaping Futures: The Impact of BachpanShala on Underprivileged Children',
    desc: "Project BachpanShala is InAmigos' flagship primary child education program, supporting localized tutoring, free textbooks, and career mentoring across 28 states to cultivate academic growth.",
    img: 'https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg',
    author: 'GS',
    authorName: 'Govind Shukla',
    authorRole: 'Founder & CEO',
  },
  {
    id: 2,
    category: 'employability',
    categoryName: 'Employability',
    date: 'Jan 28, 2026',
    readTime: '4 min read',
    title: 'Empowering Young Minds: Unleashing Potential through Project Vikas',
    desc: 'Detailing how Project Vikas bridges academic curricula and industrial skills, providing college students with structured, government-certified corporate and NGO internships.',
    img: 'https://inamigosfoundation.org.in/public/storage/events/1738134836.jpeg',
    author: 'GS',
    authorName: 'Govind Shukla',
    authorRole: 'Founder & CEO',
  },
  {
    id: 3,
    category: 'empowerment',
    categoryName: 'Empowerment',
    date: 'Dec 10, 2025',
    readTime: '6 min read',
    title: "Udaan: Fostering Women's Empowerment and Leadership Across India",
    desc: "An in-depth writeup on InAmigos' specialized ladies skilling hubs, offering tailored design classes, sewing machines, and computer basics to foster autonomous household earnings.",
    img: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg',
    author: 'SJ',
    authorName: 'Sagarika Jaiswal',
    authorRole: 'Head of Core Members',
  },
  {
    id: 4,
    category: 'animals',
    categoryName: 'Animal Welfare',
    date: 'Nov 04, 2025',
    readTime: '4 min read',
    title: 'Project Jeev: Fostering Compassion and Shelter for Stray Animals',
    desc: 'Highlighting rescue missions, street feeding groups, and immediate veterinary first-aid clearances coordinated by localized youth circles to protect vulnerable strays.',
    img: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg',
    author: 'VN',
    authorName: 'Vignesh N',
    authorRole: 'Senior Core Member',
  },
  {
    id: 5,
    category: 'sustainability',
    categoryName: 'Sustainability',
    date: 'Oct 22, 2025',
    readTime: '5 min read',
    title: 'Mission Life: Nurturing Nature and Eco-friendly Lifestyles',
    desc: 'How the Prakriti project coordinates urban cleanups, garbage segregation seminars, plastic collection drives, and massive tree plantation exercises for climate resilience.',
    img: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg',
    author: 'FK',
    authorName: 'Faiz Khan',
    authorRole: 'Volunteer Supervisor',
  },
  {
    id: 6,
    category: 'education', // Uses education class for matching filtering as in HTML structure
    categoryName: 'Health',
    date: 'Sep 14, 2025',
    readTime: '4 min read',
    title: 'A Guide to Holistic Well-being and a Healthy Lifestyle',
    desc: 'A professional, physician-supported overview highlighting simple daily hygiene checklists, mental relaxation methods, and basic nutritional grids for low-income areas.',
    img: 'https://inamigosfoundation.org.in/public/storage/events/1738135259.jpeg',
    author: 'DA',
    authorName: 'Dr. Akash .',
    authorRole: 'Lead Volunteer',
  },
];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles = blogArticles.filter(
    (art) => activeFilter === 'all' || art.category === activeFilter
  );

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
  }, [activeFilter]);

  return (
    <main className="blog-page-section">
      <div className="container">
        {/* Page Title Block */}
        <div className="blog-header reveal fade-up reveal-visible">
          <div className="hero-badge reveal scale-in reveal-visible" style={{ margin: '0 auto 16px' }}>
            <span className="hero-badge-dot" style={{ background: 'var(--accent-emerald)' }}></span>
            InAmigos News &amp; Campaigns
          </div>
          <h1 className="hero-name" style={{ fontSize: '3rem', marginBottom: '12px' }}>
            Our <span>Official Blogs</span>
          </h1>
          <p className="hero-tagline" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Read direct narrative updates, operational summaries, and event logs compiled by our leading supervisors and associates across India.
          </p>
        </div>

        {/* Categories Sorting Pills */}
        <div className="team-filters-container reveal scale-in reveal-visible" style={{ marginBottom: '45px' }}>
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Stories
          </button>
          <button
            className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
            onClick={() => setActiveFilter('education')}
          >
            Education
          </button>
          <button
            className={`filter-btn ${activeFilter === 'employability' ? 'active' : ''}`}
            onClick={() => setActiveFilter('employability')}
          >
            Employability
          </button>
          <button
            className={`filter-btn ${activeFilter === 'empowerment' ? 'active' : ''}`}
            onClick={() => setActiveFilter('empowerment')}
          >
            Empowerment
          </button>
          <button
            className={`filter-btn ${activeFilter === 'animals' ? 'active' : ''}`}
            onClick={() => setActiveFilter('animals')}
          >
            Animal Welfare
          </button>
          <button
            className={`filter-btn ${activeFilter === 'sustainability' ? 'active' : ''}`}
            onClick={() => setActiveFilter('sustainability')}
          >
            Sustainability
          </button>
        </div>

        {/* Blogs dynamic grid */}
        <div className="blog-grid" id="blog-grid-container">
          {filteredArticles.map((art, idx) => (
            <article
              key={art.id}
              className={`blog-card ${art.category} reveal scale-in`}
              style={{
                transitionDelay: `${idx * 0.08}s`,
              }}
            >
              <div className="blog-card-media">
                <img src={art.img} alt={art.title} className="blog-card-img" />
                <span className="blog-card-badge">{art.categoryName}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>
                    <i className="fa-regular fa-calendar"></i> {art.date}
                  </span>
                  <span>
                    <i className="fa-regular fa-clock"></i> {art.readTime}
                  </span>
                </div>
                <h4 className="blog-card-title">{art.title}</h4>
                <p className="blog-card-text">{art.desc}</p>
                <div className="blog-card-author">
                  <div className="blog-author-avatar">{art.author}</div>
                  <div className="blog-author-info">
                    <h6>{art.authorName}</h6>
                    <p>{art.authorRole}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
