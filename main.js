 const button = document.createElement("button");
button.innerText = "الوضع الليلي";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.left = "20px";
button.style.padding = "10px 15px";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.background = "#1e8a6d";
button.style.color = "white";
button.style.cursor = "pointer";
button.style.zIndex = "200";
button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
document.body.appendChild(button);

button.onclick = () => {
    document.body.classList.toggle("dark");
    button.innerText = document.body.classList.contains("dark")
        ? "الوضع النهاري"
        : "الوضع الليلي";
};

document.documentElement.style.scrollBehavior = "smooth";

window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach((s) => {
        let rect = s.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            s.style.opacity = 1;
            s.style.transform = "translateY(0)";
        }
    });
});
