// ===== Hiệu ứng hiện hình khi cuộn chuột =====
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 120) {
            el.classList.add("active");
        }
    });
}

// ===== Thanh tiến trình cuộn + nav + back-to-top =====
const navbar = document.getElementById("navbar");
const progress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progress) progress.style.width = percent + "%";
    if (navbar) navbar.classList.toggle("scrolled", scrollTop > 40);
    if (backToTop) backToTop.classList.toggle("show", scrollTop > 500);

    reveal();
    setActiveLink();
}

// ===== Đếm số liệu (chạy 1 lần khi hiện) =====
let statsAnimated = false;
function animateStats() {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection || statsAnimated) return;
    const top = statsSection.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        statsAnimated = true;
        document.querySelectorAll(".stat-number").forEach(el => {
            const target = +el.dataset.target;
            const suffix = el.dataset.suffix || "";
            const duration = 1600;
            const start = performance.now();
            function tick(now) {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }
}

// ===== Highlight menu theo section đang xem =====
const sections = document.querySelectorAll("section[id], header[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
function setActiveLink() {
    let current = "";
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
}

// ===== Menu mobile =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("open");
        navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
            navToggle.classList.remove("open");
            navLinks.classList.remove("open");
        });
    });
}

window.addEventListener("scroll", () => {
    onScroll();
    animateStats();
});
document.addEventListener("DOMContentLoaded", () => {
    onScroll();
    animateStats();
    renderLatestPosts();
});

// ===== Bài viết mới nhất (kéo 3 bài từ blog-data.js) =====
function renderLatestPosts() {
    const wrap = document.getElementById("latestPosts");
    if (!wrap || typeof BLOG_POSTS === "undefined" || !Array.isArray(BLOG_POSTS)) return;

    const posts = [...BLOG_POSTS]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    wrap.innerHTML = posts.map(p => renderFbFeedCard(p)).join("");
}

console.log("Phạm Lê Tân Portfolio v2026 Loaded!");