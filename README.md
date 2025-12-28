# 💬 ChitChat – Real-Time Chat Application

ChitChat is a full-stack real-time chat application built using the MERN stack and Socket.IO, featuring secure authentication, live messaging, online user status, and a modern responsive UI. The application is fully deployed with a production-ready setup.

## 🚀 Live Demo

- **Frontend (Vercel)**: [https://chatapp-pi-tawny.vercel.app](https://chatapp-pi-tawny.vercel.app)
- **Backend (Render)**: [https://chatapp-backedn.onrender.com](https://chatapp-backedn.onrender.com)

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Zustand (State Management)
- Axios
- Tailwind CSS + DaisyUI
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Socket.IO Server

### Deployment
- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

## ✨ Features

- 🔐 Secure user authentication (Signup / Login / Logout)
- 🍪 JWT authentication with HTTP-only cookies
- 💬 Real-time one-to-one messaging using Socket.IO
- 🟢 Online / Offline user status
- 🔄 Persistent login across page refresh
- 🖼️ Profile update support
- 📱 Fully responsive UI
- 🌐 Production-ready CORS & cookie configuration

## 📁 Project Structure

```
chitchat/
│
├── Backend/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── message.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── message.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── message.routes.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── lib/
│   │   ├── db.js
│   │   └── socket.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   │   └── useAuthStore.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🧠 Application Architecture

```
Frontend (Vercel)
   │
   │  REST APIs + Socket.IO
   ▼
Backend (Render - Express)
   │
   ▼
MongoDB Atlas
```

- REST APIs handle authentication and message history
- Socket.IO handles real-time messaging and online status
- Cookies are used for secure session management

## 🔧 API Endpoints

### Authentication Routes

```
POST   /api/auth/signup      - Register new user
POST   /api/auth/login       - Login user
POST   /api/auth/logout      - Logout user
GET    /api/auth/check       - Check authentication status
PUT    /api/auth/update-profile - Update user profile
```

### Message Routes

```
GET    /api/messages/users           - Get all users for sidebar
GET    /api/messages/:id             - Get messages with specific user
POST   /api/messages/send/:id        - Send message to user
```

### Socket.IO Events

```
connection              - User connects
disconnect              - User disconnects
getOnlineUsers          - Get list of online users
newMessage              - Real-time message delivery
```

## 🔐 Authentication Flow

1. User signs up or logs in
2. Backend generates JWT and stores it in an HTTP-only cookie
3. Cookie is sent automatically with every request
4. Protected routes are secured using middleware
5. User remains logged in even after refresh

## ⚙️ Environment Variables

### Backend (`.env`)

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production
PORT=5000
```

### Frontend (`.env`)

```env
VITE_API_URL=https://chatapp-backedn.onrender.com
```

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Clone Repository

```bash
git clone https://github.com/your-username/chitchat.git
cd chitchat
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
PORT=5000
```

Start the backend server:

```bash
npm start
# or for development with nodemon
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
```

Create a `.env` file in the Frontend directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend development server:

```bash
npm run dev
```

The application will be running at `http://localhost:5173`

## 🚀 Deployment

### Backend (Render)

1. Push your code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard
5. Deploy

### Frontend (Vercel)

1. Push your code to GitHub
2. Import project on Vercel
3. Set environment variables (VITE_API_URL)
4. Deploy

### MongoDB Atlas

1. Create cluster on MongoDB Atlas
2. Whitelist IP addresses (0.0.0.0/0 for public access)
3. Get connection string
4. Add to backend environment variables

## 📌 Key Challenges Solved

- Cross-domain authentication using cookies
- Socket.IO CORS configuration for production
- Case-sensitive imports for Linux deployment
- Persistent authentication across refresh
- Real-time online status handling

## 📈 Future Enhancements

- ✅ Typing indicators
- ✅ Read receipts
- ✅ Group chats
- ✅ File & image sharing
- ✅ Message deletion
- ✅ Last seen timestamps

## 👨‍💻 Author

**Made with ❤️ by Sachin Yadav**  

Give a ⭐️ if you like this project!

---
