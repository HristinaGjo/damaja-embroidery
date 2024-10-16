const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');
const menuText = document.getElementById('menuText');
const closeText = document.getElementById('closeText');
const logo = document.getElementById('logo');

// Toggle overlay menu on click
menuToggle.addEventListener('click', () => {
    // Check if the overlay is active (open)
    if (overlay.classList.contains('active')) {
        // Close the menu
        overlay.classList.remove('active');
        menuText.style.display = 'block';  // Show "menu" text
        closeText.style.display = 'none';   // Hide "close" text
        logo.querySelector('a').style.color = '#000';
    } else {

        // Open the menu
        overlay.classList.add('active');
        menuText.style.display = 'none';    // Hide "menu" text
        closeText.style.display = 'block';   // Show "close" text
        logo.querySelector('a').style.color = '#000';
        /*logo.querySelector('a').style.color = '#f2f2f2';*/
    }
});



/* 
        setTimeout(() => {
            overlay.classList.add('active');
        }, 20);
*/

