function toggleAccordion(element) {
    // Fermer tous les autres onglets
    const allButtons = document.querySelectorAll('.accordion-button');
    allButtons.forEach(button => {
        if (button !== element) {
            button.classList.remove('active');
            button.nextElementSibling.style.display = 'none';
        }
    });
  
    // Basculer l'état de l'onglet actuel
    const content = element.nextElementSibling;
    if (element.classList.contains('active')) {
        element.classList.remove('active');
        content.style.display = 'none';
    } else {
        element.classList.add('active');
        content.style.display = 'block';
    }
  }