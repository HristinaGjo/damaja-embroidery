window.onscroll = function() {
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var scrollPercentage = Math.round((scrollPosition / docHeight) * 100);
    
    // Update the scroll percentage text
    document.getElementById("scroll-percentage").innerText = scrollPercentage + "%";
};