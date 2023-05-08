var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);

  

// Funzione per mostrare il pop-up dei cookies
function showCookiePopup() {
  var popup = document.getElementById("cookie-popup");
  popup.style.display = "block";
}

// Funzione per nascondere il pop-up dei cookies
function hideCookiePopup() {
  var popup = document.getElementById("cookie-popup");
  popup.style.display = "none";
}

// Controllo se i cookies sono già stati accettati
if (!getCookie("cookiesAccepted")) {
  showCookiePopup();
}

// Aggiungo l'evento onclick al pulsante di accettazione dei cookies
var acceptCookieButton = document.getElementById("accept-cookie");
acceptCookieButton.onclick = function() {
  setCookie("cookiesAccepted", true, 365);
  hideCookiePopup();
};

// Funzione per impostare un cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Funzione per ottenere un cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}