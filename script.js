// تغيير لون الهيدر عند التمرير
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "#000";
  } else {
    header.style.background = "rgba(0,0,0,.75)";
  }
});

// تأثير بسيط على زر الحجز
const btn = document.querySelector(".btn");

if (btn) {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
}
