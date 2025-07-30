const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

function start(timeline, origin, angle, duration = 1, ease = "none") {
  timeline.to(".box svg", {
    duration: duration,
    rotate: angle,
    transformOrigin: origin,
    ease: "bounce",
  });
}

function walk(timeline, angle, duration = 1, ease = "none") {
  timeline.to(".box svg", {
    duration: duration,
    rotate: angle,
    ease: "bounce",
  });
}

function set(timeline, origin, angle) {
  timeline.set(".box svg", {
    transformOrigin: origin,
    rotate: angle,
  });
}

start(tl, "right bottom", 90);
walk(tl, 180);
walk(tl, 270);
set(tl, "left bottom", 90);
walk(tl, 180);
walk(tl, 270);
set(tl, "left top", 90);
walk(tl, 180);
walk(tl, 270);
set(tl, "right top", 90);
walk(tl, 180);
walk(tl, 270);
walk(tl, 360);
