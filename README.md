# 📱 Website Bán Điện Thoại Thông Minh

Ứng dụng web bán hàng điện thoại hiện đại được xây dựng bằng React, TypeScript và CSS thuần túy. Dự án bao gồm đầy đủ giao diện người dùng và trang quản trị admin.

## ✨ Tính Năng Chính

### 🛍️ Giao Diện Người Dùng
- **Trang chủ**: Hero banner với gradient động, sản phẩm nổi bật, các tính năng nổi bật
- **Danh sách sản phẩm**: Bộ lọc theo hãng/giá, sắp xếp linh hoạt, grid responsive
- **Chi tiết sản phẩm**: Gallery ảnh, thông số kỹ thuật, sản phẩm liên quan
- **Giỏ hàng**: Quản lý sản phẩm, cập nhật số lượng, tính tổng tiền tự động
- **Thanh toán**: Form thông tin khách hàng, xác nhận đơn hàng
- **Đơn hàng của tôi**: Xem lịch sử đơn hàng, theo dõi trạng thái
- **Đăng nhập/Đăng ký**: Xác thực người dùng với localStorage

### 🔧 Giao Diện Quản Trị (Admin)
- **Dashboard**: Thống kê doanh thu, đơn hàng, người dùng, sản phẩm bán chạy
- **Quản lý sản phẩm**: CRUD đầy đủ cho sản phẩm
- **Quản lý đơn hàng**: Xem danh sách, cập nhật trạng thái đơn hàng
- **Quản lý người dùng**: Danh sách user, khóa/mở tài khoản, phân quyền

### 🎨 Thiết Kế Hiện Đại
- Gradient màu tím-hồng (Purple-Pink) độc đáo
- Hiệu ứng hover, glow, shimmer animation
- Shadow effects với primary color
- Responsive design hoàn chỉnh
- Dark mode support
- Smooth transitions & animations

## 🚀 Công Nghệ Sử Dụng

- **Vite** - Build tool siêu nhanh
- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **CSS Module** - Scoped CSS cho từng component
- **LocalStorage** - Lưu trữ dữ liệu client-side

## 📦 Cài Đặt

### Yêu Cầu Hệ Thống
- Node.js 18.x trở lên
- npm hoặc yarn

### Các Bước Cài Đặt

1. **Clone repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Cài đặt dependencies**
```bash
npm install
# hoặc
yarn install
```

3. **Chạy development server**
```bash
npm run dev
# hoặc
yarn dev
```

4. **Mở trình duyệt**
```
http://localhost:5173
```

## 📂 Cấu Trúc Thư Mục

```
src/
├── admin/                      # Phần quản trị
│   ├── components/
│   │   └── AdminSidebar/      # Sidebar admin
│   └── pages/
│       ├── AdminDashboard.tsx  # Trang thống kê
│       ├── AdminProducts.tsx   # Quản lý sản phẩm
│       ├── AdminOrders.tsx     # Quản lý đơn hàng
│       └── AdminUsers.tsx      # Quản lý người dùng
│
├── components/                 # Components dùng chung
│   ├── Navbar/                # Navigation bar
│   ├── Footer/                # Footer
│   └── ProductCard/           # Card hiển thị sản phẩm
│
├── pages/                     # Trang người dùng
│   ├── Home/                  # Trang chủ
│   ├── Products/              # Danh sách sản phẩm
│   ├── ProductDetail/         # Chi tiết sản phẩm
│   ├── Cart/                  # Giỏ hàng
│   ├── Checkout/              # Thanh toán
│   ├── Auth/                  # Đăng nhập/Đăng ký
│   └── UserOrders/            # Đơn hàng của người dùng
│
├── contexts/                  # React Context
│   ├── AuthContext.tsx        # Quản lý authentication
│   └── CartContext.tsx        # Quản lý giỏ hàng
│
├── data/                      # Mock data
│   └── products.json          # Dữ liệu sản phẩm
│
└── components/ui/             # shadcn/ui components
```

## 🎯 Hướng Dẫn Sử Dụng

### Người Dùng (Customer)

1. **Xem sản phẩm**
   - Truy cập trang chủ hoặc trang Products
   - Sử dụng bộ lọc để tìm sản phẩm theo hãng/giá
   - Click vào sản phẩm để xem chi tiết

2. **Thêm vào giỏ hàng**
   - Tại trang chi tiết sản phẩm, click "Thêm vào giỏ hàng"
   - Hoặc click icon giỏ hàng trên ProductCard
   - Số lượng sản phẩm sẽ hiển thị trên icon giỏ hàng

3. **Thanh toán**
   - Vào trang Giỏ hàng
   - Điều chỉnh số lượng hoặc xóa sản phẩm
   - Click "Thanh toán"
   - Điền thông tin giao hàng
   - Xác nhận đơn hàng

4. **Xem đơn hàng**
   - Đăng nhập vào tài khoản
   - Vào mục "Đơn hàng của tôi"
   - Xem chi tiết và trạng thái đơn hàng

### Quản Trị Viên (Admin)

1. **Đăng nhập Admin**
   - Truy cập `/admin/login`
   - Sử dụng tài khoản demo:
     - Email: `admin@phone.com`
     - Password: `admin123`

2. **Xem thống kê**
   - Sau khi đăng nhập, Dashboard hiển thị:
     - Tổng doanh thu
     - Số đơn hàng
     - Số sản phẩm
     - Số người dùng
     - Top sản phẩm bán chạy

3. **Quản lý sản phẩm**
   - Vào mục "Sản phẩm"
   - Thêm mới/Sửa/Xóa sản phẩm
   - Cập nhật giá, hình ảnh, thông tin

4. **Quản lý đơn hàng**
   - Vào mục "Đơn hàng"
   - Xem danh sách đơn hàng
   - Cập nhật trạng thái (Pending → Processing → Shipping → Delivered)

5. **Quản lý người dùng**
   - Vào mục "Người dùng"
   - Xem danh sách users
   - Khóa/Mở tài khoản
   - Thay đổi vai trò (User/Admin)

## 🔐 Tài Khoản Demo

### Admin
```
Email: admin@phone.com
Password: admin123
```

### User (hoặc đăng ký tài khoản mới)
```
Email: bất kỳ email nào
Password: bất kỳ password nào
```

## 🎨 Hệ Thống Màu Sắc

```css
/* Primary Colors */
--primary: 262 83% 58%        /* Purple */
--accent: 340 82% 52%         /* Pink/Rose */

/* Gradients */
--gradient-primary: Purple → Pink
--gradient-accent: Pink → Orange
--gradient-hero: Purple/Pink tint

/* Effects */
--shadow-glow: Purple glow
--shadow-glow-accent: Pink glow
```

## 🔧 Scripts

```bash
# Development
npm run dev          # Chạy dev server

# Build
npm run build        # Build production

# Preview
npm run preview      # Preview production build

# Lint
npm run lint         # Check code quality
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚀 Deploy

### Deploy với Lovable
1. Mở project trong [Lovable](https://lovable.dev)
2. Click nút "Publish" ở góc trên bên phải
3. Website sẽ được deploy tự động

### Deploy với các platform khác
```bash
# Build project
npm run build

# Upload thư mục dist/ lên:
# - Vercel
# - Netlify
# - GitHub Pages
# - CloudFlare Pages
```

## 🔗 Custom Domain

Để kết nối domain riêng:
1. Vào Project > Settings > Domains
2. Click "Connect Domain"
3. Làm theo hướng dẫn

Chi tiết: [Custom Domain Guide](https://docs.lovable.dev/features/custom-domain)

## 🌟 Tính Năng Nâng Cao Có Thể Phát Triển

- [ ] Tích hợp Lovable Cloud (Database, Auth, Storage)
- [ ] Real-time notifications
- [ ] Payment gateway (Stripe, PayPal)
- [ ] Email notifications
- [ ] Search with filters
- [ ] Product reviews & ratings
- [ ] Wishlist
- [ ] Chat support
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] PWA (Progressive Web App)

## 📚 Tài Liệu Tham Khảo

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lovable Documentation](https://docs.lovable.dev)

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Hãy:
1. Fork project
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết

## 💬 Hỗ Trợ

Nếu gặp vấn đề, hãy:
- Tạo issue trên GitHub
- Liên hệ qua [Lovable Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- Đọc [Lovable Documentation](https://docs.lovable.dev)

---

**Made with ❤️ using Lovable**

[Lovable Project URL](https://lovable.dev/projects/e61d392c-3e26-4152-8246-b631d3a05dbd)
