/*
 * ============================================================
 *  DỮ LIỆU BLOG - Phạm Lê Tân
 * ============================================================
 *  HƯỚNG DẪN ĐĂNG BÀI MỚI:
 *  1. Sao chép một khối { ... } bên dưới.
 *  2. Dán vào ĐẦU mảng BLOG_POSTS (bài mới nhất để lên trên cùng).
 *  3. Sửa các thông tin: id, title, category, date, image, excerpt, content.
 *     - id:       chuỗi duy nhất, không dấu, không khoảng trắng (vd: "ai-2026").
 *     - category: chủ đề bài viết (vd: "Công nghệ", "Chuyển đổi số", "Tin tức").
 *     - date:     ngày đăng dạng "YYYY-MM-DD".
 *     - image:    đường dẫn ảnh bìa (vd: "assets/img/anh3.png").
 *     - excerpt:  đoạn tóm tắt ngắn hiển thị ở trang danh sách.
 *     - content:  nội dung bài viết (HTML). Dùng <p>, <h2>, <ul><li>, <blockquote>...
 *  4. Lưu file. Bài viết tự động xuất hiện trên trang Blog.
 * ============================================================
 */

const BLOG_POSTS = [
    {
        id: "bi-dashboard-ra-quyet-dinh",
        title: "BI Dashboard: Ra quyết định bằng dữ liệu thời gian thực",
        category: "Công nghệ",
        date: "2026-07-02",
        author: "Phạm Lê Tân",
        image: "assets/img/anh4.png",
        excerpt: "Dashboard trực quan giúp lãnh đạo nhìn thấy 'bức tranh lớn' chỉ trong vài giây. Nhưng một BI tốt bắt đầu từ việc hiểu đúng câu hỏi kinh doanh.",
        content: `
            <p>Business Intelligence (BI) không chỉ là những biểu đồ đẹp mắt. Giá trị thật sự nằm ở khả năng biến dữ liệu thô thành thông tin phục vụ ra quyết định.</p>

            <h2>Bắt đầu từ câu hỏi kinh doanh</h2>
            <p>Trước khi dựng dashboard, cần trả lời: lãnh đạo cần theo dõi chỉ số nào? Quyết định gì sẽ được đưa ra dựa trên chỉ số đó? Đây là bước phân tích nghiệp vụ then chốt.</p>

            <h2>Các thành phần của một BI hiệu quả</h2>
            <ul>
                <li>Nguồn dữ liệu sạch, được chuẩn hóa và cập nhật liên tục.</li>
                <li>Bộ chỉ số (KPI) gắn với mục tiêu tổ chức.</li>
                <li>Trực quan hóa rõ ràng, dễ đọc trên nhiều thiết bị.</li>
            </ul>

            <h2>Tránh cái bẫy "quá nhiều số liệu"</h2>
            <p>Một dashboard tốt tập trung vào vài chỉ số quan trọng nhất, thay vì nhồi nhét mọi con số khiến người xem lạc lối.</p>
        `
    },
    {
        id: "chuyen-doi-so-2026",
        title: "Chuyển đổi số 2026: Xu hướng định hình doanh nghiệp Việt",
        category: "Chuyển đổi số",
        date: "2026-07-05",
        author: "Phạm Lê Tân",
        image: "assets/img/anh3.png",
        excerpt: "Năm 2026 đánh dấu bước ngoặt khi chuyển đổi số không còn là lựa chọn mà trở thành điều kiện sống còn. Cùng điểm qua những xu hướng công nghệ dẫn dắt thị trường.",
        content: `
            <p>Chuyển đổi số đã đi qua giai đoạn "thử nghiệm" và bước vào thời kỳ tăng tốc toàn diện. Với doanh nghiệp và tổ chức hành chính công, câu hỏi không còn là <em>"có nên chuyển đổi số hay không"</em> mà là <em>"chuyển đổi số như thế nào cho hiệu quả"</em>.</p>

            <h2>1. Nền tảng dữ liệu (Data Platform) là trung tâm</h2>
            <p>Dữ liệu trở thành tài sản chiến lược. Các tổ chức đầu tư xây dựng kho dữ liệu tập trung, chuẩn hóa quy trình thu thập và khai thác dữ liệu để ra quyết định nhanh và chính xác hơn.</p>

            <h2>2. Tự động hóa quy trình nghiệp vụ</h2>
            <p>Từ iOffice đến các hệ thống phê duyệt điện tử, tự động hóa giúp giảm thủ tục giấy tờ và rút ngắn thời gian xử lý:</p>
            <ul>
                <li>Số hóa hồ sơ, luồng phê duyệt trực tuyến.</li>
                <li>Tích hợp chữ ký số, định danh điện tử.</li>
                <li>Kết nối liên thông giữa các hệ thống.</li>
            </ul>

            <blockquote>"Công nghệ chỉ tạo ra giá trị khi nó giải quyết đúng bài toán nghiệp vụ của tổ chức."</blockquote>

            <h2>3. Lộ trình bền vững</h2>
            <p>Một chiến lược chuyển đổi số thành công cần Roadmap rõ ràng, đo lường được và gắn với mục tiêu kinh doanh. Đây chính là nơi vai trò của Business Analyst và Solution Consultant trở nên quan trọng.</p>
        `
    },
    {
        id: "ai-trong-hanh-chinh-cong",
        title: "Ứng dụng AI trong dịch vụ hành chính công",
        category: "Công nghệ",
        date: "2026-06-28",
        author: "Phạm Lê Tân",
        image: "assets/img/anh1.jpg",
        excerpt: "Trí tuệ nhân tạo đang thay đổi cách chính quyền phục vụ người dân — từ trợ lý ảo, phân loại phản ánh hiện trường đến dự báo nhu cầu dịch vụ.",
        content: `
            <p>AI không còn là khái niệm xa vời. Trong lĩnh vực hành chính công, AI đang được ứng dụng để nâng cao chất lượng phục vụ và tối ưu nguồn lực.</p>

            <h2>Trợ lý ảo phục vụ người dân 24/7</h2>
            <p>Chatbot và trợ lý ảo giúp người dân tra cứu thủ tục, nộp hồ sơ và nhận phản hồi mọi lúc, giảm tải cho bộ phận một cửa.</p>

            <h2>Phân loại và định tuyến phản ánh hiện trường</h2>
            <p>Với các nền tảng như Phú Lợi Số, AI có thể tự động phân loại phản ánh của người dân theo lĩnh vực và chuyển đến đúng đơn vị xử lý, rút ngắn thời gian phản hồi.</p>

            <h2>Dữ liệu và đạo đức AI</h2>
            <p>Việc ứng dụng AI cần đi kèm nguyên tắc minh bạch, bảo vệ dữ liệu cá nhân và giám sát của con người để đảm bảo công bằng.</p>
        `
    },
    {
        id: "vai-tro-business-analyst",
        title: "Vai trò của Business Analyst trong dự án phần mềm",
        category: "Nghề nghiệp",
        date: "2026-06-15",
        author: "Phạm Lê Tân",
        image: "assets/img/anh4.png",
        excerpt: "Business Analyst là cầu nối giữa bài toán kinh doanh và giải pháp kỹ thuật. Vậy công việc thực tế của một BA gồm những gì?",
        content: `
            <p>Trong bất kỳ dự án phần mềm nào, khoảng cách giữa "điều khách hàng muốn" và "điều đội kỹ thuật xây dựng" luôn tồn tại. Business Analyst chính là người thu hẹp khoảng cách đó.</p>

            <h2>Công việc chính của một BA</h2>
            <ul>
                <li>Khảo sát, thu thập và phân tích yêu cầu nghiệp vụ.</li>
                <li>Mô hình hóa quy trình (BPMN), viết tài liệu đặc tả (SRS, User Story).</li>
                <li>Kết nối stakeholder với đội phát triển.</li>
                <li>Hỗ trợ kiểm thử và nghiệm thu giải pháp.</li>
            </ul>

            <h2>Kỹ năng cần có</h2>
            <p>Tư duy hệ thống, khả năng giao tiếp, hiểu biết nghiệp vụ và một chút kiến thức kỹ thuật là nền tảng giúp BA tạo ra giá trị thực sự.</p>

            <blockquote>"Một giải pháp tốt bắt đầu từ việc hiểu đúng vấn đề."</blockquote>
        `
    }
];

/* ============================================================
 *  NEWS FEED (phong cách Facebook) - Hàm render dùng chung
 *  Dùng cho: trang chủ (Bài viết mới nhất), blog.html, post.html
 * ============================================================ */
const FB_AUTHOR_AVATAR = "assets/img/anh2.jpg";

function fbEscape(str) {
    return String(str).replace(/[&<>"']/g, s => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[s]));
}

function fbRelativeDate(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return iso;
    const now = new Date();
    const diff = Math.floor((now - d) / 86400000); // số ngày
    if (diff <= 0) return "Hôm nay";
    if (diff === 1) return "Hôm qua";
    if (diff < 7) return diff + " ngày trước";
    if (diff < 30) return Math.floor(diff / 7) + " tuần trước";
    return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "long", year: "numeric" });
}

// Sinh số tương tác ổn định theo id (không đổi mỗi lần tải trang)
function fbEngagement(id) {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return {
        likes: 45 + (h % 320),
        comments: 3 + (h % 47),
        shares: 1 + (h % 19)
    };
}

// Render 1 bài viết dưới dạng "post" Facebook
function renderFbFeedCard(p, opts = {}) {
    const url = `post.html?id=${encodeURIComponent(p.id)}`;
    const eng = fbEngagement(p.id);
    const author = fbEscape(p.author || "Phạm Lê Tân");
    const media = p.image ? `
            <a class="fb-post-media" href="${url}" aria-label="${fbEscape(p.title)}">
                <img src="${fbEscape(p.image)}" alt="${fbEscape(p.title)}" loading="lazy">
            </a>` : "";

    return `
        <article class="fb-post" data-post-id="${fbEscape(p.id)}">
            <div class="fb-post-head">
                <img class="fb-avatar" src="${fbEscape(FB_AUTHOR_AVATAR)}" alt="${author}">
                <div class="fb-post-headinfo">
                    <span class="fb-author">${author}<i class="fas fa-circle-check" title="Đã xác minh"></i></span>
                    <span class="fb-post-time">${fbRelativeDate(p.date)} · <span class="fb-cat-chip">${fbEscape(p.category)}</span> · <i class="fas fa-earth-asia"></i></span>
                </div>
                <button class="fb-post-more" type="button" aria-label="Tùy chọn"><i class="fas fa-ellipsis"></i></button>
            </div>

            <div class="fb-post-text">
                <a class="fb-post-title" href="${url}">${fbEscape(p.title)}</a>
                <p>${fbEscape(p.excerpt)}</p>
            </div>
            ${media}

            <div class="fb-post-stats">
                <span class="fb-react-icons"><i class="fb-r fb-r-like">👍</i><i class="fb-r fb-r-love">❤️</i><i class="fb-r fb-r-haha">😆</i></span>
                <span class="fb-stats-count">${eng.likes.toLocaleString("vi-VN")}</span>
                <span class="fb-stats-right">${eng.comments} bình luận · ${eng.shares} lượt chia sẻ</span>
            </div>

            <div class="fb-post-actions">
                <button class="fb-act fb-act-like" type="button"><i class="far fa-thumbs-up"></i> Thích</button>
                <a class="fb-act" href="${url}"><i class="far fa-comment"></i> Bình luận</a>
                <a class="fb-act fb-act-read" href="${url}"><i class="far fa-newspaper"></i> Đọc bài</a>
                <button class="fb-act fb-act-share" type="button"><i class="far fa-share-square"></i> Chia sẻ</button>
            </div>
        </article>`;
}

// Bật/tắt "Thích" (hiệu ứng client-side, áp dụng mọi trang có feed)
document.addEventListener("click", e => {
    const likeBtn = e.target.closest(".fb-act-like");
    if (!likeBtn) return;
    likeBtn.classList.toggle("liked");
    likeBtn.innerHTML = likeBtn.classList.contains("liked")
        ? '<i class="fas fa-thumbs-up"></i> Đã thích'
        : '<i class="far fa-thumbs-up"></i> Thích';
});
