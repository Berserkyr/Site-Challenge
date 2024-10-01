let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide'); // Sélection des slides avec la bonne classe
    const totalSlides = slides.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    const slidesContainer = document.querySelector('.carousel-inner'); // Sélection du conteneur avec la bonne classe
    const slideWidth = slides[0].offsetWidth; // Largeur d'une slide
    slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Translation du conteneur
}

// Optionnel : Ajouter des écouteurs pour les touches de direction
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        moveSlide(1);
    } else if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});
