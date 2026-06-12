console.log("Tudo funcionando! 🚀");

document.querySelectorAll('.grade img').forEach(img => {
  img.addEventListener('click', () => {
    img.style.transform = 'scale(1.1)';
    setTimeout(() => img.style.transform = 'scale(1)', 200);
  });
});
