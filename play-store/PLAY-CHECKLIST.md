# Danh sách việc để đưa "Vật lý dễ hiểu" lên Google Play

Làm theo đúng quy trình của LittlePlay (kho `be-choi`): gói `.aab` do GitHub build và ký.

Đã sẵn sàng: gói app nhắm Android 16 (API 36), trang chính sách quyền riêng tư, 8 ảnh chụp màn hình, biểu tượng, ảnh bìa, nội dung mô tả và cách khai các biểu mẫu (`store-listing.md`).

Việc của bạn (tài khoản Play Console là của bạn): các bước 2 và 4.

## 0. Chuyện cần biết trước

- **Tên gói app** đang là `com.vatlydehieu.app`. **Không đổi được sau khi đã tải lên.** Muốn đổi thì báo trước khi tải bản đầu tiên.
- Mỗi lần tải bản mới, "số phiên bản" (version code) phải tăng: 1, 2, 3...
- Tài khoản cá nhân tạo sau 13/11/2023 phải **kiểm thử kín với ít nhất 12 người, liên tục 14 ngày** rồi mới xin đăng chính thức. Nếu bạn đã qua bước này với LittlePlay thì cùng tài khoản vẫn phải làm lại cho app mới.

## 1. Gói cài đặt (.aab)

Kho: https://github.com/6h30/vat-ly-de-hieu. Chạy:
`gh workflow run android-release-aab.yml -f version_code=1 -f version_name=1.0.0`
rồi tải gói `VatLyDeHieu-release-aab` về thư mục `release/`.

## 2. Tạo app trong Play Console

- Tên: `Vật lý dễ hiểu`, ngôn ngữ mặc định: Tiếng Việt, loại: App, miễn phí.
- Điền "Thiết lập app" bằng nội dung trong `store-listing.md`: chính sách quyền riêng tư, truy cập app, quảng cáo (không), xếp hạng nội dung, đối tượng, an toàn dữ liệu.
- Trang cửa hàng: dán chữ từ `store-listing.md`, tải ảnh từ `graphics/` và `screenshots/`.

## 3. Khoá ký

Dùng lại khoá của LittlePlay (`E:\Claude\be-choi-android\keys`), đã được lưu vào Secrets của kho này. Google cho phép dùng chung một khoá tải lên cho nhiều app. **Sao lưu thư mục `keys` ở nơi an toàn**, đừng gửi cho ai.

## 4. Thử nghiệm và xin đăng chính thức

1. **Thử nghiệm nội bộ**: Kiểm thử > Thử nghiệm nội bộ > Tạo bản phát hành > tải `.aab` lên, thêm email của bạn làm người thử, cài từ Google Play để thử.
2. **Kiểm thử kín** (bắt buộc với tài khoản cá nhân): nhóm thử ít nhất 12 người, mỗi người ở lại liên tục 14 ngày.
3. Hết 14 ngày: xin quyền đăng chính thức, trả lời vài câu hỏi về quá trình thử.
4. Tạo bản phát hành chính thức và gửi duyệt.

## 5. Khi cập nhật

Sửa `index.html`, đẩy lên GitHub, chạy lại workflow với số phiên bản cao hơn (ví dụ `-f version_code=2 -f version_name=1.0.1`), tải bản mới lên Play Console. Bản app nhúng sẵn tệp web lúc build nên khi web đổi thì phải build lại.
