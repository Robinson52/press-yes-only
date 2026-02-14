const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let noCount = 0;
const noLines = [
  "Are you sure? 🥺",
  "Okay… but like… REALLY sure? 😭",
  "I will literally cry 😤",
  "Last chance 😌",
  "You clicked the wrong button, babe."
];

yesBtn.addEventListener("click", () => {
  result.textContent = "YAYYYYY 💘💘💘 I love you!! Screenshot this and send it to me 😌";
  confettiHearts();
});

noBtn.addEventListener("mouseover", () => {
  // playful dodge
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  result.textContent = noLines[Math.min(noCount, noLines.length - 1)];
  noCount++;
});

function confettiHearts() {
  for (let i = 0; i < 24; i++) {
    const el = document.createElement("span");
    el.textContent = ["💗","💘","💞","💖","💓"][Math.floor(Math.random() * 5)];
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "-10px";
    el.style.fontSize = (16 + Math.random() * 18) + "px";
    el.style.transition = "transform 1.3s ease, opacity 1.3s ease";
    el.style.zIndex = 9999;
    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translateY(${window.innerHeight + 60}px) rotate(${Math.random()*240}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(() => el.remove(), 1400);
  }
}
