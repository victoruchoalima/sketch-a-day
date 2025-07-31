gsap.registerPlugin(SplitText);

let split = SplitText.create(".palavra", {
  type: "chars, words",
  wordsClass: "word++",
});

gsap.to(split.chars, {
  y: -100,
  ease: "steps(2)",
  stagger: {
    amount: 3,
    from: "random",
    repeat: -1,
    yoyo: true,
  },
});
