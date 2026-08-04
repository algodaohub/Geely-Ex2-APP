# Android Installation Guide

There are **2 APK files**, used for 2 different purposes:

| File | Purpose |
|---|---|
| `Geely-Ex2-Phone.apk` | Install on your **Android phone** |
| `Geely-Ex2-Car.apk` | Install on the **Geely EX2 head unit** |

---

## Part 1: Install the app on your Android phone

1. Transfer the `Geely-Ex2-Phone.apk` file to your phone (via USB cable, messaging app, email...).
2. Open the APK file on your phone.
3. If prompted, enable **Allow unknown sources** or confirm under **Settings > Security**.
4. Tap **Install** and wait for it to finish, then tap **Open**.

> Tip: If using Chrome, download the file and open it from **Downloads**; if using Zalo/Telegram, open it directly from the chat app.

---

## Part 2: Install the app on the Geely EX2 head unit

The head unit runs Android but is locked down, so you **must unlock it first (enable ADB over Wi-Fi)** before you can install the `Geely-Ex2-Car.apk` file.

### Step 0: Check head unit compatibility

This unlock guide **only works** on head units with:

- **IHU629G** made by **Beidou Intelligent Connected Vehicle Technology Co., Ltd.**
- Model **EEBADF1**
- Software **Flyme Auto E 1.8.0**, build **1111 or 1114**

To check: go to **Vehicle Settings** > select **My Car** at the end of the list.

> If your unit doesn't match the versions above, don't proceed. Everything you do here is **at your own risk**; the head unit is already rooted from the factory, and this process only opens up ADB access — it adds or removes no system privileges.

### Step 1: Prepare a FAT32 USB drive

- Use a USB drive **formatted as FAT32** (up to 32GB can be formatted directly in Windows; for larger drives use **fat32format GUI**: https://ridgecrop.co.uk/index.htm?guiformat.htm)
- Download the patch matching your build:
  - **Build 1111:** https://drive.google.com/file/d/1rvTfF4WoTgXcZ98_y73fKRayZVBgxaOZ/view
  - **Build 1114:** https://drive.google.com/file/d/1RF5ut5r_zVGCxfe2O3LKc3SrecRVp3td/view
- The downloaded file is a **ZIP**; inside it there is a folder:
  - `3C6025_SW0E22H0128H111100000_user_995` (build 1111)
  - `3C6025_SW0E22H0306H111400000_user_995` (build 1114)
- **Extract** that folder and copy the **whole folder** to the USB drive. The USB structure must be exactly:

```
USB ROOT
└── 3C6025_SW0E22H0128H111100000_user_995   (name depends on build)
    └── OS
        └── update.zip    ← DO NOT extract this file
```

### Step 2: Plug in the USB and open the hidden menu

1. Plug the USB drive into the car and wait a few seconds until the screen shows **"USB device connected detected"**.
2. **Turn off Bluetooth** to disconnect your phone.
3. Open the **Phone** app on the head unit.
4. Dial the hidden menu code using the formula:

| Menu | Code formula |
|---|---|
| **Engineering Mode** | `#*(month + 10)(day)(hour)` |
| **Dialer Mode** | `#*(month + 5)(day)(hour)` |

- Month = current month **+ 10** (or **+ 5** for Dialer Mode)
- Day = current day (2 digits)
- Hour = current hour in **12-hour format, 2 digits** (7 PM → `07`)

**Example** on 20/07/2026 at 19:25 (7:25 PM):

- Engineering Mode: `#*172007`
- Dialer Mode: `#*122007`

### Step 3: Apply the patch

1. In the hidden menu, tap the **icon marked in green** to start the installation.
2. Wait for the "checking for update" message → the screen **reboots itself** into **Recovery mode** and **installs the patch automatically** (no action needed).
3. An **error message** will appear at the end — this is **intentional and part of the process**, don't worry.
4. **Press and hold the Previous Track button** on the steering wheel until the head unit **reboots again**.

> Done! ADB is now enabled.

### Step 4: Connect the head unit to Wi-Fi

1. Go back to the hidden menu and select the **item marked in blue** → opens the head unit's Wi-Fi settings.
2. Connect the head unit to **your home Wi-Fi** or a **phone hotspot**.
3. Note down the **IP address** shown on the left column of the screen (you'll need it in the next step).
4. Press the home button to exit, open the **Phone** app, and enter the **Dialer Mode** code (`#*(month+5)(day)(hour)`).
5. Tap the button labeled **ADB** once to enable ADB mode.

### Step 5: Install `Geely-Ex2-Car.apk` with ADB AppControl

1. Download **ADB AppControl**: https://adbappcontrol.com/en/#download
2. Open the program, enter the **IP address** of the head unit in the top-right box, and click the **WiFi** button to connect.
3. On the first connection, **accept the ACBridge installation** when prompted.
4. Select **Install → Quick Install** from the left menu.
5. Choose the `Geely-Ex2-Car.apk` file and wait for the installation to finish.

---

## General Notes

- **Everything you do is at your own risk.** Mistakes can destabilize the system, break some functions, or in severe cases require reinstalling the head unit's entire software.
- Only unlock head units **matching the exact versions** listed in Step 0.
- To install new apps later: turn on Wi-Fi via the shortcut icon on the status bar → note the IP → connect with ADB AppControl.

### Remove the unlock (to restore factory state)

**Vehicle Settings > My Car > Factory Reset.**

After the reset: all installed apps are removed and **ADB is disabled**.

---

### ☕️ Donate

If you drink Highlands Coffee, grab a voucher before you order.
It takes a few seconds and saves you a fair bit. 😄

[![Highlands Coffee Voucher](https://img.shields.io/badge/☕_Lấy_Voucher_Highlands_Coffee-C8922A?style=for-the-badge&logoColor=white)](https://trackecom.asia/9AHYxyQ3)

👉 https://trackecom.asia/GqBsVT8z

Thanks for the support — consider it a coffee on you! ❤️

Every donation is more motivation to keep building free apps and tools for the community. 🚀
