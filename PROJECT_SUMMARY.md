
## 👤 Authors

**Yehuda Baza**, **Vladislav Rabinovich**, **Izhak Wasse**, **Aviv Nahum**

---

# 📌 Project Summary — The Intelligent Investor Platform

## 💰 Project Name

**The Intelligent Investor Platform**

---

## 🎯 Project Purpose

The Intelligent Investor Platform is a full-stack personal finance system that helps users calculate a monthly spending plan, save financial profiles, and view long-term investment growth.

The project was built as part of an **Introduction to DevOps** course and demonstrates not only application development, but also a complete DevOps workflow using Docker, Docker Compose, Docker Hub, automated tests, and GitHub Actions.

---

## 🧩 Problem the Project Solves

Many people want to manage their monthly salary better, but they do not always know how to divide their income between fixed expenses, savings, investments, and personal spending.

This project solves that problem by giving the user a simple financial plan based on clear calculation rules.

The system allows the user to:

- Enter gross salary and bank net income.
- Calculate monthly spending buckets.
- View a 15-year investment projection.
- Save financial profiles.
- Load saved profiles from the database.

---

## 🏗️ System Architecture

The project is divided into three main parts:

| Part | Technology | Purpose |
|---|---|---|
| 🎨 Frontend | React + Vite + Tailwind CSS | Displays the user interface and sends requests to the backend. |
| 🚀 Backend | Node.js + Express | Handles API requests, validation, calculations, and database operations. |
| 🐘 Database | PostgreSQL + Prisma ORM | Stores financial profiles and spending plans. |

The system follows a full-stack architecture:

```txt
User → Frontend → Backend API → PostgreSQL Database
```

---

## 🧮 Main Calculation Logic

The platform calculates the user's monthly spending plan using predefined financial rules:

| Category | Calculation |
|---|---|
| 🏠 Fixed Costs | 55% of bank net income |
| 🎯 Savings Goals | 10% of bank net income |
| 📈 Active Investments | 10% of bank net income |
| 🛍️ Guilt-Free Spending | 27.5% of bank net income |
| 📊 Wealth Projection | 15-year projection with 7% annual return |

If the user does not enter bank net income, the system estimates it from the gross salary.

---

## 🐳 Docker and DevOps Setup

The project is fully containerized with Docker.

There are separate Docker images for:

- 🎨 Frontend
- 🚀 Backend
- 🐘 Database

Docker Compose is used to run all services together with one command.

The project supports multiple environments:

| Environment | Frontend | Backend | Database | Purpose |
|---|---|---|---|---|
| Local | `localhost:5173` | `localhost:5050` | `localhost:5433` | Development |
| Staging | `localhost:8080` | `localhost:5051` | `localhost:5434` | Testing before production |
| Production-like | `localhost:8090` | `localhost:5052` | `localhost:5435` | Production-like run |
| Docker Hub | `localhost:8090` | `localhost:5052` | `localhost:5435` | Running from prebuilt Docker Hub images |

---

## ☁️ Docker Hub

The project images were uploaded to Docker Hub so the system can run without rebuilding the images locally.

Docker Hub images:

```txt
yeuda4222/intelligent-investor-frontend:latest
yeuda4222/intelligent-investor-backend:latest
yeuda4222/intelligent-investor-db:latest
```

This allows another team member or instructor to pull the images and run the full system using Docker Compose.

---

## ▶️ Running From Docker Hub

From the root folder of the project:

```bash
docker compose -f docker-compose.hub.yml down
docker compose -f docker-compose.hub.yml pull
docker compose -f docker-compose.hub.yml up -d
docker ps
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

---

## 🧪 Testing Strategy

The project includes several types of automated tests.

| Test Type | Tool | What It Checks |
|---|---|---|
| Backend Unit Tests | Jest | Financial calculation logic |
| Backend Integration Tests | Jest + Supertest | API routes and database operations |
| Frontend Component Test | Vitest + React Testing Library | React UI behavior |
| E2E Tests | Cypress | Full user flow in the browser |
| Edge Case Tests | Cypress | Validation and missing input scenarios |
| Docker Build Check | Docker | Verifies that Docker images can be built |

---

## ✅ Backend Tests

Backend tests check:

- Calculation logic
- API routes
- Profile creation
- Profile loading
- Validation behavior
- Database connection

Run from the backend folder:

```bash
cd backend
npm test
```

When using the Docker Hub database:

```bash
cd backend
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/intelligent_investor_prod_db?schema=public" npm test -- --runInBand
```

---

## 🌐 Cypress E2E and Edge Case Tests

Cypress tests simulate a real user inside the browser.

The tests check:

- The application loads successfully.
- The user can calculate a financial plan.
- The user can save a financial profile.
- Saved profiles appear in the UI.
- The system handles missing inputs correctly.

Run Cypress:

```bash
cd frontend
npx cypress open --config baseUrl=http://localhost:8090
```

Expected result:

```txt
Tests: 5
Passing: 5
Failing: 0
```

---

## 🔁 GitHub Actions CI/CD

GitHub Actions runs an automated CI pipeline on every push or pull request to the `main` branch.

The workflow file is located at:

```txt
.github/workflows/ci.yml
```

The CI pipeline checks:

- Backend dependencies
- Frontend dependencies
- Backend tests
- Frontend tests
- Cypress E2E tests
- Docker build validation

A green check in GitHub Actions means the latest version of the project passed the automated checks.

---

## 📁 Important Files

| File / Folder | Purpose |
|---|---|
| `README.md` | Full project documentation |
| `PROJECT_SUMMARY.md` | Short project overview for quick reading and presentation |
| `docker-compose.hub.yml` | Runs the project from Docker Hub images |
| `docker-compose.prod.yml` | Runs the production-like environment |
| `docker-compose.staging.yml` | Runs the staging environment |
| `backend/src/server.js` | Starts the backend server |
| `backend/src/app.js` | Defines the Express app |
| `backend/prisma/schema.prisma` | Defines the database schema |
| `frontend/src/App.jsx` | Main React UI |
| `frontend/cypress/e2e/financial-profile.cy.js` | Cypress E2E and edge case tests |
| `.github/workflows/ci.yml` | GitHub Actions CI workflow |

---

## 🧭 How to Present the Project

A simple presentation flow:

1. Show the GitHub repository.
2. Show the README and project structure.
3. Show Docker Hub images.
4. Run the project using `docker-compose.hub.yml`.
5. Show Docker Desktop containers.
6. Open the frontend on `localhost:8090`.
7. Check backend health with `curl`.
8. Run or show Cypress tests.
9. Show GitHub Actions and explain the CI pipeline.

---

## 🗣️ Simple Explanation for Presentation

This project is not only a regular web application.  
It demonstrates a complete DevOps workflow.

The application is divided into frontend, backend, and database.  
Docker allows us to run each part in a separate container.  
Docker Compose connects the services together.  
Docker Hub allows us to share the ready images.  
GitHub Actions automatically checks the project every time we push code.  
Cypress and Jest help verify that the system works correctly.

This makes the project easier to run, easier to test, and closer to a real production environment.

---

## 📊 Current Project Status

Implemented:

- ✅ Frontend UI
- ✅ Backend API
- ✅ PostgreSQL database
- ✅ Prisma ORM
- ✅ Financial calculations
- ✅ Save and load profiles
- ✅ Investment projection
- ✅ Docker setup
- ✅ Docker Compose environments
- ✅ Docker Hub images
- ✅ Custom database image
- ✅ Backend tests
- ✅ Frontend test
- ✅ Cypress E2E tests
- ✅ Cypress edge case tests
- ✅ GitHub Actions CI pipeline
- ✅ README documentation
- ✅ Project summary documentation

---
