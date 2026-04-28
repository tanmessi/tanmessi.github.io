/**
 * Chức năng: Hiệu ứng xuất hiện khi cuộn chuột (Scroll Reveal)
 */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Khoảng cách để bắt đầu hiện hiệu ứng

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Lắng nghe sự kiện cuộn chuột
window.addEventListener("scroll", reveal);

// Chạy một lần khi vừa load trang để hiện phần đầu
document.addEventListener("DOMContentLoaded", reveal);

console.log("Portfolio Script Loaded Successfully!");