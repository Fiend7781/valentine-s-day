// Adding interactivity to the heart
const heart = document.querySelector('.heart');
heart.addEventListener('click', () => {
    alert('Spread love and happiness! ❤️');
});

// Function to navigate to the "For You" page
function goToForYou() {
    window.location.href = "foryou.html";
}
