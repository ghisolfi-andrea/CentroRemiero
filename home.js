let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}



button.addEventListener("click", readMore);

function readMore() {
     if (article.className == "open") {
       // leggi meno
     article.className = "";
     button.innerHTML = "Show more";
   } else {
     article.className = "open";
     button.innerHTML = "Show less";
   }
}


button.addEventListener("click", readMore2);

function readMore2() {
    if (article.className == "open") {
      // leggi meno
    article.className = "";
    button.innerHTML = "Show more";
  } else {
    article.className = "open";
    button.innerHTML = "Show less";
  }
}





function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function acceptCookies() {
  setCookie("cookiePopupShown", "true", 7);
  document.getElementById("cookiePopup").style.display = "none";
}

function rejectCookies() {
  setCookie("cookiePopupShown", "false", 7);
  document.getElementById("cookiePopup").style.display = "none";
}

window.onload = function () {
  if (getCookie("cookiePopupShown") !== "true") {
    document.getElementById("cookiePopup").style.display = "block";
  }
  document.getElementById("cookieLink").addEventListener("click", function (e) {
    e.preventDefault();
    // Inserire qui il link alla pagina di informazioni sui cookie
    alert("Pagina di informazioni sui cookie non disponibile.");
  });
};