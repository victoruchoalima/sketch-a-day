gsap.to(".box", {
  x: 8,
  repeat: -1,
  yoyo: true,
  duration: 0.02,
});

gsap.to(".box", {
  rotation: 360,
  repeat: -1,
  yoyo: false,
  duration: 3,
  ease: "none",
});

gsap.to(".box-wrapper", {
  rotate: -360,
  duration: 2,
  repeat: -1,
  ease: "none",
  yoyo: true,
});
