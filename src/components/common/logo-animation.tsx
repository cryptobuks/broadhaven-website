import * as React from "react"
import Particles from "react-particles-js"

const LogoAnimation = () => (
  <Particles
    height="250px"
    width="300px"
    params={{
      fps_limit: 28,
      particles: {
        number: {
          value: 200
        },
        color: {
          value: "#000000"
        },
        line_linked: {
          enable: true,
          distance: 20,
          opacity: 0.3,
          color: "#000000"
        },
        move: {
          speed: 1
        },
        opacity: {
          anim: {
            enable: true,
            opacity_min: 0.05,
            speed: 2,
            sync: false
          },
          value: 1
        }
      },
      polygon: {
        enable: true,
        scale: 0.08,
        type: "inline",
        move: {
          radius: 1
        },
        url: "tesseract.svg",
        inline: {
          arrangement: "equidistant"
        },
        draw: {
          enable: true,
          stroke: {
            color: "rgba(0, 0, 0, 0.1)"
          }
        }
      },
      retina_detect: false,
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          }
        },
        modes: {
          bubble: {
            size: 4,
            distance: 20
          }
        }
      }
    }}
  />
)

export default LogoAnimation
