const height = window.innerHeight - 10;

const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

tl.to(".box-container", {
  y: -height,
  duration: 1,
  ease: "bounce.out",
}).to(".box", {
  y: height,
  stagger: 0.1,
  ease: "bounce.out",
  duration: 2,
});
