
    document.addEventListener("DOMContentLoaded", function() {
        var navTrigger = document.querySelector('.navTrigger');
        var navLinks = document.querySelector('.navlinks');

        navTrigger.addEventListener('click', function() {
            navTrigger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    });
