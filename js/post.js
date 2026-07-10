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
                ${related.map(p => renderFbFeedCard(p)).join("")}
            </div>
        </section>` : "";

    const shareUrl = encodeURIComponent(window.location.href);
    const eng = (typeof fbEngagement === "function") ? fbEngagement(post.id) : { likes: 0, comments: 0, shares: 0 };
    const dateLabel = (typeof fbRelativeDate === "function") ? fbRelativeDate(post.date) : formatDate(post.date);

    container.innerHTML = `
        <a class="post-back" href="blog.html"><i class="fas fa-arrow-left"></i> Bảng tin</a>
        <article class="post-article">
            <div class="post-fb-head">
                <img class="fb-avatar" src="assets/img/anh2.jpg" alt="${escapeHtml(post.author || "Phạm Lê Tân")}">
                <div class="post-fb-headinfo">
                    <span class="fb-author">${escapeHtml(post.author || "Phạm Lê Tân")}<i class="fas fa-circle-check" title="Đã xác minh"></i></span>
                    <span class="fb-post-time">${dateLabel} · <span class="fb-cat-chip">${escapeHtml(post.category)}</span> · <i class="fas fa-clock"></i> ${readingTime(post.content)} phút đọc · <i class="fas fa-earth-asia"></i></span>
                </div>
                <button class="fb-post-more" type="button" aria-label="Tùy chọn"><i class="fas fa-ellipsis"></i></button>
            </div>

            <h1 class="post-title">${escapeHtml(post.title)}</h1>
            <div class="post-cover">
                <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}">
            </div>
            <div class="post-content">${post.content}</div>

            <div class="post-stats">
                <span class="fb-react-icons"><i class="fb-r">👍</i><i class="fb-r">❤️</i><i class="fb-r">😆</i></span>
                <span class="fb-stats-count">${eng.likes.toLocaleString("vi-VN")}</span>
                <span class="fb-stats-right">${eng.comments} bình luận · ${eng.shares} lượt chia sẻ</span>
            </div>

            <div class="post-share">
                <button class="fb-act-like" type="button"><i class="far fa-thumbs-up"></i> Thích</button>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener"><i class="fab fa-facebook-f"></i> Facebook</a>
                <a href="https://twitter.com/intent/tweet?url=${shareUrl}" target="_blank" rel="noopener"><i class="fab fa-x-twitter"></i> Đăng lại</a>
                <button id="copyLink" type="button"><i class="fas fa-link"></i> Sao chép</button>
            </div>
        </article>
        ${relatedHtml}
    `;

    const copyBtn = document.getElementById("copyLink");
    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(window.location.href);
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Đã sao chép';
                setTimeout(() => { copyBtn.innerHTML = '<i class="fas fa-link"></i> Sao chép'; }, 1500);
            } catch (e) { /* clipboard không khả dụng */ }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initShellUI();
    renderPost();
});
