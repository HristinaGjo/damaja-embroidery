const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

// Toggle overlay menu on click
menuToggle.addEventListener('click', () => {
    // Check if the overlay is active (open)
    if (overlay.classList.contains('active')) {
        // Close the menu
        overlay.classList.remove('active');
        menuIcon.style.display = 'block';  // Show hamburger icon
        closeIcon.style.display = 'none';   // Hide close icon
    } else {
        // Open the menu
        overlay.classList.add('active');
        menuIcon.style.display = 'none';   // Hide hamburger icon
        closeIcon.style.display = 'block';  // Show close icon
    }
});

