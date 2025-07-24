function squaring(
  timeline,
  times,
  distance = 600,
  duration = 1,
  rotation = 360,
  ease = "elastic"
) {
  for (let i = 0; i < times; i++) {
    timeline
      .to(".box", {
        y: `-=${distance}`,
        duration,
        rotation: `+=${rotation}`,
        ease,
      })
      .to(".box", {
        x: `-=${distance}`,
        duration,
        rotation: `+=${rotation}`,
        ease,
      })
      .to(".box", {
        y: `+=${distance}`,
        duration,
        rotation: `+=${rotation}`,
        ease,
      })
      .to(".box", {
        x: `+=${distance}`,
        duration,
        rotation: `+=${rotation}`,
        ease,
      });
  }
}

const tl = gsap.timeline();
tl.to(".box", { y: "+=200", duration: 1, ease: "bounce.out" });
tl.to(".box", { x: "+=200", duration: 1, ease: "bounce.out" });

squaring(tl, 20, 400, 1, 360, "elastic");
