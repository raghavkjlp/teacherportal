# TutorConnect

A full-stack MERN tutoring platform for India, connecting students/parents with verified teachers.

## Tech Stack

- **Frontend**: React (Vite), Vanilla CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Auth**: JWT

## Project Structure

```
teacherplat/
├── frontend/       # React Vite app
└── backend/        # Node.js Express API
```

## Getting Started

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env     # Fill in your real values
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and fill in:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `EMAIL_USER` | Gmail address for notifications |
| `EMAIL_PASS` | Gmail App Password |

## Admin Portal

Login at `/login` with:
- **Username**: `admin`
- **Password**: `Admin123`

## Features

- Teacher registration with AI + Admin verification
- Parent/student registration and tutor browsing
- Admin dashboard to verify teacher/parent profiles
- How it Works and Safety & Verification pages
- Free trial demo class booking
