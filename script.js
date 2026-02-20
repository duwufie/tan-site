let yesScale = 1;
let noClicks = 0;
const maxClicks = 10;
const messages = [
    "Are you sure?",
    "Think again!",
    "Come on, say yes!",
    "Don't be shy!",
    "I'll be your best boyfiee everr!",
    "Pretty please?",
    "You know you want to!",
    "Just click yes!",
    "One more chance!",
    "Last chance!"
];
const yesMessages = [
    "Yes!", // initial
    "Please say yes!",
    "Come on, be my mine!",
    "You know you want to!",
    "I'll be your best doggo!",
    "Will sing your fav lullaby forever?",
    "Tum todo na dil mera 💔!",
    "Haan bol nahi thappad padega!",
    "Will gib u infinite kissis!",
    "I will be your cutieeee!"
];
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const celebration = document.getElementById('celebration');
const messageEl = document.getElementById('message');

function moveNoButton() {
    noClicks++;
    if (noClicks === 10) {
        // Special for last chance: hide No, make Yes very big with HAAAN
        noBtn.style.display = 'none';
        yesBtn.textContent = "HAAAN";
        yesBtn.style.transform = `scale(3)`; // Very big but not covering
        messageEl.textContent = "Last chance!";
    } else if (noClicks < 10) {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        // Shrink the No button progressively
        const scale = 1 - (noClicks / 10);
        noBtn.style.transform = `scale(${scale})`;
        // Grow the Yes button
        yesScale += 0.05;
        yesBtn.style.transform = `scale(${yesScale})`;
        // Show message
        messageEl.textContent = messages[noClicks - 1];
        // Change Yes button text
        yesBtn.textContent = yesMessages[noClicks];
    } else {
        // After 10 clicks, hide the No button and show celebration
        noBtn.style.display = 'none';
        yesBtn.style.display = 'none';
        messageEl.style.display = 'none';
        celebration.style.display = 'block';
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    // Hide buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    messageEl.style.display = 'none';
    // Show celebration
    celebration.style.display = 'block';
    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
