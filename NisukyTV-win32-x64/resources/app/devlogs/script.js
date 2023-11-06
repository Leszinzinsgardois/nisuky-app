    const devlogs = document.querySelectorAll('.devlog');

    // Parcours de tous les éléments .devlog
    devlogs.forEach(devlog => {
        const buttonBox = devlog.querySelector('.button-box');
        const contentBox = devlog.querySelector('.content-box');

        // Ajoute un gestionnaire de clic sur le bouton
        buttonBox.addEventListener('click', () => {
            if (contentBox.style.display === 'none') {
                contentBox.style.display = 'block';
                devlog.classList.add('open'); // Ajoute la classe "open"
            } else {
                contentBox.style.display = 'none';
                devlog.classList.remove('open'); // Retire la classe "open"
            }
        });
    });
