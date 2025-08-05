gsap.registerPlugin(SplitText);

let split = SplitText.create(".palavra", {
  type: "chars",
  wordsClass: "word++",
});

gsap.to(split.chars, {
  yPercent: "random(-500,500,true)",
  xPercent: "random(-500,500,true)",
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "steps(5)",
  stagger: {
    each: 0.2,
  },
});
