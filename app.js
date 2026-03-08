/**
 * EduFlex - Complete Application
 * User App + Admin Panel
 */

// --- Default Database (for reset) ---
const DEFAULT_DB = {
    users: [
        { id: 1, email: 'user@test.com', password: '123', name: 'Nguyễn Văn A', balance: 50000, isPremium: false, completedLessons: ['l1', 'l2'], createdAt: '2024-01-15', status: 'active' },
        { id: 2, email: 'vip@test.com', password: '123', name: 'Trần Thị VIP', balance: 150000, isPremium: true, completedLessons: ['l1', 'l2', 'l6'], createdAt: '2024-02-20', status: 'active' },
        { id: 3, email: 'demo@test.com', password: '123', name: 'Lê Văn Demo', balance: 0, isPremium: false, completedLessons: [], createdAt: '2024-03-01', status: 'active' },
        { id: 4, email: 'banned@test.com', password: '123', name: 'Người dùng bị khóa', balance: 0, isPremium: false, completedLessons: [], createdAt: '2024-01-10', status: 'banned' }
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
    ],
    instructors: [
        { id: 1, name: 'Thầy Bình', title: 'Giảng viên cao cấp', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100', bio: '10+ năm kinh nghiệm lập trình', coursesCount: 5, studentsCount: 1200, rating: 4.8 },
        { id: 2, name: 'Cô Mai', title: 'Chuyên gia React', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100', bio: 'Chuyên gia Frontend', coursesCount: 3, studentsCount: 800, rating: 4.9 },
        { id: 3, name: 'Chuyên gia Hoàng', title: 'CEO Startup', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', bio: 'Khởi nghiệp và kinh doanh', coursesCount: 2, studentsCount: 500, rating: 4.7 }
    ],
    orders: [
        { id: 'ORD001', userId: 1, userName: 'Nguyễn Văn A', userEmail: 'user@test.com', amount: 199000, date: '2024-03-01', paymentMethod: 'credit_card', status: 'completed', courseName: 'Premium 1 tháng' },
        { id: 'ORD002', userId: 2, userName: 'Trần Thị VIP', userEmail: 'vip@test.com', amount: 150000, date: '2024-03-02', paymentMethod: 'momo', status: 'completed', courseName: 'React.js Thực chiến' },
        { id: 'ORD003', userId: 3, userName: 'Lê Văn Demo', userEmail: 'demo@test.com', amount: 199000, date: '2024-03-03', paymentMethod: 'credit_card', status: 'pending', courseName: 'Premium 1 tháng' },
        { id: 'ORD004', userId: 1, userName: 'Nguyễn Văn A', userEmail: 'user@test.com', amount: 500000, date: '2024-02-28', paymentMethod: 'bank_transfer', status: 'completed', courseName: 'Khởi Nghiệp 4.0' },
        { id: 'ORD005', userId: 2, userName: 'Trần Thị VIP', userEmail: 'vip@test.com', amount: 99000, date: '2024-02-25', paymentMethod: 'momo', status: 'failed', courseName: 'Premium 1 tháng' }
    ],
    certificates: [
        { id: 1, userId: 1, userName: 'Nguyễn Văn A', courseId: 'c1', courseName: 'Lập trình JavaScript Cơ bản', date: '2024-01-20', status: 'completed' },
        { id: 2, userId: 2, userName: 'Trần Thị VIP', courseId: 'c1', courseName: 'Lập trình JavaScript Cơ bản', date: '2024-02-25', status: 'completed' },
        { id: 3, userId: 2, userName: 'Trần Thị VIP', courseId: 'c3', courseName: 'Khởi Nghiệp 4.0', date: '2024-03-01', status: 'completed' }
    ]
};

// --- Initialize Database from localStorage ---
function initDB() {
    const savedDB = localStorage.getItem('eduflex_db');
    if (savedDB) {
        try {
            return JSON.parse(savedDB);
        } catch (e) {
            console.error('Error parsing saved DB:', e);
            return DEFAULT_DB;
        }
    }
    return DEFAULT_DB;
}

// --- Save Database to localStorage ---
function saveDB() {
    localStorage.setItem('eduflex_db', JSON.stringify(DB));
}

// --- Reset Database to default ---
window.resetDatabase = function() {
    if (confirm('Bạn có chắc chắn muốn reset toàn bộ dữ liệu về mặc định? Tất cả dữ liệu thêm mới sẽ bị xóa!')) {
        Object.assign(DB, JSON.parse(JSON.stringify(DEFAULT_DB)));
        saveDB();
        alert('Đã reset dữ liệu về mặc định!');
        renderAdminView();
    }
};

// --- Global State ---
const APP_STATE = {
    user: null,
    currentView: 'home',
    currentCourse: null,
};

// --- Mock Database (initialized from localStorage) ---
let DB = initDB();

// --- Admin State ---
const ADMIN_STATE = {
    isLoggedIn: false,
    currentAdminView: 'dashboard'
};

const ADMIN_CREDENTIALS = {
    email: 'admin@eduflex.vn',
    password: 'admin123'
};

function getAdminStats() {
    const totalUsers = DB.users.length;
    const totalCourses = DB.courses.length;
    const totalRevenue = DB.orders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.amount, 0);
    const premiumUsers = DB.users.filter(u => u.isPremium).length;
    const activeUsers = DB.users.filter(u => u.status === 'active').length;
    const completedCertificates = DB.certificates.length;
    return { totalUsers, totalCourses, totalRevenue, premiumUsers, activeUsers, completedCertificates };
}

// --- Navigation ---
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

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderDesktopLayout();
            renderView();
        }, 250);
    });
});

function initApp() {
    loadUserFromStorage();
    setupEventListeners();
    renderDesktopLayout();
    renderNavbar();
    renderView();
}

function renderDesktopLayout() {
    const app = document.getElementById('app');
    if (!app) return;
    
    const isDesktop = window.innerWidth >= 1025;
    const isTablet = window.innerWidth >= 481 && window.innerWidth <= 1024;
    
    if (isDesktop || isTablet) {
        const userAvatar = APP_STATE.user ? APP_STATE.user.name.charAt(0) : '?';
        const isLoggedIn = APP_STATE !== null && APP_STATE.user !== null;
        
        app.innerHTML = `
            <div class="desktop-sidebar">
                <div class="logo">
                    <i class="ph-light ph-graduation-cap"></i> EduFlex
                </div>
                
                <div class="sidebar-section">
                    <div class="sidebar-section-title">Menu</div>
                    <div class="desktop-nav-item ${APP_STATE.currentView === 'home' ? 'active' : ''}" onclick="navigate('home')">
                        <i class="ph-light ph-house"></i> Trang chủ
                    </div>
                    <div class="desktop-nav-item ${APP_STATE.currentView === 'courses_list' ? 'active' : ''}" onclick="navigate('courses_list')">
                        <i class="ph-light ph-book-open"></i> Khóa học
                    </div>
                    <div class="desktop-nav-item ${APP_STATE.currentView === 'notifications' ? 'active' : ''}" onclick="navigate('notifications')">
                        <i class="ph-light ph-bell"></i> Thông báo
                    </div>
                </div>
                
                <div class="sidebar-divider"></div>
                
                <div class="sidebar-section">
                    <div class="sidebar-section-title">Tài khoản</div>
                    ${APP_STATE.user ? `
                        <div class="desktop-nav-item ${APP_STATE.currentView === 'profile' ? 'active' : ''}" onclick="navigate('profile')">
                            <i class="ph-light ph-user"></i> Hồ sơ
                        </div>
                        <div class="desktop-nav-item" onclick="navigate('subscription')">
                            <i class="ph-light ph-crown"></i> Premium
                        </div>
                        <div class="desktop-nav-item" onclick="handleLogout()">
                            <i class="ph-light ph-sign-out"></i> Đăng xuất
                        </div>
                    ` : `
                        <div class="sidebar-auth-buttons">
                            <button class="btn btn-primary sidebar-btn" onclick="showAuthModal('login')">
                                <i class="ph-light ph-sign-in"></i> Đăng nhập
                            </button>
                            <button class="btn btn-outline sidebar-btn" onclick="showAuthModal('register')">
                                <i class="ph-light ph-user-plus"></i> Đăng ký
                            </button>
                        </div>
                    `}
                </div>
                
                <div class="sidebar-divider"></div>
                
                <div class="sidebar-section">
                    <div class="desktop-nav-item" onclick="navigateAdmin('admin_login')">
                        <i class="ph-light ph-shield-check"></i> Admin Panel
                    </div>
                </div>
            </div>
            
            <div class="desktop-main" id="desktop-main">
                <header class="desktop-header">
                    <div class="desktop-search">
                        <i class="ph-light ph-magnifying-glass"></i>
                        <input type="text" placeholder="Tìm kiếm khóa học..." oninput="handleSearch(this.value)">
                    </div>
                    <div class="desktop-user">
                        ${APP_STATE.user 
                            ? `<div class="desktop-user-avatar" onclick="navigate('profile')">${userAvatar}</div>`
                            : `<button class="btn btn-primary" style="width:auto;padding:8px 20px;" onclick="showAuthModal('login')">Đăng nhập</button>`
                        }
                    </div>
                </header>
                <main id="main-content" style="padding-bottom: 0;"></main>
            </div>
        `;
    }
}

function loadUserFromStorage() {
    const savedUser = localStorage.getItem('tedu_user');
    if (savedUser) {
        APP_STATE.user = JSON.parse(savedUser);
    }
    const savedAdmin = localStorage.getItem('eduflex_admin');
    if (savedAdmin) {
        ADMIN_STATE.isLoggedIn = true;
    }
}

function saveUserToStorage(user) {
    if (user) {
        localStorage.setItem('tedu_user', JSON.stringify(user));
    } else {
        localStorage.removeItem('tedu_user');
    }
}

function setupEventListeners() {
    try {
        const logo = document.getElementById('nav-logo');
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                navigate('home');
            });
        }
    } catch (e) {}
    try {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (mobileNav.classList.contains('active')) {
                    icon.classList.replace('ph-list', 'ph-xmark');
                } else {
                    icon.classList.replace('ph-xmark', 'ph-list');
                }
            });
        }
    } catch (e) {}
}

window.navigate = function(view, data = null) {
    if (view === 'courses') view = 'courses_list';
    
    APP_STATE.currentView = view;
    if (view === 'course_detail' && data) {
        APP_STATE.currentCourse = data;
    }

    document.querySelectorAll('.bottom-nav .nav-item').forEach(el => el.classList.remove('active'));

    renderNavbar();
    renderView();
    window.scrollTo(0, 0);
    document.dispatchEvent(new Event('navigate'));
};

window.navigateAdmin = function(view) {
    // Khi chưa đăng nhập, luôn hiển thị trang đăng nhập admin
    if (!ADMIN_STATE.isLoggedIn) {
        view = 'admin_login';
    }
    
    ADMIN_STATE.currentAdminView = view;
    
    // Kiểm tra nếu đang ở desktop layout
    const isDesktop = window.innerWidth >= 481;
    
    if (isDesktop) {
        // Render admin layout trên desktop
        renderAdminDesktopLayout();
    } else {
        renderAdminView();
    }
};

function renderAdminDesktopLayout() {
    const app = document.getElementById('app');
    if (!app) return;
    
    // Nếu chưa đăng nhập, hiển thị form đăng nhập
    if (!ADMIN_STATE.isLoggedIn) {
        app.innerHTML = `
            <div class="admin-login-page">
                <div class="admin-login-card">
                    <div class="admin-logo">
                        <i class="ph-light ph-shield-check"></i>
                    </div>
                    <h2>Admin Panel</h2>
                    <p>Đăng nhập để quản lý hệ thống</p>
                    
                    <form onsubmit="handleAdminLogin(event)">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="admin-email" class="form-control" required placeholder="admin@eduflex.vn">
                        </div>
                        <div class="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" id="admin-password" class="form-control" required placeholder="admin123">
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Đăng nhập</button>
                    </form>
                    
                    <p style="margin-top:20px;font-size:0.8rem;color:var(--text-muted);">Demo: admin@eduflex.vn / admin123</p>
                    
                    <button class="btn btn-outline" style="margin-top:12px;width:100%;" onclick="navigate('home')">Quay lại</button>
                </div>
            </div>
        `;
        return;
    }
    
    // Đã đăng nhập - hiển thị admin layout
    const navItems = [
        { id: 'dashboard', icon: 'ph-chart-pie-slice', label: 'Tổng quan' },
        { id: 'admin_users', icon: 'ph-users', label: 'Người dùng' },
        { id: 'admin_courses', icon: 'ph-book-open', label: 'Khóa học' },
        { id: 'admin_instructors', icon: 'ph-presentation-chart', label: 'Giảng viên' },
        { id: 'admin_orders', icon: 'ph-shopping-cart', label: 'Đơn hàng' },
        { id: 'admin_stats', icon: 'ph-chart-bar', label: 'Thống kê' },
        { id: 'admin_settings', icon: 'ph-gear', label: 'Cài đặt' }
    ];
    
    const navHtml = navItems.map(item => `
        <div class="admin-nav-item ${ADMIN_STATE.currentAdminView === item.id ? 'active' : ''}" onclick="navigateAdmin('${item.id}')">
            <i class="ph-light ph-${item.icon}"></i>
            <span>${item.label}</span>
        </div>
    `).join('');
    
    app.innerHTML = `
        <div class="admin-full-layout">
            <div class="admin-sidebar">
                <div class="admin-sidebar-header">
                    <i class="ph-light ph-shield-check"></i> Admin Panel
                </div>
                ${navHtml}
                <div class="admin-nav-item" onclick="adminLogout()" style="margin-top: auto;">
                    <i class="ph-light ph-sign-out"></i>
                    <span>Đăng xuất</span>
                </div>
            </div>
            <div class="admin-content" id="admin-content-area">
            </div>
        </div>
    `;
    
    // Render nội dung admin
    if (ADMIN_STATE.currentAdminView === 'dashboard') {
        renderAdminDashboard(document.getElementById('admin-content-area'));
    } else if (ADMIN_STATE.currentAdminView === 'admin_users') {
        renderAdminUsers(document.getElementById('admin-content-area'));
    } else if (ADMIN_STATE.currentAdminView === 'admin_courses') {
        renderAdminCourses(document.getElementById('admin-content-area'));
    } else if (ADMIN_STATE.currentAdminView === 'admin_instructors') {
        renderAdminInstructors(document.getElementById('admin-content-area'));
    } else if (ADMIN_STATE.currentAdminView === 'admin_orders') {
        renderAdminOrders(document.getElementById('admin-content-area'));
    } else if (ADMIN_STATE.currentAdminView === 'admin_stats') {
        renderAdminStats(document.getElementById('admin-content-area'));
    } else if (ADMIN_STATE.currentAdminView === 'admin_settings') {
        renderAdminSettings(document.getElementById('admin-content-area'));
    }
}

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
    } else if (view === 'course_detail' || view === 'subscription' || view === 'checkout' || view === 'courses_list' || view === 'notifications' || view === 'profile' || view === 'certificates' || view === 'settings') {
        const titleMap = {
            'course_detail': 'EduFlex',
            'subscription': 'Đăng ký thành viên',
            'checkout': 'Thanh toán',
            'courses_list': 'Khóa học',
            'notifications': 'Thông báo',
            'profile': 'Hồ sơ',
            'certificates': 'Chứng chỉ',
            'settings': 'Cài đặt'
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
    mainContent.innerHTML = '';
    
    const isDesktop = window.innerWidth >= 481;
    
    if (!isDesktop) {
        updateHeader(APP_STATE.currentView);
    }
    
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
    } else if (APP_STATE.currentView === 'certificates') {
        renderCertificates(mainContent);
    } else if (APP_STATE.currentView === 'settings') {
        renderSettings(mainContent);
    } else if (APP_STATE.currentView === 'admin_login' || APP_STATE.currentView.startsWith('admin_')) {
        renderAdminView();
    }
}

// ==================== USER APP FUNCTIONS ====================

function renderCourseDetail(container) {
    const courseId = APP_STATE.currentCourse;
    const course = DB.courses.find(c => c.id === courseId);
    
    if (!course) {
        container.innerHTML = `<div class="container" style="padding: 4rem 0; text-align: center;"><h2>Không tìm thấy khóa học</h2><button class="btn btn-outline" onclick="navigate('home')">Quay lại</button></div>`;
        return;
    }

    let activeLessonIndex = 0;
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
                    <button class="follow-btn" onclick="toggleFollow('${course.instructor}')">Theo dõi</button>
                </div>

                <div class="section-header" style="margin-bottom: 16px;">
                    <h2 style="font-size:1.15rem;">Nội dung khóa học</h2>
                    <a href="#" class="section-action" onclick="navigate('courses_list'); return false;">Xem tất cả</a>
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

function renderHome(container) {
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

    let allLessons = [];
    DB.courses.forEach(c => {
        c.lessons.forEach(l => {
            allLessons.push({ ...l, courseId: c.id, course: c });
        });
    });
    let listLessonsHtml = allLessons.slice(0, 4).map((lesson, idx) => {
        let num = (idx + 1).toString().padStart(2, '0');
        let badgeHtml = (lesson.isLocked) ? `<span class="badge badge-blue">KHÓA</span>` : `<span class="badge badge-green">FREE</span>`;
        return `
            <div class="list-item" onclick="navigate('course_detail', '${lesson.courseId}')">
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
                <button class="filter-btn" onclick="openFilterModal()"><i class="ph-light ph-sliders-horizontal"></i></button>
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
                    <a href="#" class="section-action" onclick="navigate('courses_list'); return false;">Xem tất cả</a>
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
                    <a href="#" class="section-action" onclick="navigate('courses_list'); return false;">Xem tất cả</a>
                </div>
            </div>
            <div class="horizontal-scroll">
                ${featCoursesHtml}
            </div>

            <div class="container">
                <div class="section-header" style="background-color: var(--primary-color); color: white; margin: -10px -20px 20px -20px; padding: 20px; border-radius:16px;">
                    <h2 style="color:white; margin-bottom:4px; font-size:1.1rem;">Khóa học tiêu biểu</h2>
                    <p style="font-weight:400; font-size:0.8rem; margin-bottom:12px; color:var(--primary-light);">Giảm giá lên đến 70% cho tất cả các chứng chỉ chuyên nghiệp.</p>
                    <button class="btn" style="background:white; color:var(--primary-color); padding:8px 20px; font-size:0.85rem; width:fit-content;" onclick="navigate('subscription')">Nhận ngay</button>
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
            const num = '01';
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
        isPremium: false,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'active'
    };
    APP_STATE.user = newUser;
    saveUserToStorage(newUser);
    
    navigate('checkout');
};

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
                <input type="text" id="discount-code" class="form-control" placeholder="Nhập mã giảm giá">
                <button class="btn btn-primary" style="width:auto; padding:0 24px; border-radius:var(--radius-md);" onclick="applyDiscountCode()">Áp dụng</button>
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

    let totalLessonsCount = 0;
    DB.courses.forEach(c => {
        totalLessonsCount += (c.lessons ? c.lessons.length : 0);
    });

    let completedLessonsCount = 0;
    if (APP_STATE.user && APP_STATE.user.completedLessons) {
        completedLessonsCount = APP_STATE.user.completedLessons.length;
    }
    
    if (!APP_STATE.user) {
        completedLessonsCount = 3;
        totalLessonsCount = 12;
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
        </div>
    `;

    filterCoursesByLevel(APP_STATE.currentLevelFilter);
}

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
            <div class="profile-menu-item" onclick="navigate('courses_list')">
                <div class="profile-menu-icon" style="background:var(--cat-dev-bg); color:var(--cat-dev-icon);"><i class="ph-light ph-chart-pie"></i></div>
                <div class="profile-menu-text">Tiến trình học tập</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item" onclick="navigate('certificates')">
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
            <div class="profile-menu-item" onclick="navigate('settings')">
                <div class="profile-menu-icon" style="background:var(--bg-main); color:var(--text-secondary);"><i class="ph-light ph-gear"></i></div>
                <div class="profile-menu-text">Cài đặt tài khoản</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item" onclick="showSupportModal()">
                <div class="profile-menu-icon" style="background:var(--bg-main); color:var(--text-secondary);"><i class="ph-light ph-headset"></i></div>
                <div class="profile-menu-text">Hỗ trợ khách hàng</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
            <div class="profile-menu-item" onclick="handleLogout()">
                <div class="profile-menu-icon" style="background:var(--cat-mkt-bg); color:var(--cat-mkt-icon);"><i class="ph-light ph-sign-out"></i></div>
                <div class="profile-menu-text" style="color:var(--danger);">Đăng xuất</div>
            </div>
            <div class="profile-menu-item" onclick="navigateAdmin('admin_login')">
                <div class="profile-menu-icon" style="background:var(--bg-main); color:var(--danger);"><i class="ph-light ph-shield"></i></div>
                <div class="profile-menu-text" style="color:var(--danger);">Admin Panel</div>
                <div class="profile-menu-arrow"><i class="ph-light ph-caret-right"></i></div>
            </div>
        </div>
    `;
}

function renderCertificates(container) {
    const certificates = APP_STATE.user ? DB.certificates.filter(c => c.userId === APP_STATE.user.id) : [];
    
    let certHtml = certificates.length > 0 ? certificates.map(cert => `
        <div class="certificate-card">
            <div class="cert-icon">🎓</div>
            <div class="cert-content">
                <div class="cert-title">${cert.courseName}</div>
                <div class="cert-date">Ngày cấp: ${cert.date}</div>
                <div class="cert-status">${cert.status}</div>
            </div>
            <button class="btn-download"><i class="ph-light ph-download"></i></button>
        </div>
    `).join("") : `
        <div style="text-align:center;padding:40px 20px;">
            <div style="font-size:4rem;margin-bottom:16px;">📜</div>
            <h3 style="margin-bottom:8px;">Chưa có chứng chỉ</h3>
            <p style="color:var(--text-secondary);">Hoàn thành khóa học để nhận chứng chỉ</p>
            <button class="btn btn-primary" style="margin-top:16px;width:auto;padding:12px 32px;" onclick="navigate('courses_list')">Khám phá khóa học</button>
        </div>
    `;
    
    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Chứng chỉ của tôi</h1>
        </div>
        <div class="container" style="padding-bottom:24px;">
            ${certHtml}
        </div>
    `;
}

function renderSettings(container) {
    container.innerHTML = `
        <div class="page-header">
            <h1 class="page-title">Cài đặt tài khoản</h1>
        </div>
        
        <div style="padding:0 20px;">
            <div class="settings-section">
                <div class="settings-title">TÀI KHOẢN</div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-user"></i></div>
                    <div class="settings-text">Thông tin cá nhân</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-key"></i></div>
                    <div class="settings-text">Đổi mật khẩu</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-bell"></i></div>
                    <div class="settings-text">Thông báo</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
            </div>
            
            <div class="settings-section">
                <div class="settings-title">ỨNG DỤNG</div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-globe"></i></div>
                    <div class="settings-text">Ngôn ngữ</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-moon"></i></div>
                    <div class="settings-text">Giao diện</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-download"></i></div>
                    <div class="settings-text">Tải xuống ngoại tuyến</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
            </div>
            
            <div class="settings-section">
                <div class="settings-title">KHÁC</div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-file-text"></i></div>
                    <div class="settings-text">Điều khoản dịch vụ</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
                <div class="settings-item" onclick="alert('Chức năng đang phát triển')">
                    <div class="settings-icon"><i class="ph-light ph-shield-check"></i></div>
                    <div class="settings-text">Chính sách bảo mật</div>
                    <div class="settings-arrow"><i class="ph-light ph-caret-right"></i></div>
                </div>
                <div class="settings-item" onclick="alert('Phiên bản: 1.0.0')">
                    <div class="settings-icon"><i class="ph-light ph-info"></i></div>
                    <div class="settings-text">Phiên bản</div>
                    <div class="settings-arrow">v1.0.0</div>
                </div>
            </div>
        </div>
    `;
}

// ==================== MODAL FUNCTIONS ====================

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
        const name = document.getElementById('auth-name').value;
        const newUser = {
            id: Date.now(),
            email, password, name,
            balance: 0,
            isPremium: false,
            createdAt: new Date().toISOString().split('T')[0],
            status: 'active'
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

function handleUpgradePremium(courseId) {
    if (!APP_STATE.user) return showAuthModal('login');
    const course = DB.courses.find(c => c.id === courseId);
    
    if (APP_STATE.user.balance >= course.price) {
        if (confirm(`Bạn có chắc chắn muốn mua khóa học này với giá ${formatCurrency(course.price)}?`)) {
            APP_STATE.user.balance -= course.price;
            APP_STATE.user.isPremium = true;
            let userInDb = DB.users.find(u => u.id === APP_STATE.user.id);
            if(userInDb) {
                userInDb.balance = APP_STATE.user.balance;
                userInDb.isPremium = true;
            }
            saveUserToStorage(APP_STATE.user);
            renderNavbar();
            navigate('course_detail', courseId);
            alert('Thanh toán thành công! Bạn đã có quyền truy cập.');
        }
    } else {
        alert('Số dư không đủ. Vui lòng nạp thêm tiền!');
        showTopupModal();
    }
}

window.openFilterModal = function() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('hidden');
    
    modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>Lọc khóa học</h3>
                <button class="btn-close" onclick="closeModal()"><i class="ph-light ph-x"></i></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Danh mục</label>
                    <select id="filter-category" class="form-control">
                        <option value="">Tất cả</option>
                        <option value="#mindset">Mindset</option>
                        <option value="#business">Business</option>
                        <option value="#resource">Resource</option>
                        <option value="#marketing">Marketing</option>
                        <option value="#coding">Coding</option>
                        <option value="#design">Design</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Cấp độ</label>
                    <select id="filter-level" class="form-control">
                        <option value="">Tất cả</option>
                        <option value="Mentor">Mentor</option>
                        <option value="Master">Master</option>
                        <option value="VIP Master">VIP Master</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Giá</label>
                    <select id="filter-price" class="form-control">
                        <option value="">Tất cả</option>
                        <option value="free">Miễn phí</option>
                        <option value="paid">Có phí</option>
                        <option value="premium">Premium</option>
                    </select>
                </div>
                <button class="btn btn-primary" onclick="applyFilters()">Áp dụng bộ lọc</button>
            </div>
        </div>
    `;
};

window.applyFilters = function() {
    const category = document.getElementById('filter-category').value;
    const level = document.getElementById('filter-level').value;
    const price = document.getElementById('filter-price').value;
    
    closeModal();
    navigate('courses_list');
    
    setTimeout(() => {
        if (level) {
            filterCoursesByLevel(level);
        }
        
        if (category || price) {
            const listContainer = document.getElementById('filtered-courses-list');
            let filtered = [...DB.courses];
            
            if (category) {
                filtered = filtered.filter(c => c.hashtags && c.hashtags.some(t => t.toLowerCase().includes(category.toLowerCase())));
            }
            
            if (price === 'free') {
                filtered = filtered.filter(c => c.price === 0);
            } else if (price === 'paid') {
                filtered = filtered.filter(c => c.price > 0 && !c.isPremium);
            } else if (price === 'premium') {
                filtered = filtered.filter(c => c.isPremium);
            }
            
            if (filtered.length === 0) {
                listContainer.innerHTML = `<div class="text-center mt-4 text-muted">Không tìm thấy khóa học nào phù hợp.</div>`;
            } else {
                listContainer.innerHTML = filtered.map(course => {
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
            }
        }
    }, 100);
};

window.toggleFollow = function(instructorName) {
    if (!APP_STATE.user) {
        showAuthModal('login');
        return;
    }
    
    if (!APP_STATE.followingInstructors) {
        APP_STATE.followingInstructors = [];
    }
    
    const idx = APP_STATE.followingInstructors.indexOf(instructorName);
    if (idx > -1) {
        APP_STATE.followingInstructors.splice(idx, 1);
        alert(`Đã hủy theo dõi ${instructorName}`);
    } else {
        APP_STATE.followingInstructors.push(instructorName);
        alert(`Đã theo dõi ${instructorName}. Cảm ơn bạn!`);
    }
    renderView();
};

window.discountApplied = false;
window.discountPercent = 0;

window.applyDiscountCode = function() {
    const codeInput = document.getElementById('discount-code');
    const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
    
    if (discountApplied) {
        alert('Bạn đã áp dụng mã giảm giá rồi!');
        return;
    }
    
    if (code === 'EDUFLEX20') {
        discountApplied = true;
        discountPercent = 20;
        const originalPrice = 199000;
        const newPrice = originalPrice * 0.8;
        
        document.querySelector('.total-price-value').innerHTML = `${formatCurrency(newPrice)} <span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;text-decoration:line-through;margin-left:8px;">${formatCurrency(originalPrice)}</span>`;
        
        codeInput.parentElement.innerHTML = `
            <div style="display:flex;align-items:center;gap:8px;flex:1;">
                <span style="background:var(--success-light);color:var(--success);padding:8px 16px;border-radius:var(--radius-md);font-weight:600;font-size:0.9rem;">🎉 ${code} -20%</span>
                <button onclick="removeDiscount()" style="background:transparent;border:none;color:var(--danger);cursor:pointer;font-size:0.85rem;">Xóa</button>
            </div>
        `;
        
        alert('Áp dụng mã giảm giá thành công! Giảm 20%');
    } else if (code === 'WELCOME50') {
        discountApplied = true;
        discountPercent = 50;
        const originalPrice = 199000;
        const newPrice = originalPrice * 0.5;
        
        document.querySelector('.total-price-value').innerHTML = `${formatCurrency(newPrice)} <span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;text-decoration:line-through;margin-left:8px;">${formatCurrency(originalPrice)}</span>`;
        
        codeInput.parentElement.innerHTML = `
            <div style="display:flex;align-items:center;gap:8px;flex:1;">
                <span style="background:var(--success-light);color:var(--success);padding:8px 16px;border-radius:var(--radius-md);font-weight:600;font-size:0.9rem;">🎉 ${code} -50%</span>
                <button onclick="removeDiscount()" style="background:transparent;border:none;color:var(--danger);cursor:pointer;font-size:0.85rem;">Xóa</button>
            </div>
        `;
        
        alert('Chào mừng! Giảm 50% cho lần đầu đăng ký!');
    } else {
        alert('Mã giảm giá không hợp lệ. Thử EDUFLEX20 hoặc WELCOME50');
    }
};

window.removeDiscount = function() {
    discountApplied = false;
    discountPercent = 0;
    document.querySelector('.total-price-value').innerHTML = '199.000đ';
    document.querySelector('.discount-box').innerHTML = `
        <input type="text" id="discount-code" class="form-control" placeholder="Nhập mã giảm giá">
        <button class="btn btn-primary" style="width:auto; padding:0 24px; border-radius:var(--radius-md);" onclick="applyDiscountCode()">Áp dụng</button>
    `;
};

window.showSupportModal = function() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('hidden');
    
    modalContainer.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>Hỗ trợ khách hàng</h3>
                <button class="btn-close" onclick="closeModal()"><i class="ph-light ph-x"></i></button>
            </div>
            <div class="modal-body">
                <div style="text-align:center;padding:20px 0;">
                    <div style="width:80px;height:80px;background:var(--primary-light);color:var(--primary-color);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 20px;">
                        <i class="ph-light ph-headset"></i>
                    </div>
                    <h3 style="margin-bottom:12px;">Chúng tôi sẵn sàng hỗ trợ</h3>
                    <p style="color:var(--text-secondary);margin-bottom:24px;">Liên hệ với chúng tôi qua các kênh dưới đây</p>
                    
                    <div style="background:var(--bg-main);border-radius:var(--radius-md);padding:16px;margin-bottom:12px;display:flex;align-items:center;gap:12px;">
                        <div style="width:40px;height:40px;background:var(--primary-light);color:var(--primary-color);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <i class="ph-light ph-envelope"></i>
                        </div>
                        <div>
                            <div style="font-size:0.8rem;color:var(--text-muted);">Email</div>
                            <div style="font-weight:600;">support@eduflex.vn</div>
                        </div>
                    </div>
                    
                    <div style="background:var(--bg-main);border-radius:var(--radius-md);padding:16px;margin-bottom:12px;display:flex;align-items:center;gap:12px;">
                        <div style="width:40px;height:40px;background:var(--success-light);color:var(--success);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <i class="ph-light ph-phone"></i>
                        </div>
                        <div>
                            <div style="font-size:0.8rem;color:var(--text-muted);">Hotline</div>
                            <div style="font-weight:600;">1900 1234</div>
                        </div>
                    </div>
                    
                    <div style="background:var(--bg-main);border-radius:var(--radius-md);padding:16px;display:flex;align-items:center;gap:12px;">
                        <div style="width:40px;height:40px;background:#1877f2;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;">
                            <i class="ph-light ph-messenger-logo"></i>
                        </div>
                        <div>
                            <div style="font-size:0.8rem;color:var(--text-muted);">Messenger</div>
                            <div style="font-weight:600;">m.me/eduflex.vn</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// ==================== HELPER FUNCTIONS ====================

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// ==================== ADMIN PANEL FUNCTIONS ====================

function renderAdminView() {
    const mainContent = document.getElementById('main-content') || document.querySelector('.desktop-main');
    if(!mainContent) return;
    
    const header = document.getElementById('app-header');
    const bottomNav = document.getElementById('bottom-nav');
    
    if(bottomNav) bottomNav.style.display = 'none';
    if(mainContent) mainContent.style.paddingBottom = '20px';
    
    // Hide desktop header on admin
    const desktopHeader = document.querySelector('.desktop-header');
    if (desktopHeader) desktopHeader.style.display = 'none';
    
    if (!ADMIN_STATE.isLoggedIn) {
        renderAdminLogin(mainContent, header);
        return;
    }

    renderAdminLayout(mainContent, header);
    
    if (ADMIN_STATE.currentAdminView === 'dashboard') {
        renderAdminDashboard(mainContent);
    } else if (ADMIN_STATE.currentAdminView === 'admin_users') {
        renderAdminUsers(mainContent);
    } else if (ADMIN_STATE.currentAdminView === 'admin_courses') {
        renderAdminCourses(mainContent);
    } else if (ADMIN_STATE.currentAdminView === 'admin_instructors') {
        renderAdminInstructors(mainContent);
    } else if (ADMIN_STATE.currentAdminView === 'admin_orders') {
        renderAdminOrders(mainContent);
    } else if (ADMIN_STATE.currentAdminView === 'admin_stats') {
        renderAdminStats(mainContent);
    } else if (ADMIN_STATE.currentAdminView === 'admin_settings') {
        renderAdminSettings(mainContent);
    }
}

function renderAdminLogin(container, header) {
    // Render header cho mobile
    if (header) {
        header.innerHTML = `
            <div class="top-bar surface">
                <div class="top-bar-left">
                    <button class="icon-btn transparent" onclick="navigate('home')"><i class="ph-light ph-arrow-left"></i></button>
                </div>
                <div class="top-bar-center">Đăng nhập Admin</div>
                <div class="top-bar-right"></div>
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="admin-login-container">
            <div class="admin-logo">
                <i class="ph-light ph-shield-check"></i>
            </div>
            <h2>Admin Panel</h2>
            <p>Đăng nhập để quản lý hệ thống</p>
            
            <form onsubmit="handleAdminLogin(event)">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="admin-email" class="form-control" required placeholder="admin@eduflex.vn">
                </div>
                <div class="form-group">
                    <label>Mật khẩu</label>
                    <input type="password" id="admin-password" class="form-control" required placeholder="admin123">
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">Đăng nhập</button>
            </form>
            
            <p style="margin-top:20px;font-size:0.8rem;color:var(--text-muted);">Demo: admin@eduflex.vn / admin123</p>
            
            <button class="btn btn-outline" style="margin-top:12px;width:100%;" onclick="navigate('home')">Quay lại</button>
        </div>
    `;
}

window.handleAdminLogin = function(e) {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        ADMIN_STATE.isLoggedIn = true;
        localStorage.setItem('eduflex_admin', 'true');
        ADMIN_STATE.currentAdminView = 'dashboard';
        renderAdminView();
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
};

window.adminLogout = function() {
    ADMIN_STATE.isLoggedIn = false;
    localStorage.removeItem('eduflex_admin');
    navigate('home');
};

function renderAdminLayout(container, header) {
    // Render header cho mobile
    if (header) {
        header.innerHTML = `
            <div class="top-bar surface admin-top-bar">
                <div class="top-bar-left">
                    <div style="font-weight:700;font-size:1.1rem;color:var(--primary-color);">
                        <i class="ph-light ph-shield-check"></i> Admin Panel
                    </div>
                </div>
                <div class="top-bar-right">
                    <button class="icon-btn transparent" onclick="adminLogout()"><i class="ph-light ph-sign-out"></i></button>
                </div>
            </div>
        `;
    }
    
    const navItems = [
        { id: 'dashboard', icon: 'ph-chart-pie-slice', label: 'Tổng quan' },
        { id: 'admin_users', icon: 'ph-users', label: 'Người dùng' },
        { id: 'admin_courses', icon: 'ph-book-open', label: 'Khóa học' },
        { id: 'admin_instructors', icon: 'ph-presentation-chart', label: 'Giảng viên' },
        { id: 'admin_orders', icon: 'ph-shopping-cart', label: 'Đơn hàng' },
        { id: 'admin_stats', icon: 'ph-chart-bar', label: 'Thống kê' },
        { id: 'admin_settings', icon: 'ph-gear', label: 'Cài đặt' }
    ];
    
    const navHtml = navItems.map(item => `
        <div class="admin-nav-item ${ADMIN_STATE.currentAdminView === item.id ? 'active' : ''}" onclick="navigateAdmin('${item.id}')">
            <i class="ph-light ph-${item.icon}"></i>
            <span>${item.label}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="admin-full-layout">
            <div class="admin-sidebar">
                ${navHtml}
            </div>
            <div class="admin-content" id="admin-content-area">
            </div>
        </div>
    `;
}

function renderAdminDashboard(container) {
    const stats = getAdminStats();
    const area = document.getElementById('admin-content-area');
    
    const recentOrders = DB.orders.slice(0, 5);
    const recentUsers = DB.users.slice(0, 5);
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Tổng quan</h1>
            <p>Chào mừng đến với Admin Panel</p>
        </div>
        
        <div class="admin-stats-grid">
            <div class="admin-stat-card">
                <div class="stat-icon" style="background:#3b82f6;color:white;"><i class="ph-light ph-users"></i></div>
                <div class="stat-content">
                    <div class="stat-value">${stats.totalUsers}</div>
                    <div class="stat-label">Tổng người dùng</div>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="stat-icon" style="background:#10b981;color:white;"><i class="ph-light ph-book-open"></i></div>
                <div class="stat-content">
                    <div class="stat-value">${stats.totalCourses}</div>
                    <div class="stat-label">Khóa học</div>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="stat-icon" style="background:#f59e0b;color:white;"><i class="ph-light ph-currency-dollar"></i></div>
                <div class="stat-content">
                    <div class="stat-value">${formatCurrency(stats.totalRevenue)}</div>
                    <div class="stat-label">Doanh thu</div>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="stat-icon" style="background:#8b5cf6;color:white;"><i class="ph-light ph-certificate"></i></div>
                <div class="stat-content">
                    <div class="stat-value">${stats.completedCertificates}</div>
                    <div class="stat-label">Chứng chỉ</div>
                </div>
            </div>
        </div>
        
        <div class="admin-section">
            <h2>Đơn hàng gần đây</h2>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Mã đơn</th>
                        <th>Khách hàng</th>
                        <th>Số tiền</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    ${recentOrders.map(order => `
                        <tr>
                            <td>${order.id}</td>
                            <td>${order.userName}</td>
                            <td>${formatCurrency(order.amount)}</td>
                            <td><span class="badge badge-${order.status === 'completed' ? 'green' : order.status === 'pending' ? 'blue' : 'gray'}">${order.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="admin-section">
            <h2>Người dùng mới</h2>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    ${recentUsers.map(user => `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td><span class="badge badge-${user.status === 'active' ? 'green' : 'gray'}">${user.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderAdminUsers(container) {
    const area = document.getElementById('admin-content-area');
    
    const userRows = DB.users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.isPremium ? '<span class="badge badge-premium">Premium</span>' : '<span class="badge badge-gray">Free</span>'}</td>
            <td>${formatCurrency(user.balance)}</td>
            <td><span class="badge badge-${user.status === 'active' ? 'green' : 'gray'}">${user.status}</span></td>
            <td>
                <button class="admin-action-btn" onclick="alert('Chức năng đang phát triển')"><i class="ph-light ph-pencil"></i></button>
                <button class="admin-action-btn" onclick="alert('Chức năng đang phát triển')"><i class="ph-light ph-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Quản lý người dùng</h1>
            <button class="btn btn-primary" style="width:auto;" onclick="alert('Chức năng đang phát triển')">
                <i class="ph-light ph-plus"></i> Thêm người dùng
            </button>
        </div>
        
        <div class="admin-search-bar">
            <input type="text" placeholder="Tìm kiếm người dùng..." class="form-control">
        </div>
        
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Premium</th>
                    <th>Số dư</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${userRows}
            </tbody>
        </table>
    `;
}

function renderAdminCourses(container) {
    const area = document.getElementById('admin-content-area');
    
    const courseRows = DB.courses.map(course => `
        <tr>
            <td><img src="${course.thumbnail}" style="width:60px;height:40px;object-fit:cover;border-radius:4px;"></td>
            <td>${course.title}</td>
            <td>${course.level}</td>
            <td>${course.isPremium ? '<span class="badge badge-premium">Premium</span>' : 'Free'}</td>
            <td>${formatCurrency(course.price)}</td>
            <td>${course.lessons.length} bài</td>
            <td>
                <button class="admin-action-btn" onclick="showCourseForm('${course.id}')"><i class="ph-light ph-pencil"></i></button>
                <button class="admin-action-btn" onclick="deleteCourse('${course.id}')"><i class="ph-light ph-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Quản lý khóa học</h1>
            <button class="btn btn-primary" style="width:auto;" onclick="showCourseForm(null)">
                <i class="ph-light ph-plus"></i> Thêm khóa học
            </button>
        </div>
        
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Ảnh</th>
                    <th>Tên khóa học</th>
                    <th>Cấp độ</th>
                    <th>Loại</th>
                    <th>Giá</th>
                    <th>Bài học</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${courseRows}
            </tbody>
        </table>
    `;
}

window.showCourseForm = function(courseId) {
    const course = courseId ? DB.courses.find(c => c.id === courseId) : null;
    const isEdit = course !== null;
    
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('hidden');
    
    modalContainer.innerHTML = `
        <div class="modal" style="max-width:600px;max-height:90vh;">
            <div class="modal-header">
                <h3>${isEdit ? 'Sửa khóa học' : 'Thêm khóa học mới'}</h3>
                <button class="btn-close" onclick="closeModal()"><i class="ph-light ph-x"></i></button>
            </div>
            <div class="modal-body" style="overflow-y:auto;">
                <form id="course-form" onsubmit="saveCourse(event, '${courseId || ''}')">
                    <div class="form-group">
                        <label>Tiêu đề khóa học *</label>
                        <input type="text" id="course-title" class="form-control" required placeholder="Nhập tiêu đề khóa học" value="${course ? course.title : ''}">
                    </div>
                    
                    <div class="form-group">
                        <label>Mô tả *</label>
                        <textarea id="course-description" class="form-control" rows="3" required placeholder="Nhập mô tả khóa học">${course ? course.description : ''}</textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Thể loại/Cấp độ *</label>
                        <select id="course-level" class="form-control" required>
                            <option value="">Chọn cấp độ</option>
                            <option value="Mentor" ${course && course.level === 'Mentor' ? 'selected' : ''}>Mentor</option>
                            <option value="Master" ${course && course.level === 'Master' ? 'selected' : ''}>Master</option>
                            <option value="VIP Master" ${course && course.level === 'VIP Master' ? 'selected' : ''}>VIP Master</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Hashtags (phân cách bằng dấu phẩy)</label>
                        <input type="text" id="course-hashtags" class="form-control" placeholder="#javascript, #coding, #react" value="${course ? course.hashtags.join(', ') : ''}">
                    </div>
                    
                    <div class="form-group">
                        <label>Giảng viên *</label>
                        <select id="course-instructor" class="form-control" required>
                            <option value="">Chọn giảng viên</option>
                            ${DB.instructors.map(inst => `<option value="${inst.name}" ${course && course.instructor === inst.name ? 'selected' : ''}>${inst.name}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>URL Thumbnail *</label>
                        <input type="url" id="course-thumbnail" class="form-control" required placeholder="https://example.com/image.jpg" value="${course ? course.thumbnail : ''}">
                        <small style="color:var(--text-muted);font-size:0.8rem;">Nhập URL hình ảnh khóa học</small>
                    </div>
                    
                    <div class="form-group">
                        <label>Giá (VNĐ) *</label>
                        <input type="number" id="course-price" class="form-control" required placeholder="0" min="0" value="${course ? course.price : 0}">
                    </div>
                    
                    <div class="form-group">
                        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;">
                            <input type="checkbox" id="course-premium" ${course && course.isPremium ? 'checked' : ''}>
                            <span>Khóa học Premium</span>
                        </label>
                    </div>
                    
                    <h4 style="margin:20px 0 12px;font-size:1rem;">Danh sách bài học</h4>
                    <div id="lessons-container">
                        ${course ? course.lessons.map((lesson, idx) => `
                            <div class="lesson-item" style="background:var(--bg-main);padding:12px;border-radius:8px;margin-bottom:8px;">
                                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                                    <span style="font-weight:600;font-size:0.9rem;">Bài ${idx + 1}</span>
                                    <button type="button" onclick="this.parentElement.parentElement.remove()" style="background:transparent;border:none;color:var(--danger);cursor:pointer;"><i class="ph-light ph-trash"></i></button>
                                </div>
                                <input type="hidden" name="lesson-id" value="${lesson.id}">
                                <input type="text" name="lesson-title" class="form-control" style="margin-bottom:8px;" required placeholder="Tiêu đề bài học" value="${lesson.title}">
                                <div style="display:flex;gap:8px;">
                                    <input type="text" name="lesson-duration" class="form-control" required placeholder="Thời lượng (vd: 15:20)" value="${lesson.duration}" style="flex:1;">
                                    <label style="display:flex;align-items:center;gap:4px;white-space:nowrap;">
                                        <input type="checkbox" name="lesson-locked" ${lesson.isLocked ? 'checked' : ''}>
                                        <span style="font-size:0.85rem;">Khóa</span>
                                    </label>
                                </div>
                                <input type="url" name="lesson-video" class="form-control" style="margin-top:8px;" placeholder="URL Video" value="${lesson.videoUrl}">
                            </div>
                        `).join('') : ''}
                    </div>
                    
                    <button type="button" onclick="addLessonField()" style="background:transparent;border:1px dashed var(--border-color);color:var(--text-muted);padding:12px;border-radius:8px;width:100%;cursor:pointer;margin-bottom:16px;">
                        <i class="ph-light ph-plus"></i> Thêm bài học
                    </button>
                    
                    <div style="display:flex;gap:12px;margin-top:20px;">
                        <button type="button" class="btn btn-outline" style="flex:1;" onclick="closeModal()">Hủy</button>
                        <button type="submit" class="btn btn-primary" style="flex:1;">${isEdit ? 'Lưu thay đổi' : 'Thêm khóa học'}</button>
                    </div>
                </form>
            </div>
        </div>
    `;
};

window.addLessonField = function() {
    const container = document.getElementById('lessons-container');
    const lessonCount = container.children.length + 1;
    
    const lessonHtml = `
        <div class="lesson-item" style="background:var(--bg-main);padding:12px;border-radius:8px;margin-bottom:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                <span style="font-weight:600;font-size:0.9rem;">Bài ${lessonCount}</span>
                <button type="button" onclick="this.parentElement.parentElement.remove()" style="background:transparent;border:none;color:var(--danger);cursor:pointer;"><i class="ph-light ph-trash"></i></button>
            </div>
            <input type="hidden" name="lesson-id" value="l${Date.now()}">
            <input type="text" name="lesson-title" class="form-control" style="margin-bottom:8px;" required placeholder="Tiêu đề bài học">
            <div style="display:flex;gap:8px;">
                <input type="text" name="lesson-duration" class="form-control" required placeholder="Thời lượng (vd: 15:20)" value="10:00" style="flex:1;">
                <label style="display:flex;align-items:center;gap:4px;white-space:nowrap;">
                    <input type="checkbox" name="lesson-locked">
                    <span style="font-size:0.85rem;">Khóa</span>
                </label>
            </div>
            <input type="url" name="lesson-video" class="form-control" style="margin-top:8px;" placeholder="URL Video" value="https://www.w3schools.com/html/mov_bbb.mp4">
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', lessonHtml);
};

window.saveCourse = function(e, courseId) {
    e.preventDefault();
    
    const title = document.getElementById('course-title').value;
    const description = document.getElementById('course-description').value;
    const level = document.getElementById('course-level').value;
    const hashtagsStr = document.getElementById('course-hashtags').value;
    const instructor = document.getElementById('course-instructor').value;
    const thumbnail = document.getElementById('course-thumbnail').value;
    const price = parseInt(document.getElementById('course-price').value);
    const isPremium = document.getElementById('course-premium').checked;
    
    const hashtags = hashtagsStr.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    const lessons = [];
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, idx) => {
        lessons.push({
            id: item.querySelector('[name="lesson-id"]').value,
            title: item.querySelector('[name="lesson-title"]').value,
            duration: item.querySelector('[name="lesson-duration"]').value,
            isLocked: item.querySelector('[name="lesson-locked"]').checked,
            videoUrl: item.querySelector('[name="lesson-video"]').value || 'https://www.w3schools.com/html/mov_bbb.mp4'
        });
    });
    
    if (lessons.length === 0) {
        alert('Vui lòng thêm ít nhất 1 bài học!');
        return;
    }
    
    if (courseId) {
        const courseIndex = DB.courses.findIndex(c => c.id === courseId);
        if (courseIndex !== -1) {
            DB.courses[courseIndex] = {
                ...DB.courses[courseIndex],
                title, description, level, hashtags, instructor, thumbnail, price, isPremium, lessons
            };
        }
        alert('Cập nhật khóa học thành công!');
    } else {
        const newCourse = {
            id: 'c' + (Date.now()),
            title, description, level, hashtags, instructor, thumbnail, price, isPremium, lessons
        };
        DB.courses.push(newCourse);
        alert('Thêm khóa học mới thành công!');
    }
    
    saveDB();
    closeModal();
    renderAdminCourses(document.getElementById('main-content'));
};

window.deleteCourse = function(courseId) {
    if (confirm('Bạn có chắc chắn muốn xóa khóa học này?')) {
        DB.courses = DB.courses.filter(c => c.id !== courseId);
        saveDB();
        alert('Xóa khóa học thành công!');
        renderAdminCourses(document.getElementById('main-content'));
    }
};

function renderAdminInstructors(container) {
    const area = document.getElementById('admin-content-area');
    
    const instructorCards = DB.instructors.map(inst => `
        <div class="instructor-card-admin">
            <img src="${inst.avatar}" alt="${inst.name}" class="instructor-avatar-admin">
            <div class="instructor-info-admin">
                <h3>${inst.name}</h3>
                <p class="instructor-title-admin">${inst.title}</p>
                <div class="instructor-stats">
                    <span><i class="ph-light ph-book-open"></i> ${inst.coursesCount} khóa</span>
                    <span><i class="ph-light ph-users"></i> ${inst.studentsCount} học viên</span>
                    <span><i class="ph-light ph-star"></i> ${inst.rating}</span>
                </div>
            </div>
            <div class="instructor-actions">
                <button class="admin-action-btn" onclick="alert('Chức năng đang phát triển')"><i class="ph-light ph-pencil"></i></button>
            </div>
        </div>
    `).join('');
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Quản lý giảng viên</h1>
            <button class="btn btn-primary" style="width:auto;" onclick="alert('Chức năng đang phát triển')">
                <i class="ph-light ph-plus"></i> Thêm giảng viên
            </button>
        </div>
        
        <div class="instructor-grid">
            ${instructorCards}
        </div>
    `;
}

function renderAdminOrders(container) {
    const area = document.getElementById('admin-content-area');
    
    const orderRows = DB.orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.userName}</td>
            <td>${order.userEmail}</td>
            <td>${order.courseName}</td>
            <td>${formatCurrency(order.amount)}</td>
            <td>${order.paymentMethod}</td>
            <td><span class="badge badge-${order.status === 'completed' ? 'green' : order.status === 'pending' ? 'blue' : 'gray'}">${order.status}</span></td>
            <td>
                <button class="admin-action-btn" onclick="alert('Chức năng đang phát triển')"><i class="ph-light ph-eye"></i></button>
            </td>
        </tr>
    `).join('');
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Quản lý đơn hàng</h1>
        </div>
        
        <div class="admin-stats-grid" style="margin-bottom:24px;">
            <div class="admin-stat-card">
                <div class="stat-content">
                    <div class="stat-value">${DB.orders.filter(o => o.status === 'completed').length}</div>
                    <div class="stat-label">Hoàn thành</div>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="stat-content">
                    <div class="stat-value">${DB.orders.filter(o => o.status === 'pending').length}</div>
                    <div class="stat-label">Chờ xử lý</div>
                </div>
            </div>
            <div class="admin-stat-card">
                <div class="stat-content">
                    <div class="stat-value">${DB.orders.filter(o => o.status === 'failed').length}</div>
                    <div class="stat-label">Thất bại</div>
                </div>
            </div>
        </div>
        
        <table class="admin-table">
            <thead>
                <tr>
                    <th>Mã đơn</th>
                    <th>Tên khách</th>
                    <th>Email</th>
                    <th>Khóa học</th>
                    <th>Số tiền</th>
                    <th>Phương thức</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                ${orderRows}
            </tbody>
        </table>
    `;
}

function renderAdminStats(container) {
    const area = document.getElementById('admin-content-area');
    const stats = getAdminStats();
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Thống kê & Báo cáo</h1>
        </div>
        
        <div class="admin-chart-container">
            <h3>Doanh thu theo tháng</h3>
            <div class="admin-chart">
                <div class="chart-bar" style="height:40%"><span>40M</span></div>
                <div class="chart-bar" style="height:60%"><span>60M</span></div>
                <div class="chart-bar" style="height:35%"><span>35M</span></div>
                <div class="chart-bar" style="height:80%"><span>80M</span></div>
                <div class="chart-bar" style="height:55%"><span>55M</span></div>
                <div class="chart-bar" style="height:90%"><span>90M</span></div>
            </div>
            <div class="chart-labels">
                <span>Tháng 1</span>
                <span>Tháng 2</span>
                <span>Tháng 3</span>
                <span>Tháng 4</span>
                <span>Tháng 5</span>
                <span>Tháng 6</span>
            </div>
        </div>
        
        <div class="admin-section">
            <h3>Top khóa học</h3>
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Khóa học</th>
                        <th>Lượt mua</th>
                        <th>Doanh thu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>React.js Thực chiến</td>
                        <td>45</td>
                        <td>${formatCurrency(6750000)}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Khởi Nghiệp 4.0</td>
                        <td>32</td>
                        <td>${formatCurrency(16000000)}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lập trình JavaScript Cơ bản</td>
                        <td>120</td>
                        <td>${formatCurrency(0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="admin-section">
            <h3>Tỷ lệ người dùng</h3>
            <div class="progress-stats">
                <div class="progress-item">
                    <div class="progress-label">
                        <span>Premium</span>
                        <span>${Math.round((stats.premiumUsers / stats.totalUsers) * 100)}%</span>
                    </div>
                    <div class="progress-bar-admin">
                        <div class="progress-fill-admin" style="width:${(stats.premiumUsers / stats.totalUsers) * 100}%"></div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-label">
                        <span>Free</span>
                        <span>${Math.round(((stats.totalUsers - stats.premiumUsers) / stats.totalUsers) * 100)}%</span>
                    </div>
                    <div class="progress-bar-admin">
                        <div class="progress-fill-admin" style="width:${((stats.totalUsers - stats.premiumUsers) / stats.totalUsers) * 100}%;background:var(--text-muted);"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAdminSettings(container) {
    const area = document.getElementById('admin-content-area');
    
    area.innerHTML = `
        <div class="admin-page-header">
            <h1>Cài đặt hệ thống</h1>
        </div>
        
        <div class="admin-section">
            <h3>Cấu hình Premium</h3>
            <div class="settings-form">
                <div class="form-group">
                    <label>Giá Premium (VNĐ/ tháng)</label>
                    <input type="number" class="form-control" value="199000">
                </div>
                <div class="form-group">
                    <label>Giá Premium (VNĐ/ năm)</label>
                    <input type="number" class="form-control" value="1990000">
                </div>
                <button class="btn btn-primary" onclick="alert('Lưu thành công!')">Lưu thay đổi</button>
            </div>
        </div>
        
        <div class="admin-section">
            <h3>Banner trang chủ</h3>
            <div class="banner-preview">
                <div style="background:linear-gradient(135deg,var(--primary-color),var(--primary-dark));padding:40px;border-radius:12px;text-align:center;color:white;">
                    <h2>Giảm giá 50%</h2>
                    <p>Cho tất cả khóa học Premium</p>
                </div>
            </div>
            <button class="btn btn-outline" style="margin-top:12px;" onclick="alert('Chức năng đang phát triển')">Chỉnh sửa banner</button>
        </div>
        
        <div class="admin-section">
            <h3>Thông tin hệ thống</h3>
            <div class="system-info">
                <div class="info-row">
                    <span>Phiên bản</span>
                    <span>1.0.0</span>
                </div>
                <div class="info-row">
                    <span>Số người dùng</span>
                    <span>${DB.users.length}</span>
                </div>
                <div class="info-row">
                    <span>Số khóa học</span>
                    <span>${DB.courses.length}</span>
                </div>
                <div class="info-row">
                    <span>Số đơn hàng</span>
                    <span>${DB.orders.length}</span>
                </div>
            </div>
        </div>
        
        <div class="admin-section">
            <h3>Quản lý dữ liệu</h3>
            <div style="background: var(--bg-surface); border-radius: var(--radius-md); padding: 16px; border: 1px solid rgba(255,255,255,0.1);">
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 12px;">
                    Reset dữ liệu sẽ xóa tất cả thay đổi và khôi phục về dữ liệu mặc định.
                </p>
                <button class="btn" style="background: var(--danger); color: white; width: auto;" onclick="resetDatabase()">
                    <i class="ph-light ph-arrow-counter-clockwise"></i> Reset dữ liệu
                </button>
            </div>
        </div>
    `;
}
