gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(MotionPathHelper);

gsap.to("#carrier", {
  duration: 10,
  ease: "none",
  repeat: -1,
  yoyo: true,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    // autoRotate: true,
    start: 0,
    end: 1,
  },
});

// bob UP/DOWN independently (affects inner only)
gsap.to("#rect", {
  duration: 0.2,
  y: 10,
  repeat: -1,
  yoyo: true,
  ease: "none",
});
// MotionPathHelper.create("#rect");
