import Hero from "./Hero";
import Projects from "./Projects";
import Particles from "react-tsparticles";

const App = () => {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Particles
        options={{
          background: { color: { value: "#ffffff" } },
          fpsLimit: 60,
          interactivity: {
            events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#000000" },
            links: { color: "#000000", distance: 150, enable: true, opacity: 0.5, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 2, straight: false },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Projects />
      </div>
    </main>
  );
};
export default App;
