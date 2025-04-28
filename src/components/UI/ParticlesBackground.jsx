import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ isDarkMode }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: isDarkMode ? "#ffffff" : "#000000"
      },
      opacity: {
        value: 0.1,
        random: false,
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: isDarkMode ? "#4f46e5" : "#3b82f6",
        opacity: 0.1,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.3
          }
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className="fixed inset-0 -z-10">
      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        options={options} 
      />
    </div>
  );
};

export default ParticlesBackground;