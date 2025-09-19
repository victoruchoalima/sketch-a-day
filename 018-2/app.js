gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".racesWrapper > div");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".racesWrapper",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + window.innerWidth * (sections.length - 1),
  },
});
