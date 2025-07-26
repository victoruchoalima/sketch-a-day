const tl = gsap.timeline({ repeat: -1 });

tl.fromTo(
  ".box",
  {
    y: -200,
  },
  {
    duration: 0.6,
    y: 600,
    ease: "power2.in",
  }
)

  .to(
    ".box",
    {
      scaleX: 1.3,
      scaleY: 0.7,
      transformOrigin: "bottom center",
      ease: "power2.in",
      duration: 0.2,
    },
    "-=0.1.5"
  )

  .to(
    ".box",
    {
      scaleX: 0.8,
      scaleY: 1.2,
      transformOrigin: "bottom center",
      duration: 0.4,
      ease: "power2.in",
    },
    ">"
  )

  .to(
    ".box",
    {
      scaleY: 1,
      scaleX: 1,
      duration: 1,
      ease: "elastic.out",
      transformOrigin: "bottom center",
    },
    ">"
  )
  .to(".box", {
    x: 3000,
    duration: 3,
    ease: "back.in",
  });
