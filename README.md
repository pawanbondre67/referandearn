# Refer & Earn Landing Page (MERN Stack)

## 📌 Project Overview

The **Refer & Earn** project is a full-stack web application that allows users to refer a course to others and earn rewards. The application consists of a **React.js (Vite)** frontend, an **Express.js** backend, and **MySQL** as the database, managed with **Prisma ORM**. Users can sign up, log in, and refer courses via a form. Upon successful referral submission, an email notification is sent using **EmailJS**.

---

## 🚀 Features

### 🌐 Frontend (React.js + Vite + MUI)

- **Responsive UI** with Material-UI components
- **Light/Dark mode** toggle
- **Refer & Earn Landing Page** with:
  - Hero section
  - "Refer Now" button to open a modal
  - Referral form with validation
- **Authentication** (Signup & Login pages with validation)
- **State management** using React Context API

### 🛠 Backend (Node.js + Express.js + Prisma + MySQL)

- REST API endpoints to handle:
  - **User Authentication** (Signup/Login)
  - **Referral Form Submission**
  - **Database storage with Prisma ORM**
  - **Error handling & validation**
- **Email notifications** via EmailJS upon successful referral

---

## 📂 Tech Stack

### Frontend:

- **React.js (Vite)**
- **Material-UI (MUI)**
- **Tailwind CSS (for additional styling)**
- EmailJS (for sending referral emails)
- **React Router** (for navigation)
- **React Context API** (for state management)

### Backend:

- **Node.js + Express.js**
- **Prisma ORM** (for MySQL database connectivity)
- **Nodemon** (for live server reloading)

### Database:

- **MySQL** (structured data storage)

---

## 🛠 Installation & Setup

### 1️⃣ Prerequisites

Ensure you have the following installed:

- **Node.js (v16+)**
- **MySQL**
- **Git**
- **Vite** (for frontend setup)

### 2️⃣ Clone the Repository

```sh
 git clone https://github.com/your-repo/refer-earn.git
 cd refer-earn
```

### 3️⃣ Backend Setup

```sh
 cd backend
 npm install
```

#### Configure Environment Variables:

Create a `.env` file in the `backend` directory and add:

```env
DATABASE_URL="mysql://username:password@localhost:3306/refer_earn"
EMAILJS_SERVICE_ID="your_emailjs_service_id"
EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
EMAILJS_USER_ID="your_emailjs_user_id"
JWT_SECRET="your_jwt_secret"
PORT=3000
```

Run the server:

```sh
npm start
```

### 4️⃣ Frontend Setup

```sh
 cd frontend
 npm install
```

Run the frontend:

```sh
npm run dev
```

---

## 📌 API Endpoints

### 🔑 Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### 📩 Referral System

- `POST /api/referrals/create-referral` - Submit a referral
- `GET /api/referrals/get-referrals` - Get Referrals sent by User

---

## 🔥 Contributing

Feel free to fork the repo and submit pull requests for improvements!

---

## 📜 License

This project is **MIT Licensed**.

---

### 👨‍💻 Developed by:

**Pawan Bondre** | [GitHub](https://github.com/pawanbondre67) | [LinkedIn](https://linkedin.com/in/pawan-bondre-62621243)

