// Funcionalidade do Menu Mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animação de Scroll (Fade In)
// Seleciona todos os elementos com a classe fade-in
const fadeElements = document.querySelectorAll('.fade-in');

// Configura o observador para detectar quando o elemento entra na tela
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Dispara quando 15% do elemento estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar depois que já apareceu
        }
    });
}, observerOptions);

// Aplica o observador em cada elemento
fadeElements.forEach(element => {
    observer.observe(element);
});