import React from "react";
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  const particlesOptions = {
    fpsLimit: 60,
    // Use "transparent" here so the section's background shows through
    background: { color: { value: "transparent" } },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#BFEDC1" },
      links: { enable: true, color: "#BFEDC1", distance: 150 },
      collisions: { enable: false },
      move: { enable: true, speed: 2, outMode: "bounce" },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  };

  return (
    <Particles
      className="absolute inset-0 z-[-1] border border-red-500"  // Remove border later once verified
      options={particlesOptions}
    />
  );
}
