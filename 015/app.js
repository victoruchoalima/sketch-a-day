gsap.registerPlugin(ScrollTrigger);

gsap.to(".contentBlock", {
  scrollTrigger: {
    trigger: ".contentBlock",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: true,
    scrub: 2,
    // markers: true,
  },
});

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".contentBlock",
    start: "top top",
    end: "bottom -200",
    scrub: 2,
    // markers: true,
  },

  x: 100,
  rotate: 90,
  scale: 5,
  ease: "none",
  stagger: {
    each: 0.1,
    yoyo: true,
    repeat: 1,
  },
});
