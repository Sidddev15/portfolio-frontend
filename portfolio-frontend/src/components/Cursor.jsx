import { useState, useEffect } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = [];

    function createParticle(x, y) {
      return {
        x,
        y,
        radius: Math.random() * 2 + 1,
        color: "orange",
        speedX: (Math.random() - 0.5) * 2,
        speedY: Math.random() * -2,
        alpha: 1,
      };
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.02;

        if (p.alpha <= 0) particles.splice(i, 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 165, 0, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    const move = (e) => {
      console.log("Mouse moved:", e.clientX, e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
      particles.push(createParticle(e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas
        id="particleCanvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
      <div
        className="fixed z-[9999] pointer-events-none"
        style={{
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      >
        <div className="cursor-circle" />
      </div>
    </>
  );
}
