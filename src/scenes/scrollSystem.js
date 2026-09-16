import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollSystem {
  constructor() {
    this.handleScroll = null;
    this.init();
  }

  destroy() {
    if (this.handleScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  init() {
    this.setupNavbarScroll();
    this.setupSectionAnimations();
    this.setupParallax();
  }

  setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;

    this.handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', this.handleScroll);
  }

  setupSectionAnimations() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
          markers: false,
        },
        opacity: 0.5,
        y: 30,
        duration: 0.8,
      });
    });
  }

  setupParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        y: -50,
        duration: 1,
      });
    });
  }
}