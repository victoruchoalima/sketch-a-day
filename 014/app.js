gsap.registerPlugin(ScrollTrigger);

gsap.set(".box1", {
  x: 0,
});
gsap.set(".box2", {
  x: 500,
});
gsap.set(".box3", {
  x: 0,
});
gsap.to(".box1", {
  scrollTrigger: {
    trigger: ".boxContainer1",
    start: "top 90",
    end: "+=300",
    pin: true,
    pinSpacing: true,
    scrub: 2,
    // markers: true,
  },
  x: "+=500",
});
gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".boxContainer2",
    start: "top 90",
    end: "+=300",
    pin: true,
    pinSpacing: true,
    // markers: true,
    scrub: 2,
  },
  x: "-=500",
});
gsap.to(".box3", {
  scrollTrigger: {
    trigger: ".boxContainer3",
    start: "top 90",
    end: "+=300",
    pin: true,
    pinSpacing: true,
    // markers: true,
    scrub: 2,
  },
  x: "+=500",
});
