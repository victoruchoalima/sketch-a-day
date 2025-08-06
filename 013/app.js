gsap.registerPlugin(ScrollTrigger);

tl = gsap.timeline();

tl.to(".c, .a, .b, .d, .e", {
  scrollTrigger: {
    trigger: ".a",
    start: "top 40%",
    end: "210 center",
    scrub: 1,
    // toggleActions: "restart pause reverse none",
    // markers: true,
  },
  x: 400,
  duration: 5,
  stagger: 1,
  ease: "steps(3)",
})
  .to(".c svg, .a svg, .b svg, .d svg, .e svg", {
    scrollTrigger: {
      trigger: ".c",
      // markers: true,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
    rotate: 360,
    transformOrigin: "center center",
    stagger: 0.2,
    ease: "steps(3)",
  })
  .to(".c, .a, .b, .d, .e", {
    scrollTrigger: {
      trigger: ".d",
      start: "top center",
      end: "200 60%",
      scrub: 1,
      // markers: true,
    },
    x: -400,
    duration: 5,
    stagger: 1,
    ease: "steps(3)",
  });
