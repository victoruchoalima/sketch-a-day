gsap.registerPlugin(SplitText);

let split = SplitText.create(".palavra", {
  type: "chars",
  wordsClass: "word++",
});

gsap.to(split.chars, {
  backgroundColor: "black",
  repeat: -1,
  yoyo: true,
  ease: "steps(1)",
  stagger: {
    each: 0.5,
    from: "random",
  },
});
