/* =========================================
   SUPERIOR PORTFOLIO - INTERACTIVE LOGIC
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initGlitchEffect();
    initSmoothScroll();
});

/* 3. Scroll Reveal */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* 4. Glitch Effect */
function initGlitchEffect() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const element = document.querySelector('.glitch-text');

    if (!element) return;

    let interval = null;
    const originalText = element.innerText;

    element.onmouseover = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
}

/* 5. Smooth Scroll */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
