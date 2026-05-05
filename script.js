// HTML এর এলিমেন্টগুলোকে সিলেক্ট করা (যেমন C-তে পয়েন্টার বা ভ্যারিয়েবল ম্যাপিং করা হয়)
const darkness = document.getElementById('darkness');
const batteryDisplay = document.getElementById('battery');

// গেমের ভ্যারিয়েবল সেটআপ
let battery = 100;
let isGameOver = false;

// ১. মাউস নড়াচড়া ট্র্যাক করার ফাংশন (Event Listener)
document.addEventListener('mousemove', (event) => {
    if (isGameOver) return; // গেম ওভার হলে আলো আর নড়বে না

    // মাউসের বর্তমান X এবং Y কোঅর্ডিনেট নেওয়া
    const x = event.clientX;
    const y = event.clientY;

    // CSS এর রেডিয়াল গ্রেডিয়েন্টকে মাউসের পজিশন অনুযায়ী আপডেট করা
    darkness.style.background = `radial-gradient(circle 80px at ${x}px ${y}px, transparent 100%, rgba(0, 0, 0, 0.98) 100%)`;
});

// ২. ফ্ল্যাশলাইটের ব্যাটারি কমানোর ফাংশন (প্রতি ১ সেকেন্ডে কমবে)
const batteryInterval = setInterval(() => {
    if (isGameOver) {
        clearInterval(batteryInterval); // গーム ওভার হলে লুপ বন্ধ
        return;
    }

    battery -= 1; // প্রতি সেকেন্ডে ১% করে কমবে
    batteryDisplay.innerText = battery; // স্ক্রিনে নতুন ব্যাটারি পার্সেন্টেজ দেখানো

    // ব্যাটারি শেষ হয়ে গেলে যা হবে
    if (battery <= 0) {
        isGameOver = true;
        // পুরো স্ক্রিন একদম কুচকুচে কালো করে দেওয়া
        darkness.style.background = 'rgba(0, 0, 0, 1)';
        alert('ফ্ল্যাশলাইটের ব্যাটারি শেষ! অন্ধকারের ভেতর কিছু একটা তোমাকে ধরে ফেলেছে... GAME OVER!');
    }
}, 1000); // ১০০০ মিলিসেকেন্ড = ১ সেকেন্ড
