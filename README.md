# Zindigo – Social Media App

Zindigo is a full-stack social media web application where users can create accounts, log in, share posts, like content, and view a personalized feed.
The project is built using the **MERN stack (MongoDB, Express.js, React, Node.js)** and follows a modular architecture with separate backend and frontend folders.

---

# 🚀 Features

### Authentication

* User registration
* Secure login system
* Cookie-based authentication
* Logout functionality
* Protected routes

### Posts

* Create new posts
* Upload image posts
* View feed with posts from users
* Like / Unlike posts

### Feed

* Dynamic feed loading
* Modern card layout
* Smooth hover and icon interactions

### UI / UX

* Neon purple-blue gradient theme
* Glass-style components
* Responsive layout
* Dark theme interface

---

# 🛠 Tech Stack

## Frontend

* React
* React Router
* Axios
* SCSS
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* CORS

---

# 📁 Project Structure

```
Zindigo
│
├── Backend
│   ├── src
│   │   ├── config
│   │   │   └── database.js
│   │   │
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── post.controller.js
│   │   │   └── user.controller.js
│   │   │
│   │   ├── middlewares
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models
│   │   │   ├── user.model.js
│   │   │   ├── post.model.js
│   │   │   ├── like.model.js
│   │   │   └── follow.model.js
│   │   │
│   │   ├── routes
│   │   │   ├── auth.routes.js
│   │   │   ├── post.routes.js
│   │   │   └── user.routes.js
│   │   │
│   │   └── app.js
│   │
│   └── server.js
│
└── Frontend
    ├── src
    │   ├── features
    │   │   ├── auth
    │   │   │   ├── hooks
    │   │   │   │   └── useAuth.js
    │   │   │   ├── pages
    │   │   │   │   ├── Login.jsx
    │   │   │   │   └── Register.jsx
    │   │   │   └── services
    │   │   │       └── auth.api.js
    │   │   │
    │   │   └── posts
    │   │       ├── components
    │   │       │   └── Post.jsx
    │   │       ├── hook
    │   │       │   └── usePost.js
    │   │       ├── pages
    │   │       │   ├── Feed.jsx
    │   │       │   └── CreatePost.jsx
    │   │       └── services
    │   │           └── post.api.js
    │   │
    │   └── shared
    │       └── components
    │           └── Nav.jsx
    │
    └── main.jsx
```

---

# ⚙️ Installation

## 1. Clone Repository

```
git clone https://github.com/yourusername/zindigo.git
cd zindigo
```

---

## 2. Install Backend Dependencies

```
cd Backend
npm install
```

---

## 3. Install Frontend Dependencies

```
cd ../Frontend
npm install
```

---

# 🔑 Environment Variables

Create `.env` file inside **Backend folder**

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# ▶ Running the Application

### Start Backend

```
cd Backend
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

### Start Frontend

```
cd Frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📡 API Endpoints

## Auth Routes

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | /api/auth/register | Register user    |
| POST   | /api/auth/login    | Login user       |
| POST   | /api/auth/logout   | Logout user      |
| GET    | /api/auth/get-me   | Get current user |

---

## Post Routes

| Method | Endpoint          | Description |
| ------ | ----------------- | ----------- |
| POST   | /api/posts/create | Create post |
| GET    | /api/posts/feed   | Get feed    |
| POST   | /api/posts/like   | Like post   |
| DELETE | /api/posts/unlike | Unlike post |

---

# 🔒 Authentication Flow

1. User registers or logs in.
2. Backend generates JWT token.
3. Token stored in HTTP-only cookie.
4. Protected routes verify token using middleware.

---

# 🎨 UI Theme

Zindigo uses a **neon dark theme**:

* Purple → Blue gradient
* Dark UI cards
* Soft glow effects
* Modern social media layout

---

# 📸 Screenshots
<img width="1766" height="888" alt="image" src="https://github.com/user-attachments/assets/f26316da-7368-4ea4-9480-c0e5684018f3" />
<img width="1896" height="902" alt="image" src="https://github.com/user-attachments/assets/07d76d9c-8b17-4bd0-aaca-416a877c79bb" />
---

# 📌 Future Improvements

* Comment system
* Follow / unfollow users
* Notifications
* Infinite scroll feed
* Image uploads
* Real-time updates with Socket.io

---

# 👨‍💻 Author

Abhishek Jha

---

# 📜 License

This project is licensed under the MIT License.
