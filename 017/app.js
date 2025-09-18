gsap.registerPlugin(ScrollTrigger);

const races = document.querySelector(".races");
console.log(races.offsetWidth);

function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 8,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".racesWrapper",
  start: "top 20%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  // markers: true,
});
