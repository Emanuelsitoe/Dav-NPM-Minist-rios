const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hiddenCards = document.querySelectorAll('.hidden-card');

    loadMoreBtn.addEventListener('click', function() {
        hiddenCards.forEach(card => {
            if (card.style.display === 'block') {
                card.style.display = 'none';
                loadMoreBtn.textContent = 'Ver Todos os Módulos';
            } else {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
                loadMoreBtn.textContent = 'Ver Menos';
            }
        });
    });

    // Animação simples de fade in para os novos cards
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);