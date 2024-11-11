
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
