# 💰 The Intelligent Investor Platform

A full-stack personal finance platform that helps users calculate a monthly spending plan, save financial profiles, and visualize long-term investment growth.

The project was developed as part of an **Introduction to DevOps** course and demonstrates a complete full-stack system using React, Node.js, Express, PostgreSQL, Prisma ORM, Docker, Docker Compose, and automated backend tests.

---

## 📌 Project Overview

The Intelligent Investor Platform allows users to enter their financial details and receive a clear monthly spending plan based on predefined financial rules.

The system calculates:

| Category | Calculation |
|---|---|
| 🏠 Fixed Costs | 55% of bank net income |
| 🎯 Savings Goals | 10% of bank net income |
| 📈 Active Investments | 10% of bank net income |
| 🛍️ Guilt-Free Spending | 27.5% of bank net income |
| 📊 Wealth Projection | 15-year projection with 7% annual return |

Users can also save financial profiles to the database and load them later.

---

## ✨ Main Features

- ⚛️ React frontend
- 🚀 Node.js and Express backend
- 🐘 PostgreSQL database
- 🔺 Prisma ORM
- 🐳 Full Docker Compose setup
- 📊 15-year investment projection chart
- 💾 Save and load financial profiles
- ✅ Backend unit tests
- ✅ Backend integration tests
- ❤️ Health check endpoint
- 🌐 Full-stack communication between frontend, backend, and database

---

## 🧰 Technologies Used

### 🎨 Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React | Build the user interface |
| ⚡ Vite | Fast frontend development and build tool |
| 🎨 Tailwind CSS | Styling and responsive design |
| 🔌 Axios | Send HTTP requests to the backend |
| 📊 Recharts | Display investment projection chart |

### 🖥️ Backend

| Technology | Purpose |
|---|---|
| 🟩 Node.js | JavaScript runtime for backend |
| 🚀 Express | Build REST API |
| 🔺 Prisma ORM | Connect backend to PostgreSQL |
| 🐘 PostgreSQL | Store financial profiles and spending plans |
| ✅ Jest | Unit testing |
| 🧪 Supertest | API integration testing |
| 🌐 CORS | Allow frontend-backend communication |
| 🔐 Dotenv | Load environment variables |

### 🐳 DevOps

| Tool | Purpose |
|---|---|
| 🐳 Docker | Run services in containers |
| 🧩 Docker Compose | Run frontend, backend, and database together |
| 🌿 Git | Version control |
| ☁️ GitHub | Remote repository |

---

## 📁 Project Structure

```txt
intelligent-investor-platform/
│
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   └── profileController.js
│   │   │
│   │   ├── routes/
│   │   │   ├── healthRoutes.js
│   │   │   └── profileRoutes.js
│   │   │
│   │   ├── services/
│   │   │   └── calculationService.js
│   │   │
│   │   ├── tests/
│   │   │   ├── calculationService.test.js
│   │   │   └── profileRoutes.test.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── profilesApi.js
│   │   │
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

---

## 📂 File Responsibilities

This section explains the main files in the project and their roles in a simple and organized way.

---

### 🖥️ Backend Files

| Icon | File / Folder | Role |
|---|---|---|
| 📦 | `backend/package.json` | Defines backend dependencies, scripts, and project settings. |
| 🔒 | `backend/package-lock.json` | Locks the exact versions of backend packages. |
| 🔐 | `backend/.env` | Stores real backend environment variables such as `PORT` and `DATABASE_URL`. This file should not be uploaded to GitHub. |
| 🔺 | `backend/prisma/schema.prisma` | Defines the database models, tables, fields, and relationships. |
| 🧱 | `backend/prisma/migrations/` | Stores database migration files created by Prisma. |
| 🚀 | `backend/src/server.js` | Starts the backend server and listens on the configured port. |
| 🧠 | `backend/src/app.js` | Defines the Express app, middleware, and connects the routes. |
| 🗄️ | `backend/src/config/db.js` | Creates and exports the Prisma Client for database access. |
| 🧮 | `backend/src/services/calculationService.js` | Contains all financial calculation logic. |
| 🧑‍💼 | `backend/src/controllers/profileController.js` | Handles API logic such as validation, calculations, saving profiles, and loading profiles. |
| 🛣️ | `backend/src/routes/profileRoutes.js` | Defines API routes for calculations and financial profiles. |
| ❤️ | `backend/src/routes/healthRoutes.js` | Defines the `/health` endpoint that checks backend and database status. |
| ✅ | `backend/src/tests/calculationService.test.js` | Unit tests for the financial calculation functions. |
| 🧪 | `backend/src/tests/profileRoutes.test.js` | Integration tests for backend API routes. |
| 🐳 | `backend/Dockerfile` | Instructions for building the backend Docker image. |
| 🚫 | `backend/.dockerignore` | Tells Docker which backend files should not be copied into the image. |

---

### 🎨 Frontend Files

| Icon | File / Folder | Role |
|---|---|---|
| 📦 | `frontend/package.json` | Defines frontend dependencies, scripts, and project settings. |
| 🔒 | `frontend/package-lock.json` | Locks the exact versions of frontend packages. |
| 🌐 | `frontend/index.html` | Main HTML file where the React app is mounted. |
| ⚡ | `frontend/vite.config.js` | Configuration file for Vite. |
| 🎨 | `frontend/tailwind.config.js` | Tailwind CSS configuration file. |
| 🧩 | `frontend/postcss.config.js` | PostCSS configuration used by Tailwind CSS. |
| 🚪 | `frontend/src/main.jsx` | Entry point of the React app. It renders `App.jsx`. |
| 🖼️ | `frontend/src/App.jsx` | Main frontend component. Displays the form, results, chart, and saved profiles. |
| 🔌 | `frontend/src/api/profilesApi.js` | Handles HTTP requests from the frontend to the backend API. |
| 💅 | `frontend/src/index.css` | Main CSS file that loads Tailwind CSS. |
| 🧾 | `frontend/src/App.css` | Default CSS file from Vite. It is not required if Tailwind is used for styling. |
| 🖼️ | `frontend/src/assets/` | Stores static assets such as images, logos, and icons. |
| 🐳 | `frontend/Dockerfile` | Instructions for building the frontend Docker image and serving it with Nginx. |
| 🚫 | `frontend/.dockerignore` | Tells Docker which frontend files should not be copied into the image. |

---

### 🐳 Root Project Files

| Icon | File / Folder | Role |
|---|---|---|
| 🐳 | `docker-compose.yml` | Runs the full system: PostgreSQL, backend, and frontend. |
| 🧪 | `.env.example` | Example environment file that shows which variables are required. Safe to upload to GitHub. |
| 🚫 | `.gitignore` | Defines files and folders that should not be uploaded to GitHub, such as `node_modules` and `.env`. |
| 📘 | `README.md` | Main project documentation file. |

---

## 🧮 Main Calculation Logic

The main financial calculation logic is located in:

```txt
backend/src/services/calculationService.js
```

Calculation rules:

```txt
Estimated Bank Net = Gross Salary × 0.68
Fixed Costs = Bank Net × 0.55
Savings Goals = Bank Net × 0.10
Active Investments = Bank Net × 0.10
Guilt-Free Spending = Bank Net × 0.275
Investment Projection = Investment × (1 + 0.07)^year
```

The investment projection is calculated for 15 years.

---

## 🗄️ Database Structure

The database contains two main tables.

---

### `financial_profiles`

Stores the user's financial profile.

| Column | Description |
|---|---|
| `id` | Unique profile ID |
| `name` | User name |
| `grossSalary` | Gross monthly salary |
| `bankNet` | Net income received in the bank |
| `createdAt` | Profile creation date |
| `updatedAt` | Last update date |

---

### `spending_plans`

Stores the calculated spending plan for each profile.

| Column | Description |
|---|---|
| `id` | Unique spending plan ID |
| `profileId` | Related financial profile ID |
| `fixedCosts` | Fixed costs calculation |
| `savingsGoals` | Savings goals calculation |
| `activeInvestments` | Active investments calculation |
| `guiltFreeSpending` | Guilt-free spending calculation |
| `wealthProjection` | 15-year investment projection |
| `createdAt` | Spending plan creation date |

---

## 🔌 API Endpoints

### ❤️ Health Check

```http
GET /health
```

Checks that the backend server is running and that the database connection is working.

Example response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

---

### 🧮 Calculate Spending Plan

```http
POST /api/calculate
```

Calculates a financial spending plan without saving it to the database.

Example request:

```json
{
  "grossSalary": 15000,
  "bankNet": 10000
}
```

Example response:

```json
{
  "message": "Spending plan calculated successfully",
  "data": {
    "grossSalary": 15000,
    "bankNet": 10000,
    "fixedCosts": 5500,
    "savingsGoals": 1000,
    "activeInvestments": 1000,
    "guiltFreeSpending": 2750,
    "wealthProjection": [
      {
        "year": 1,
        "value": 1070
      }
    ]
  }
}
```

---

### 💾 Create Financial Profile

```http
POST /api/profiles
```

Creates a new financial profile and saves the calculated spending plan to the database.

Example request:

```json
{
  "name": "Yehuda Baza",
  "grossSalary": 15000,
  "bankNet": 10000
}
```

---

### 📋 Get All Profiles

```http
GET /api/profiles
```

Returns all saved financial profiles.

---

### 🔎 Get Profile by ID

```http
GET /api/profiles/:id
```

Returns a specific financial profile by ID.

---

## 🚀 Installation Guide

This section explains what needs to be installed and where.

---

### ✅ Prerequisites

Before running the project, install:

- 🟩 Node.js
- 📦 npm
- 🐳 Docker Desktop
- 🌿 Git

---

### 🖥️ Backend Installation

Enter the backend folder:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

The main backend packages used in this project are:

```bash
npm install express cors dotenv @prisma/client
npm install -D nodemon jest supertest prisma
```

Backend dependencies:

| Package | Purpose |
|---|---|
| `express` | Build the REST API |
| `cors` | Allow frontend to communicate with backend |
| `dotenv` | Load environment variables |
| `@prisma/client` | Prisma database client |

Backend development dependencies:

| Package | Purpose |
|---|---|
| `nodemon` | Restart server automatically during development |
| `jest` | Run backend tests |
| `supertest` | Test API endpoints |
| `prisma` | Prisma CLI for migrations and Prisma Studio |

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migration:

```bash
npx prisma migrate dev
```

Run backend in development mode:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5050
```

---

### 🎨 Frontend Installation

Enter the frontend folder:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

The main frontend packages used in this project are:

```bash
npm install axios recharts
npm install -D tailwindcss@3.4.17 postcss autoprefixer
```

Frontend dependencies:

| Package | Purpose |
|---|---|
| `react` | Build the user interface |
| `axios` | Send requests to the backend |
| `recharts` | Display the investment chart |

Frontend development dependencies:

| Package | Purpose |
|---|---|
| `vite` | Run and build the frontend |
| `tailwindcss` | Styling |
| `postcss` | CSS processing |
| `autoprefixer` | CSS compatibility |

Run frontend in development mode:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=5050
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/intelligent_investor_db?schema=public"
```

The real `.env` file should not be committed to GitHub.

The project includes `.env.example` as a safe example file.

---

## 🐳 Running the Full Project With Docker

From the root project folder, run:

```bash
docker compose up --build -d
```

This command starts:

- 🐘 PostgreSQL container
- 🚀 Backend container
- ⚛️ Frontend container

Open the frontend:

```txt
http://localhost:5173
```

Check backend health:

```txt
http://localhost:5050/health
```

Expected response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

Stop all containers:

```bash
docker compose down
```

Check running containers:

```bash
docker ps
```

---

## 🐳 Docker Explanation

### Container

A container is an isolated environment that runs one part of the system.

In this project:

| Container | Purpose |
|---|---|
| `intelligent_investor_frontend` | Runs the React frontend with Nginx |
| `intelligent_investor_backend` | Runs the Node.js Express backend |
| `intelligent_investor_postgres` | Runs the PostgreSQL database |

---

### Image

An image is the template used to create a container.

Example:

```txt
postgres:16
```

This image is used to create the PostgreSQL container.

---

### Dockerfile

A Dockerfile contains instructions for building an image.

This project has:

```txt
backend/Dockerfile
frontend/Dockerfile
```

---

### Docker Compose

Docker Compose runs all services together using:

```txt
docker-compose.yml
```

---

### Volume

A volume stores database data permanently.

In this project, the PostgreSQL volume keeps database data even if containers are stopped.

---

## 🧪 Running Tests

### Backend Tests

From the `backend` folder:

```bash
cd backend
npm test
```

The backend tests include:

- ✅ Unit tests for calculation logic
- ✅ Integration tests for API routes
- ✅ Health check test
- ✅ Profile creation test
- ✅ Profile loading test
- ✅ Error handling tests

Expected result:

```txt
Test Suites: 2 passed
Tests: 18 passed
```

---

## 🔍 Prisma Studio

To view the database visually:

```bash
cd backend
npx prisma studio
```

Prisma Studio usually opens at:

```txt
http://localhost:5555
```

There you can view:

- `FinancialProfile`
- `SpendingPlan`

---

## 📦 Useful Commands

### 🖥️ Backend

```bash
cd backend
npm install
npm run dev
npm test
npx prisma studio
```

---

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
npm run build
```

---

### 🐳 Docker

```bash
docker compose up --build -d
docker compose down
docker ps
docker compose logs backend
docker compose logs frontend
docker compose logs postgres
```

---

### 🌿 Git

```bash
git status
git add .
git commit -m "your commit message"
git push
```

---

## 📊 Current Project Status

Implemented:

- ✅ Backend API
- ✅ Frontend UI
- ✅ PostgreSQL database
- ✅ Prisma ORM
- ✅ Docker Compose
- ✅ Full-stack Docker setup
- ✅ Unit tests
- ✅ Integration tests
- ✅ Profile saving
- ✅ Profile loading
- ✅ Investment projection chart
- ✅ Health check endpoint

Planned next steps:

- ⏳ Add frontend component tests
- ⏳ Add Cypress end-to-end tests
- ⏳ Add GitHub Actions CI/CD pipeline
- ⏳ Add staging deployment
- ⏳ Improve UI and documentation

---
