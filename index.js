AOS.init();
let upper = document.getElementsByClassName("upper");
let middle = document.getElementsByClassName("middle");
let lower = document.getElementsByClassName("lower");
let tl = new TimelineLite({ paused: true, reversed: true });
let hamburger = document.querySelector(".hamburger");
let link = document.querySelector("#link");
let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");

tl.to(
  upper,
  0.3,
  { attr: { d: "M8,2 L2,8" }, x: 1, ease: Power2.easeInOut },
  "start"
)
  .to(middle, 0.3, { autoAlpha: 0 }, "start")
  .to(
    lower,
    0.3,
    { attr: { d: "M8,8 L2,2" }, x: 1, ease: Power2.easeInOut },
    "start"
  )
  .to(".menu", 0.3, {
    display: "block",
    opacity: 1,
  });

hamburger.addEventListener("click", function () {
  tl.reversed() ? tl.play() : tl.reverse();
});
link.addEventListener("click", function () {
  tl.reversed() ? tl.play() : tl.reverse();
});
link1.addEventListener("click", function () {
  tl.reversed() ? tl.play() : tl.reverse();
});
link2.addEventListener("click", function () {
  tl.reversed() ? tl.play() : tl.reverse();
});

gsap.fromTo("#logo", 0.5, { y: -35 }, { delay: 1, y: 0 });
gsap.fromTo(".mobile-menu", 0.5, { y: -35 }, { delay: 1, y: 0 });

gsap.fromTo("ul li", 0.5, { y: -30 }, { delay: 1, y: 0, stagger: 0.2 });

gsap.fromTo(
  "#text",
  0.5,
  { y: -45, opacity: 0 },
  { delay: 2, y: 0, stagger: 1, opacity: 1 }
);

function handleMenu() {
  gsap.to(".menu", 0.3, {
    display: "block",
    opacity: 1,
  });
}

function handlePageScroll() {
  const scroll = document.querySelector("#scroll");
  const showClass = "show";

  const visibleThreshold = 385;

  window.document.addEventListener("scroll", () => {
    if (window.scrollY > visibleThreshold) {
      scroll.classList.add(showClass);
    } else {
      scroll.classList.remove(showClass);
    }
  });
}
handlePageScroll();
