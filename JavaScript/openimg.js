document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable');
    const fullscreenViewer = document.getElementById('fullscreenViewer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeButton = document.getElementById('close');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function openViewer(index) {
        fullscreenImage.src = images[index].src;
        fullscreenViewer.style.display = 'flex';
        currentIndex = index;
    }

    function closeViewer() {
        fullscreenViewer.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        fullscreenImage.src = images[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        fullscreenImage.src = images[currentIndex].src;
    }

    images.forEach((image, index) => {
        image.addEventListener('click', () => openViewer(index));
    });

    closeButton.addEventListener('click', closeViewer);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Close viewer when clicking outside of the image
    fullscreenViewer.addEventListener('click', (e) => {
        if (e.target === fullscreenViewer) {
            closeViewer();
        }
    });
});
