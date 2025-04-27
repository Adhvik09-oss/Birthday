// Candle Animation
function blowOutCandle() {
    const flame = document.querySelector('.flame');
    const birthdayText = document.querySelector('.birthday-text');

    flame.classList.add('blown');

    setTimeout(() => {
        birthdayText.classList.remove('hidden');
        createConfetti();
    }, 1000);
}

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        confettiContainer.appendChild(confetti);
    }
}

// Fireworks Animation
function createFireworks() {
    const fireworksContainer = document.querySelector('.fireworks-container');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            firework.style.width = '5px';
            firework.style.height = '5px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            firework.style.boxShadow = `0 0 ${Math.random() * 50 + 20}px ${Math.random() * 20 + 10}px ${firework.style.backgroundColor}`;
            firework.style.animation = `explode ${Math.random() * 1 + 0.5}s ease-out forwards`;
            fireworksContainer.appendChild(firework);
        }, i * 500);
    }
}

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.next-btn').addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.prev-btn').addEventListener('click', () => showSlide(currentSlide - 1));

// Section transitions
function transitionToSection(sectionId) {
    document.querySelector('.section.active').classList.remove('active');
    document.getElementById(sectionId).classList.add('active');
}

// Initial animation sequence
window.addEventListener('load', () => {
    // Blow out candle after 3 seconds
    setTimeout(blowOutCandle, 3000);

    // Transition to slideshow after 8 seconds
    setTimeout(() => {
        transitionToSection('slideshow-section');
        showSlide(0);
    }, 8000);

    // Transition to finale after slideshow
    setTimeout(() => {
        transitionToSection('finale-section');
        createFireworks();
    }, 23000);
});

// Add CSS for confetti and fireworks animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }

    @keyframes explode {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);