gsap.to(".texto", {
  filter: "blur(10px)",
  duration: 2,
  ease: "power2.out",
  stagger: {
    each: 1,
    grid: "auto",
    from: "random",
    repeat: -1,
    yoyo: true,
  },
});
