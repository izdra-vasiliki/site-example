
/*let slideIndex = 1;
showSlides(slideIndex);

// Επόμενο/Προηγούμενο controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Έλεγχος της μικρογραφίας
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slideCount = slides.length;

    // Έλεγχος αν ο δείκτης ξεπερνά τα όρια
    if (n > slideCount - 2) { slideIndex = 1; }
    if (n < 1) { slideIndex = slideCount - 2; }

    // Αρχικά, κρύβουμε όλες τις κάρτες
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Εμφάνιση των τριών slides
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    slides[slideIndex + 1].style.display = "block";
}

// Καλέστε την `showSlides` για να δείξετε τις αρχικές τρεις κάρτες
showSlides(slideIndex);*/
window.onload = function() {
  showSlides(slideIndex);
};

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let slideCount = slides.length;

  if (n > slideCount - 2) { slideIndex = 1; }
  if (n < 1) { slideIndex = slideCount - 2; }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex + 1].style.display = "block";
}
