gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const tl = gsap.timeline({
  onReverseComplete: () => tl2.play(),
  paused: true,
});

const tl2 = gsap.timeline({ paused: true });

tl.to(".palavra", {
  duration: 7,
  scrambleText: {
    text: "vou pensando voltar",
    chars: "xo",
    revealDelay: 2,
    speed: 2,
    rightToLeft: false,
    delimiter: "",
    newClass: "myClass",
    oldClass: "oldClass",
  },
});

tl2.to(".palavra", {
  duration: 6,
  scrambleText: {
    text: "e volto querendo ir",
    chars: "xo",
    revealDelay: 1,
    speed: 2,
    rightToLeft: false,
  },
});

tl.progress(1).reverse();
