
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
