# 🎬 GSAP Hero Section Animation - Portfolio Project

Một project portfolio đơn giản nhưng mạnh mẽ demonstrating **GSAP + ScrollTrigger** animations cho hero section. Project này bao gồm các hiệu ứng animation chuyên nghiệp, responsive design, và code tối ưu hóa performance.

---

## 📁 Cấu Trúc Project

```
GSAP-Hero-Section/
├── index.html           # Main HTML file
├── style.css           # All CSS styles (responsive)
├── script.js           # GSAP + ScrollTrigger animations
└── assets/
    └── hero-bg.jpg     # Hero background image (SVG)
```

### File Description

| File | Mô Tả |
|------|--------|
| `index.html` | Structure của page với hero section, about, gallery, footer |
| `style.css` | Toàn bộ styling + responsive breakpoints (mobile/tablet/desktop) |
| `script.js` | GSAP animations: parallax, text reveal, scroll trigger, smooth scroll |
| `assets/hero-bg.jpg` | Background image cho hero (SVG format) |

---

## 🚀 Cách Chạy Project

### Yêu Cầu
- VS Code (hoặc editor tương tự)
- Live Server extension (hoặc dùng Python `http.server`)

### Bước 1: Mở Project trong VS Code
```bash
# Terminal - Navigate đến folder
cd "/Users/my/Desktop/Porfolio 1/GSAP-Hero-Section"

# Mở VS Code
code .
```

### Bước 2: Chạy Live Server
**Option A: Dùng Live Server Extension**
1. Cài Live Server extension trong VS Code (nếu chưa có)
2. Nhấp phải `index.html` → Chọn "Open with Live Server"
3. Browser sẽ mở tự động tại `http://localhost:5500`

**Option B: Dùng Python**
```bash
# Python 3
python3 -m http.server 8000

# Sau đó mở browser: http://localhost:8000
```

**Option C: Dùng Node.js (http-server)**
```bash
npm install -g http-server
http-server

# Mở browser: http://localhost:8080
```

### Bước 3: Xem Animation
- Mở browser và cuộn xuống để thấy các animations
- Kiểm tra responsive trên mobile devices (F12 → Device Toolbar)

---

## 🎨 Các Hiệu Ứng Animation

### 1. **Parallax Effect** (Background Moving)
```javascript
// Background di chuyển chậm hơn khi cuộn
gsap.to('.hero__bg-image', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1  // Smooth follow
    },
    y: 100  // Di chuyển 100px
});
```

**Tác Dụng**: Background image di chuyển chậm hơn so với content, tạo hiệu ứng độ sâu 3D.

---

### 2. **Text Reveal Animation** (Chữ Xuất Hiện)
```javascript
// Title từ từ xuất hiện từ dưới lên
gsap.to('.hero__title-word', {
    duration: 0.8,
    y: 0,           // Từ y: 30 → y: 0
    opacity: 1,     // Từ opacity: 0 → opacity: 1
    stagger: 0.2,   // Delay 0.2s giữa mỗi chữ
    ease: 'power3.out'
});
```

**Tác Dụng**: Mỗi chữ trong title xuất hiện lần lượt, tạo hiệu ứng hấp dẫn.

---

### 3. **ScrollTrigger Animation** (Kích Hoạt Khi Cuộn)
```javascript
// About section title fade in khi cuộn đến
gsap.to('.about .section-title', {
    scrollTrigger: {
        trigger: '.about .section-title',
        start: 'top 80%',   // Kích hoạt khi element ở 80% viewport
        end: 'top 50%'      // Kết thúc ở 50%
    },
    opacity: 1,
    y: 0
});
```

**Tác Dụng**: Elements xuất hiện từ từ khi bạn cuộn xuống.

---

### 4. **Button Hover Animation**
```javascript
// Nút scale up khi hover
btn.addEventListener('mouseenter', function() {
    gsap.to(this, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
    });
});
```

**Tác Dụng**: Nút phóng to 5% khi hover để tạo interactive feedback.

---

### 5. **Smooth Scroll to Anchor**
```javascript
// Click button → Smooth scroll đến section
gsap.to(window, {
    duration: 1.5,
    scrollTo: target,
    ease: 'power3.inOut'
});
```

**Tác Dụng**: Thay vì jump, trang sẽ scroll mượt mà đến section.

---

## 📱 Responsive Design

Project hỗ trợ tất cả devices:

| Device | Breakpoint | Thay Đổi |
|--------|-----------|----------|
| **Desktop** | 1200px+ | Full layout |
| **Tablet** | 768px - 1199px | Grid 2 cột, font nhỏ hơn |
| **Mobile** | < 480px | 1 cột, full width buttons |

**Responsive Breakpoints trong CSS:**
```css
/* Tablet */
@media (max-width: 768px) {
    .hero { height: 80vh; }
    .about__grid { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 480px) {
    .hero { height: 100vh; }
    .btn { width: 100%; max-width: 300px; }
}
```

---

## ⚡ Performance Optimization

Project được tối ưu hóa để đạt **60 FPS**:

1. **will-change Property**
   ```css
   .hero__title-word {
       will-change: transform, opacity;
   }
   ```
   Báo cho browser chuẩn bị cho animation trước.

2. **GPU Acceleration**
   ```css
   transform: translateY(0);  /* Dùng transform thay y property */
   ```

3. **Lazy Animation**
   ```javascript
   gsap.set('.hero__title-word', {
       y: 30,
       opacity: 0
   });
   ```
   Set initial state ngay để tránh layout shift.

4. **ScrollTrigger scrub**
   ```javascript
   scrollTrigger: {
       scrub: 1  // Smooth, không quá heavy
   }
   ```

5. **Font Smoothing**
   ```css
   * {
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
   }
   ```

---

## 🔧 Giải Thích GSAP Code

### Registering ScrollTrigger Plugin
```javascript
gsap.registerPlugin(ScrollTrigger);
```
**Bắt Buộc**: Phải register plugin trước khi dùng.

### Basic gsap.to() Animation
```javascript
gsap.to(element, {
    duration: 1,           // Thời gian (giây)
    opacity: 1,           // Giá trị cuối cùng
    y: 0,                 // Di chuyển Y
    ease: 'power3.out',   // Animation curve
    stagger: 0.2,         // Delay giữa elements
    scrollTrigger: {      // Kích hoạt khi cuộn
        trigger: selector,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1
    }
});
```

### Timeline vs Direct Animation
```javascript
// Direct (simple, nhanh)
gsap.to('.hero__title-word', { ... });

// Timeline (complex, control tốt hơn)
const tl = gsap.timeline();
tl.to('.hero__title-word', { ... })
  .to('.hero__subtitle', { ... }, 0.5);  // Delay 0.5s
```

---

## 🖼️ Tạo GIF Demo Animation

### Method 1: Dùng Chrome DevTools + Screen Capture
1. Mở DevTools (F12) → Device Toolbar (mobile size)
2. Chạy page trong Chrome
3. Chuột phải → Inspect → Take Screenshot
4. Dùng tool như `ffmpeg` để convert video → GIF

### Method 2: Dùng Screen Recording + Conversion
```bash
# 1. Record video (macOS)
# Cmd + Shift + 5 → Capture screen

# 2. Convert video to GIF (dùng ffmpeg)
brew install ffmpeg
ffmpeg -i video.mov -vf "scale=1200:-1,fps=15" demo.gif
```

### Method 3: Dùng Online Tools
- **ezgif.com**: Upload video → Convert to GIF
- **giphy.com Creator**: Record hoặc upload video
- **cloudconvert.com**: Convert MP4 → GIF

**Recommended GIF Settings:**
- Frame Rate: 15-24 fps (balance quality vs file size)
- Resolution: 1200px width (readable but not too large)
- Duration: 3-5 seconds (show key animations)

---

## 🎯 Sửa Đổi & Customize

### Thay Đổi Màu Chủ Đề
```css
/* Trong style.css */
.hero__overlay {
    background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}

.btn--primary {
    background-color: #YOUR_COLOR;
}
```

### Điều Chỉnh Animation Duration
```javascript
/* Trong script.js */
gsap.to('.hero__title-word', {
    duration: 0.8,  // Thay đây (lớn = chậm hơn)
    ...
});
```

### Thay Background Image
```html
<!-- Trong index.html -->
<img src="your-image.jpg" alt="Hero Background">
```

### Thêm Sections Mới
1. Thêm HTML trong `index.html`
2. Thêm CSS trong `style.css`
3. Thêm animation trong `script.js`
4. Follow pattern của các sections hiện có

---

## 📊 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best performance |
| Firefox | ✅ Full | Good |
| Safari | ✅ Full | macOS/iOS |
| Edge | ✅ Full | Chromium-based |
| IE 11 | ❌ No | GSAP không support |

---

## 🐛 Troubleshooting

### Animation Không Chạy?
**Solution:**
1. Kiểm tra Console (F12 → Console)
2. Chắc chắn GSAP + ScrollTrigger load từ CDN
3. Xóa cache (Ctrl+Shift+Del)

### Trang Giật Khi Cuộn?
**Solution:**
1. Kiểm tra Performance (DevTools → Performance)
2. Giảm số animations hoặc độ phức tạp
3. Disable `scrub` nếu không cần (dùng `markers` thay)

### Background Không Hiển Thị?
**Solution:**
1. Kiểm tra file path của `hero-bg.jpg`
2. Mở Network tab (DevTools) để xem request status
3. Ensure image file tồn tại trong `assets/` folder

### Responsive Không Hoạt Động?
**Solution:**
1. Kiểm tra viewport meta tag trong `<head>`
2. Xóa cache browser (Ctrl+Shift+Del)
3. Test trên device thật (không chỉ DevTools)

---

## 📚 Resources & References

### GSAP Documentation
- **Main Docs**: https://gsap.com/
- **ScrollTrigger Docs**: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- **Easing Functions**: https://gsap.com/docs/v3/Easing/

### Useful Tools
- **GSAP Visualizer**: https://gsap.com/
- **Easing Preview**: https://easings.net/
- **CSS Grid Guide**: https://css-tricks.com/snippets/css/complete-guide-grid/

### Recommended Courses
- GSAP Official Docs & Tutorials
- CSS-Tricks Animation Guides
- YouTube: "GSAP Tutorial" channels

---

## 📝 Key Takeaways

✅ **GSAP + ScrollTrigger** = Powerful animation library  
✅ **will-change + transform** = Smooth 60 FPS performance  
✅ **Responsive CSS** = Works on all devices  
✅ **Modular Code** = Easy to customize & extend  
✅ **CDN Loading** = No build process needed  

---

## 🎓 Next Steps

1. **Customize Colors** → Thay đổi màu sắc theo brand
2. **Add More Sections** → Extend project với content mới
3. **Optimize Images** → Dùng WebP format cho background
4. **Add Forms** → Contact form với validation
5. **Deploy** → Host trên Netlify, Vercel, hoặc GitHub Pages

---

## 📄 License

Open source - Feel free to use, modify, and distribute!

---

## 💬 Questions?

Tham khảo:
- GSAP Docs: https://gsap.com/docs/v3/
- MDN Web Docs: https://developer.mozilla.org/
- Stack Overflow: Tag `gsap`, `animation`

---

**Happy Animating! 🚀✨**
