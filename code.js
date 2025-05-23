let Theme = false;
const ThemeToggle = document.getElementsByClassName('Theme-Change');

ThemeToggle.addEventListener("click", () => {
  Theme = !Theme;
  if(Theme) {
    ThemeToggle.classList.remove("bxs-moon");
    ThemeToggle.classList.add("bxs-sun");
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  } else {
    ThemeToggle.classList.remove("bxs-sun");
    ThemeToggle.classList.add("bxs-moon");
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }
});