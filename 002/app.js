const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const moves = [goUp, goDown, goLeft, goRight];

tl = gsap.timeline();

function goDown() {
  return gsap.to(".box", {
    duration: 1,
    ease: "steps(5)",
    y: screenHeight / 2,
  });
}

function goUp() {
  return gsap.to(".box", {
    duration: 1,
    ease: "steps(5)",
    y: -screenHeight / 2,
  });
}

function goLeft() {
  return gsap.to(".box", {
    duration: 1,
    ease: "steps(5)",
    x: -screenWidth / 2,
  });
}
function goRight() {
  return gsap.to(".box", {
    duration: 1,
    ease: "steps(5)",
    x: screenWidth / 2,
  });
}
function randomTl(steps) {
  const tl = gsap.timeline();

  for (let i = 0; i < steps; i++) {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    tl.add(randomMove());
  }
  return tl;
}

const timeline = randomTl(10);
timeline.repeat(-1).yoyo(true);
