import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function initScrollExperience({ camera, face }) {
    const lenis = new Lenis({ duration: 1.7, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        onUpdate: (self) => {
            camera.position.z = 100 - self.progress * 720;
            camera.position.x = Math.sin(self.progress * Math.PI) * 45;
            camera.lookAt(0, 12, -1200);
        }
    });

    ScrollTrigger.create({
        trigger: "#about",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1.8,
        onUpdate: (self) => {
            face.position.z = -120 + self.progress * 350;
            face.scale.setScalar(1 + self.progress);
        }
    });
}