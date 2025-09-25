# Notes App

A full-stack notes application built with React, Node.js, Express, and MongoDB. Create, read, update, and delete your notes with a clean and intuitive interface.

## 🚀 Features

- **Create Notes**: Add new notes with title and content
- **View Notes**: Browse all your notes in a clean interface
- **Edit Notes**: Update existing notes
- **Delete Notes**: Remove notes with confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Rate Limiting**: Built-in protection against spam
- **Real-time Feedback**: Toast notifications for user actions
- **Modern UI**: Clean and intuitive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Upstash Redis** - Rate limiting with Redis

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd notes-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/notesapp
# OR for MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notesapp

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:

```bash
npm run dev
```

## 🚦 Usage

1. **Start both servers**: Make sure both backend and frontend are running!
2. **Access the app**: Open your browser and go to `http://localhost:5173`
3. **Create notes**: Click on "Create Note" and fill in the title and content
4. **View notes**: All notes are displayed on the main page
5. **Edit notes**: Click on any note to view and edit it
6. **Delete notes**: Click the delete button and confirm the action

## 📁 Project Structure

📁 notes-app/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── db.js # Database connection
│ │ ├── controllers/
│ │ │ └── noteController.js # Note CRUD operations
│ │ ├── middlewares/
│ │ │ └── rateLimiter.js # Rate limiting middleware
│ │ ├── models/
│ │ │ └── Note.js # Note schema
│ │ ├── routes/
│ │ │ └── noteRoutes.js # API routes
│ │ └── server.js # Express server setup
│ │
│ ├── .env # Environment variables
│ └── package.json
│
└── frontend/
├── src/
│ ├── components/ # Reusable components
│ ├── lib/
│ │ ├── axios.js # Axios configuration
│ │ ├── CreatePage.jsx # Create note page
│ │ ├── DetailsPage.jsx # View/edit note page
│ │ └── HomePage.jsx # Main notes listing
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
│
├── package.json
└── vite.config.js

## 🔗 API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get single note
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Backend (Heroku/Railway/Render)

1. Set environment variables
2. Deploy the backend folder
3. Update the frontend API URL
