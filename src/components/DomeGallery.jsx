import { useEffect, useRef, useState } from 'react';

// Using only the 23 working official foundation image URLs to prevent broken external assets
const officialGalleryImages = [
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg', caption: 'Outreach Campaign' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051466.jpg', caption: 'Project Prakriti Tree Plantation' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051449.jpg', caption: 'Project Bachpanshala Primary School' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051438.jpg', caption: 'Project Jeev Animal Welfare Rescue' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1743051382.jpg', caption: 'Community Outreach Distribution' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738299164.jpg', caption: 'Volunteers Assembly & Planning Meet' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738238755.JPG', caption: 'World Water Day 2025 Seminar' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738238744.jpg', caption: 'BachpanShala On-Site Tutoring' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738238725.jpg', caption: 'Homeless Ration Distribution Drive' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738238698.jpg', caption: 'Prakriti Garbage Cleanup Drive' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738054473.jpg', caption: 'Volunteers Social Outreach meetup' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738054458.jpg', caption: 'Kids Educational Mentoring' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738054440.jpg', caption: 'Street Stray Feeding Support' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1738048982.jpg', caption: 'Prakriti Plant Sapling campaign' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908498.jpg', caption: 'Underprivileged welfare Campaign' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908483.jpg', caption: 'Free Academic coaching class' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908403.jpg', caption: 'Animal Care Stray Rescue' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908391.jpg', caption: 'Project Udaan Ladies Sewing Center' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908380.jpg', caption: 'Plastic-Free Ecology campaign' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908369.jpg', caption: 'Free School Notebooks distribution' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908359.jpg', caption: 'Project Seva Winter distribution' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908350.jpg', caption: 'Low-Income Community Medical Aid' },
  { url: 'https://inamigosfoundation.org.in/public/storage/gallery/1690908247.jpeg', caption: 'Vikas Youth Internships network' },
];

// Fill up exactly 36 segments using the working images dataset
const domeImages = [];
for (let i = 0; i < 36; i++) {
  domeImages.push(officialGalleryImages[i % officialGalleryImages.length]);
}

const segmentsX = 36;
const segmentsY = 10;
const startY = -4;
const radius = 600;

// Coordinate grids calculation
const coords = [];
for (let y = startY; y < startY + segmentsY; y++) {
  for (let x = -18; x < 18; x++) {
    if ((x + y) % 2 === 0) {
      coords.push({ offsetX: x, offsetY: y });
    }
  }
}
const activeCoords = coords.slice(0, 175);

// Helper function to extract coordinates safely from Touch or Mouse events
const getEventCoords = (e) => {
  if (e.touches && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  return { x: e.clientX, y: e.clientY };
};

export default function DomeGallery() {
  const sphereRef = useRef(null);
  const mainRef = useRef(null);
  const rootRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  // Keep track of rotation mechanics inside refs to avoid React re-renders during active animations
  const dragData = useRef({
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    prevX: 0,
    prevY: 0,
    rotY: 0,
    rotX: 0,
    velY: 0,
    velX: 0,
  });

  useEffect(() => {
    const sphere = sphereRef.current;
    const main = mainRef.current;
    const root = rootRef.current;
    if (!sphere || !main || !root) return;

    // Direct style property assignments to bypass potential React style rendering delays
    root.style.setProperty('--segments-x', String(segmentsX));
    root.style.setProperty('--segments-y', String(segmentsY));

    const sensitivity = 0.15;
    const friction = 0.95;
    let animationId = null;

    const updateSphereTransform = () => {
      const data = dragData.current;
      sphere.style.transform = `translateZ(${-radius}px) rotateY(${data.rotY}deg) rotateX(${data.rotX}deg)`;
    };

    const onDragStart = (e) => {
      if (lightbox) return;

      const { x, y } = getEventCoords(e);

      dragData.current.isDragging = true;
      dragData.current.dragStartX = x;
      dragData.current.dragStartY = y;
      dragData.current.prevX = x;
      dragData.current.prevY = y;
      dragData.current.velY = 0;
      dragData.current.velX = 0;
    };

    const onDragMove = (e) => {
      if (!dragData.current.isDragging) return;

      const { x, y } = getEventCoords(e);

      const dx = x - dragData.current.prevX;
      const dy = y - dragData.current.prevY;

      dragData.current.rotY += dx * sensitivity;
      dragData.current.rotX -= dy * sensitivity;

      // Restrict look up/down angles
      dragData.current.rotX = Math.max(-35, Math.min(35, dragData.current.rotX));

      dragData.current.velY = dx * sensitivity;
      dragData.current.velX = -dy * sensitivity;

      dragData.current.prevX = x;
      dragData.current.prevY = y;

      updateSphereTransform();
    };

    const onDragEnd = () => {
      dragData.current.isDragging = false;
    };

    // Spin drift calculations loop
    const tick = () => {
      const data = dragData.current;
      if (!data.isDragging && !lightbox) {
        if (Math.abs(data.velY) > 0.01 || Math.abs(data.velX) > 0.01) {
          data.rotY += data.velY;
          data.rotX += data.velX;
          data.rotX = Math.max(-35, Math.min(35, data.rotX));
          data.velY *= friction;
          data.velX *= friction;
        } else {
          // Slow continuous drift
          data.rotY += 0.08;
          data.rotX += (0 - data.rotX) * 0.01;
        }
        updateSphereTransform();
      }
      animationId = requestAnimationFrame(tick);
    };

    // Attach gestures to main viewport container for easier, responsive drag control
    main.addEventListener('mousedown', onDragStart);
    main.addEventListener('touchstart', onDragStart, { passive: true });

    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove, { passive: false });

    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);

    // Run physics frame updates
    animationId = requestAnimationFrame(tick);

    return () => {
      main.removeEventListener('mousedown', onDragStart);
      main.removeEventListener('touchstart', onDragStart);
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('touchmove', onDragMove);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchend', onDragEnd);
      cancelAnimationFrame(animationId);
    };
  }, [lightbox]);

  // Handle escape key to close lightbox
  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    const preventDefaultScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Add scroll lock classes to body and HTML root
    document.body.classList.add('dg-scroll-lock');
    document.documentElement.classList.add('dg-scroll-lock');

    // Prevent touch scrolling for background on iOS/mobile
    document.addEventListener('touchmove', preventDefaultScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('dg-scroll-lock');
      document.documentElement.classList.remove('dg-scroll-lock');
      document.removeEventListener('touchmove', preventDefaultScroll);
    };
  }, [lightbox]);

  const closeLightbox = () => {
    setLightbox(null);
  };

  const handleItemClick = (imgData) => {
    if (Math.abs(dragData.current.velY) > 0.1 || Math.abs(dragData.current.velX) > 0.1) {
      return;
    }
    setLightbox(imgData);
  };

  return (
    <div
      id="dome-gallery-root"
      className="sphere-root reveal scale-in reveal-visible"
      ref={rootRef}
    >

      {/* CSS Overrides: makes the card background transparent and sets the fade overlays to match the page background */}
      <style>{`
        #dome-gallery-root.sphere-root {
          background: transparent !important;
          --overlay-blur-color: var(--bg-darkest) !important;
          box-shadow: none !important;
          border: none !important;
        }
      `}</style>

      <main className="sphere-main" ref={mainRef}>
        <div className="stage">
          <div
            className="sphere"
            ref={sphereRef}
            style={{
              transform: `translateZ(${-radius}px) rotateY(0deg) rotateX(0deg)`,
            }}
          >
            {activeCoords.map((coord, i) => {
              const imgData = domeImages[i % domeImages.length];
              return (
                <div
                  key={i}
                  className="item"
                  style={{
                    '--offset-x': String(coord.offsetX),
                    '--offset-y': String(coord.offsetY),
                    '--item-size-x': '4.2',
                    '--item-size-y': '0.9',
                  }}
                  onClick={() => handleItemClick(imgData)}
                >
                  <div className="item__image" data-url={imgData.url} data-caption={imgData.caption}>
                    <img src={imgData.url} alt={imgData.caption} loading="lazy" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Backdrop Glow panels */}
        <div className="overlay"></div>
        <div className="overlay--blur"></div>
        <div className="edge-fade edge-fade--top"></div>
        <div className="edge-fade edge-fade--bottom"></div>

        {/* View finder highlight overlays */}
        <div className="viewer">
          <div className="scrim"></div>
          <div className="frame"></div>
        </div>
      </main>

      {/* Fullscreen Lightbox Portal */}
      {lightbox && (
        <div className="dome-fullscreen-lightbox active" onClick={closeLightbox}>
          <div className="dome-lightbox-backdrop"></div>
          <div className="dome-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.caption} className="dome-lightbox-img" />
            <p className="dome-lightbox-caption">{lightbox.caption}</p>
            <button
              className="dome-lightbox-close-btn"
              aria-label="Close Gallery"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
