gsap.fromTo(
  "#logo",
  0.5,
  { y: -35 },
  { delay: 1, y: 0 }
);

gsap.fromTo(
  "ul li",
  0.5,
  { y: -30 },
  { delay: 1, y: 0, stagger: 0.2 }
);

gsap.fromTo('#text', 0.5,
{ y: -45, opacity: 0 },
{ delay: 2, y: 0, stagger: 1, opacity: 1 });


