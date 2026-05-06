const {
  estimateBankNet,
  calculateFixedCosts,
  calculateSavingsGoals,
  calculateActiveInvestments,
  calculateGuiltFreeSpending,
  calculateWealthProjection,
  calculateSpendingPlan,
} = require("../services/calculationService");

describe("Calculation Service", () => {
  test("should estimate bank net as 68% of gross salary", () => {
    expect(estimateBankNet(10000)).toBe(6800);
  });

  test("should calculate fixed costs as 55% of bank net", () => {
    expect(calculateFixedCosts(10000)).toBe(5500);
  });

  test("should calculate savings goals as 10% of bank net", () => {
    expect(calculateSavingsGoals(10000)).toBe(1000);
  });

  test("should calculate active investments as 10% of bank net", () => {
    expect(calculateActiveInvestments(10000)).toBe(1000);
  });

  test("should calculate guilt-free spending as 27.5% of bank net", () => {
    expect(calculateGuiltFreeSpending(10000)).toBe(2750);
  });

  test("should calculate 15-year wealth projection", () => {
    const projection = calculateWealthProjection(1000);

    expect(projection).toHaveLength(15);
    expect(projection[0]).toEqual({
      year: 1,
      value: 1070,
    });
  });

  test("should calculate full spending plan", () => {
    const result = calculateSpendingPlan({
      grossSalary: 15000,
      bankNet: 10000,
    });

    expect(result.fixedCosts).toBe(5500);
    expect(result.savingsGoals).toBe(1000);
    expect(result.activeInvestments).toBe(1000);
    expect(result.guiltFreeSpending).toBe(2750);
    expect(result.wealthProjection).toHaveLength(15);
  });
});