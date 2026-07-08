var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

console.log(button);
console.log(cat);

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
 //   console.log("Yes.");
  } else {
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  //  console.log("No.");
}
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
});

 add("show");*/