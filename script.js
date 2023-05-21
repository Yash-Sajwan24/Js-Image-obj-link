let img = document.querySelector("img");
let link = document.querySelector("a");

img.addEventListener("click", function (e) {
  if (e.offsetX > 42 && e.offsetY > 317 && e.offsetX < 173 && e.offsetY < 408) {
    link.setAttribute("href", "https://github.com/Yash-Sajwan24");
  }
  else if (e.offsetX > 299 && e.offsetX < 373 && e.offsetY > 166 && e.offsetY < 257){
    link.setAttribute("href", "https://www.linkedin.com/in/yash-sajwan-80902b17b/");
  } 
  else {
    e.preventDefault();
  }
});

img.addEventListener("mousemove", function (e) {
  if (
    (e.offsetX > 42 && e.offsetY > 317 && e.offsetX < 173 && e.offsetY < 408) ||
    (e.offsetX > 299 && e.offsetX < 373 && e.offsetY > 166 && e.offsetY < 257)
  ) {
    img.setAttribute("class", "img add-cursor");
  } else {
    img.setAttribute("class", "img");
  }
});
