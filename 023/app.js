gsap.registerPlugin(DrawSVGPlugin);

const timeline = gsap.timeline();

timeline
  .to(
    "#path",
    {
      duration: 2,
      drawSVG: "46% 54%",
      ease: "bounce",
    },
    ">+0.5"
  )
  .to(
    "#path",
    {
      duration: 2,
      drawSVG: "0 100%",
      ease: "bounce",
    },
    ">+1"
  )
  .to(
    "#path",
    {
      duration: 2,
      drawSVG: "0 8%",
      ease: "bounce",
    },
    ">+1"
  )
  .to(
    "#path",
    {
      duration: 2,
      drawSVG: "0% 100%",
      ease: "bounce",
    },
    ">+1"
  )
  .to("#path", {
    duration: 2,
    drawSVG: "90% 100%",
    ease: "bounce",
  })
  .to("#path", {
    duration: 2,
    drawSVG: "0 10%",
    ease: "bouce",
  })
  .to("#path", {
    duration: 2,
    drawSVG: "0 100%",
    ease: "bounce",
  });
