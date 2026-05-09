const slider = document.getElementById('slider');
const firstOrigin = document.getElementById('first-origin');
const lastOrigin = document.getElementById('last-origin');

function setupLoop() {
    // Al cargar, posicionar en la primera tarjeta real (saltando el clon)
    slider.scrollLeft = firstOrigin.offsetLeft;

    slider.addEventListener('scroll', () => {
        const x = slider.scrollLeft;
        const w = slider.offsetWidth;

        // Salto al inicio (si llegas al clon del final)
        if (x >= lastOrigin.offsetLeft + w) {
            slider.style.scrollBehavior = 'auto';
            slider.scrollLeft = firstOrigin.offsetLeft;
            slider.style.scrollBehavior = 'smooth';
        }

        // Salto al final (si vas hacia atrás del todo)
        if (x <= 0) {
            slider.style.scrollBehavior = 'auto';
            slider.scrollLeft = lastOrigin.offsetLeft;
            slider.style.scrollBehavior = 'smooth';
        }
    });
}

// Ejecutar cuando MathJax y el DOM estén listos
window.addEventListener('load', () => {
    setTimeout(setupLoop, 300);
});