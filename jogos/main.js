// Seleciona todas as caixas com a classe 'card'
const cards = document.querySelectorAll('.card');

// Função para aplicar o efeito ao passar o mouse
function addHoverEffect(event) {
    event.currentTarget.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    event.currentTarget.style.transform = 'scale(1.05)';
    event.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
}

// Função para remover o efeito ao sair com o mouse
function removeHoverEffect(event) {
    event.currentTarget.style.transform = 'scale(1)';
    event.currentTarget.style.boxShadow = 'none';
}

// Adiciona os eventos para cada card
cards.forEach((card) => {
    card.addEventListener('mouseover', addHoverEffect);
    card.addEventListener('mouseout', removeHoverEffect);
});
