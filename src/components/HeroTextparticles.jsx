import React, { useState, useEffect, useRef } from "react";

const HeroTextparticles = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const particleCount = 10000;
    const newParticles = [];

    const asciiArt = generateAsciiArt(
      "br.",
      particleCount,
      canvasWidth,
      canvasHeight
    );

    for (let i = 0; i < particleCount && i < asciiArt.length; i++) {
      const { x, y, char } = asciiArt[i];
      newParticles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        char,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 4 + 3, // Increase circle size
        color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, .4)`, // Generate random color
      });
    }

    setParticles(newParticles);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "10px Comfortaa, cursive";

      newParticles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.99;
        particle.vy *= 0.99;

        const dx = particle.originalX - particle.x;
        const dy = particle.originalY - particle.y;
        particle.vx += dx * 0.01;
        particle.vy += dy * 0.01;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI); // Draw larger circles
        ctx.fillStyle = particle.color; // Use random color
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const generateAsciiArt = (text, particleCount, width, height) => {
    const asciiChars = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."];
    const shape = [];
    const centerX = width / 2;
    const centerY = height / 2;
    const fontSize = 300;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "white";
    ctx.font = `bold ${fontSize}px Comfortaa`;
    ctx.fillText(
      text,
      centerX - ctx.measureText(text).width / 2,
      centerY + fontSize / 3
    );

    const imageData = ctx.getImageData(0, 0, width, height).data;

    for (let y = 0; y < height; y += 4) {
      for (let x = 0; x < width; x += 4) {
        const alpha = imageData[(y * width + x) * 4 + 3];
        if (alpha > 128) {
          const charIndex = Math.floor((alpha / 255) * (asciiChars.length - 1));
          shape.push({ x, y, char: asciiChars[charIndex] });
        }
      }
    }

    return shape;
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    particles.forEach((particle) => {
      const dist = Math.sqrt((particle.x - x) ** 2 + (particle.y - y) ** 2);
      if (dist < 50) {
        const angle = Math.atan2(particle.y - y, particle.x - x);
        particle.vx += Math.cos(angle) * 2;
        particle.vy += Math.sin(angle) * 2;
      }
    });
  };

  return (
    <div className="bg-transparent w-full h-screen">
      <canvas
        ref={canvasRef}
        width="1000%"
        height="700%"
        onMouseMove={handleMouseMove}
      />
    </div>
  );
};

export default HeroTextparticles;
