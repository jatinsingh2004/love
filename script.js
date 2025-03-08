const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    alert("Yay! 💖 I Love You Too! 😍");
    document.body.innerHTML = "<h1 style='color:#ff4081;'>💖 You said YES! 💖</h1>";
});

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
