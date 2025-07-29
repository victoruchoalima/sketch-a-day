const container = document.querySelector(".box-container");

//boxes production

for (let i = 0; i < 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

//animation

gsap.to(".box", {
  duration: 1,
  scale: 0.1,
  y: 150,
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.5,
  ease: "steps(5)",
  stagger: {
    each: 0.1,
    from: "edges",
  },
});
