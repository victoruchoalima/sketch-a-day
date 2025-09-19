gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  content: "#content",
  smooth: 3,
  effects: true,
});

smoother.effects(".image-a", { speed: "1.3" });
smoother.effects(".image-b", { speed: "0.5" });
