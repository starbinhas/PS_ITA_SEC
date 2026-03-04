function toggleHint(index) {
    const hintContent = document.getElementById(`hint-${index}`);
    const button = event.target;
    
    if (hintContent.classList.contains('show')) {
        hintContent.classList.remove('show');
        button.textContent = 'Mostrar Dica';
    } else {
        hintContent.classList.add('show');
        button.textContent = 'Ocultar Dica';
    }
}

function createMatrixBit() {
    const bit = document.createElement('div');
    bit.className = 'matrix-bit';
    
    // Generate random 8-bit string with spaces between bits for vertical display
    let bitString = '';
    for (let i = 0; i < 8; i++) {
        bitString += (Math.random() > 0.5 ? '1' : '0') + ' ';
    }
    bitString = bitString.trim();
    
    bit.textContent = bitString;
    bit.style.left = Math.random() * window.innerWidth + 'px';
    bit.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.getElementById('matrix-bg').appendChild(bit);
    
    // Remove after animation completes (no fade out)
    setTimeout(() => {
        bit.remove();
    }, 5000);
}

function initMatrixBackground() {
    setInterval(createMatrixBit, 200);
}

document.addEventListener('DOMContentLoaded', function() {
    initMatrixBackground();
    
    const challengeItems = document.querySelectorAll('.challenge-item');
    challengeItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = 'fadeIn 0.5s ease forwards';
    });
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});
