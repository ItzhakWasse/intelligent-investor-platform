
## 👤 Authors

**Yehuda Baza**, **Vladislav Rabinovich**, **Izhak Wasse**, **Aviv Nahum**
---


# 💰 The Intelligent Investor Platform

[![CI Pipeline](https://github.com/yeudaba/intelligent-investor-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/yeudaba/intelligent-investor-platform/actions/workflows/ci.yml)

A full-stack personal finance platform for calculating monthly spending buckets, saving financial profiles, and visualizing long-term investment growth.

The project was developed as part of an **Introduction to DevOps** course and demonstrates a complete full-stack system with Docker, Docker Compose, Docker Hub, automated testing, and GitHub Actions CI/CD.

---

## 📌 Quick Project Summary

The Intelligent Investor Platform allows users to enter financial details such as name, gross salary, and bank net income.

The system calculates a monthly spending plan and displays:

- 🏠 Fixed Costs
- 🎯 Savings Goals
- 📈 Active Investments
- 🛍️ Guilt-Free Spending
- 📊 15-Year Investment Projection

Users can also save financial profiles to a PostgreSQL database and load saved profiles later.

---

## 🧰 Technologies Used

### 🎨 Frontend

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔌 Axios
- 📊 Recharts
- 🧪 Vitest
- 🌐 Cypress

### 🖥️ Backend

- 🟩 Node.js
- 🚀 Express
- 🔺 Prisma ORM
- 🐘 PostgreSQL
- ✅ Jest
- 🧪 Supertest
- 🌐 CORS
- 🔐 Dotenv

### 🐳 DevOps

- 🐳 Docker
- 🧩 Docker Compose
- ☁️ Docker Hub
- 🔁 GitHub Actions
- 🌿 Git / GitHub
- 🚦 Local, Staging, Production-like, and Docker Hub environments

---

## ✨ Main Features

- ⚛️ React frontend
- 🚀 Node.js and Express backend
- 🐘 PostgreSQL database
- 🔺 Prisma ORM database connection
- 📊 Financial spending bucket calculation
- 📈 15-year investment projection chart
- 💾 Save and load financial profiles
- ❤️ Backend health check endpoint
- 🐳 Full Docker support
- 🧩 Docker Compose for running all services together
- ☁️ Docker Hub images for frontend, backend, and database
- 🧪 Backend tests with Jest
- 🧪 Frontend tests with Vitest
- 🌐 Cypress E2E tests
- ⚠️ Cypress edge case tests
- 🔁 GitHub Actions CI pipeline
- 🐳 Docker build validation in CI

---

## 📁 Project Structure

```txt
intelligent-investor-platform/
│
├── .github/
│   └── workflows/
│       └── ci.yml
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
├── database/
│   ├── Dockerfile
│   └── init.sql
│
├── docs/
│   └── screenshots/
│
├── frontend/
│   ├── cypress/
│   │   └── e2e/
│   │       └── financial-profile.cy.js
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── profilesApi.js
│   │   │
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.test.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── cypress.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── docker-compose.yml
├── docker-compose.staging.yml
├── docker-compose.prod.yml
├── docker-compose.hub.yml
├── .env.example
├── .gitignore
├── PROJECT_SUMMARY.md
└── README.md
```

---

## 📂 File Responsibilities

This section explains the main files and folders in the project.

### 🖥️ Backend Files

| File / Folder | Role |
|---|---|
| `backend/package.json` | Defines backend dependencies and scripts. |
| `backend/package-lock.json` | Locks exact backend package versions. |
| `backend/.env` | Stores backend environment variables such as `PORT` and `DATABASE_URL`. This file should not be pushed to GitHub. |
| `backend/prisma/schema.prisma` | Defines the database models, tables, fields, and relationships. |
| `backend/prisma/migrations/` | Stores Prisma database migration files. |
| `backend/src/server.js` | Starts the backend server and listens on the configured port. |
| `backend/src/app.js` | Creates the Express app, connects middleware, and registers routes. |
| `backend/src/config/db.js` | Creates and exports the Prisma Client for database access. |
| `backend/src/services/calculationService.js` | Contains the financial calculation logic. |
| `backend/src/controllers/profileController.js` | Handles the main backend logic for profiles, validation, calculations, saving, and loading. |
| `backend/src/routes/profileRoutes.js` | Defines the API routes related to financial profiles. |
| `backend/src/routes/healthRoutes.js` | Defines the `/health` route that checks backend and database status. |
| `backend/src/tests/calculationService.test.js` | Unit tests for the financial calculation logic. |
| `backend/src/tests/profileRoutes.test.js` | Integration tests for backend API routes. |
| `backend/Dockerfile` | Defines how to build the backend Docker image. |
| `backend/.dockerignore` | Defines files that should not be copied into the backend Docker image. |

### 🎨 Frontend Files

| File / Folder | Role |
|---|---|
| `frontend/package.json` | Defines frontend dependencies and scripts. |
| `frontend/package-lock.json` | Locks exact frontend package versions. |
| `frontend/index.html` | Main HTML file where the React app is mounted. |
| `frontend/vite.config.js` | Vite configuration file. |
| `frontend/tailwind.config.js` | Tailwind CSS configuration file. |
| `frontend/postcss.config.js` | PostCSS configuration file used with Tailwind. |
| `frontend/src/main.jsx` | Entry point of the React application. |
| `frontend/src/App.jsx` | Main React component. Contains the financial form, calculation results, chart, saved profiles, and environment badge. |
| `frontend/src/api/profilesApi.js` | Handles API requests from the frontend to the backend. |
| `frontend/src/App.test.jsx` | Frontend component test using Vitest and React Testing Library. |
| `frontend/src/index.css` | Main CSS file with Tailwind imports. |
| `frontend/src/App.css` | Additional styling for the app. |
| `frontend/src/assets/` | Stores static assets. |
| `frontend/cypress/e2e/financial-profile.cy.js` | Cypress E2E and edge case tests. |
| `frontend/cypress.config.js` | Cypress configuration file. |
| `frontend/Dockerfile` | Defines how to build the frontend Docker image and serve it using Nginx. |
| `frontend/.dockerignore` | Defines files that should not be copied into the frontend Docker image. |

### 🗄️ Database Files

| File / Folder | Role |
|---|---|
| `database/Dockerfile` | Builds a custom PostgreSQL database image. |
| `database/init.sql` | Initializes the database schema when the database container starts. |
| `yeuda4222/intelligent-investor-db:latest` | Docker Hub image for the project database. |

The database image is useful because it allows the team to run the same PostgreSQL database structure directly from Docker Hub, without setting up the database manually.

### 🐳 Root Project Files

| File / Folder | Role |
|---|---|
| `.github/workflows/ci.yml` | GitHub Actions workflow file that defines the CI pipeline. |
| `docker-compose.yml` | Runs the regular local Docker environment. |
| `docker-compose.staging.yml` | Runs the staging environment. |
| `docker-compose.prod.yml` | Runs the production-like environment. |
| `docker-compose.hub.yml` | Runs the full project using images pulled from Docker Hub. |
| `.env.example` | Example environment file. Safe to upload to GitHub. |
| `.gitignore` | Defines files and folders that should not be committed. |
| `PROJECT_SUMMARY.md` | Short summary of the project. |
| `README.md` | Main documentation file. |
| `docs/screenshots/` | Stores screenshots used in project documentation. |

---

## 🧮 Financial Calculation Logic

The calculation logic is located in:

```txt
backend/src/services/calculationService.js
```

The system uses the following rules:

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

### `spending_plans`

Stores the calculated spending plan for each profile.

| Column | Description |
|---|---|
| `id` | Unique spending plan ID |
| `profileId` | Related financial profile ID |
| `fixedCosts` | Fixed costs amount |
| `savingsGoals` | Savings goals amount |
| `activeInvestments` | Active investments amount |
| `guiltFreeSpending` | Guilt-free spending amount |
| `wealthProjection` | 15-year investment projection |
| `createdAt` | Spending plan creation date |

---

## 🔌 API Endpoints

### ❤️ Health Check

```http
GET /health
```

Checks that the backend is running and connected to the database.

Example response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

### 🧮 Calculate Spending Plan

```http
POST /api/calculate
```

Calculates a financial spending plan without saving it.

Example request:

```json
{
  "grossSalary": 15000,
  "bankNet": 10000
}
```

### 💾 Create Financial Profile

```http
POST /api/profiles
```

Creates and saves a financial profile in the database.

Example request:

```json
{
  "name": "Yehuda Baza",
  "grossSalary": 15000,
  "bankNet": 10000
}
```

### 📋 Get All Profiles

```http
GET /api/profiles
```

Returns all saved financial profiles.

Example response:

```json
{
  "message": "Financial profiles loaded successfully",
  "data": []
}
```

### 🔎 Get Profile By ID

```http
GET /api/profiles/:id
```

Returns a specific financial profile by ID.

---

## ⚙️ Environment Variables

The backend uses environment variables from a `.env` file.

Example for local development:

```env
PORT=5050
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/intelligent_investor_db?schema=public"
```

Example for running backend tests against the Docker Hub database:

```env
PORT=5050
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/intelligent_investor_prod_db?schema=public"
```

Important:

```txt
backend/.env should not be uploaded to GitHub.
```

Use `.env.example` as a safe example file.

---

## 🐳 Docker Explanation

Docker is used to run the project in isolated containers.

Instead of installing and running every part manually, Docker allows the whole system to run in a clean and consistent environment.

### Image vs Container

```txt
Image = a template/package used to create a container
Container = a running instance of an image
```

Simple example:

```txt
Image is like a recipe.
Container is like the meal created from that recipe.
```

### Containers in This Project

| Container | Purpose |
|---|---|
| 🎨 Frontend container | Runs the React frontend through Nginx. |
| 🚀 Backend container | Runs the Node.js and Express API. |
| 🐘 Database container | Runs PostgreSQL and stores the data. |

### Docker Images Used

| Image | Purpose |
|---|---|
| `yeuda4222/intelligent-investor-frontend:latest` | Frontend image |
| `yeuda4222/intelligent-investor-backend:latest` | Backend image |
| `yeuda4222/intelligent-investor-db:latest` | Database image |
| `postgres:16` | Official PostgreSQL image |

### Dockerfile

A Dockerfile contains the instructions for building a Docker image.

This project includes:

```txt
backend/Dockerfile
frontend/Dockerfile
database/Dockerfile
```

### Docker Compose

Docker Compose is used to run multiple services together.

Instead of running frontend, backend, and database manually, Docker Compose starts everything with one command.

Example:

```bash
docker compose -f docker-compose.hub.yml up -d
```

---

## 🧠 Why Docker Is Useful

Docker helps solve several problems:

- It makes the project easier to run on another computer.
- It prevents issues caused by different local environments.
- It keeps frontend, backend, and database isolated.
- It allows the full system to run with one command.
- It makes the project closer to a real production setup.
- It allows sharing ready images through Docker Hub.

---

## 🔌 Port Mapping

The frontend, backend, and database run on different ports because they are separate services.

| Service | Internal Container Port | External Local Port | Purpose |
|---|---|---|---|
| Frontend | `80` | `8090` | Opens the website in the browser |
| Backend | `5050` | `5052` | Exposes the API |
| Database | `5432` | `5435` | Exposes PostgreSQL locally |

Example:

```txt
localhost:8090  → frontend container port 80
localhost:5052  → backend container port 5050
localhost:5435  → postgres container port 5432
```

Inside Docker Compose, the backend connects to the database using the service name:

```txt
postgres:5432
```

From the local computer, tests connect to the database using:

```txt
localhost:5435
```

---

## 🚦 Environments

The project includes multiple environments.

| Environment | Frontend | Backend | Database | Purpose |
|---|---|---|---|---|
| Local | `http://localhost:5173` | `http://localhost:5050` | `localhost:5433` | Development |
| Staging | `http://localhost:8080` | `http://localhost:5051` | `localhost:5434` | Testing before production |
| Production-like | `http://localhost:8090` | `http://localhost:5052` | `localhost:5435` | Production-like run |
| Docker Hub | `http://localhost:8090` | `http://localhost:5052` | `localhost:5435` | Run from Docker Hub images |

This separation helps test the system safely without mixing data between environments.

---

## ☁️ Docker Hub

The project images were uploaded to Docker Hub.

Docker Hub repositories:

```txt
yeuda4222/intelligent-investor-frontend
yeuda4222/intelligent-investor-backend
yeuda4222/intelligent-investor-db
```

The Docker Hub environment allows another team member to run the full project without building the images locally.

---

## ☁️ Running the Project From Docker Hub

From the root project folder:

```bash
cd ~/Desktop/intelligent-investor-platform
```

Stop previous containers:

```bash
docker compose -f docker-compose.hub.yml down
```

Pull the latest images from Docker Hub:

```bash
docker compose -f docker-compose.hub.yml pull
```

Start the full system:

```bash
docker compose -f docker-compose.hub.yml up -d
```

Check running containers:

```bash
docker ps
```

Expected containers:

```txt
intelligent_investor_hub_frontend
intelligent_investor_hub_backend
intelligent_investor_hub_postgres
```

Open the frontend:

```txt
http://localhost:8090
```

Check backend health:

```bash
curl http://localhost:5052/health
```

Expected response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

Check profiles API:

```bash
curl http://localhost:5052/api/profiles
```

Expected response:

```json
{
  "message": "Financial profiles loaded successfully",
  "data": []
}
```

Stop the Docker Hub environment:

```bash
docker compose -f docker-compose.hub.yml down
```

---

## 🐳 Docker Hub Database Image

The project includes a custom database image:

```txt
yeuda4222/intelligent-investor-db:latest
```

This image is based on PostgreSQL and includes the database initialization file.

This is useful because:

- The database schema can be shared through Docker Hub.
- Team members do not need to manually create tables.
- The full project can run from Docker Hub images.
- The database structure is consistent between team members.

In the Docker Hub environment, the database schema is already initialized by the database image.

Because of that, the backend starts directly with:

```bash
node src/server.js
```

---

## 🏷️ Environment Badge

The frontend displays an environment badge.

Examples:

```txt
Environment: Local
Environment: Staging
Environment: Production
```

The badge helps identify which environment is currently running.

This is controlled by:

```txt
VITE_APP_ENV
```

This is useful in DevOps because it helps avoid confusion between environments.

---

## 🧪 Testing

The project includes several types of automated tests.

### ✅ Backend Unit Tests

Tool:

```txt
Jest
```

Location:

```txt
backend/src/tests/calculationService.test.js
```

What it checks:

- Financial calculation logic
- Fixed costs calculation
- Savings goals calculation
- Active investments calculation
- Guilt-free spending calculation
- Investment projection calculation

Run:

```bash
cd backend
npm test
```

### 🧪 Backend Integration Tests

Tools:

```txt
Jest + Supertest
```

Location:

```txt
backend/src/tests/profileRoutes.test.js
```

What it checks:

- API routes
- Backend responses
- Profile creation
- Profile loading
- Validation behavior
- Database operations

If the database runs through Docker Hub, use:

```bash
cd backend
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/intelligent_investor_prod_db?schema=public" npm test -- --runInBand
```

### 🎨 Frontend Component Test

Tools:

```txt
Vitest + React Testing Library
```

Location:

```txt
frontend/src/App.test.jsx
```

What it checks:

- The React app renders correctly.
- The user can enter salary values.
- The calculation result appears in the UI.

Run:

```bash
cd frontend
npm test
```

### 🌐 Cypress E2E Tests

Tool:

```txt
Cypress
```

Location:

```txt
frontend/cypress/e2e/financial-profile.cy.js
```

What it checks:

- The application loads successfully.
- A user can calculate a financial plan.
- A user can save a financial profile.
- Saved profiles appear in the UI.
- The investment projection chart is displayed.

Run with the Docker Hub environment:

```bash
cd frontend
npx cypress open --config baseUrl=http://localhost:8090
```

Run in headless mode:

```bash
cd frontend
npx cypress run --config baseUrl=http://localhost:8090
```

Expected result:

```txt
Tests: 5
Passing: 5
Failing: 0
```

### ⚠️ Cypress Edge Case Tests

The Cypress file also checks edge cases such as:

| Edge Case | Expected Behavior |
|---|---|
| Missing gross salary | The system displays a validation error. |
| Missing bank net | The system uses estimated bank net from gross salary. |
| Missing name while saving | The system displays `Name is required`. |
| Valid profile save | The profile is saved and displayed successfully. |

---

## 🔁 GitHub Actions CI/CD Pipeline

GitHub Actions is used to run an automatic CI pipeline.

The workflow file is located at:

```txt
.github/workflows/ci.yml
```

The pipeline runs automatically when code is pushed to the `main` branch or when a pull request is opened.

### What the CI Pipeline Does

| Step | Description |
|---|---|
| 📥 Checkout repository | Downloads the code into the GitHub runner. |
| 🟩 Setup Node.js | Installs the required Node.js version. |
| 📦 Install backend dependencies | Runs backend dependency installation. |
| 📦 Install frontend dependencies | Runs frontend dependency installation. |
| 🐳 Docker build check | Verifies that Docker images can be built. |
| 🐘 Start PostgreSQL | Starts the database service for tests. |
| 🔺 Prisma generate | Generates Prisma Client. |
| 🗄️ Prisma migrate | Applies database migrations. |
| ✅ Backend tests | Runs Jest backend tests. |
| 🧪 Frontend tests | Runs Vitest frontend tests. |
| 🌐 Cypress tests | Runs Cypress E2E and edge case tests. |
| 🧹 Cleanup | Stops containers after the run. |

### Why GitHub Actions Is Useful

GitHub Actions helps the project by:

- Running tests automatically.
- Finding problems before merging code.
- Making sure backend, frontend, and Cypress tests pass.
- Checking that Docker builds are valid.
- Giving a clear green or red status for every push.

A green workflow means the project passed the automated checks.

---

## 🧭 How to Present the Project

This section can be used during the presentation.

### 1. Show GitHub Repository

Show the main repository page and explain:

```txt
This is the project repository. It includes the frontend, backend, database setup,
Docker Compose files, tests, documentation, and GitHub Actions workflow.
```

### 2. Show Docker Hub

Show the Docker Hub repositories:

```txt
yeuda4222/intelligent-investor-frontend
yeuda4222/intelligent-investor-backend
yeuda4222/intelligent-investor-db
```

Explain:

```txt
These are the ready Docker images for the frontend, backend, and database.
They allow another team member to run the project without building the images locally.
```

### 3. Run the Project From Docker Hub

```bash
cd ~/Desktop/intelligent-investor-platform
docker compose -f docker-compose.hub.yml down
docker compose -f docker-compose.hub.yml pull
docker compose -f docker-compose.hub.yml up -d
docker ps
```

Explain:

```txt
Docker Compose pulls the images from Docker Hub and starts the full system:
frontend, backend, and PostgreSQL database.
```

### 4. Show Docker Desktop

Open Docker Desktop and show:

- Containers
- Images
- Running frontend container
- Running backend container
- Running database container

Explain:

```txt
Docker Desktop gives a visual view of the containers and images.
The green indicators show that the services are running.
```

### 5. Check Backend

```bash
curl http://localhost:5052/health
```

Explain:

```txt
This endpoint proves that the backend is running and connected to the database.
```

### 6. Check API

```bash
curl http://localhost:5052/api/profiles
```

Explain:

```txt
This endpoint checks a real API route that loads profiles from the database.
```

### 7. Open Frontend

Open:

```txt
http://localhost:8090
```

Show this flow:

```txt
1. Enter name
2. Enter gross salary
3. Enter bank net
4. Click Calculate Plan
5. Show spending buckets
6. Show 15-year investment projection
7. Save profile
8. Show saved profile
```

### 8. Run Cypress Tests

```bash
cd frontend
npx cypress open --config baseUrl=http://localhost:8090
```

Explain:

```txt
Cypress simulates a real user in the browser.
It checks the full flow and also edge cases like missing fields.
```

### 9. Show GitHub Actions

Open:

```txt
GitHub Repository → Actions
```

Explain:

```txt
GitHub Actions runs automated tests on every push.
It helps verify that the backend, frontend, Cypress tests, and Docker checks pass.
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

When using the Docker Hub database, make sure the backend `.env` points to:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/intelligent_investor_prod_db?schema=public"
```

---

## 📦 Useful Commands

### 🖥️ Backend

```bash
cd backend
npm install
npm run dev
npm test
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
npm run build
npm test
npx cypress open --config baseUrl=http://localhost:8090
npx cypress run --config baseUrl=http://localhost:8090
```

### 🐳 Docker Hub Run

```bash
cd ~/Desktop/intelligent-investor-platform
docker compose -f docker-compose.hub.yml down
docker compose -f docker-compose.hub.yml pull
docker compose -f docker-compose.hub.yml up -d
docker ps
curl http://localhost:5052/health
curl http://localhost:5052/api/profiles
```

### 🧪 Backend Tests With Docker Hub Database

```bash
cd backend
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/intelligent_investor_prod_db?schema=public" npm test -- --runInBand
```

### 🐳 Docker General

```bash
docker ps
docker images
docker compose down
docker compose logs backend
docker compose logs frontend
docker compose logs postgres
```

### 🌿 Git

```bash
git status
git add .
git commit -m "Update project documentation"
git pull --rebase origin main
git push origin main
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
- ✅ Local Docker environment
- ✅ Staging Docker environment
- ✅ Production-like Docker environment
- ✅ Docker Hub based environment
- ✅ Docker Hub frontend image
- ✅ Docker Hub backend image
- ✅ Docker Hub database image
- ✅ Custom database Docker image with initialization script
- ✅ Separate local database
- ✅ Separate staging database
- ✅ Separate production-like database
- ✅ Separate frontend and backend ports for each environment
- ✅ Environment badge in frontend
- ✅ Backend unit tests
- ✅ Backend integration tests
- ✅ Frontend component test
- ✅ Cypress E2E test
- ✅ Cypress edge case tests
- ✅ GitHub Actions CI Pipeline
- ✅ Docker build check in CI
- ✅ CI status badge in README
- ✅ Profile saving
- ✅ Profile loading
- ✅ Investment projection chart
- ✅ Health check endpoint

Optional next steps:

- ⏳ Deploy to a real cloud/server provider
- ⏳ Add HTTPS and custom domain
- ⏳ Add monitoring and logs dashboard
- ⏳ Add user authentication
- ⏳ Add Docker image version tags instead of using only `latest`

---

