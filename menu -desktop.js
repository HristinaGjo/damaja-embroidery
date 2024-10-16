// Select elements
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

// Function to open the menu
openMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('visible');
    menuOverlay.classList.remove('hidden');
});

// Function to close the menu
closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('visible');
    menuOverlay.classList.add('hidden');
});
