document.addEventListener('DOMContentLoaded', function() {
    function createConfetti() {
        const duration = 5 * 1000; // Duración en milisegundos
        const end = Date.now() + duration;
        const colors = ['#ff0a82', '#ff6f6f', '#ff9a00', '#ffdd00']; 

        (function frame() {
            confetti({
                particleCount: 100,
                angle: 90,
                spread: 70,
                origin: { x: 0.5, y: 0.6 }, // Centrado en la pantalla, ligeramente hacia abajo
                colors: colors,
                shapes: ['circle'], // Formas de los confeti
                scalar: 1.5 // Aumenta el tamaño de los confeti
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    createConfetti();
});
