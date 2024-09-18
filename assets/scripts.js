// JavaScript to toggle mobile menu
const menuBtn = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.getElementById("loading-screen");

    // Function to hide the loading screen
    function hideLoadingScreen() {
        loadingScreen.style.opacity = 0;
        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 1000); // Adjust the timing if needed
    }

    // Simulate a slow network for demo purposes (remove or set to false in production)
    var simulateSlowNetwork = false;

    if (simulateSlowNetwork) {
        setTimeout(hideLoadingScreen, 3000); // 3 seconds delay for demo
    } else {
        hideLoadingScreen();
    }
});

// Show the loading screen during page transitions
window.addEventListener('beforeunload', function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex";
});


document.querySelector('.btn-confirm').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Appointment confirmed!');
});
document.addEventListener('DOMContentLoaded', function () {
    $('#date').persianDatepicker({
        format: 'YYYY/MM/DD',
        autoClose: true
    });
});