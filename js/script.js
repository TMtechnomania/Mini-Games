var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("blur-bg");
  var y = document.getElementsByClassName("blur-bg2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  if (slideIndex > y.length) {slideIndex = 1}
  y[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}