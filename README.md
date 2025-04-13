# 🌱 CareLife Foundation – Non-Monetary Donation Platform

> Empowering communities through seamless non-monetary giving — built with HTML, CSS, and JavaScript.

---

## 📌 Project Overview

**CareLife Foundation** is a front-end web platform designed to facilitate non-monetary donations between **donors**, **organizations (NGOs)**, and an **admin panel** to oversee the process. The platform supports item-based donations such as **clothes, toys, school supplies, medical equipment, and food**. Developed for the **Software Engineering Spring 2024 course at the German University in Cairo**, this project delivers Milestone 2 (Front-End Development) based on requirements specified in Milestone 1.

---

## 🧩 Key Features

### 🔐 Authentication
- Donor, Organization, and Admin login
- Dual-mode registration for:
  - 🧑 Donors (individuals, teachers, doctors)
  - 🏢 Charities/NGOs (schools, hospitals, mosques, etc.)

### 🧑‍🤝‍🧑 Donor Capabilities
- View requests from verified organizations
- Filter and select donation cases (clothes, toys, food, books, etc.)
- Specify donation quantity
- Schedule pickup and view ETA
- View teaching and medical volunteer opportunities

### 🏥 Organization Capabilities
- Register with verification documents
- Post donation needs by category
- View donor details and fulfilled donations
- Receive notifications on accepted donations
- Delete fulfilled requests and update info

### 🛠️ Admin Capabilities
- View & manage donors and organizations
- Accept/reject registration and post submissions
- Delete user accounts
- Filter/search registered users and requests

---

## 🧭 User Journeys

The platform was built based on 70+ well-defined user stories covering:

- 📥 Registration & Login
- 📦 Item Selection & Scheduling
- 👨‍⚕️ Pro-bono medical/teaching posts
- 🔍 Filtering (by area, governorate, category, etc.)
- 📌 Google Maps location pins
- 📧 Notification system
- 🗂️ Admin request approvals and account control

📄 For full user journeys, see: `GUC_436_62_43867_2024-04-22T13_04_18.pdf`

---

## 🧪 Tech Stack

| Technology | Purpose               |
|------------|------------------------|
| HTML5      | Page structure         |
| CSS3       | Styling and animation  |
| JavaScript | DOM interaction & logic|
| FontAwesome| UI icons               |
| SFML (prep)| Audio integration (planned) |

---

## 🗂️ Project Structure

```
📁 project-root/
├── index.html               # Sign-in & Sign-up portal
├── style.css                # All visual styles
├── app.js                   # Form toggle and logic
├── Website/
│   ├── Donor/homePage/
│   │   └── homePage.html
│   ├── Organization/homePage/
│   │   └── homePage.html
│   └── Admin/adminDashboard/
│       └── adminDashboard.html
├── img/
│   ├── log.svg              # Left panel illustration
│   └── register.svg         # Right panel illustration
```

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/carelife-foundation.git
   cd carelife-foundation
   ```

2. Launch the platform:
   - Open `index.html` directly in your browser
   - No backend or server is needed for demo

---

## ✍️ Team Info

**Project Name:** CareLife Foundation  
**Course:** Software Engineering – Spring 2024  
**University:** German University in Cairo  
**Supervisors:**  
- Assoc. Prof. Mervat Abuelkheir  
- Eng. Nada Ibrahim  
- Eng. Hager Khaled  
- Eng. Marina Nader  
- Eng. Kamilia Hosny

---

## 🧾 Deliverables

- ✅ **Milestone 1**: Requirements engineering + user stories  
- ✅ **Milestone 2**: Frontend prototype with responsive UI and navigation  
- 🔒 **No backend/database** (mocked login logic for demonstration)

---

## ⚠️ Notes & Constraints

- Form submissions do not persist data (no server/database integration).
- Admin login uses mock validation (`admin/password`)
- Placeholder logic can be replaced with APIs in future iterations.

---

## 📜 License

This project is intended for academic and demonstration purposes only as part of GUC's curriculum. Do not reuse or redistribute without permission.
