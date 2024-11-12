document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});
