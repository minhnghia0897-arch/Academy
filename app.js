/**
 * Main Application Logic
 * Mocks authentication, state management, and view routing
 */

// --- Global State ---
const APP_STATE = {
    user: null, // null means not logged in
    currentView: 'home', // 'home', 'course_detail'
    currentCourse: null,
};

// --- Mock Database ---
const DB = {
    users: [
        { id: 1, email: 'user@test.com', password: '123', name: 'Nguyễn Văn A', balance: 50000, isPremium: false, completedLessons: ['l1', 'l2'] },
        { id: 2, email: 'vip@test.com', password: '123', name: 'Trần Thị VIP', balance: 150000, isPremium: true, completedLessons: ['l1', 'l2', 'l6'] }
    ],
    courses: [
        {
            id: 'c1',
            title: 'Lập trình JavaScript Cơ bản',
            description: 'Khóa học dành cho người mới bắt đầu với JS.',
            thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
            price: 0,
            isPremium: false,
            level: 'Mentor', 
            hashtags: ['#resource', '#javascript', '#coding'],
            instructor: 'Thầy Bình',
            lessons: [
                { id: 'l1', title: 'Bài 1: Giới thiệu JS', duration: '15:20', isLocked: false, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 'l2', title: 'Bài 2: Biến và kiểu dữ liệu', duration: '20:10', isLocked: false, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
            ]
        },
        {
            id: 'c2',
            title: 'React.js Thực chiến',
            description: 'Xây dựng ứng dụng thực tế với React.js Hooks & Redux.',
            thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
            price: 150000,
            isPremium: true,
            level: 'Master',
            hashtags: ['#business', '#react', '#frontend'],
            instructor: 'Cô Mai',
            lessons: [
                { id: 'l3', title: 'Bài 1: Component & Props', duration: '25:00', isLocked: false, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 'l4', title: 'Bài 2: React State & Lifecycle', duration: '35:45', isLocked: true, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 'l5', title: 'Bài 3: React Hooks nâng cao', duration: '40:10', isLocked: true, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
            ]
        },
        {
            id: 'c3',
            title: 'Khởi Nghiệp 4.0',
            description: 'Khóa học chuyên sâu dành cho nhà khởi nghiệp và phát triển doanh nghiệp trực tuyến.',
            thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
            price: 500000,
            isPremium: true,
            level: 'VIP Master',
            hashtags: ['#mindset', '#business', '#marketing'],
            instructor: 'Chuyên gia Hoàng',
            lessons: [
                { id: 'l6', title: 'Bài 1: Tư duy khởi nghiệp', duration: '45:00', isLocked: false, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 'l7', title: 'Bài 2: Nghiên cứu thị trường', duration: '50:20', isLocked: true, videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
            ]
        }
    ]
};

// --- Components: Navigation ---
function renderNavbar() {
    const mobileNav = document.getElementById('bottom-nav');
    if(!mobileNav) return;
    
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        let textNode = item.querySelector('span');
        if(textNode) {
            let label = textNode.innerText;
            if(label === 'Trang chủ') {
                item.setAttribute('onclick', "navigate('home')");
                if (APP_STATE.currentView === 'home') item.classList.add('active');
                else item.classList.remove('active');
            }
            else if(label === 'Khóa học') {
                item.setAttribute('onclick', "navigate('courses_list')");
                if (APP_STATE.currentView === 'courses_list') item.classList.add('active');
                else item.classList.remove('active');
            }
            else if(label === 'Thông báo') {
                item.setAttribute('onclick', "navigate('notifications')");
                if (APP_STATE.currentView === 'notifications') item.classList.add('active');
                else item.classList.remove('active');
            }
            else if(label === 'Hồ sơ') {
                item.setAttribute('onclick', "navigate('profile')");
                if (APP_STATE.currentView === 'profile') item.classList.add('active');
                else item.classList.remove('active');
            }
        }
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadUserFromStorage();
    setupEventListeners();
    renderNavbar();
    renderView();
}

// --- State Management ---
function loadUserFromStorage() {
    const savedUser = localStorage.getItem('tedu_user');
    if (savedUser) {
        APP_STATE.user = JSON.parse(savedUser);
    }
}

function saveUserToStorage(user) {
    if (user) {
        localStorage.setItem('tedu_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('tedu_user');
    }
}

// --- Event Listeners ---
function setupEventListeners() {
    const logo = document.getElementById('nav-logo');
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        navigate('home');
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
}

// --- Navigation Logic ---
window.navigate = function(view, data = null) {
    if (view === 'courses') view = 'courses_list'; // Safety alias mapping
    
    APP_STATE.currentView = view;
    if (view === 'course_detail' && data) {
        APP_STATE.currentCourse = data;
    }

    // Remove active class from static bottom-nav in index.html to let JS handle it
    document.querySelectorAll('.bottom-nav .nav-item').forEach(el => el.classList.remove('active'));

    renderNavbar();
    renderView();
    window.scrollTo(0, 0);

    // Custom event for cleanup
    document.dispatchEvent(new Event('navigate'));
};

// --- Routing / View Rendering ---
function updateHeader(view) {
    const header = document.getElementById('app-header');
    if (!header) return;
    
    if (view === 'home') {
        header.innerHTML = `
            <div class="top-bar">
                <div class="top-bar-left">
                    <div style="display:flex; align-items:center; gap:8px; font-weight: 700; font-size:1.25rem; color:var(--primary-color);">
                        <i class="ph-light ph-graduation-cap"></i> EduFlex
                    </div>
                </div>
                <div class="top-bar-right">
                    <button class="icon-btn transparent"><i class="ph-light ph-magnifying-glass"></i></button>
                    ${APP_STATE.user 
                        ? `<div class="avatar" style="width:32px; height:32px; font-size:0.9rem;" onclick="navigate('profile')">${APP_STATE.user.name.charAt(0)}</div>`
                        : `<button class="icon-btn transparent" onclick="navigate('subscription')"><i class="ph-light ph-user"></i></button>`
                    }
                </div>
            </div>
        `;
    } else if (view === 'course_detail' || view === 'subscription' || view === 'checkout' || view === 'courses_list' || view === 'notifications' || view === 'profile') {
        const titleMap = {
            'course_detail': 'EduFlex',
            'subscription': 'Đăng ký thành viên',
            'checkout': 'Thanh toán',
            'courses_list': 'Khóa học',
            'notifications': 'Thông báo',
            'profile': 'Hồ sơ'
        };
        const title = titleMap[view] || '';
        const rightHtml = view === 'course_detail' ? `
            <button class="icon-btn transparent"><i class="ph-light ph-share-network"></i></button>
            <button class="icon-btn transparent"><i class="ph-light ph-dots-three-vertical"></i></button>
        ` : '';
        header.innerHTML = `
            <div class="top-bar surface">
                <div class="top-bar-left">
                    <button class="icon-btn transparent" onclick="navigate('home')"><i class="ph-light ph-arrow-left"></i></button>
                </div>
                <div class="top-bar-center">${title}</div>
                <div class="top-bar-right">
                    ${rightHtml}
                </div>
            </div>
        `;
    } else {
        header.innerHTML = '';
    }
}

function renderView() {
    const mainContent = document.getElementById('main-content');
    if(!mainContent) return;
    mainContent.innerHTML = ''; // Clear current
    
    updateHeader(APP_STATE.currentView);
    
    const bottomNav = document.getElementById('bottom-nav');
    if(APP_STATE.currentView === 'course_detail' || APP_STATE.currentView === 'checkout') {
        if(bottomNav) bottomNav.style.display = 'none';
        mainContent.style.paddingBottom = '0';
    } else {
        if(bottomNav) bottomNav.style.display = 'flex';
        mainContent.style.paddingBottom = 'var(--bottom-nav-height)';
    }

    if (APP_STATE.currentView === 'home') {
        renderHome(mainContent);
    } else if (APP_STATE.currentView === 'course_detail') {
        renderCourseDetail(mainContent);
    } else if (APP_STATE.currentView === 'subscription') {
        renderSubscription(mainContent);
    } else if (APP_STATE.currentView === 'checkout') {
        renderCheckout(mainContent);
    } else if (APP_STATE.currentView === 'success') {
        renderSuccess(mainContent);
    } else if (APP_STATE.currentView === 'courses_list') {
        renderCoursesList(mainContent);
    } else if (APP_STATE.currentView === 'notifications') {
        renderNotifications(mainContent);
    } else if (APP_STATE.currentView === 'profile') {
        renderProfile(mainContent);
    }
}

function renderCourseDetail(container) {
    const courseId = APP_STATE.currentCourse;
    const course = DB.courses.find(c => c.id === courseId);
    
    if (!course) {
        container.innerHTML = `<div class="container" style="padding: 4rem 0; text-align: center;"><h2>Không tìm thấy khóa học</h2><button class="btn btn-outline" onclick="navigate('home')">Quay lại</button></div>`;
        return;
    }

    // Default to first lesson
    let activeLessonIndex = 0;
    
    // Check if user has access to premium course
    const hasAccess = !course.isPremium || (APP_STATE.user && APP_STATE.user.isPremium);

    const renderLesson = (lessonIndex) => {
        activeLessonIndex = lessonIndex;
        const lesson = course.lessons[lessonIndex];
        
        let playerHtml = '';
        if (lesson.isLocked && !hasAccess) {
            playerHtml = `
                <div class="video-overlay-locked">
                    <i class="ph-light ph-lock" style="font-size:2.5rem; margin-bottom:1rem;"></i>
                    <h3 style="margin-bottom:0.5rem; font-size:1.1rem;">Bài học yêu cầu Premium</h3>
                    <p style="margin-bottom:1.5rem; font-size:0.85rem; opacity:0.8;">Vui lòng nâng cấp Premium hoặc mua khóa học để xem nội dung này.</p>
                    ${!APP_STATE.user 
                        ? `<button class="btn btn-primary" style="width:auto; padding:8px 20px" onclick="showAuthModal('login')">Đăng nhập ngay</button>`
                        : `<button class="btn btn-primary" style="width:auto; padding:8px 20px" onclick="navigate('subscription')"><i class="ph-light ph-crown"></i> Nâng cấp ngay</button>`
                    }
                </div>
                <div class="video-player" style="background-image:url('${course.thumbnail}'); background-size:cover; filter:blur(8px);"></div>
            `;
        } else {
            playerHtml = `
                <video class="video-player" controls autoplay>
                    <source src="${lesson.videoUrl}" type="video/mp4">
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
            `;
        }

        const syllabusHtml = course.lessons.map((l, idx) => {
            const isActive = idx === activeLessonIndex;
            const isLocked = l.isLocked && !hasAccess;
            let iconHtml = '';
            if (isActive) iconHtml = '<i class="ph-light ph-check-circle"></i>';
            else if (isLocked) iconHtml = '<i class="ph-light ph-lock" style="font-size:0.9rem"></i>';
            else iconHtml = '<i class="ph-light ph-circle"></i>';

            let num = (idx + 1).toString().padStart(2, '0');

            return `
                <div class="syllabus-item ${isActive ? 'active' : ''}" onclick="document.dispatchEvent(new CustomEvent('changeLesson', {detail: ${idx}}))">
                    <div class="syllabus-icon">${iconHtml}</div>
                    <div class="syllabus-content">
                        <div class="syllabus-title">Bài ${num}: ${l.title}</div>
                        <div class="syllabus-duration">${l.duration}</div>
                    </div>
                    <div class="syllabus-action">
                        ${isActive ? '<i class="ph-light ph-play"></i>' : '<i class="ph-light ph-caret-right"></i>'}
                    </div>
                </div>
            `;
        }).join("");

        container.innerHTML = `
            <div class="video-container">
                ${playerHtml}
            </div>
            <div class="course-info-section">
                <span class="badge badge-blue mb-1">BÀI ${String(activeLessonIndex + 1).padStart(2, '0')}</span>
                <h1>${course.title} ${course.isPremium ? '<span class="badge badge-premium" style="vertical-align:middle; font-size:0.6rem; padding: 2px 6px;"><i class="ph-light ph-crown"></i> PRO</span>' : ''}</h1>
                <div class="course-info-desc">${course.description}</div>
                
                <div class="instructor-card">
                    <div class="instructor-info">
                        <div class="instructor-avatar">${course.instructor.charAt(0)}</div>
                        <div>
                            <div class="instructor-name">${course.instructor}</div>
                            <div class="instructor-title">Giảng viên cao cấp</div>
                        </div>
                    </div>
                    <button class="follow-btn">Theo dõi</button>
                </div>

                <div class="section-header" style="margin-bottom: 16px;">
                    <h2 style="font-size:1.15rem;">Nội dung khóa học</h2>
                    <a href="#" class="section-action">Xem tất cả</a>
                </div>
                
                <div class="syllabus-list" style="padding:0;">
                    ${syllabusHtml}
                </div>
            </div>
        `;
    };

    renderLesson(0);

    const lessonHandler = (e) => {
        renderLesson(e.detail);
    };
    document.addEventListener('changeLesson', lessonHandler);
    
    const cleanup = () => {
        if(APP_STATE.currentView !== 'course_detail' || APP_STATE.currentCourse !== courseId) {
            document.removeEventListener('changeLesson', lessonHandler);
            document.removeEventListener('navigate', cleanup);
        }
    };
    document.addEventListener('navigate', cleanup);
}


// --- Home Page Render ---
function renderHome(container) {
    // Generate Horizontal Featured Courses
    let featCoursesHtml = DB.courses.map((course, index) => {
        let badgeType = index % 2 === 0 ? "PHÁT TRIỂN" : "THIẾT KẾ";
        let rating = course.price === 0 ? "4.8" : "4.9";
        let reviews = course.price === 0 ? "(9k)" : "(12k)";
        let priceHtml = course.price === 0 
            ? `<div class="feat-price">Miễn phí</div>`
            : `<div class="feat-price">${formatCurrency(course.price)}</div>`;

        return `
            <div class="course-card-feat" onclick="navigate('course_detail', '${course.id}')">
                <img src="${course.thumbnail}" alt="Thumbnail">
                <button class="favorite-btn"><i class="ph-light ph-heart"></i></button>
                <div class="feat-content">
                    <div class="feat-badge">${badgeType}</div>
                    <div class="feat-title">${course.title}</div>
                    <div class="feat-author">${course.instructor}</div>
                    <div class="feat-bottom">
                        <div class="feat-rating">
                            <i class="ph-light ph-star"></i> ${rating} <span>${reviews}</span>
                        </div>
                        ${priceHtml}
                    </div>
                </div>
            </div>
        `;
    }).join("");

    // Generate List Videos below
    let allLessons = DB.courses.flatMap(c => c.lessons);
    let listLessonsHtml = allLessons.slice(0, 4).map((lesson, idx) => {
        let num = (idx + 1).toString().padStart(2, '0');
        let badgeHtml = (lesson.isLocked) ? `<span class="badge badge-blue">KHÓA</span>` : `<span class="badge badge-green">FREE</span>`;
        return `
            <div class="list-item" onclick="navigate('course_detail', '${DB.courses[0].id}')">
                <div class="item-thumb" style="background-image: url('https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=200')">
                    <div class="item-index">${num}</div>
                </div>
                <div class="item-details">
                    <div class="item-title">${lesson.title}</div>
                    <div class="item-meta">
                        ${badgeHtml}
                        <div class="item-duration"><i class="ph-light ph-clock"></i> ${lesson.duration}</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    container.innerHTML = `
        <div class="home-header">
            <h1 class="home-title">Học mọi thứ,<br><span class="gradient-text">ở mọi nơi</span></h1>
            <p class="home-subtitle">Khai phá tiềm năng của bạn với hơn 5.000+ khóa học trực tuyến từ các chuyên gia hàng đầu thế giới.</p>
            <button class="btn btn-primary explore-btn" onclick="document.getElementById('feat-courses').scrollIntoView({behavior:'smooth'})">Khám phá khóa học</button>
            <div class="search-container">
                <div class="search-bar">
                    <i class="ph-light ph-magnifying-glass"></i>
                    <input type="text" id="home-search-input" placeholder="Bạn muốn học gì hôm nay?" oninput="handleSearch(this.value)">
                </div>
                <button class="filter-btn"><i class="ph-light ph-sliders-horizontal"></i></button>
            </div>
        </div>

        <div id="home-search-results" style="display:none; padding: 20px;">
            <div class="section-header" style="margin-bottom: 16px;">
                <h2 style="font-size: 1.15rem;">Kết quả tìm kiếm</h2>
            </div>
            <div id="search-results-list" class="list-container"></div>
        </div>

        <div id="home-default-content">
            <div class="container mt-2">
                <div class="section-header">
                    <h2>Danh mục</h2>
                    <a href="#" class="section-action">Xem tất cả</a>
                </div>
            </div>
            
            <div class="category-row">
                <div class="category-item" onclick="triggerSearch('#mindset')">
                    <div class="cat-icon-box" style="background:#fef3c7; color:#d97706"><i class="ph-light ph-brain"></i></div>
                    Mindset
                </div>
                <div class="category-item" onclick="triggerSearch('#business')">
                    <div class="cat-icon-box" style="background:#e0e7ff; color:#4f46e5"><i class="ph-light ph-briefcase"></i></div>
                    Business
                </div>
                <div class="category-item" onclick="triggerSearch('#resource')">
                    <div class="cat-icon-box" style="background:#ecfdf5; color:#10b981"><i class="ph-light ph-folders"></i></div>
                    Resource
                </div>
                <div class="category-item" onclick="triggerSearch('#marketing')">
                    <div class="cat-icon-box" style="background:#fee2e2; color:#e11d48"><i class="ph-light ph-megaphone"></i></div>
                    Marketing
                </div>
            </div>

            <div class="container" id="feat-courses">
                <div class="section-header">
                    <h2>Khóa học tiêu biểu</h2>
                    <a href="#" class="section-action">Xem tất cả</a>
                </div>
            </div>
            <div class="horizontal-scroll">
                ${featCoursesHtml}
            </div>

            <div class="container">
                <div class="section-header" style="background-color: var(--primary-color); color: white; margin: -10px -20px 20px -20px; padding: 20px; border-radius:16px;">
                    <h2 style="color:white; margin-bottom:4px; font-size:1.1rem;">Khóa học tiêu biểu</h2>
                    <p style="font-weight:400; font-size:0.8rem; margin-bottom:12px; color:var(--primary-light);">Giảm giá lên đến 70% cho tất cả các chứng chỉ chuyên nghiệp.</p>
                    <button class="btn" style="background:white; color:var(--primary-color); padding:8px 20px; font-size:0.85rem; width:fit-content;">Nhận ngay</button>
                </div>

                <div class="section-header">
                    <h2>Nội dung khóa học</h2>
                    <div class="toggle-switch-wrapper">
                        <div class="toggle-track"><div class="toggle-thumb"></div></div>
                        <span class="toggle-label">Toàn bộ 262 videos</span>
                    </div>
                </div>
            </div>
            <div class="list-container">
                ${listLessonsHtml}
            </div>
        </div>
    `;
}

// --- Search Logic ---
window.triggerSearch = function(query) {
    const inputEl = document.getElementById('home-search-input');
    if(inputEl) {
        inputEl.value = query;
        handleSearch(query);
    }
};

window.handleSearch = function(query) {
    const defaultContent = document.getElementById('home-default-content');
    const searchResultsContainer = document.getElementById('home-search-results');
    const resultsList = document.getElementById('search-results-list');
    
    if (!query || query.trim() === '') {
        if(defaultContent) defaultContent.style.display = 'block';
        if(searchResultsContainer) searchResultsContainer.style.display = 'none';
        return;
    }

    const qLower = query.toLowerCase().trim();
    
    // Filter matching courses
    const matchedCourses = DB.courses.filter(course => {
        const matchesTitle = course.title.toLowerCase().includes(qLower);
        const matchesHashtag = course.hashtags && course.hashtags.some(tag => tag.toLowerCase().includes(qLower));
        return matchesTitle || matchesHashtag;
    });

    if (matchedCourses.length === 0) {
        resultsList.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <i class="ph-light ph-magnifying-glass" style="font-size:3rem; color:rgba(255,255,255,0.2); margin-bottom:16px;"></i>
                <h3 style="color:var(--text-muted);">Không tìm thấy khóa học nào khớp với '${query}'</h3>
            </div>
        `;
    } else {
        resultsList.innerHTML = matchedCourses.map(course => {
            const num = '01'; // Mocking sequence
            const priceHtml = course.price === 0 
                ? `<span style="color:var(--success); font-weight: 600;">Miễn phí</span>` 
                : `<span style="color:var(--primary-color); font-weight: 600;">${formatCurrency(course.price)}</span>`;
                
            return `
                <div class="list-item" onclick="navigate('course_detail', '${course.id}')" style="margin-bottom: 12px;">
                    <div class="item-thumb" style="background-image: url('${course.thumbnail}')">
                        <div class="item-index">${num}</div>
                    </div>
                    <div class="item-details" style="display:flex; flex-direction:column; justify-content:center;">
                        <div class="item-title" style="margin-bottom:8px;">${course.title}</div>
                        <div class="item-meta">
                            <span class="badge badge-blue">${course.level}</span>
                            <div class="item-duration">${priceHtml}</div>
                        </div>
                        <div style="margin-top:6px; font-size:0.75rem; color:var(--text-muted);">
                            ${course.hashtags ? course.hashtags.join(' • ') : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }

    if(defaultContent) defaultContent.style.display = 'none';
    if(searchResultsContainer) searchResultsContainer.style.display = 'block';
};

// --- Subscription Page Render ---
function renderSubscription(container) {
    let authFormHtml = '';
    
    if (!APP_STATE.user) {
        authFormHtml = `
            <div class="container" style="padding-top:0; margin-top:24px;">
                <div class="auth-divider">THÔNG TIN TÀI KHOẢN</div>
                <form id="subs-auth-form" onsubmit="handleSubsRegistration(event)">
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="font-weight: 600; font-size:0.9rem; margin-bottom:8px; display:block;">Họ và tên</label>
                        <div class="input-with-icon">
                            <i class="ph-light ph-user"></i>
                            <input type="text" id="subs-name" class="form-control" required placeholder="Nguyễn Văn A">
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="font-weight: 600; font-size:0.9rem; margin-bottom:8px; display:block;">Địa chỉ Email</label>
                        <div class="input-with-icon">
                            <i class="ph-light ph-envelope"></i>
                            <input type="email" id="subs-email" class="form-control" required placeholder="example@gmail.com">
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom: 24px;">
                        <label style="font-weight: 600; font-size:0.9rem; margin-bottom:8px; display:block;">Mật khẩu</label>
                        <div class="input-with-icon">
                            <i class="ph-light ph-lock"></i>
                            <input type="password" id="subs-password" class="form-control" required placeholder="••••••••">
                            <i class="ph-light ph-eye" style="left:auto; right:16px; cursor:pointer;" onclick="const t = document.getElementById('subs-password'); t.type = t.type === 'password' ? 'text' : 'password';"></i>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100" style="padding:16px; border-radius:999px; display:flex; justify-content:center; align-items:center; gap:8px;">
                        Tiếp tục đăng ký <i class="ph-light ph-arrow-right"></i>
                    </button>
                    <div class="text-center mt-2" style="font-size:0.75rem; color:var(--text-muted); margin-top:16px; line-height:1.5;">
                        Bằng việc đăng ký, bạn đồng ý với <a href="#" style="color:var(--primary-color);">Điều khoản dịch vụ</a><br>và <a href="#" style="color:var(--primary-color);">Chính sách bảo mật</a> của EduFlex.
                    </div>
                    <div class="text-center mt-2" style="font-size:0.9rem; color:var(--text-secondary); margin-top:24px;">
                        Đã có tài khoản? <a href="#" style="color:var(--primary-color); font-weight:600;" onclick="showAuthModal('login')">Đăng nhập</a>
                    </div>
                </form>
            </div>
        `;
    } else {
        authFormHtml = `
            <div class="container text-center" style="padding-top:0; margin-top:24px;">
                <div style="background:var(--primary-light); padding:16px; border-radius:var(--radius-md); margin-bottom:16px;">
                    <i class="ph-light ph-user-check" style="color:var(--primary-color); font-size:2rem; margin-bottom:12px;"></i>
                    <h3 style="margin-bottom:4px;">Bạn đã đăng nhập</h3>
                    <p style="font-size:0.9rem; color:var(--primary-color);">Là <strong>${APP_STATE.user.name}</strong></p>
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="subs-header">
            <h1 class="subs-title" style="color:var(--primary-color);">Tham gia EduFlex ngay</h1>
            <p style="color:var(--text-secondary); font-size:0.95rem;">Bắt đầu hành trình chinh phục tri thức cùng chúng tôi</p>
        </div>

        <div class="pricing-cards">
            <!-- Free Pack -->
            <div class="pricing-card" onclick="alert('Gói Miễn phí sẽ bị giới hạn tài nguyên. Vui lòng chọn gói Premium để trải nghiệm tốt nhất.')">
                <div class="pricing-name">GÓI MIỄN PHÍ</div>
                <div class="pricing-price" style="color:var(--text-primary);">0đ<span>/tháng</span></div>
                <div class="pricing-features">
                    <div class="feature-item"><i class="ph-light ph-check-circle" style="color:var(--primary-color);"></i> Truy cập bài học cơ bản</div>
                    <div class="feature-item inactive"><i class="ph-light ph-prohibit"></i> Video chất lượng SD</div>
                    <div class="feature-item inactive"><i class="ph-light ph-prohibit"></i> Giới hạn bài tập thực hành</div>
                </div>
                <button class="btn w-100" style="background:var(--primary-light); color:var(--primary-color); padding:16px; border-radius:999px; font-weight: 600;">Chọn gói này</button>
            </div>

            <!-- Premium Pack -->
            <div class="pricing-card popular" onclick="${APP_STATE.user ? `navigate('checkout')` : `document.getElementById('subs-name').focus()`}">
                <div class="popular-badge">PHỔ BIẾN NHẤT</div>
                <div class="pricing-name" style="color:var(--primary-color);">GÓI PREMIUM</div>
                <div class="pricing-price" style="color:var(--text-primary);">199.000đ<span>/tháng</span></div>
                <div class="pricing-features">
                    <div class="feature-item"><i class="ph-light ph-certificate"></i> Truy cập toàn bộ khóa học</div>
                    <div class="feature-item"><i class="ph-light ph-medal"></i> Cấp chứng chỉ hoàn thành</div>
                    <div class="feature-item"><i class="ph-light ph-headset"></i> Hỗ trợ chuyên gia 24/7</div>
                    <div class="feature-item"><i class="ph-light ph-television"></i> Video chất lượng 4K HDR</div>
                </div>
                <button class="btn btn-primary w-100" style="padding:16px; border-radius:999px; font-weight: 600;">Đăng ký Premium</button>
            </div>
        </div>

        ${authFormHtml}
    `;
}

window.handleSubsRegistration = function(e) {
    e.preventDefault();
    const name = document.getElementById('subs-name').value;
    const email = document.getElementById('subs-email').value;
    const password = document.getElementById('subs-password').value;
    
    const newUser = {
        id: Date.now(),
        email, password, name,
        balance: 0,
        isPremium: false
    };
    APP_STATE.user = newUser;
    saveUserToStorage(newUser);
    
    navigate('checkout');
};

// --- Checkout and Success Pages Render ---
window.selectPaymentMethod = function(id) {
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
};

function renderCheckout(container) {
    if (!APP_STATE.user) {
        navigate('subscription');
        return;
    }

    container.innerHTML = `
        <div class="checkout-section" style="padding-bottom: 100px;">
            <h3>Gói dịch vụ</h3>
            <div class="summary-card">
                <div class="summary-header">
                    <div class="summary-title">EduFlex Premium</div>
                    <div class="summary-price">199.000đ<span style="font-size:0.8rem;color:var(--text-muted);font-weight:400">/tháng</span></div>
                </div>
                <div style="font-size:0.9rem; font-weight: 600; margin-bottom:8px;">Quyền lợi gói Premium:</div>
                <div class="pricing-features">
                    <div class="feature-item"><i class="ph-light ph-check"></i> Truy cập toàn quyền các khoá học</div>
                    <div class="feature-item"><i class="ph-light ph-check"></i> Tải xuống ngoại tuyến</div>
                    <div class="feature-item"><i class="ph-light ph-check"></i> 1-1 hỗ trợ trực tiếp từ giáo viên</div>
                </div>
            </div>

            <h3>Mã giảm giá</h3>
            <div class="discount-box">
                <input type="text" class="form-control" placeholder="Nhập mã giảm giá">
                <button class="btn btn-primary" style="width:auto; padding:0 24px; border-radius:var(--radius-md);">Áp dụng</button>
            </div>

            <h3>Phương thức thanh toán</h3>
            <div id="pm-credit" class="payment-method active" onclick="selectPaymentMethod('pm-credit')">
                <div class="payment-icon"><i class="ph-light ph-credit-card"></i></div>
                <div class="payment-name">Thẻ tín dụng / Thẻ ghi nợ</div>
                <div style="color:var(--primary-color)"><i class="ph-light ph-check-circle"></i></div>
            </div>
            <div id="pm-momo" class="payment-method" onclick="selectPaymentMethod('pm-momo')">
                <div class="payment-icon"><i class="ph-light ph-wallet"></i></div>
                <div class="payment-name">Ví điện tử MoMo</div>
                <div style="color:rgba(255,255,255,0.2)"><i class="ph-light ph-circle"></i></div>
            </div>
        </div>

        <div class="bottom-fixed-bar">
            <div>
                <div class="total-price-label">Tổng thanh toán</div>
                <div class="total-price-value">199.000đ</div>
            </div>
            <button class="btn btn-primary" style="width:auto;" onclick="handlePaymentSuccess()">Thanh toán ngay</button>
        </div>
    `;
}

window.handlePaymentSuccess = function() {
    if(APP_STATE.user) {
        APP_STATE.user.isPremium = true;
        saveUserToStorage(APP_STATE.user);
    }
    navigate('success');
};

function renderSuccess(container) {
    container.innerHTML = `
        <div class="container text-center" style="padding-top: 50px;">
            <div style="width:80px; height:80px; background:var(--success-light); color:var(--success); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.5rem; margin:0 auto 24px;">
                <i class="ph-light ph-check"></i>
            </div>
            <h1 style="font-size:1.5rem; font-weight: 700; margin-bottom:12px;">Thanh toán thành công!</h1>
            <p style="color:var(--text-secondary); margin-bottom:32px; font-size:0.95rem;">Cảm ơn bạn đã nâng cấp tài khoản EduFlex Premium. Tất cả khóa học đã được mở khóa.</p>

            <div class="summary-card" style="text-align:left;">
                <h3 style="font-size:0.9rem; color:var(--text-muted); margin-bottom:12px; text-transform:uppercase;">CHI TIẾT ĐƠN HÀNG</h3>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem;">
                    <span style="color:var(--text-secondary)">Gói dịch vụ</span>
                    <strong style="color:var(--primary-color)">Premium 1 Tháng</strong>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem;">
                    <span style="color:var(--text-secondary)">Số tiền</span>
                    <strong>199.000đ</strong>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem;">
                    <span style="color:var(--text-secondary)">Mã giao dịch</span>
                    <strong>#EFX-${Math.floor(100000 + Math.random() * 900000)}</strong>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
                    <span style="color:var(--text-secondary)">Trạng thái</span>
                    <strong style="color:var(--success)">Hoàn tất</strong>
                </div>
            </div>

            <button class="btn btn-primary" style="margin-bottom:12px;" onclick="navigate('home')">Bắt đầu học ngay</button>
            <button class="btn btn-outline" onclick="navigate('home')">Về trang chủ</button>
        </div>
    `;
}

// --- Courses List Page Render ---
window.filterCoursesByLevel = function(level) {
    APP_STATE.currentLevelFilter = level;
    document.querySelectorAll('.level-tab').forEach(tab => {
        tab.classList.remove('active');
        if(tab.innerText === level || (level === 'Tất cả' && tab.innerText === 'Tất cả')) {
            tab.classList.add('active');
        }
    });

    const listContainer = document.getElementById('filtered-courses-list');
    
    const filteredCourses = DB.courses.filter(c => level === 'Tất cả' || c.level === level);
    
    if (filteredCourses.length === 0) {
        listContainer.innerHTML = `<div class="text-center mt-4 text-muted">Không tìm thấy khóa học nào trong cấp độ này.</div>`;
        return;
    }

    listContainer.innerHTML = filteredCourses.map(course => {
        let priceHtml = course.price === 0 
            ? `<div class="course-list-free">Miễn phí</div>`
            : `<div class="course-list-price">${formatCurrency(course.price)}</div>`;
        
        let badgeHtml = course.isPremium 
            ? `<span class="badge badge-premium" style="position:absolute; top:8px; right:8px; font-size:0.6rem;"><i class="ph-light ph-crown"></i> PRO</span>` 
            : ``;

        return `
            <div class="course-list-item" onclick="navigate('course_detail', '${course.id}')">
                ${badgeHtml}
                <img src="${course.thumbnail}" class="course-list-thumb" alt="Thumb">
                <div class="course-list-content">
                    <div>
                        <div class="badge badge-blue mb-1" style="font-size:0.6rem;">${course.level || 'Chưa cấp độ'}</div>
                        <div class="course-list-title">${course.title}</div>
                        <div class="course-list-instructor"><i class="ph-light ph-user-circle"></i> ${course.instructor}</div>
                    </div>
                    <div class="course-list-meta">
                        ${priceHtml}
                        <div style="font-size:0.8rem; font-weight: 600; display:flex; align-items:center; gap:4px;"><i class="ph-light ph-star" style="color:var(--warning)"></i> 4.9</div>
                    </div>
                </div>
            </div>
        `;
    }).join("");
};

function renderCoursesList(container) {
    if(!APP_STATE.currentLevelFilter) APP_STATE.currentLevelFilter = 'Tất cả';

    // Calculate Learning Progress
    let totalLessonsCount = 0;
    DB.courses.forEach(c => {
        totalLessonsCount += (c.lessons ? c.lessons.length : 0);
    });

    let completedLessonsCount = 0;
    if (APP_STATE.user && APP_STATE.user.completedLessons) {
        completedLessonsCount = APP_STATE.user.completedLessons.length;
    }
    
    // Fallback Mock for Demo purposes if no user is signed in but we still want to show progress
    if (!APP_STATE.user) {
        completedLessonsCount = 3;
        totalLessonsCount = 12; // Example numbers based on mockup
    }

    const completionPercentage = totalLessonsCount === 0 ? 0 : Math.round((completedLessonsCount / totalLessonsCount) * 100);

    container.innerHTML = `
        <div class="courses-header" style="padding-top: 16px;">
            <div class="top-bar" style="padding: 0 0 16px 0;">
                <h1 style="font-size: 1.25rem; font-weight: 700;">Lộ trình học tập</h1>
                <div class="top-bar-right">
                    <button class="icon-btn transparent"><i class="ph-light ph-magnifying-glass"></i></button>
                </div>
            </div>

            <!-- Learning Progress Card -->
            <div class="progress-card">
                <div class="progress-header">
                    <div>
                        <div class="progress-subtitle">TIẾN ĐỘ TỔNG QUAN</div>
                        <div class="progress-title">${completionPercentage}% Hoàn thành</div>
                    </div>
                    <div class="progress-count">${completedLessonsCount}/${totalLessonsCount} bài học</div>
                </div>
                
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${completionPercentage}%"></div>
                </div>
                
                <div class="progress-message">
                    <i class="ph-light ph-trophy"></i> Bạn đang làm rất tốt! Tiếp tục nhé.
                </div>
            </div>

            <div class="level-tabs">
                <div class="level-tab ${APP_STATE.currentLevelFilter === 'Tất cả' ? 'active' : ''}" onclick="filterCoursesByLevel('Tất cả')">Tất cả</div>
                <div class="level-tab ${APP_STATE.currentLevelFilter === 'Mentor' ? 'active' : ''}" onclick="filterCoursesByLevel('Mentor')">Mentor</div>
                <div class="level-tab ${APP_STATE.currentLevelFilter === 'Master' ? 'active' : ''}" onclick="filterCoursesByLevel('Master')">Master</div>
                <div class="level-tab ${APP_STATE.currentLevelFilter === 'VIP Master' ? 'active' : ''}" onclick="filterCoursesByLevel('VIP Master')">VIP Master</div>
            </div>
        </div>

        <div class="container" id="filtered-courses-list">
            <!-- Courses rendered dynamically here -->
        </div>
    `;

    filterCoursesByLevel(APP_STATE.currentLevelFilter);
}

// --- Notifications Page Render ---
function renderNotifications(container) {
    const notifications = [
        { id: 1, title: '🎉 Chào mừng đến với EduFlex', desc: 'Hãy bắt đầu khám phá các khóa học chất lượng cao ngay hôm nay!', time: '10 phút trước', unread: true, icon: 'ph-light ph-gift' },
        { id: 2, title: '🔥 Khuyến mãi gói Premium', desc: 'Giảm 50% cho người dùng mới đăng ký gói Premium trong hôm nay.', time: '2 giờ trước', unread: false, icon: 'ph-light ph-tag' },
        { id: 3, title: '📚 Khóa học mới', desc: 'Lập trình JS đã chính thức ra mắt phần 2.', time: '1 ngày trước', unread: false, icon: 'ph-light ph-book-open' }
    ];

    let listHtml = notifications.map(notif => `
        <div class="notification-item ${notif.unread ? 'unread' : ''}">
            <div class="notification-icon"><i class="${notif.icon}"></i></div>
            <div class="notification-content">
                <div class="notification-title">${notif.title}</div>
                <div class="notification-desc">${notif.desc}</div>
                <div class="notification-time">${notif.time}</div>
            </div>
        </div>
    `).join("");

    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Thông báo</h1>
        </div>
        <div class="notifications-list" style="padding-bottom: 24px;">
            ${listHtml}
        </div>
    `;
}

// --- Profile Page Render ---
window.handleLogout = function() {
    APP_STATE.user = null;
    saveUserToStorage(null);
    navigate('home');
};

function renderProfile(container) {
    if (!APP_STATE.user) {
        container.innerHTML = `
            <div class="container text-center" style="padding-top: 60px;">
                <div style="width:100px; height:100px; background:var(--bg-surface); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:3rem; margin:0 auto 24px; color:var(--text-muted);">
                    <i class="ph-light ph-lock-key"></i>
                </div>
                <h2 style="font-size:1.25rem; margin-bottom:12px;">Chưa đăng nhập</h2>
                <p style="color:var(--text-secondary); margin-bottom:32px;">Đăng nhập để xem thông tin hồ sơ và tiến trình học tập của bạn.</p>
                <button class="btn btn-primary" onclick="navigate('subscription')">Đăng ký tham gia EduFlex</button>
            </div>
        `;
        return;
    }

    const u = APP_STATE.user;
    const badgeHtml = u.isPremium 
        ? `<div style="display:inline-flex; align-items:center; gap:6px; background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius:999px; font-size:0.85rem; font-weight: 600; margin-top:12px;"><i class="ph-light ph-crown" style="color:var(--warning)"></i> Premium Member</div>`
        : `<div style="display:inline-flex; align-items:center; gap:6px; background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius:999px; font-size:0.85rem; font-weight: 600; margin-top:12px;" onclick="navigate('subscription')">Tài khoản Miễn phí ></div>`;

    container.innerHTML = `
        <div class="profile-header-card">
            <div class="profile-avatar">${u.name.charAt(0)}</div>
            <div class="profile-name">${u.name}</div>
            <div class="profile-email">${u.email}</div>
            ${badgeHtml}
        </div>

        <div style="margin-bottom:24px;">
            <div class="profile-menu-item">
                <div class="profile-menu-icon" style="background:var(--cat-dev-bg); color:var(--cat-dev-icon);"><i class="ph-light ph-chart-pie"></i></div>
                <div class="profile-menu-text">Tiến trình học tập</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item">
                <div class="profile-menu-icon" style="background:var(--cat-biz-bg); color:var(--cat-biz-icon);"><i class="ph-light ph-certificate"></i></div>
                <div class="profile-menu-text">Chứng chỉ của tôi</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item" onclick="navigate('subscription')">
                <div class="profile-menu-icon" style="background:var(--cat-design-bg); color:var(--cat-design-icon);"><i class="ph-light ph-star"></i></div>
                <div class="profile-menu-text">Nâng cấp gói Premium</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
        </div>

        <div style="margin-bottom:24px;">
            <div class="profile-menu-item">
                <div class="profile-menu-icon" style="background:var(--bg-main); color:var(--text-secondary);"><i class="ph-light ph-gear"></i></div>
                <div class="profile-menu-text">Cài đặt tài khoản</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item">
                <div class="profile-menu-icon" style="background:var(--bg-main); color:var(--text-secondary);"><i class="ph-light ph-headset"></i></div>
                <div class="profile-menu-text">Hỗ trợ khách hàng</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item" onclick="handleLogout()">
                <div class="profile-menu-icon" style="background:var(--cat-mkt-bg); color:var(--cat-mkt-icon);"><i class="ph-light ph-sign-out"></i></div>
                <div class="profile-menu-text" style="color:var(--danger);">Đăng xuất</div>
            </div>
        </div>
    `;
}

// --- Modals Logic ---
function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add('hidden');
    modalContainer.innerHTML = '';
}

function showAuthModal(type) {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('hidden');

    const formTypeHtml = type === 'login' ? 'Đăng nhập' : 'Đăng ký';
    const switchHtml = type === 'login' 
        ? `Chưa có tài khoản? <a href="#" onclick="showAuthModal('register')">Đăng ký ngay</a>`
        : `Đã có tài khoản? <a href="#" onclick="showAuthModal('login')">Đăng nhập</a>`;

    modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>${formTypeHtml}</h3>
                <button class="btn-close" onclick="closeModal()"><i class="ph-light ph-x"></i></button>
            </div>
            <div class="modal-body">
                <form id="auth-form" onsubmit="handleAuth(event, '${type}')">
                    ${type === 'register' ? `
                    <div class="form-group">
                        <label>Họ và tên</label>
                        <input type="text" id="auth-name" class="form-control" required placeholder="Nhập họ và tên">
                    </div>
                    ` : ''}
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" id="auth-email" class="form-control" required placeholder="Nhập email">
                    </div>
                    <div class="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" id="auth-password" class="form-control" required placeholder="Nhập mật khẩu">
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">${formTypeHtml}</button>
                </form>
                <div style="text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: var(--text-secondary);">
                    ${switchHtml}
                </div>
            </div>
        </div>
    `;
}

function handleAuth(event, type) {
    event.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    
    if (type === 'login') {
        const user = DB.users.find(u => u.email === email && u.password === password);
        if (user) {
            APP_STATE.user = user;
            saveUserToStorage(user);
            closeModal();
            renderNavbar();
            renderView();
            alert(`Đăng nhập thành công! Chào mừng ${user.name}`);
        } else {
            alert('Email hoặc mật khẩu không đúng. (Gợi ý: user@test.com / 123)');
        }
    } else {
        // Mock Register
        const name = document.getElementById('auth-name').value;
        const newUser = {
            id: Date.now(),
            email, password, name,
            balance: 0,
            isPremium: false
        };
        APP_STATE.user = newUser;
        saveUserToStorage(newUser);
        closeModal();
        renderNavbar();
        renderView();
        alert('Đăng ký thành công!');
    }
}

function showTopupModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('hidden');

    modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>Nạp tiền & Nâng cấp Premium</h3>
                <button class="btn-close" onclick="closeModal()"><i class="ph-light ph-x"></i></button>
            </div>
            <div class="modal-body">
                <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">Số dư hiện tại: <strong style="color:var(--text-primary)">${formatCurrency(APP_STATE.user.balance)}</strong></p>
                <form onsubmit="handleTopup(event)">
                    <div class="form-group">
                        <label>Chọn số tiền nạp</label>
                        <select id="topup-amount" class="form-control">
                            <option value="50000">50.000 VNĐ</option>
                            <option value="100000">100.000 VNĐ</option>
                            <option value="200000">200.000 VNĐ</option>
                            <option value="500000">500.000 VNĐ</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;"><i class="ph-light ph-money"></i> Xác nhận nạp tiền</button>
                </form>
            </div>
        </div>
    `;
}

function handleTopup(event) {
    event.preventDefault();
    const amount = parseInt(document.getElementById('topup-amount').value);
    APP_STATE.user.balance += amount;
    saveUserToStorage(APP_STATE.user);
    closeModal();
    renderNavbar();
    alert(`Nạp thành công ${formatCurrency(amount)} vào tài khoản!`);
}

function logout() {
    APP_STATE.user = null;
    saveUserToStorage(null);
    renderNavbar();
    renderView();
}

function handleUpgradePremium(courseId) {
    if (!APP_STATE.user) return showAuthModal('login');
    const course = DB.courses.find(c => c.id === courseId);
    
    if (APP_STATE.user.balance >= course.price) {
        if (confirm(`Bạn có chắc chắn muốn mua khóa học này với giá ${formatCurrency(course.price)}?`)) {
            APP_STATE.user.balance -= course.price;
            APP_STATE.user.isPremium = true; // Upgrade to premium via purchase
            let userInDb = DB.users.find(u => u.id === APP_STATE.user.id);
            if(userInDb) {
                userInDb.balance = APP_STATE.user.balance;
                userInDb.isPremium = true;
            }
            saveUserToStorage(APP_STATE.user);
            renderNavbar(); // update balance
            navigate('course_detail', courseId); // re-render unlocking video
            alert('Thanh toán thành công! Bạn đã có quyền truy cập.');
        }
    } else {
        alert('Số dư không đủ. Vui lòng nạp thêm tiền!');
        showTopupModal();
    }
}

// --- Helpers ---
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}




