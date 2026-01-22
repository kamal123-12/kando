const playground = document.getElementById('playground');
const scoreDisplay = document.getElementById('score');
const popSound = document.getElementById('popSound');

let score = 0;

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Bubble ka random size
    const size = Math.floor(Math.random() * 60) + 40 + "px";
    bubble.style.width = size;
    bubble.style.height = size;

    // Random position
    const posX = Math.random() * (window.innerWidth - 60);
    const posY = Math.random() * (window.innerHeight - 200);
    bubble.style.left = posX + "px";
    bubble.style.top = posY + "px";

    // Click event
    bubble.addEventListener('click', () => {
        popBubble(bubble);
    });

    playground.appendChild(bubble);

    // Kuch der baad bubble apne aap gayab ho jaye (Optional)
    setTimeout(() => {
        if (bubble.parentElement) {
            bubble.remove();
        }
    }, 4000);
}

function popBubble(bubble) {
    // Sound play karein
    popSound.currentTime = 0; // Reset sound if clicked fast
    popSound.play();

    // Score badhayein
    score++;
    scoreDisplay.innerText = score;

    // Bubble ko screen se hatayein
    bubble.remove();
}

// Har 1 second mein naya bubble banayein
setInterval(createBubble, 1000);