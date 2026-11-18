# 🚆 RailFlow Express - Railway Ticket Booking & Telemetry System

A modern, fast, and feature-complete web application for online train reservations, PNR status enquiry, and live GPS train running status tracking.

Built for **instant project presentations, college reviews, hackathons, and software engineering portfolios**.

---

## ⚡ Quick Start (No Installation Needed!)

You can run this application immediately in any web browser without installing Node.js, Python, or npm:

1. Navigate to:
   ```
   C:\Users\User\.gemini\antigravity\scratch\railway-booking-app
   ```
2. Double-click **`login.html`** (or **`index.html`**) to open it in **Google Chrome**, **Microsoft Edge**, or **Mozilla Firefox**.
3. Click the **"⚡ 1-Click Demo Login"** button on the login screen to sign in instantly and enter the booking app!

---

## 🧪 Automated Test Suite

You can execute the automated test cases in two ways:

1. **Interactive In-Browser Test Suite:**
   * Open [tests.html](file:///C:/Users/User/.gemini/antigravity/scratch/railway-booking-app/tests.html) in your browser.
   * Click **"Run All Test Cases"** to watch live assertions execute with pass/fail badges, duration stats, and console logs.

2. **PowerShell Terminal Execution:**
   * Run this command in your PowerShell terminal:
   ```powershell
   powershell.exe -ExecutionPolicy Bypass -File "C:\Users\User\.gemini\antigravity\scratch\railway-booking-app\run-tests.ps1"
   ```
   * All 7 test cases will execute with 100% pass verification output!

---

## 🌟 Key Features for Presentation

| Feature | Description |
|---|---|
| 🔍 **Detailed Train Results** | Clicking **"Find Trains"** shows full intermediate stops, halt times, platform numbers, speed, distance, passenger amenities (Wi-Fi, Charging, Bio-Toilets), and pantry catering. |
| 💺 **Multi-Class Availability** | Instant booking cards for multiple coach tiers (1A, 2A, 3A, CC, EC) with confirmed seat counts. |
| 🧪 **Live Test Runner** | Automated test suite validating search matching, timetable integrity, fare calculation, 10-digit PNR format, and captcha security. |
| 🔑 **Authentication Portal** | Sign in and registration page with captcha verification and 1-click demo login. |
| 🎫 **Verifiable E-Ticket** | Official railway boarding pass with dynamic QR code, barcode, and print/save as PDF. |
| 🔎 **PNR Status Lookup** | Instant PNR status verification. Supports sample PNRs (`8421093412` for Confirmed, `6239104521` for RAC) or any newly booked ticket. |
| 📡 **Live Running Telemetry** | Station-by-station running status tracker with delay indicator, platform number, distance from origin, and pulsing GPS position marker. |
| 📊 **Presentation Slides Modal** | Built-in project presentation slides, system architecture diagram, and interview/viva Q&A accessible with 1 click from the header. |
| 💾 **Persistent Storage** | Saves all confirmed tickets to `localStorage`, so your bookings persist even across page refreshes. |

---

## 📁 File Structure

```
railway-booking-app/
├── index.html          # Main application page with all tabs and interactive modals
├── styles.css          # Custom styling, animations, coach layout, and print CSS
├── app.js              # Application logic, mock database, booking & telemetry engine
├── presentation.md     # Detailed slide-by-slide presentation guide & viva Q&A
└── README.md           # Project documentation and quick start guide
```

---

## 🎯 Tips for Presenting the Project

1. **One-Click Demo:** Click the **"Quick Demo Fill"** button at the very top banner. It will automatically load the Delhi-Mumbai route and open the passenger booking modal.
2. **Show the E-Ticket:** Complete the booking to show the confetti animation and the official printable E-Ticket with dynamic QR code and barcode.
3. **Show PNR Status:** Click on the **"PNR Status"** tab and click on sample PNR `8421093412` to showcase real-time verification.
4. **Show Live Train Telemetry:** Switch to the **"Live Running Status"** tab and select different express trains (Vande Bharat, Mumbai Rajdhani, Tejas) to demonstrate GPS tracking.
5. **Open Presentation Slides:** Click the **"Project Presentation Slides"** button in the header to show your evaluators the technical architecture and database schema!
