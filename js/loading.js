document.addEventListener("DOMContentLoaded", function() {
    let progress = 0;
    const loadingPage = document.getElementById('loading-page');
    const progressBar = document.querySelector('.progress');
    const boat = document.querySelector('.boat');

    const interval = setInterval(() => {
        progress += 2; // Increase progress faster

        progressBar.style.width = progress + '%';
        boat.style.transform = `translateX(${progressBar.clientWidth - boat.clientWidth}px)`;

        if (progress >= 100) {
            clearInterval(interval);
            loadingPage.classList.add('fade-out'); // Add the fade-out class

            setTimeout(() => {
                window.location.href = "main.html";
            }, 1000); // Match the duration of the opacity transition
        }
    }, 40); // Adjust the speed as needed
});