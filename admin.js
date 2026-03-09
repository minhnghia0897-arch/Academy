/**
 * EduFlex - Admin Panel
 * File riêng cho admin, mở bằng window.open('admin.html')
 */

// ==================== DATABASE ====================

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

function saveDB() {
    localStorage.setItem('eduflex_db', JSON.stringify(DB));
}

window.resetDatabase = function() {
    if (confirm('Bạn có chắc chắn muốn reset toàn bộ dữ liệu về mặc định? Tất cả dữ liệu thêm mới sẽ bị xóa!')) {
        Object.assign(DB, JSON.parse(JSON.stringify(DEFAULT_DB)));
        saveDB();
        alert('Đã reset dữ liệu về mặc định!');
        renderAdminView();
    }
};

let DB = initDB();

// ==================== ADMIN STATE ====================

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

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// ==================== HELPER FUNCTIONS ====================

function closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) {
        modalContainer.classList.add('hidden');
        modalContainer.innerHTML = '';
    }
}

// ==================== ADMIN PANEL FUNCTIONS ====================

function initAdmin() {
    const savedAdmin = localStorage.getItem('eduflex_admin');
    if (savedAdmin) {
        ADMIN_STATE.isLoggedIn = true;
    }
    renderAdminView();
}

function renderAdminView() {
    const app = document.getElementById('app');
    if (!app) return;
    
    if (!ADMIN_STATE.isLoggedIn) {
        renderAdminLogin();
        return;
    }
    
    renderAdminLayout();
    
    if (ADMIN_STATE.currentAdminView === 'dashboard') {
        renderAdminDashboard();
    } else if (ADMIN_STATE.currentAdminView === 'admin_users') {
        renderAdminUsers();
    } else if (ADMIN_STATE.currentAdminView === 'admin_courses') {
        renderAdminCourses();
    } else if (ADMIN_STATE.currentAdminView === 'admin_instructors') {
        renderAdminInstructors();
    } else if (ADMIN_STATE.currentAdminView === 'admin_orders') {
        renderAdminOrders();
    } else if (ADMIN_STATE.currentAdminView === 'admin_stats') {
        renderAdminStats();
    } else if (ADMIN_STATE.currentAdminView === 'admin_settings') {
        renderAdminSettings();
    }
}

function renderAdminLogin() {
    const app = document.getElementById('app');
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
            </div>
        </div>
        <div id="modal-container" class="hidden"></div>
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
    ADMIN_STATE.currentAdminView = 'dashboard';
    localStorage.removeItem('eduflex_admin');
    renderAdminView();
};

window.navigateAdmin = function(view) {
    ADMIN_STATE.currentAdminView = view;
    renderAdminView();
};

function renderAdminLayout() {
    const app = document.getElementById('app');
    
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
        <div id="modal-container" class="hidden"></div>
    `;
}

function renderAdminDashboard() {
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

function renderAdminUsers() {
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

function renderAdminCourses() {
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
                            <div class="lesson-item">
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
        <div class="lesson-item">
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
    lessonItems.forEach((item) => {
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
    renderAdminCourses();
};

window.deleteCourse = function(courseId) {
    if (confirm('Bạn có chắc chắn muốn xóa khóa học này?')) {
        DB.courses = DB.courses.filter(c => c.id !== courseId);
        saveDB();
        alert('Xóa khóa học thành công!');
        renderAdminCourses();
    }
};

function renderAdminInstructors() {
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

function renderAdminOrders() {
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

function renderAdminStats() {
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
                        <span>${stats.totalUsers > 0 ? Math.round((stats.premiumUsers / stats.totalUsers) * 100) : 0}%</span>
                    </div>
                    <div class="progress-bar-admin">
                        <div class="progress-fill-admin" style="width:${stats.totalUsers > 0 ? (stats.premiumUsers / stats.totalUsers) * 100 : 0}%"></div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-label">
                        <span>Free</span>
                        <span>${stats.totalUsers > 0 ? Math.round(((stats.totalUsers - stats.premiumUsers) / stats.totalUsers) * 100) : 0}%</span>
                    </div>
                    <div class="progress-bar-admin">
                        <div class="progress-fill-admin" style="width:${stats.totalUsers > 0 ? ((stats.totalUsers - stats.premiumUsers) / stats.totalUsers) * 100 : 0}%;background:var(--text-muted);"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAdminSettings() {
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

// Initialize on load
document.addEventListener('DOMContentLoaded', initAdmin);
