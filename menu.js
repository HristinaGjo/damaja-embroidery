const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');
const logo = document.getElementById('logo').querySelector('a');

// Toggle overlay menu on click
menuToggle.addEventListener('click', () => {
    // Check if the overlay is active (open)
    if (overlay.classList.contains('active')) {
        // Close the menu and go to homepage
        overlay.classList.remove('active');
        menuToggle.textContent = 'menu';  // Change the button back to 'Menu'
        menuToggle.style.color = '#333';  // Set text color to black

        /*logo.style.visibility = 'visible';*/
        logo.style.color = '#333'; 
        
        // Redirect to homepage (change 'index.html' or '/' to your home URL if needed)
        /*window.location.href = "https://hristinagjo.github.io/damaja-studio/";  // You can adjust the URL based on your homepage route*/

    } else {
        // Open the menu
        overlay.classList.add('active');
        menuToggle.textContent = 'CLOSE';  // Change the button text to 'Close'
        menuToggle.style.color = '#f2f2f2';  // Set text color to white
        /*menuToggle.style.fontWeight = '200'; */

        /*logo.style.visibility = 'hidden';*/
        logo.style.color = '#000'; 
    }
});

