import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "./App";

vi.mock("./api/profilesApi", () => ({
  getProfiles: vi.fn(async () => ({
    data: [],
  })),

  calculateSpendingPlan: vi.fn(async () => ({
    message: "Spending plan calculated successfully",
    data: {
      grossSalary: 15000,
      bankNet: 10000,
      fixedCosts: 5500,
      savingsGoals: 1000,
      activeInvestments: 1000,
      guiltFreeSpending: 2750,
      wealthProjection: [
        { year: 1, value: 1070 },
        { year: 2, value: 1144.9 },
        { year: 3, value: 1225.04 },
        { year: 4, value: 1310.8 },
        { year: 5, value: 1402.55 },
        { year: 6, value: 1500.73 },
        { year: 7, value: 1605.78 },
        { year: 8, value: 1718.19 },
        { year: 9, value: 1838.46 },
        { year: 10, value: 1967.15 },
        { year: 11, value: 2104.85 },
        { year: 12, value: 2252.19 },
        { year: 13, value: 2409.85 },
        { year: 14, value: 2578.54 },
        { year: 15, value: 2759.03 },
      ],
    },
  })),

  createProfile: vi.fn(async () => ({
    message: "Financial profile created successfully",
    data: {
      id: 1,
      name: "Yehuda Baza",
      grossSalary: 15000,
      bankNet: 10000,
      spendingPlans: [
        {
          fixedCosts: 5500,
          savingsGoals: 1000,
          activeInvestments: 1000,
          guiltFreeSpending: 2750,
          wealthProjection: [
            { year: 1, value: 1070 },
            { year: 2, value: 1144.9 },
            { year: 3, value: 1225.04 },
            { year: 4, value: 1310.8 },
            { year: 5, value: 1402.55 },
            { year: 6, value: 1500.73 },
            { year: 7, value: 1605.78 },
            { year: 8, value: 1718.19 },
            { year: 9, value: 1838.46 },
            { year: 10, value: 1967.15 },
            { year: 11, value: 2104.85 },
            { year: 12, value: 2252.19 },
            { year: 13, value: 2409.85 },
            { year: 14, value: 2578.54 },
            { year: 15, value: 2759.03 },
          ],
        },
      ],
    },
  })),

  getProfileById: vi.fn(),
}));

describe("App Frontend", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("updates bucket amounts after entering salary values and clicking Calculate Plan", async () => {
    const user = userEvent.setup();

    render(<App />);

    const nameInput = screen.getByPlaceholderText("Yehuda Baza");
    const grossSalaryInput = screen.getByPlaceholderText("15000");
    const bankNetInput = screen.getByPlaceholderText("10000");

    await user.type(nameInput, "Yehuda Baza");
    await user.type(grossSalaryInput, "15000");
    await user.type(bankNetInput, "10000");

    await user.click(screen.getByRole("button", { name: /calculate plan/i }));

    await waitFor(() => {
      expect(screen.getByText("Fixed Costs")).toBeInTheDocument();
      expect(screen.getByText("Savings Goals")).toBeInTheDocument();
      expect(screen.getByText("Active Investments")).toBeInTheDocument();
      expect(screen.getByText("Guilt-Free Spending")).toBeInTheDocument();
    });

    expect(screen.getByText("₪5,500")).toBeInTheDocument();
    expect(screen.getAllByText("₪1,000")).toHaveLength(2);
    expect(screen.getByText("₪2,750")).toBeInTheDocument();
    expect(
      screen.getByText("15-Year Investment Projection")
    ).toBeInTheDocument();
  });
});