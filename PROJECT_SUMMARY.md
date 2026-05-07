# 📌 Project Summary — The Intelligent Investor Platform

## 🧠 Project Idea

The Intelligent Investor Platform is a full-stack personal finance web application.

The system helps users calculate a monthly spending plan based on their income, save financial profiles, and view a long-term investment projection.

The project was developed as part of an **Introduction to DevOps** course and demonstrates a complete development workflow using frontend, backend, database, Docker, automated tests, CI pipeline, and separated environments.

---

## 🎯 Main Goal

The main goal of the project is to demonstrate a complete DevOps-based full-stack system.

The system includes:

- A working frontend application
- A working backend API
- A PostgreSQL database
- Dockerized services
- Automated tests
- GitHub Actions CI pipeline
- Local, staging, and production-like environments

---

## 🧮 Financial Calculation Logic

The system calculates a monthly spending plan based on the user's bank net income.

| Category | Percentage |
|---|---|
| Fixed Costs | 55% |
| Savings Goals | 10% |
| Active Investments | 10% |
| Guilt-Free Spending | 27.5% |

The system also calculates a 15-year investment projection using a 7% annual return.

---

## 🧰 Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts
- Vitest
- React Testing Library
- Cypress

### Backend

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- Jest
- Supertest
- Dotenv
- CORS

### DevOps

- Docker
- Docker Compose
- Git
- GitHub
- GitHub Actions

---

## 🐳 Docker Environments

The project includes three separated Docker environments.

| Environment | Frontend | Backend | Database | Purpose |
|---|---|---|---|---|
| Local | `http://localhost:5173` | `http://localhost:5050` | `localhost:5433` | Development |
| Staging | `http://localhost:8080` | `http://localhost:5051` | `localhost:5434` | Testing before production |
| Production | `http://localhost:8090` | `http://localhost:5052` | `localhost:5435` | Production-like run |

Each environment uses a separate PostgreSQL database and separate Docker containers.

---

## 🏷️ Environment Badge

The frontend includes an environment badge that clearly shows the current running environment.

Examples:

```txt
Environment: Local
Environment: Staging
Environment: Production