// ============================================================
//  BLOG - Trang đọc bài viết chi tiết (post.html?id=...)
// ============================================================

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

function readingTime(html) {
    const text = html.replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
}

function getPostId() {
    return new URLSearchParams(window.location.search).get("id");
}

function renderPost() {
    const container = document.getElementById("postMain");
    const id = getPostId();
    const post = (typeof BLOG_POSTS !== "undefined") ? BLOG_POSTS.find(p => p.id === id) : null;

    if (!post) {
        container.innerHTML = `
            <div class="post-notfound">
                <i class="fas fa-triangle-exclamation"></i>
                <h1>Không tìm thấy bài viết</h1>
                <p>Bài viết bạn tìm không tồn tại hoặc đã được gỡ bỏ.</p>
                <a class="btn" href="blog.html"><i class="fas fa-arrow-left"></i> Về trang Blog</a>
            </div>`;
        return;
    }

    document.title = post.title + " | Phạm Lê Tân";

    // Bài viết liên quan (cùng chủ đề, tối đa 2)
    const related = BLOG_POSTS
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    const relatedHtml = related.length ? `
        <section class="post-related">
            <h2 class="section-title">Bài viết liên quan</h2>
            <div class="blog-grid">
                ${related.map(p => `
                    <a class="blog-card" href="post.html?id=${encodeURIComponent(p.id)}">
                        <div class="blog-card-thumb">
                            <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy">
                            <span class="tag tag-active">${escapeHtml(p.category)}</span>
                        </div>
                        <div class="blog-card-body">
                            <div class="blog-card-meta"><span><i class="fas fa-calendar-day"></i> ${formatDate(p.date)}</span></div>
                            <h3>${escapeHtml(p.title)}</h3>
                            <p>${escapeHtml(p.excerpt)}</p>
                            <span class="blog-card-more">Đọc tiếp <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>`).join("")}
            </div>
        </section>` : "";

    const shareUrl = encodeURIComponent(window.location.href);

    container.innerHTML = `
        <article class="post-article">
            <a class="post-back" href="blog.html"><i class="fas fa-arrow-left"></i> Tất cả bài viết</a>
            <span class="tag tag-active post-cat">${escapeHtml(post.category)}</span>
            <h1 class="post-title">${escapeHtml(post.title)}</h1>
            <div class="post-meta">
                <span><i class="fas fa-user-pen"></i> ${escapeHtml(post.author || "Phạm Lê Tân")}</span>
                <span><i class="fas fa-calendar-day"></i> ${formatDate(post.date)}</span>
                <span><i class="fas fa-clock"></i> ${readingTime(post.content)} phút đọc</span>
            </div>
            <div class="post-cover">
                <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}">
            </div>
            <div class="post-content">${post.content}</div>

            <div class="post-share">
                <span>Chia sẻ:</span>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/intent/tweet?url=${shareUrl}" target="_blank" rel="noopener" title="X"><i class="fab fa-x-twitter"></i></a>
                <button id="copyLink" title="Sao chép liên kết"><i class="fas fa-link"></i></button>
            </div>
        </article>
        ${relatedHtml}
    `;

    const copyBtn = document.getElementById("copyLink");
    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(window.location.href);
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => { copyBtn.innerHTML = '<i class="fas fa-link"></i>'; }, 1500);
            } catch (e) { /* clipboard không khả dụng */ }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initShellUI();
    renderPost();
});
