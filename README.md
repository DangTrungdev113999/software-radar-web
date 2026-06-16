# Software Radar — Web (Vite + React + Tailwind)

Phiên bản web của bộ **Software Radar Sales Kit** + **Từ điển thuật ngữ**, dựng bằng Vite + React 19 + TypeScript + Tailwind CSS 3. Cấu trúc tham khảo project *Stream Intelligent*.

## Chạy ở máy
```bash
npm install
npm run dev      # mở http://localhost:5180
```

## Build
```bash
npm run build    # tsc -b && vite build → ra thư mục dist/
npm run preview  # xem thử bản build
```

## Cấu trúc
```
src/
  main.tsx                 # entry
  App.tsx                  # HashRouter: "/" = Sales Kit, "/glossary" = Từ điển
  index.css                # tailwind + base + @import tokens & saleskit css
  styles/
    tokens.css             # design tokens (CSS variables)
    saleskit.css           # @layer components — visual sơ đồ/dashboard/timeline/bảng
  shared/lib/cn.ts         # helper gộp className (clsx + tailwind-merge)
  components/
    Header.tsx             # nav điều hướng dùng chung
    glossary/TermCard.tsx
    saleskit/              # 5 sơ đồ tách component (Pipeline, Dashboard, Loop, FlowChips, Timeline)
  pages/
    SalesKitPage.tsx       # nội dung sales kit (mục 1–15)
    GlossaryPage.tsx       # từ điển: search + lọc nhóm
  data/terms.ts            # dữ liệu ~50 thuật ngữ
```

## Theme
Design tokens là CSS variables trong `src/styles/tokens.css`. Tailwind chỉ bắc cầu tên (xem `tailwind.config.ts`) → đổi màu một chỗ là cả app đổi theo.

## Đẩy lên GitHub Pages
1. Đổi `base` trong `vite.config.ts` cho khớp tên repo (mặc định `/software-radar-web/`).
2. `npm run build`.
3. Đẩy thư mục `dist/` lên nhánh `gh-pages` (vd dùng `gh-pages` package, hoặc GitHub Actions). Dùng **HashRouter** nên deep-link `#/glossary` chạy ổn, không cần cấu hình 404 SPA.
