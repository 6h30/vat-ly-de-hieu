# Vật lý dễ hiểu

28 mô phỏng vật lý tương tác cho THCS (Cơ – Nhiệt – Điện – Quang), dành cho thầy cô minh hoạ bài giảng và học sinh tự khám phá. Một tệp `index.html` duy nhất, không cần mạng, không thu thập dữ liệu.

**Bản web:** https://6h30.github.io/vat-ly-de-hieu/

## Chạy thử

Mở `index.html` bằng Chrome, hoặc trong thư mục này chạy `python -m http.server 8080` rồi mở `http://localhost:8080`.

Mỗi bài có địa chỉ riêng, ví dụ `index.html#thaukinh`. Nút "Trình chiếu" phóng toàn màn hình để chiếu lên lớp.

## Cấu trúc

- `index.html`: toàn bộ ứng dụng (mô phỏng, hình thực tế, câu hỏi, kết luận).
- `privacy.html`: chính sách quyền riêng tư (cần cho Google Play).
- `app/`: cấu hình Capacitor bọc ứng dụng thành app Android.
- `.github/workflows/android-release-aab.yml`: build gói `.aab` và `.apk` ký sẵn trên GitHub.
- `play-store/`: nội dung trang cửa hàng, ảnh và danh sách việc đưa lên Google Play.
