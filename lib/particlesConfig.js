const particlesConfig = {
    background: {
        color: {
            value: '#00a'
        },
        opacity: 0.1
    },
    fpsLimit: 60,
    interactivity: {
        events: {
        onClick: {
            enable: true,
            mode: "push",
        },
        onHover: {
            enable: true,
            mode: "repulse",
        },
        resize: true,
        },
    },
    particles: {
        color: {
        value: "#222",
        },
        links: {
        color: "#222",
        distance: 200,
        enable: true,
        opacity: 0.5,
        width: 1,
        },
        collisions: {
        enable: true,
        },
        move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 3.5,
        straight: false,
        },
        number: {
        density: {
            enable: true,
            area: 1000,
        },
        value: 80,
        },
        opacity: {
        value: 0.3,
        },
        shape: {
        type: "circle",
        },
        size: {
        random: true,
        value: 3,
        },
    },
    detectRetina: true,
  };
  
  export default particlesConfig;