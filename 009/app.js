gsap.registerPlugin(SplitText);

let split = SplitText.create(".palavra", {
  type: "chars",
  wordsClass: "word++",
});

gsap.to(split.chars, {
  y: -300,
  ease: "steps(3)",
  stagger: {
    amount: 0.5,
    from: "edges",
    grid: "auto",
    repeat: -1,
    yoyo: true,
  },
});
