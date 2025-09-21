gsap.registerPlugin(MorphSVGPlugin);

const morph = gsap.to("#start", {
  morphSVG: "#end",
  morphSVG: { shape: "#end", shapeIndex: -8 },
  duration: 3,
  ease: "back",
  paused: true,
});

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");

play.addEventListener("click", () => morph.play());
pause.addEventListener("click", () => morph.pause());
restart.addEventListener("click", () => morph.restart());
