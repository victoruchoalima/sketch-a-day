gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let rotateSetter = gsap.quickTo(".box-b", "rotation");
let clamp = gsap.utils.clamp(-360, 360);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  onUpdate: (self) => {
    rotateSetter(clamp(self.getVelocity()));
  },
});
