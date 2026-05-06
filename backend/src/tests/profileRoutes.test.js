const request = require("supertest");
const app = require("../app");
const prisma = require("../config/db");

describe("API Routes", () => {
  beforeEach(async () => {
    await prisma.spendingPlan.deleteMany();
    await prisma.financialProfile.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("GET / should return API running message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "Intelligent Investor API is running",
    });
  });

  test("GET /health should return status OK and database connected", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
    expect(response.body.service).toBe("Intelligent Investor Backend");
    expect(response.body.database).toBe("Connected");
  });

  test("POST /api/calculate should calculate spending plan successfully", async () => {
    const response = await request(app)
      .post("/api/calculate")
      .send({
        grossSalary: 15000,
        bankNet: 10000,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Spending plan calculated successfully");

    expect(response.body.data.grossSalary).toBe(15000);
    expect(response.body.data.bankNet).toBe(10000);
    expect(response.body.data.fixedCosts).toBe(5500);
    expect(response.body.data.savingsGoals).toBe(1000);
    expect(response.body.data.activeInvestments).toBe(1000);
    expect(response.body.data.guiltFreeSpending).toBe(2750);
    expect(response.body.data.wealthProjection).toHaveLength(15);
  });

  test("POST /api/calculate should estimate bank net if bankNet is missing", async () => {
    const response = await request(app)
      .post("/api/calculate")
      .send({
        grossSalary: 10000,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.data.bankNet).toBe(6800);
    expect(response.body.data.fixedCosts).toBe(3740);
    expect(response.body.data.savingsGoals).toBe(680);
    expect(response.body.data.activeInvestments).toBe(680);
    expect(response.body.data.guiltFreeSpending).toBe(1870);
  });

  test("POST /api/calculate should return 400 if grossSalary is missing", async () => {
    const response = await request(app)
      .post("/api/calculate")
      .send({
        bankNet: 10000,
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "Gross salary is required and must be greater than 0"
    );
  });

  test("POST /api/calculate should return 400 if bankNet is negative", async () => {
    const response = await request(app)
      .post("/api/calculate")
      .send({
        grossSalary: 15000,
        bankNet: -10000,
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Bank net must be greater than 0");
  });

  test("POST /api/profiles should create a financial profile with spending plan", async () => {
    const response = await request(app)
      .post("/api/profiles")
      .send({
        name: "Yehuda Baza",
        grossSalary: 15000,
        bankNet: 10000,
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("Financial profile created successfully");

    expect(response.body.data.id).toBeDefined();
    expect(response.body.data.name).toBe("Yehuda Baza");
    expect(response.body.data.grossSalary).toBe(15000);
    expect(response.body.data.bankNet).toBe(10000);

    expect(response.body.data.spendingPlans).toHaveLength(1);
    expect(response.body.data.spendingPlans[0].fixedCosts).toBe(5500);
    expect(response.body.data.spendingPlans[0].savingsGoals).toBe(1000);
    expect(response.body.data.spendingPlans[0].activeInvestments).toBe(1000);
    expect(response.body.data.spendingPlans[0].guiltFreeSpending).toBe(2750);
    expect(response.body.data.spendingPlans[0].wealthProjection).toHaveLength(15);
  });

  test("GET /api/profiles should return saved profiles", async () => {
    await request(app)
      .post("/api/profiles")
      .send({
        name: "Yehuda Baza",
        grossSalary: 15000,
        bankNet: 10000,
      });

    const response = await request(app).get("/api/profiles");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Financial profiles loaded successfully");
    expect(response.body.data).toHaveLength(1);
    expect(response.body.data[0].name).toBe("Yehuda Baza");
    expect(response.body.data[0].spendingPlans).toHaveLength(1);
  });

  test("GET /api/profiles/:id should return a specific profile", async () => {
    const createResponse = await request(app)
      .post("/api/profiles")
      .send({
        name: "Yehuda Baza",
        grossSalary: 15000,
        bankNet: 10000,
      });

    const profileId = createResponse.body.data.id;

    const response = await request(app).get(`/api/profiles/${profileId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Financial profile loaded successfully");
    expect(response.body.data.id).toBe(profileId);
    expect(response.body.data.name).toBe("Yehuda Baza");
    expect(response.body.data.spendingPlans).toHaveLength(1);
  });

  test("GET /api/profiles/:id should return 404 if profile does not exist", async () => {
    const response = await request(app).get("/api/profiles/999999");

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("Financial profile not found");
  });

  test("POST /api/profiles should return 400 if name is missing", async () => {
    const response = await request(app)
      .post("/api/profiles")
      .send({
        grossSalary: 15000,
        bankNet: 10000,
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Name is required");
  });
});