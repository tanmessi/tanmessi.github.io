// Hiệu ứng hiện hình khi cuộn chuột
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

console.log("Phạm Lê Tân Portfolio v2026 Loaded!");