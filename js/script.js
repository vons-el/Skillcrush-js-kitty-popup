var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

console.log(button);
console.log(cat);

button.addEventListener("click", function () {
  cat.classList.add("show");
});


/*darkModeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-palette")) {
    body.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    body.classList.add("dark.palette");
    darkModeButton.innerText = "Light Mode";
  }
  body.classList.add("dark-palette");
});*/