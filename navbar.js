// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const workClients = document.querySelectorAll('.work-client');
    const whiteOverlay = document.getElementById('white-overlay'); // Reference to the white overlay

    // Check if we're on the studio page
    if (path.includes('studio.html')) {
        // Hide work and clients nav items with a smooth transition
        workClients.forEach(item => {
            item.classList.add('hidden');
        });
    } else {
        // Show work and clients nav items when not on the studio page
        workClients.forEach(item => {
            item.classList.remove('hidden');
        });
    }

    // Handle the 'studio' link click with smooth navigation
    document.querySelector('a[href="studio.html"]').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation

        const currentPath = window.location.pathname;

        // Add the active class to show the white overlay
        whiteOverlay.classList.add('active');

        // If coming directly from 'home' (damaja) to 'studio'
        if (currentPath.includes('index.html') || currentPath === '/' || currentPath.includes('damaja')) {
            // Navigate to the studio page after the overlay appears
            setTimeout(() => {
                window.location.href = "studio.html";
            }, 200); // Adjust the timeout to match your overlay transition duration
        } else {
            // If navigating from work or clients, hide them before navigating to studio
            workClients.forEach(item => {
                item.classList.add('hidden');
            });

            // Add a delay to let the transition play out before navigating
            setTimeout(() => {
                window.location.href = "studio.html";
            }, 200); // Adjust delay to match your transition time
        }
    });
});
