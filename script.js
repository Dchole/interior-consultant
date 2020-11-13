const MENU_BTN = document.querySelector("header button.material-icons");
const CLOSE_BTN = document.querySelector("section button.material-icons");
const COLLAPSED_MENU = document.querySelector('section[aria-hidden="true"]');

const MENU_LIST = [...COLLAPSED_MENU.children[1].querySelectorAll("li")];

MENU_BTN.addEventListener("click", _ => {
  COLLAPSED_MENU.style.display = "block";
  COLLAPSED_MENU.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    COLLAPSED_MENU.className = "show";
  }, 0); // Even though it's set to 0, there's a little delay because it's a callback

  gsap.fromTo(
    MENU_LIST,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.32,
      stagger: 0.1
    }
  );
});

CLOSE_BTN.addEventListener("click", _ => {
  COLLAPSED_MENU.className = "collapse";
  COLLAPSED_MENU.setAttribute("aria-hidden", "true");

  gsap.fromTo(
    [...MENU_LIST].reverse(),
    {
      y: 0,
      opacity: 1
    },
    {
      y: 100,
      opacity: 0,
      stagger: 0.1
    }
  );

  setTimeout(() => {
    COLLAPSED_MENU.style.display = "none";
  }, 800);
});
