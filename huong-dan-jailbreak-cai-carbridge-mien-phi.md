---
title: "Hướng dẫn Jailbreak iPhone và cài CarBridge cho Apple CarPlay"
description: "Cách kiểm tra iPhone có hỗ trợ Jailbreak Dopamine, cài CarBridge chính chủ và đưa ứng dụng lên Apple CarPlay an toàn hơn."
keywords:
  - "Jailbreak iPhone"
  - "cài CarBridge"
  - "CarBridge CarPlay"
  - "Dopamine Jailbreak"
  - "xem YouTube trên CarPlay"
permalink: /huong-dan-jailbreak-cai-carbridge-mien-phi/
---

# Hướng dẫn Jailbreak iPhone và cài CarBridge cho Apple CarPlay

**CarBridge** là tweak dành cho iPhone đã Jailbreak, cho phép hiển thị thêm ứng dụng trên Apple CarPlay. Trước khi làm, bạn cần kiểm tra chính xác đời máy và phiên bản iOS; không phải iPhone nào cũng được hỗ trợ.

> **Quan trọng:** CarBridge chính chủ không miễn phí và chỉ được phát hành trên Havoc Marketplace. Không tải bản crack hoặc thêm nguồn lạ vì có nguy cơ chứa mã độc, đánh cắp tài khoản và gây lỗi thiết bị.

👉 **[Kiểm tra CarBridge chính chủ và phiên bản iOS được hỗ trợ](https://havoc.app/package/carbridge)**

## 1. Kiểm tra iPhone và phiên bản iOS

Vào **Cài đặt → Cài đặt chung → Giới thiệu**, ghi lại **Tên kiểu máy** và **Phiên bản iOS**. Sau đó dùng công cụ chọn hướng dẫn tại iOS Guide thay vì áp dụng một phương pháp chung cho mọi máy.

Dopamine 3.x hỗ trợ nhiều tổ hợp thiết bị/iOS, nhưng phạm vi phụ thuộc chip:

| Nhóm thiết bị | Phiên bản iOS được dự án công bố hỗ trợ |
|---|---|
| **A14–A17, M1–M2** | iOS 15.0–17.3.1 |
| **A8–A13** | iOS 15.0–18.7.1 |
| **A12–A13** | Có thêm hỗ trợ iOS 26.0–26.0.1 |

Phạm vi trên được cập nhật theo Dopamine 3.x tại thời điểm viết. Một số bản beta hoặc thiết bị cụ thể có thể có giới hạn riêng, vì vậy luôn kiểm tra lại trang chính thức trước khi cài.

👉 **[Kiểm tra Dopamine và thiết bị tương thích trên GitHub](https://github.com/opa334/Dopamine)**

Nếu thiết bị không nằm trong danh sách hỗ trợ, **không nên tiếp tục** và không tin các trang quảng cáo “Jailbreak mọi iPhone chỉ với một lần nhấn”.

## 2. Chuẩn bị trước khi Jailbreak

1. Sao lưu iPhone bằng iCloud hoặc máy tính.
2. Đảm bảo nhớ mật khẩu Apple ID và mật mã thiết bị.
3. Sạc pin đủ dùng trong suốt quá trình.
4. Đọc trọn hướng dẫn tương ứng với thiết bị trước khi thao tác.
5. Không cập nhật iOS nếu chưa kiểm tra khả năng tương thích.

> Jailbreak làm thay đổi cơ chế bảo mật của iOS. Một số ứng dụng ngân hàng, ví điện tử hoặc nội dung có DRM có thể phát hiện và từ chối hoạt động.

## 3. Cài TrollStore

TrollStore cho phép cài lâu dài các file IPA tương thích mà không phải ký lại mỗi 7 ngày. Đây cũng là cách thuận tiện để giữ ứng dụng Dopamine trên những phiên bản iOS được hỗ trợ.

Theo repository chính thức, TrollStore hỗ trợ **iOS 14.0 beta 2 đến 16.6.1, iOS 16.7 RC (20H18) và iOS 17.0**. Các bản 16.7.x khác và 17.0.1 trở lên không được hỗ trợ bởi lỗi CoreTrust hiện tại.

Cách cài thay đổi theo chip và phiên bản iOS, vì vậy không nên tải một installer ngẫu nhiên:

1. Mở trang TrollStore chính thức và xác nhận phiên bản iOS nằm trong phạm vi hỗ trợ.
2. Chọn hướng dẫn cài đặt tương ứng từ iOS Guide.
3. Sau khi TrollStore xuất hiện, mở **Settings → Install Persistence Helper**.
4. Chọn ứng dụng hệ thống được hướng dẫn, thường là **Tips (Mẹo)**.
5. Bật **URL Scheme Enabled** nếu cần mở liên kết cài IPA trực tiếp.

👉 **[Kiểm tra và tải TrollStore chính thức](https://github.com/opa334/TrollStore)**

> Chỉ tải TrollStore từ repository `opa334/TrollStore` hoặc liên kết được iOS Guide chỉ dẫn. Không nhập Apple ID vào website tự nhận là “TrollStore online”.

## 4. Cài và kích hoạt Dopamine

Trang tải chính thức của Dopamine là `ellekit.space/dopamine`. Không tải IPA từ website gắn nhãn “Dopamine online”, video rút gọn link hoặc repository không thuộc `opa334`.

👉 **[Mở trang tải Dopamine chính thức](https://ellekit.space/dopamine/)**

### Cách 1: Cài Dopamine bằng TrollStore

Áp dụng khi phiên bản iOS của bạn hỗ trợ TrollStore:

1. Mở [trang Dopamine chính thức](https://ellekit.space/dopamine/) bằng Safari.
2. Nhấn **Open in TrollStore**; hoặc tải file IPA từ bản phát hành chính thức rồi mở bằng TrollStore.
3. Trong TrollStore, chọn **Install**.
4. Quay về màn hình chính và mở Dopamine.

Đây là lựa chọn thuận tiện vì ứng dụng Dopamine không cần ký lại sau mỗi 7 ngày.

### Cách 2: Cài khi không dùng được TrollStore

Nếu thiết bị được Dopamine hỗ trợ nhưng phiên bản iOS không hỗ trợ TrollStore:

1. Mở trang tải chính thức và chọn **Guide (No TrollStore)**.
2. Tải đúng file IPA Dopamine từ repository `opa334/Dopamine`.
3. Làm theo công cụ ký/cài được hướng dẫn cho thiết bị của bạn.
4. Với một số phương pháp ký thông thường, ứng dụng có thể cần được ký lại định kỳ.

### Kích hoạt Jailbreak lần đầu

Sau khi Dopamine được cài:

1. Mở **Dopamine**.
2. Nhấn **Jailbreak**.
3. Chọn trình quản lý gói **Sileo** hoặc **Zebra** khi được hỏi; bài này sử dụng Sileo.
4. Thiết lập mật khẩu `root`/`mobile` đủ mạnh nếu Dopamine yêu cầu. Không dùng mật khẩu đơn giản như `1234`.
5. Chờ Dopamine hoàn tất và thiết bị respring.
6. Kiểm tra **Sileo** đã xuất hiện trên màn hình chính.

Dopamine là Jailbreak **rootless, semi-untethered**. Tweak phải hỗ trợ rootless. Sau khi iPhone khởi động lại, mở Dopamine và nhấn Jailbreak lại; không cần cài lại TrollStore, Sileo hoặc CarBridge.

👉 **[Tải bản Dopamine mới nhất từ GitHub chính thức](https://github.com/opa334/Dopamine/releases/latest)**

## 5. Cài AppStore++ bằng TrollStore

**AppStore++** là công cụ độc lập giúp xem và tải các phiên bản ứng dụng cũ còn có trên máy chủ App Store. Công cụ này hữu ích khi một bản cập nhật mới không còn phù hợp với iOS cũ hoặc hoạt động không ổn định trên thiết bị Jailbreak.

1. Mở trang Releases chính thức của `CokePokes/AppStorePlus-TrollStore`.
2. Tải file IPA trong bản phát hành mới nhất.
3. Chọn mở file bằng **TrollStore** rồi nhấn **Install**.
4. Mở AppStore++ và đăng nhập App Store khi hệ thống yêu cầu.
5. Tìm ứng dụng, chọn phiên bản có sẵn và tải về.

👉 **[Tải AppStore++ cho TrollStore từ GitHub chính thức](https://github.com/CokePokes/AppStorePlus-TrollStore/releases)**

> AppStore++ không bảo đảm mọi phiên bản cũ đều còn tải được. Hạ phiên bản có thể làm mất dữ liệu ứng dụng hoặc gây lỗi tương thích; hãy sao lưu dữ liệu quan trọng trước khi sử dụng.

## 6. Cài CarBridge chính chủ qua Havoc

CarBridge chính thức hỗ trợ kiến trúc rootless và yêu cầu thiết bị đã Jailbreak. Khả năng tương thích iOS có thể thay đổi theo phiên bản sản phẩm, vì vậy hãy kiểm tra trực tiếp trên Havoc trước khi mua.

1. Mở **Sileo**.
2. Vào **Sources → dấu +** và thêm nguồn `https://havoc.app` nếu chưa có.
3. Đăng nhập tài khoản Havoc trong Sileo.
4. Tìm **CarBridge**, kiểm tra nhà phát hành và phiên bản tương thích.
5. Mua, tải và cài đặt từ Havoc.
6. Chọn **Restart SpringBoard** sau khi cài xong.

👉 **[Mua và tải CarBridge chính thức trên Havoc](https://havoc.app/package/carbridge)**

Theo trang chính thức của CarBridge, Havoc là kênh tải hợp lệ duy nhất; các website cung cấp bản tải “miễn phí”, bản IPA hoặc bản không cần Jailbreak có thể là giả mạo.

## 7. Đưa ứng dụng lên Apple CarPlay

1. Mở **Cài đặt → CarBridge** trên iPhone.
2. Bật CarBridge.
3. Vào **Bridged Applications**.
4. Chọn ứng dụng muốn hiển thị trên CarPlay.
5. Kết nối iPhone với xe bằng cáp hoặc CarPlay không dây.

Không phải ứng dụng nào cũng được tối ưu để thao tác trên màn hình xe. Nếu ứng dụng hiển thị sai hoặc không phản hồi, hãy tắt ứng dụng đó trong CarBridge.

## 8. Lỗi thường gặp

### CarBridge ngừng hoạt động sau khi khởi động lại

Mở Dopamine, kích hoạt Jailbreak lại và chờ thiết bị respring. Bạn không cần mua hoặc cài lại CarBridge.

### Không thấy CarBridge trong Cài đặt

Kiểm tra Sileo đã cài đúng bản rootless, sau đó respring. Nếu vẫn lỗi, xem lại phiên bản iOS có nằm trong phạm vi CarBridge hỗ trợ hay không.

### TrollStore hoặc ứng dụng đã cài không mở được

Mở ứng dụng **Tips (Mẹo)** đã gắn Persistence Helper, chọn **Refresh App Registrations**, sau đó thử mở TrollStore lại.

### AppStore++ không hiện phiên bản cần tìm

Phiên bản đó có thể không còn được Apple cung cấp, chưa từng được tải bằng tài khoản của bạn hoặc không tương thích với thiết bị. Không tải IPA đã chỉnh sửa từ nguồn không rõ ràng để thay thế.

### Ứng dụng ngân hàng báo thiết bị không an toàn

Đây có thể là cơ chế phát hiện Jailbreak của ứng dụng. Không nên cố vượt kiểm tra bảo mật; hãy dùng thiết bị khác hoặc khôi phục iPhone về trạng thái nguyên bản nếu ứng dụng tài chính là ưu tiên.

## 9. An toàn khi sử dụng CarBridge

- Chỉ phát video khi xe đã dừng, đỗ an toàn hoặc dành cho hành khách.
- Không thao tác YouTube, TikTok hay ứng dụng video khi đang lái xe.
- Không nhập Apple ID, mật khẩu ngân hàng hoặc dữ liệu quan trọng vào nguồn/tweak không rõ xuất xứ.
- Chỉ dùng Dopamine từ nguồn được hướng dẫn và CarBridge từ Havoc.

👉 **[Kiểm tra CarBridge chính thức trước khi cài](https://carbridge.app/download)**

## Bài viết liên quan

- [Hướng dẫn cài ứng dụng Geely EX2 trên iPhone](INSTALL-IOS.md)
- [Phụ kiện Geely EX2 đáng mua](PHU-KIEN-SAN-PHAM-NEN-MUA-CHO-GEELY-EX2.md)
- [Quay lại trang tổng quan Geely EX2](README.md)
