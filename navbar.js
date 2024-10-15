// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    const path = window.location.pathname;

    // Check if we're on the studio page
    if (path.includes('studio.html')) {
        // Hide work and clients nav items
        document.querySelectorAll('.work-client').forEach(item => {
            item.classList.add('hidden');
        });
    } else {
        // Show work and clients nav items
        document.querySelectorAll('.work-client').forEach(item => {
            item.classList.remove('hidden');
        });
    }
});
