import owlCarousel from "owl.carousel";

const button = document.querySelector(".header__burger");
const activeClass = "header__burger--active";

button.addEventListener("click", () => {
  button.classList.toggle(activeClass);
});

// $(".plans__list").owlCarousel({
//   loop: false,
//   items: 3,
// });
