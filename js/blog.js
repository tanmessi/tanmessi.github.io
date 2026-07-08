// ============================================================
//  BLOG - Trang danh sách bài viết
// ============================================================

// ---- Tiện ích dùng chung (nav, cuộn, ngày tháng) ----
function initShellUI() {
    const navbar = document.getElementById("navbar");
    const progress = document.getElementById("scrollProgress");
    const backToTop = document.getElementById("backToTop");
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    function onScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (progress) progress.style.width = percent + "%";
        if (navbar) navbar.classList.toggle("scrolled", scrollTop > 40);
        if (backToTop) backToTop.classList.toggle("show", scrollTop > 500);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();

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
}

function formatDate(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric" });
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[s]));
}

// ---- Render danh sách blog ----
const grid = document.getElementById("blogGrid");
const emptyState = document.getElementById("blogEmpty");
const filtersEl = document.getElementById("blogFilters");
const searchEl = document.getElementById("blogSearch");

let activeCategory = "Tất cả";
let searchTerm = "";

function getCategories() {
    const set = new Set(BLOG_POSTS.map(p => p.category));
    return ["Tất cả", ...set];
}

function renderFilters() {
    filtersEl.innerHTML = getCategories().map(cat =>
        `<button class="filter-chip${cat === activeCategory ? " active" : ""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`
    ).join("");

    filtersEl.querySelectorAll(".filter-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            activeCategory = btn.dataset.cat;
            renderFilters();
            renderPosts();
        });
    });
}

function renderPosts() {
    const posts = BLOG_POSTS.filter(p => {
        const matchCat = activeCategory === "Tất cả" || p.category === activeCategory;
        const term = searchTerm.trim().toLowerCase();
        const matchSearch = !term ||
            p.title.toLowerCase().includes(term) ||
            p.excerpt.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if (posts.length === 0) {
        grid.innerHTML = "";
        emptyState.hidden = false;
        return;
    }
    emptyState.hidden = true;

    grid.innerHTML = posts.map(p => `
        <a class="blog-card" href="post.html?id=${encodeURIComponent(p.id)}">
            <div class="blog-card-thumb">
                <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy">
                <span class="tag tag-active">${escapeHtml(p.category)}</span>
            </div>
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span><i class="fas fa-calendar-day"></i> ${formatDate(p.date)}</span>
                    <span><i class="fas fa-user-pen"></i> ${escapeHtml(p.author || "Phạm Lê Tân")}</span>
                </div>
                <h3>${escapeHtml(p.title)}</h3>
                <p>${escapeHtml(p.excerpt)}</p>
                <span class="blog-card-more">Đọc tiếp <i class="fas fa-arrow-right"></i></span>
            </div>
        </a>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    initShellUI();
    if (typeof BLOG_POSTS === "undefined" || !Array.isArray(BLOG_POSTS)) return;

    renderFilters();
    renderPosts();

    if (searchEl) {
        searchEl.addEventListener("input", e => {
            searchTerm = e.target.value;
            renderPosts();
        });
    }
});
