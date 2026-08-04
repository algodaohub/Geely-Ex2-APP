# Hướng dẫn cài đặt Android

Có **2 file APK**, dùng cho 2 mục đích khác nhau:

| File | Mục đích |
|---|---|
| `Geely-Ex2-Phone.apk` | Cài lên **điện thoại Android** |
| `Geely-Ex2-Car.apk` | Cài lên **màn hình xe Geely EX2** |

---

## Phần 1: Cài app lên điện thoại Android

1. Chuyển file `Geely-Ex2-Phone.apk` sang điện thoại (qua cáp USB, Zalo, Email...).
2. Mở file APK trên điện thoại.
3. Nếu được hỏi, bật **Cho phép cài đặt từ nguồn không xác định (Allow unknown sources)** hoặc xác nhận trong **Settings > Security**.
4. Bấm **Cài đặt (Install)** và chờ hoàn tất, bấm **Mở (Open)**.

> Mẹo: Nếu dùng Chrome, hãy tải file về và mở từ **Downloads**; nếu dùng Zalo/Telegram, mở trực tiếp từ ứng dụng chat.

---

## Phần 2: Cài app lên màn hình xe Geely EX2

Màn hình xe chạy Android nhưng bị khóa, nên **phải mở khóa (kích hoạt ADB qua Wi-Fi) trước**, sau đó mới cài được file `Geely-Ex2-Car.apk`.

### Bước 0: Kiểm tra phiên bản màn hình tương thích

Hướng dẫn mở khóa **chỉ hoạt động** trên màn hình:

- **IHU629G** của hãng **Beidou Intelligent Connected Vehicle Technology Co., Ltd.**
- Model **EEBADF1**
- Phần mềm **Flyme Auto E 1.8.0**, bản **1111 hoặc 1114**

Kiểm tra: vào **Cài đặt xe (Vehicle Settings)** > cuối danh sách chọn **Xe của tôi (My Car)**.

> Nếu không đúng phiên bản trên, không nên thực hiện. Mọi thao tác đều **do bạn tự chịu trách nhiệm**; màn hình đã có quyền root từ nhà máy, quy trình chỉ mở quyền truy cập ADB, không thêm/bớt quyền hệ thống.

### Bước 1: Chuẩn bị USB FAT32

- Dùng USB **định dạng FAT32** (dung lượng ≤ 32GB có thể format trực tiếp bằng Windows; > 32GB dùng chương trình **fat32format GUI**: https://ridgecrop.co.uk/index.htm?guiformat.htm)
- Tải gói vá (patch) đúng phiên bản:
  - **Bản 1111:** https://drive.google.com/file/d/1rvTfF4WoTgXcZ98_y73fKRayZVBgxaOZ/view
  - **Bản 1114:** https://drive.google.com/file/d/1RF5ut5r_zVGCxfe2O3LKc3SrecRVp3td/view
- Tệp tải về là **ZIP**, bên trong có thư mục:
  - `3C6025_SW0E22H0128H111100000_user_995` (bản 1111)
  - `3C6025_SW0E22H0306H111400000_user_995` (bản 1114)
- **Giải nén** thư mục đó rồi copy **nguyên thư mục** vào USB. Cấu trúc USB phải đúng:

```
USB gốc (ROOT)
└── 3C6025_SW0E22H0128H111100000_user_995   (tên tùy bản)
    └── OS
        └── update.zip    ← KHÔNG được giải nén file này
```

### Bước 2: Cắm USB và mở menu ẩn

1. Cắm USB vào xe, chờ vài giây cho đến khi màn hình báo **"Đã phát hiện thiết bị USB được kết nối"**.
2. **Tắt Bluetooth** để ngắt kết nối điện thoại.
3. Mở app **Điện thoại (Phone)** trên màn hình.
4. Nhập mã mở menu ẩn theo công thức:

| Menu | Công thức mã |
|---|---|
| **Engineering Mode** | `#*(tháng + 10)(ngày)(giờ)` |
| **Dialer Mode** | `#*(tháng + 5)(ngày)(giờ)` |

- Tháng = tháng hiện tại **+ 10** (hoặc **+ 5** cho Dialer Mode)
- Ngày = ngày hiện tại (2 chữ số)
- Giờ = giờ hiện tại **định dạng 12 giờ, 2 chữ số** (19 giờ → `07`)

**Ví dụ** ngày 20/07/2026, lúc 19:25:

- Engineering Mode: `#*172007`
- Dialer Mode: `#*122007`

### Bước 3: Áp dụng bản vá (patch)

1. Trong menu ẩn, bấm vào **biểu tượng được đánh dấu màu xanh lá cây** để bắt đầu cài đặt.
2. Chờ thông báo "đang kiểm tra bản cập nhật" → màn hình **tự khởi động lại** vào chế độ **Recovery** và **tự cài patch** (không cần thao tác gì).
3. Cuối quá trình sẽ **hiện thông báo lỗi** — đây là **cố ý, một phần của quy trình**, đừng lo lắng.
4. **Nhấn giữ nút chuyển bài hát về trước (Previous Track)** trên vô lăng cho đến khi màn hình **khởi động lại lần nữa**.

> Hoàn tất! ADB đã được kích hoạt.

### Bước 4: Kết nối màn hình với Wi-Fi

1. Quay lại menu ẩn, chọn **mục được đánh dấu màu xanh dương** → mở cài đặt Wi-Fi của màn hình.
2. Kết nối màn hình với **Wi-Fi gia đình** hoặc **hotspot từ điện thoại**.
3. Ghi lại **địa chỉ IP** hiển thị ở cột bên trái màn hình (cần cho bước sau).
4. Bấm nút quay về màn hình chính, mở app **Gọi điện**, nhập mã **Dialer Mode** (`#*(tháng+5)(ngày)(giờ)`).
5. Bấm nút có chữ **ADB** một lần để bật ADB mode.

### Bước 5: Cài `Geely-Ex2-Car.apk` bằng ADB AppControl

1. Tải **ADB AppControl**: https://adbappcontrol.com/en/#download
2. Mở chương trình, nhập **địa chỉ IP** của màn hình xe vào ô góc trên bên phải, bấm nút **WiFi** để kết nối.
3. Lần đầu kết nối, **chấp nhận cài đặt ACBridge** khi chương trình yêu cầu.
4. Chọn menu **Cài đặt (Install) → Cài đặt nhanh (Quick Install)**.
5. Chọn file `Geely-Ex2-Car.apk` và chờ cài xong.

---

## Lưu ý chung

- **Mọi thao tác đều do bạn tự chịu trách nhiệm.** Thao tác sai có thể làm mất ổn định hệ thống, một số chức năng ngừng hoạt động, nặng hơn phải cài lại toàn bộ phần mềm màn hình.
- Chỉ mở khóa cho màn hình **đúng phiên bản** nêu ở Bước 0.
- Mỗi khi cần cài app mới: bật Wi-Fi bằng biểu tượng tắt nhanh trên thanh trạng thái → ghi IP → kết nối bằng ADB AppControl.

### Gỡ bỏ mở khóa (nếu muốn trở lại trạng thái gốc)

**Cài đặt xe (Vehicle Settings) → Xe của tôi (My Car) → Khôi phục cài đặt gốc (Factory Reset).**

Sau khi khôi phục: mọi app đã cài thêm bị xóa và **ADB bị tắt**.

---

### ☕️ Donate

Bác nào hay uống Highlands thì nhớ lấy voucher trước khi đặt nhé.
Mất vài giây mà tiết kiệm được kha khá. 😄

[![Highlands Coffee Voucher](https://img.shields.io/badge/☕_Lấy_Voucher_Highlands_Coffee-C8922A?style=for-the-badge&logoColor=white)](https://trackecom.asia/9AHYxyQ3)

👉 https://trackecom.asia/GqBsVT8z

Cảm ơn bác đã ủng hộ, coi như mời mình một ly cà phê nhé! ❤️

Mỗi lượt ủng hộ là thêm động lực để mình build nhiều app và tool miễn phí cho cộng đồng. 🚀
