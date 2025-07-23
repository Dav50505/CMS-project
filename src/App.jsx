import Projects from "./Projects";
import Particles from "react-tsparticles";
import Hero from "./Hero";
import './index.css';

const App = () => {
  return (
    <>
      <Particles
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#fff" },
            links: { color: "#fff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1.5, straight: false },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 6 } },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Projects />
      </div>
    </>
  );
};

export default App;
