const image = document.querySelector('.image');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Faites défiler vers le bas
        image.classList.remove('enlarged');
    } else {
        // Faites défiler vers le haut
        image.classList.add('enlarged');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);


