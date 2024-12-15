        const button = document.getElementById('confettiButton');
        button.addEventListener('click', () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        });