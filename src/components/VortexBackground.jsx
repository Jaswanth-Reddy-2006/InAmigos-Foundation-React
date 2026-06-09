import { useEffect, useRef } from 'react';

export default function VortexBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 75;
    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Initial canvas sizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;

        this.baseX = this.x;
        this.baseY = this.y;
        this.velocity = {
          x: (Math.random() - 0.5) * 0.4,
          y: (Math.random() - 0.5) * 0.4,
        };

        const colors = [
          'rgba(0, 184, 117, 0.45)', // Emerald
          'rgba(0, 136, 204, 0.45)', // Blue
          'rgba(230, 126, 34, 0.35)', // Orange accent
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.baseX += this.velocity.x;
        this.baseY += this.velocity.y;

        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
        if (this.baseY > canvas.height) this.baseY = 0;

        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = dx / distance;
            let directionY = dy / distance;

            this.x += directionX * force * 1.5;
            this.y += directionY * force * 1.5;
          } else {
            let dxReturn = this.baseX - this.x;
            let dyReturn = this.baseY - this.y;
            this.x += dxReturn * 0.03;
            this.y += dyReturn * 0.03;
          }
        } else {
          let dxReturn = this.baseX - this.x;
          let dyReturn = this.baseY - this.y;
          this.x += dxReturn * 0.03;
          this.y += dyReturn * 0.03;
        }
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="stellar-vortex-bg">
      <canvas id="vortex-canvas" ref={canvasRef}></canvas>
      <div className="glow-sphere sphere-emerald"></div>
      <div className="glow-sphere sphere-blue"></div>
      <div className="glow-sphere sphere-orange"></div>
      <div className="grid-overlay"></div>
    </div>
  );
}
