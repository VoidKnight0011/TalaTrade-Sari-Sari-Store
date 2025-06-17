// Drop down
const user = document.querySelector("#user");
user.addEventListener("click", () => {
  let dropdown = document.querySelector(".dropdown");
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
});