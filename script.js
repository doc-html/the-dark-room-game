const darkness = document.getElementById('darkness');
const batteryDisplay = document.getElementById('battery');
let battery = 100;
let isGameOver = false;

document.addEventListener('mousemove', (event) => {
    if (isGameOver) return;
    const x = event.clientX;
    const y = event.clientY;
    darkness.style.background = `radial-gradient(circle 80px at ${x}px ${y}px, transparent 100%, rgba(0, 0, 0, 0.98) 100%)`;
});

const batteryInterval = setInterval(() => {
    if (isGameOver) {
        clearInterval(batteryInterval);
        return;
    }
    battery -= 1;
    batteryDisplay.innerText = battery;
    if (battery <= 0) {
        isGameOver = true;
        darkness.style.background = 'rgba(0, 0, 0, 1)';
        alert('ফ্ল্যাশলাইটের ব্যাটারি শেষ! GAME OVER!');
    }
}, 1000);
