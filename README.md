# 💰 The Intelligent Investor Platform

[![CI Pipeline](https://github.com/yeudaba/intelligent-investor-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/yeudaba/intelligent-investor-platform/actions/workflows/ci.yml)

A full-stack personal finance platform that helps users calculate a monthly spending plan, save financial profiles, and visualize long-term investment growth.

The project was developed as part of an **Introduction to DevOps** course and demonstrates a complete full-stack system using React, Node.js, Express, PostgreSQL, Prisma ORM, Docker, Docker Compose, automated tests, Cypress E2E testing, local/staging/production environments, environment badge, and GitHub Actions CI/CD.

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
- 🧪 Local development environment
- 🚦 Separate staging environment
- 🚀 Separate production environment
- 🗄️ Separate databases for local, staging, and production
- 🏷️ Environment badge displayed in the frontend
- 🔄 Automatic Prisma migrations on container startup
- 📊 15-year investment projection chart
- 💾 Save and load financial profiles
- ✅ Backend unit tests
- ✅ Backend integration tests
- 🧪 Frontend component test
- 🌐 Cypress E2E test
- ⚠️ Cypress edge case tests
- 🔁 GitHub Actions CI pipeline
- ❤️ Health check endpoint
- 🌐 Full-stack communication between frontend, backend, and database

---

## 🖼️ Project Screenshots

### 🎨 Frontend Application

The main React interface allows users to enter financial details, calculate a monthly spending plan, view investment projection, and save financial profiles.

![Frontend Application](docs/screenshots/frontend-home.png)

---

### ❤️ Backend Health Check

The backend exposes a `/health` endpoint that confirms the Express server is running and the PostgreSQL database is connected.

![Backend Health Check](docs/screenshots/backend-health.png)

---

### 🐳 Docker Compose

The full application is containerized using Docker Compose, including PostgreSQL, backend, and frontend services.

![Docker Compose](docs/screenshots/docker-compose.png)

---

### 🔁 GitHub Actions CI Pipeline

The CI pipeline runs automatically on every push to `main` and verifies the project by running backend tests, frontend tests, Cypress E2E tests, and Docker build checks.

![GitHub Actions](docs/screenshots/github-actions.png)

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
| 🧪 Vitest | Run frontend component tests |
| 🧩 React Testing Library | Test React UI behavior |
| 🌐 Cypress | Run end-to-end browser tests |

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
| 🧪 Local Environment | Run and test the project during development |
| 🚦 Staging Environment | Test the full system before production |
| 🚀 Production Environment | Run the production-like version of the full system |
| 🏷️ Environment Badge | Shows whether the frontend is running in Local, Staging, or Production mode |
| 🔁 GitHub Actions | Run automated CI pipeline |
| 🌿 Git | Version control |
| ☁️ GitHub | Remote repository |

---

## 📁 Project Structure

```txt
intelligent-investor-platform/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docs/
│   └── screenshots/
│       ├── frontend-home.png
│       ├── backend-health.png
│       ├── docker-compose.png
│       └── github-actions.png
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
├── .env.example
├── .gitignore
└── README.md
```

---

## 📂 File Responsibilities

This section explains the main files in the project and their roles in a simple and organized way.

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
| 🖼️ | `frontend/src/App.jsx` | Main frontend component. Displays the form, results, chart, saved profiles, and environment badge. |
| 🧪 | `frontend/src/App.test.jsx` | Frontend component test that verifies calculation results appear in the UI. |
| 🔌 | `frontend/src/api/profilesApi.js` | Handles HTTP requests from the frontend to the backend API. Uses environment-based API URL. |
| 💅 | `frontend/src/index.css` | Main CSS file that loads Tailwind CSS. |
| 🧾 | `frontend/src/App.css` | Additional CSS file for frontend styling. |
| 🖼️ | `frontend/src/assets/` | Stores static assets such as images, logos, and icons. |
| 🌐 | `frontend/cypress/e2e/financial-profile.cy.js` | Cypress E2E and edge case tests that simulate real user flows in the browser. |
| ⚙️ | `frontend/cypress.config.js` | Cypress configuration file. |
| 🐳 | `frontend/Dockerfile` | Instructions for building the frontend Docker image and serving it with Nginx. Supports `VITE_API_BASE_URL` and `VITE_APP_ENV`. |
| 🚫 | `frontend/.dockerignore` | Tells Docker which frontend files should not be copied into the image. |

---

### 🐳 Root Project Files

| Icon | File / Folder | Role |
|---|---|---|
| 🔁 | `.github/workflows/ci.yml` | GitHub Actions workflow that runs the automated CI pipeline. |
| 🖼️ | `docs/screenshots/` | Stores project screenshots used in the README documentation. |
| 🐳 | `docker-compose.yml` | Runs the regular local full-stack environment: PostgreSQL, backend, and frontend. |
| 🚦 | `docker-compose.staging.yml` | Runs a separate staging environment with its own frontend, backend, database, ports, and volume. |
| 🚀 | `docker-compose.prod.yml` | Runs a separate production-like environment with its own frontend, backend, database, ports, and volume. |
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
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
npm install -D cypress
```

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

The backend container runs Prisma migrations automatically before starting the server:

```bash
npx prisma migrate deploy && node src/server.js
```

Open the frontend:

```txt
http://localhost:5173
```

Check backend health:

```txt
http://localhost:5050/health
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

## 🚦 Running the Staging Environment

The project includes a separate staging environment.

The staging environment is used to test the application before moving it to production.  
It runs separately from the regular local environment and uses different ports and a separate PostgreSQL database.

---

### 🧩 Staging Services

| Service | URL / Port | Description |
|---|---|---|
| 🎨 Frontend Staging | `http://localhost:8080` | Runs the React frontend through Docker and Nginx. |
| 🚀 Backend Staging | `http://localhost:5051` | Runs the Express backend. |
| ❤️ Backend Health Check | `http://localhost:5051/health` | Checks if the backend and database are connected. |
| 🐘 PostgreSQL Staging | `localhost:5434` | Separate PostgreSQL database for staging. |

---

### ▶️ Start Staging

From the root project folder, run:

```bash
docker compose -f docker-compose.staging.yml up --build -d
```

This command builds and starts:

- 🐘 Staging PostgreSQL database
- 🚀 Staging backend
- 🎨 Staging frontend

---

### ❤️ Check Staging Health

Open:

```txt
http://localhost:5051/health
```

Expected response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

---

### 🎨 Open Staging Frontend

Open:

```txt
http://localhost:8080
```

If the staging database is empty, the frontend will show:

```txt
No saved profiles yet.
```

This is normal because the staging database is separate from the regular local database.

---

### 🛑 Stop Staging

To stop the staging environment, run:

```bash
docker compose -f docker-compose.staging.yml down
```

---

## 🚀 Running the Production Environment

The project includes a separate production-like Docker environment.

The production environment is used to run the project in a cleaner and more isolated setup.  
It uses separate containers, separate ports, and a separate PostgreSQL database.

---

### 🧩 Production Services

| Service | URL / Port | Description |
|---|---|---|
| 🎨 Frontend Production | `http://localhost:8090` | Runs the React frontend through Docker and Nginx. |
| 🚀 Backend Production | `http://localhost:5052` | Runs the Express backend. |
| ❤️ Backend Health Check | `http://localhost:5052/health` | Checks if the backend and database are connected. |
| 🐘 PostgreSQL Production | `localhost:5435` | Separate PostgreSQL database for production. |

---

### ▶️ Start Production

From the root project folder, run:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

This command builds and starts:

- 🐘 Production PostgreSQL database
- 🚀 Production backend
- 🎨 Production frontend

---

### ❤️ Check Production Health

Open:

```txt
http://localhost:5052/health
```

Expected response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

---

### 🎨 Open Production Frontend

Open:

```txt
http://localhost:8090
```

The frontend should display:

```txt
Environment: Production
```

If the production database is empty, the frontend will show:

```txt
No saved profiles yet.
```

This is normal because the production database is separate from the local and staging databases.

---

### 🛑 Stop Production

To stop the production environment, run:

```bash
docker compose -f docker-compose.prod.yml down
```

---

## 🔄 Automatic Database Migrations

The backend container runs Prisma migrations automatically when it starts:

```bash
npx prisma migrate deploy && node src/server.js
```

This is configured in the Docker Compose files.

It means that if a database is new or empty, Prisma automatically creates the required tables before the backend server starts.

The database includes:

- `financial_profiles`
- `spending_plans`

This behavior is used in:

- Local Docker environment
- Staging Docker environment
- Production Docker environment

---

## 🏷️ Environment Badge

The frontend displays an environment badge in the top header.

The badge helps identify which environment is currently running.

Examples:

```txt
Environment: Local
Environment: Staging
Environment: Production
```

The value is controlled by the frontend build variable:

```txt
VITE_APP_ENV
```

The value is passed during the Docker build process using build arguments in the Docker Compose files.

Regular local environment:

```yaml
args:
  VITE_API_BASE_URL: http://localhost:5050
  VITE_APP_ENV: Local
```

Staging environment:

```yaml
args:
  VITE_API_BASE_URL: http://localhost:5051
  VITE_APP_ENV: Staging
```

Production environment:

```yaml
args:
  VITE_API_BASE_URL: http://localhost:5052
  VITE_APP_ENV: Production
```

This is useful in DevOps because it makes the difference between local, staging, and production environments clear and visible in the user interface.

---

## 🧠 Why Multiple Environments Are Useful

Using multiple environments is an important DevOps practice.

This project includes three environments:

| Environment | Frontend | Backend | Database | Purpose |
|---|---|---|---|---|
| Local | `http://localhost:5173` | `http://localhost:5050` | `localhost:5433` | Development and regular testing |
| Staging | `http://localhost:8080` | `http://localhost:5051` | `localhost:5434` | Testing before production |
| Production | `http://localhost:8090` | `http://localhost:5052` | `localhost:5435` | Production-like isolated run |

This separation helps test the system safely without mixing data between environments.

---

## 🐳 Docker Explanation

### Container

A container is an isolated environment that runs one part of the system.

In the regular local environment:

| Container | Purpose |
|---|---|
| `intelligent_investor_frontend` | Runs the React frontend with Nginx |
| `intelligent_investor_backend` | Runs the Node.js Express backend |
| `intelligent_investor_postgres` | Runs the PostgreSQL database |

In the staging environment:

| Staging Container | Purpose |
|---|---|
| `intelligent_investor_staging_frontend` | Runs the staging React frontend with Nginx |
| `intelligent_investor_staging_backend` | Runs the staging Node.js Express backend |
| `intelligent_investor_staging_postgres` | Runs the staging PostgreSQL database |

In the production environment:

| Production Container | Purpose |
|---|---|
| `intelligent_investor_prod_frontend` | Runs the production React frontend with Nginx |
| `intelligent_investor_prod_backend` | Runs the production Node.js Express backend |
| `intelligent_investor_prod_postgres` | Runs the production PostgreSQL database |

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

The frontend Dockerfile supports environment variables during build time:

```txt
VITE_API_BASE_URL
VITE_APP_ENV
```

---

### Docker Compose

Docker Compose runs services together using configuration files.

Regular local environment:

```txt
docker-compose.yml
```

Staging environment:

```txt
docker-compose.staging.yml
```

Production environment:

```txt
docker-compose.prod.yml
```

The regular environment builds the frontend with:

```txt
VITE_APP_ENV=Local
```

The staging environment builds the frontend with:

```txt
VITE_APP_ENV=Staging
```

The production environment builds the frontend with:

```txt
VITE_APP_ENV=Production
```

This allows the frontend to display the correct environment badge.

---

### Volume

A volume stores database data permanently.

In this project, PostgreSQL volumes keep database data even if containers are stopped.

Each environment has its own separate volume, so data does not mix between local, staging, and production.

---

## 🧪 Running Tests

### 🖥️ Backend Tests

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

### 🎨 Frontend Component Test

From the `frontend` folder:

```bash
cd frontend
npm test
```

The frontend test checks that the user can enter salary values, click `Calculate Plan`, and see the calculated bucket amounts in the UI.

Expected result:

```txt
Test Files: 1 passed
Tests: 1 passed
```

---

### 🌐 Cypress E2E Test

Make sure the full project is running first:

```bash
docker compose up --build -d
```

Then run Cypress from the `frontend` folder:

```bash
cd frontend
npm run cy:run
```

Expected result:

```txt
Tests: 5
Passing: 5
Failing: 0
```

To open Cypress in interactive mode:

```bash
npm run cy:open
```

---

## 🧪 Test Coverage

This project includes several layers of automated testing to verify the backend logic, API routes, frontend behavior, and full user flow.

The tests help ensure that new changes do not break the main functionality of the system.

---

### ✅ Test Coverage Summary

| Test Area | Tool | Location | What It Checks |
|---|---|---|---|
| Backend Unit Tests | Jest | `backend/src/tests/calculationService.test.js` | Verifies the financial calculation logic. |
| Backend Integration Tests | Jest + Supertest | `backend/src/tests/profileRoutes.test.js` | Verifies backend API routes, validation, and responses. |
| Frontend Component Test | Vitest + React Testing Library | `frontend/src/App.test.jsx` | Verifies that the React UI updates after user actions. |
| Cypress E2E Test | Cypress | `frontend/cypress/e2e/financial-profile.cy.js` | Simulates a real user flow in the browser. |
| Cypress Edge Case Tests | Cypress | `frontend/cypress/e2e/financial-profile.cy.js` | Verifies input validation and special user scenarios. |

---

### 🌐 Cypress E2E Tests

The Cypress tests simulate real user behavior inside the browser.

The main E2E test checks the full flow of the application:

```txt
1. Open the frontend application
2. Enter financial profile details
3. Click Calculate Plan
4. Verify that the spending buckets are displayed
5. Verify that the investment projection chart appears
6. Save the financial profile
7. Verify that the saved profile appears in the Saved Profiles section
```

---

### ⚠️ Cypress Edge Case Tests

In addition to the main happy-path test, the project also includes edge case tests.

These tests check how the system behaves when the user enters missing or incomplete data.

The edge case tests include:

| Edge Case | Expected Behavior |
|---|---|
| Application loads successfully | The main title, form, and buttons are visible. |
| Missing gross salary | The system displays a validation error. |
| Missing bank net | The system calculates the plan using estimated bank net from gross salary. |
| Missing name while saving | The system displays a validation error. |
| Valid profile submission | The profile is calculated, saved, and displayed correctly. |

These tests improve confidence that the application handles both normal and incorrect user actions correctly.

---

### ▶️ Running Cypress Tests

To run Cypress tests in headless mode:

```bash
cd frontend
npm run cy:run
```

Expected result:

```txt
Tests: 5
Passing: 5
Failing: 0
```

To open Cypress in interactive mode:

```bash
cd frontend
npm run cy:open
```

---

## 🔁 CI/CD Pipeline

This project includes a GitHub Actions CI pipeline that runs automatically on every push or pull request to the `main` branch.

The pipeline helps ensure that the project remains stable and that new changes do not break the system.

### ✅ What the CI Pipeline Does

| Step | Description |
|---|---|
| 📥 Checkout Repository | Downloads the project code from GitHub. |
| 🟩 Setup Node.js | Installs the required Node.js version. |
| 📦 Install Backend Dependencies | Installs backend packages using `npm ci`. |
| 📦 Install Frontend Dependencies | Installs frontend packages using `npm ci`. |
| 🐳 Docker Build Check | Builds the Docker images for the backend and frontend. |
| 🐳 Start Docker Services | Starts PostgreSQL, backend, and frontend containers using Docker Compose. |
| ❤️ Health Check | Waits until the backend `/health` endpoint is available. |
| 🔺 Prisma Generate | Generates the Prisma Client. |
| 🗄️ Prisma Migrate | Applies database migrations. |
| ✅ Backend Tests | Runs backend unit and integration tests. |
| 🧪 Frontend Tests | Runs frontend component tests using Vitest. |
| 🌐 Cypress E2E Tests | Runs end-to-end tests using Cypress. |
| 🧹 Stop Docker Services | Stops all Docker containers after the tests finish. |

---

### 📄 CI Workflow File

The GitHub Actions workflow is defined in:

```txt
.github/workflows/ci.yml
```

This file controls the automated CI process.

---

### 🧪 Tests Covered by CI

| Test Type | Tool | Purpose |
|---|---|---|
| Backend Unit Tests | Jest | Tests the financial calculation logic. |
| Backend Integration Tests | Jest + Supertest | Tests backend API routes. |
| Frontend Component Test | Vitest + React Testing Library | Tests the React UI behavior. |
| E2E and Edge Case Tests | Cypress | Simulates real user flows and validates edge cases in the browser. |

---

### 🚦 CI Status Badge

The README includes a CI status badge at the top of the page.

The badge shows whether the latest CI run passed or failed.

A green badge means:

```txt
The project builds successfully and all automated tests passed.
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
npm test
npm run cy:open
npm run cy:run
```

---

### 🐳 Docker Local

```bash
docker compose up --build -d
docker compose down
docker ps
docker compose logs backend
docker compose logs frontend
docker compose logs postgres
```

---

### 🚦 Docker Staging

```bash
docker compose -f docker-compose.staging.yml up --build -d
docker compose -f docker-compose.staging.yml down
docker compose -f docker-compose.staging.yml logs backend
docker compose -f docker-compose.staging.yml logs frontend
docker compose -f docker-compose.staging.yml logs postgres
```

---

### 🚀 Docker Production

```bash
docker compose -f docker-compose.prod.yml up --build -d
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml logs backend
docker compose -f docker-compose.prod.yml logs frontend
docker compose -f docker-compose.prod.yml logs postgres
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
- ✅ Local Docker environment
- ✅ Staging Docker environment
- ✅ Production Docker environment
- ✅ Separate local database
- ✅ Separate staging database
- ✅ Separate production database
- ✅ Separate frontend and backend ports for each environment
- ✅ Environment badge in frontend
- ✅ Environment badge supports Local, Staging, and Production
- ✅ Automatic Prisma migrations on container startup
- ✅ Docker build check in CI
- ✅ Backend unit tests
- ✅ Backend integration tests
- ✅ Frontend component test
- ✅ Cypress E2E test
- ✅ Cypress edge case tests
- ✅ Test coverage documentation
- ✅ GitHub Actions CI Pipeline
- ✅ Automated CI on every push to `main`
- ✅ CI status badge in README
- ✅ Project screenshots in README
- ✅ Profile saving
- ✅ Profile loading
- ✅ Investment projection chart
- ✅ Health check endpoint

Optional next steps:

- ⏳ Deploy to a real cloud/server provider
- ⏳ Add HTTPS and custom domain
- ⏳ Add monitoring and logs dashboard
- ⏳ Add user authentication

---

