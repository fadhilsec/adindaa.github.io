console.log("GEN Z MODE ACTIVATED 🚀");

const loveBtn = document.getElementById('loveBtn');

if (loveBtn) {
    loveBtn.addEventListener('click', (e) => {
        // Button feedback
        loveBtn.innerText = "SENT! 🔥";
        loveBtn.style.background = "#CCFF00";
        loveBtn.style.color = "black";

        // Explosion effects
        createExplosion(e.clientX, e.clientY);

        setTimeout(() => {
            loveBtn.innerText = "Kirim Love 🚀";
            loveBtn.style.background = "";
            loveBtn.style.color = "";
        }, 2000);
    });
}

function createExplosion(x, y) {
    const emojis = ['🔥', '💖', '💀', '🚀', '✨', '💅'];

    for (let i = 0; i < 20; i++) {
        const el = document.createElement('div');
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.position = 'fixed';
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        el.style.fontSize = Math.random() * 20 + 20 + 'px';
        el.style.pointerEvents = 'none';

        // Random velocity
        const velocityX = (Math.random() - 0.5) * 200;
        const velocityY = (Math.random() - 0.5) * 200;

        el.style.transform = `translate(0, 0)`;
        el.style.transition = 'transform 1s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s';

        document.body.appendChild(el);

        // Trigger animation next frame
        requestAnimationFrame(() => {
            el.style.transform = `translate(${velocityX}px, ${velocityY}px) rotate(${Math.random() * 360}deg)`;
            el.style.opacity = '0';
        });

        setTimeout(() => el.remove(), 1000);
    }
}
