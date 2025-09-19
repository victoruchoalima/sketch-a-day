gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2,
  effecs: true,
});

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    smoother.scrollTo(`.box-${i}`, true, "center center");
  });
});

let jumpBack = document.querySelectorAll(".box");

jumpBack.forEach((box) => {
  box.addEventListener("click", (e) => {
    smoother.scrollTo(".title", true, "center center");
  });
});

//another syntactic option for more control over the easing
// buttons.forEach((button, i) => {
//   button.addEventListener("click", (e) => {
//     gsap.to(smoother, {
//       scrollTop: smoother.offset(`.box-${i}`, "center center"),
//       duration: 2,
//       ease: "elastic",
//     });
//   });
// });
