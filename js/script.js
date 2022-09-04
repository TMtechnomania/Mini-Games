var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  var y = document.getElementsByClassName("slide2");
  var z = document.getElementsByClassName("slide3");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.opacity = "0";
  }
  for (i = 0; i < z.length; i++) {
    z[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.opacity = "1";
  if (slideIndex > y.length) {slideIndex = 1}
  y[slideIndex-1].style.opacity = "1";
  if (slideIndex > z.length) {slideIndex = 1}
  z[slideIndex-1].style.opacity = "1";
  setTimeout(carousel, 2500); // Change image every 2 seconds
}