# 📌 Project Summary — The Intelligent Investor Platform

## 🧠 Project Idea

**The Intelligent Investor Platform** is a full-stack personal finance web application.

The system helps users calculate a monthly spending plan based on their income, save financial profiles, and view a long-term investment projection.

The project was developed as part of an **Introduction to DevOps** course and demonstrates a complete DevOps-based workflow using frontend, backend, database, Docker, Docker Compose, automated tests, CI pipeline, and separated environments.

---

## 🎯 Main Goal

The main goal of the project is to demonstrate a complete full-stack system with practical DevOps practices.

The project includes:

- ⚛️ A working React frontend application
- 🚀 A working Node.js and Express backend API
- 🐘 A PostgreSQL database
- 🔺 Prisma ORM for database access and migrations
- 🐳 Dockerized services
- 🧩 Docker Compose for running the full system
- 🧪 Local, staging, and production-like environments
- ✅ Automated backend tests
- 🧪 Automated frontend tests
- 🌐 Cypress E2E and edge case tests
- 🔁 GitHub Actions CI pipeline
- 📘 Project documentation with README and screenshots

---

## 💰 What the System Does

The user enters financial details:

- 👤 Name
- 💼 Gross salary
- 🏦 Bank net income

The system then calculates a monthly spending plan and displays the results clearly in the UI.

The user can also save the financial profile to the PostgreSQL database and load saved profiles later.

---

## 🧮 Financial Calculation Logic

The system calculates a monthly spending plan based on the user's bank net income.

| Icon | Category | Percentage | Description |
|---|---|---:|---|
| 🏠 | Fixed Costs | 55% | Rent, bills, groceries, and required expenses |
| 🎯 | Savings Goals | 10% | Emergency fund, vacations, and savings goals |
| 📈 | Active Investments | 10% | Long-term investment amount |
| 🛍️ | Guilt-Free Spending | 27.5% | Hobbies, dining, entertainment, and flexible spending |

The system also calculates a 15-year investment projection using a 7% annual return.

---

## 📊 Investment Projection

The investment projection shows how the investment amount may grow over 15 years.

The projection is displayed in the frontend using a line chart.

This helps users understand the potential long-term effect of investing consistently.

---

## 🧰 Technologies Used

### 🎨 Frontend

| Icon | Technology | Purpose |
|---|---|---|
| ⚛️ | React | Build the user interface |
| ⚡ | Vite | Fast frontend development and build tool |
| 🎨 | Tailwind CSS | Styling and responsive design |
| 🔌 | Axios | Send HTTP requests to the backend |
| 📊 | Recharts | Display the investment projection chart |
| 🧪 | Vitest | Run frontend component tests |
| 🧩 | React Testing Library | Test React UI behavior |
| 🌐 | Cypress | Run end-to-end browser tests |

---

### 🖥️ Backend

| Icon | Technology | Purpose |
|---|---|---|
| 🟩 | Node.js | JavaScript runtime for backend |
| 🚀 | Express | Build the REST API |
| 🔺 | Prisma ORM | Connect backend to PostgreSQL and manage migrations |
| 🐘 | PostgreSQL | Store financial profiles and spending plans |
| ✅ | Jest | Run backend unit tests |
| 🧪 | Supertest | Run backend API integration tests |
| 🔐 | Dotenv | Load environment variables |
| 🌐 | CORS | Allow frontend-backend communication |

---

### 🐳 DevOps

| Icon | Tool | Purpose |
|---|---|---|
| 🐳 | Docker | Run services in isolated containers |
| 🧩 | Docker Compose | Run frontend, backend, and database together |
| 🌿 | Git | Version control |
| ☁️ | GitHub | Remote repository |
| 🔁 | GitHub Actions | Automated CI pipeline |
| 🧪 | Local Environment | Development and regular testing |
| 🚦 | Staging Environment | Testing before production |
| 🚀 | Production Environment | Production-like isolated run |

---

## 🐳 Docker Environments

The project includes three separated Docker environments.

Each environment has its own frontend, backend, database, ports, and Docker volume.

| Icon | Environment | Frontend | Backend | Database | Purpose |
|---|---|---|---|---|---|
| 🧪 | Local | `http://localhost:5173` | `http://localhost:5050` | `localhost:5433` | Development and regular testing |
| 🚦 | Staging | `http://localhost:8080` | `http://localhost:5051` | `localhost:5434` | Testing before production |
| 🚀 | Production | `http://localhost:8090` | `http://localhost:5052` | `localhost:5435` | Production-like isolated run |

This separation helps test the system safely without mixing data between environments.

---

## 🏷️ Environment Badge

The frontend includes an environment badge that clearly shows which environment is currently running.

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

This is useful because it makes the difference between local, staging, and production environments clear and visible in the user interface.

---

## 🗄️ Database

The system uses PostgreSQL as the database.

Prisma ORM is used to define the database schema, manage migrations, and access the database from the backend.

The database contains two main tables:

| Icon | Table | Purpose |
|---|---|---|
| 👤 | `financial_profiles` | Stores user financial profiles |
| 🧮 | `spending_plans` | Stores calculated spending plans for each profile |

---

## 📋 Main Database Tables

### 👤 `financial_profiles`

Stores the user's financial profile.

| Icon | Column | Purpose |
|---|---|---|
| 🆔 | `id` | Unique profile ID |
| 👤 | `name` | User name |
| 💼 | `grossSalary` | Gross monthly salary |
| 🏦 | `bankNet` | Net income received in the bank |
| 📅 | `createdAt` | Profile creation date |
| 🕒 | `updatedAt` | Last update date |

---

### 🧮 `spending_plans`

Stores the calculated spending plan for each financial profile.

| Icon | Column | Purpose |
|---|---|---|
| 🆔 | `id` | Unique spending plan ID |
| 🔗 | `profileId` | Related financial profile ID |
| 🏠 | `fixedCosts` | Fixed costs calculation |
| 🎯 | `savingsGoals` | Savings goals calculation |
| 📈 | `activeInvestments` | Active investments calculation |
| 🛍️ | `guiltFreeSpending` | Guilt-free spending calculation |
| 📊 | `wealthProjection` | 15-year investment projection |
| 📅 | `createdAt` | Spending plan creation date |

---

## 🔌 Main API Endpoints

| Icon | Endpoint | Method | Purpose |
|---|---|---|---|
| ❤️ | `/health` | GET | Checks backend and database status |
| 🧮 | `/api/calculate` | POST | Calculates a spending plan |
| 💾 | `/api/profiles` | POST | Saves a financial profile |
| 📋 | `/api/profiles` | GET | Loads all saved profiles |
| 🔎 | `/api/profiles/:id` | GET | Loads a specific profile |

---

## ❤️ Health Check

The backend includes a health check endpoint:

```txt
/health
```

Example response:

```json
{
  "status": "OK",
  "service": "Intelligent Investor Backend",
  "database": "Connected"
}
```

This endpoint verifies that:

- 🚀 The backend server is running
- 🐘 The database connection is working

---

## 🔄 Automatic Database Migrations

The backend container runs Prisma migrations automatically when it starts.

The command used inside Docker Compose is:

```bash
npx prisma migrate deploy && node src/server.js
```

This means that when a new database is created, Prisma automatically applies the required migrations and creates the database tables.

This behavior is used in:

- 🧪 Local Docker environment
- 🚦 Staging Docker environment
- 🚀 Production Docker environment

---

## 🧪 Testing

The project includes several layers of automated testing.

| Icon | Test Type | Tool | Purpose |
|---|---|---|---|
| ✅ | Backend Unit Tests | Jest | Tests the financial calculation logic |
| 🧪 | Backend Integration Tests | Jest + Supertest | Tests backend API routes |
| 🎨 | Frontend Component Test | Vitest + React Testing Library | Tests UI behavior |
| 🌐 | E2E Tests | Cypress | Tests real user flow in the browser |
| ⚠️ | Edge Case Tests | Cypress | Tests validation and missing input scenarios |

---

## ✅ Backend Tests

The backend tests check:

- 🧮 Financial calculation logic
- 🏠 Spending bucket calculations
- 📊 Investment projection calculation
- 🔌 API route responses
- 💾 Profile creation
- 📋 Profile loading
- ⚠️ Error handling
- ❤️ Health check behavior

Expected backend test result:

```txt
Test Suites: 2 passed
Tests: 18 passed
```

---

## ✅ Frontend Component Test

The frontend component test checks that the user can:

1. ✍️ Enter salary values
2. 🧮 Click `Calculate Plan`
3. 👀 See the calculated bucket amounts in the UI

Expected frontend test result:

```txt
Test Files: 1 passed
Tests: 1 passed
```

---

## 🌐 Cypress E2E Tests

The Cypress E2E test simulates a real user flow in the browser.

The main flow checks:

```txt
1. Open the frontend application
2. Enter financial profile details
3. Click Calculate Plan
4. Verify that spending buckets are displayed
5. Verify that the investment projection chart appears
6. Save the financial profile
7. Verify that the saved profile appears in the Saved Profiles section
```

---

## ⚠️ Cypress Edge Case Tests

The project also includes Cypress edge case tests.

These tests check how the system behaves when the user enters missing or incomplete data.

| Icon | Edge Case | Expected Behavior |
|---|---|---|
| 🖥️ | Application loads successfully | The title, form, and buttons are visible |
| 💼 | Missing gross salary | The system displays a validation error |
| 🏦 | Missing bank net | The system calculates the plan using estimated bank net from gross salary |
| 👤 | Missing name while saving | The system displays a validation error |
| ✅ | Valid profile submission | The profile is calculated, saved, and displayed correctly |

Expected Cypress result:

```txt
Tests: 5
Passing: 5
Failing: 0
```

---

## 🔁 CI Pipeline

The project includes a GitHub Actions CI pipeline.

The CI pipeline runs automatically on every push or pull request to the `main` branch.

The pipeline checks:

- 📦 Backend dependencies
- 📦 Frontend dependencies
- 🐳 Docker build
- 🚀 Docker services startup
- ❤️ Backend health check
- 🔺 Prisma migrations
- ✅ Backend tests
- 🧪 Frontend tests
- 🌐 Cypress E2E tests

A green CI run means that the project builds successfully and all automated tests pass.

---

## 🧾 Project Documentation

The project includes detailed documentation.

| Icon | File | Purpose |
|---|---|---|
| 📘 | `README.md` | Main detailed project documentation |
| 📌 | `PROJECT_SUMMARY.md` | Shorter summary for presentation and submission |
| 🖼️ | `docs/screenshots/` | Screenshots used in the README |

The README includes:

- 📌 Project overview
- 🧰 Technologies used
- 📂 File responsibilities
- 🔌 API endpoints
- 🐳 Docker instructions
- 🧪 Local, staging, and production environments
- 🧪 Test coverage
- 🔁 CI/CD pipeline explanation
- 📊 Current project status

---

## ▶️ How to Run the Project

### 🧪 Run Local Environment

From the root project folder:

```bash
docker compose up --build -d
```

Frontend:

```txt
http://localhost:5173
```

Backend health check:

```txt
http://localhost:5050/health
```

Stop local environment:

```bash
docker compose down
```

---

### 🚦 Run Staging Environment

From the root project folder:

```bash
docker compose -f docker-compose.staging.yml up --build -d
```

Frontend:

```txt
http://localhost:8080
```

Backend health check:

```txt
http://localhost:5051/health
```

Stop staging environment:

```bash
docker compose -f docker-compose.staging.yml down
```

---

### 🚀 Run Production Environment

From the root project folder:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Frontend:

```txt
http://localhost:8090
```

Backend health check:

```txt
http://localhost:5052/health
```

Stop production environment:

```bash
docker compose -f docker-compose.prod.yml down
```

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

## ✅ Current Project Status

The project currently includes:

- ✅ Full-stack application
- ⚛️ Working React frontend
- 🚀 Working Node.js and Express backend
- 🐘 PostgreSQL database
- 🔺 Prisma ORM
- 🧩 Docker Compose setup
- 🧪 Local Docker environment
- 🚦 Staging Docker environment
- 🚀 Production-like Docker environment
- 🗄️ Separate database for each environment
- 🔌 Separate ports for each environment
- 🔄 Automatic Prisma migrations
- 🏷️ Environment badge for Local, Staging, and Production
- ✅ Backend unit tests
- 🧪 Backend integration tests
- 🎨 Frontend component test
- 🌐 Cypress E2E tests
- ⚠️ Cypress edge case tests
- 🔁 GitHub Actions CI pipeline
- 🚦 CI status badge in README
- 🖼️ Project screenshots
- 📘 Detailed README documentation
- 📌 Project summary documentation

---

## 🚀 Optional Future Improvements

The project is already complete for the current DevOps requirements.

Possible future improvements:

- ☁️ Deploy to a real cloud/server provider
- 🔐 Add HTTPS
- 🌍 Add a custom domain
- 📊 Add monitoring and logs dashboard
- 👤 Add user authentication
- 🛡️ Add user roles
- ⚙️ Add more financial customization options
- 📄 Add export to PDF or Excel

---

## 👤 Author

**Yehuda Baza**  
Software Engineering Student  
SCE – Shamoon College of Engineering