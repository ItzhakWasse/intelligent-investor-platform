const FIXED_COSTS_DEFAULT_RATE = 0.55;
const SAVINGS_GOALS_RATE = 0.10;
const ACTIVE_INVESTMENTS_RATE = 0.10;
const GUILT_FREE_DEFAULT_RATE = 0.275;
const DEFAULT_NET_ESTIMATION_RATE = 0.68;
const ANNUAL_RETURN_RATE = 0.07;
const PROJECTION_YEARS = 15;

function estimateBankNet(grossSalary) {
  return Number((grossSalary * DEFAULT_NET_ESTIMATION_RATE).toFixed(2));
}

function calculateFixedCosts(bankNet) {
  return Number((bankNet * FIXED_COSTS_DEFAULT_RATE).toFixed(2));
}

function calculateSavingsGoals(bankNet) {
  return Number((bankNet * SAVINGS_GOALS_RATE).toFixed(2));
}

function calculateActiveInvestments(bankNet) {
  return Number((bankNet * ACTIVE_INVESTMENTS_RATE).toFixed(2));
}

function calculateGuiltFreeSpending(bankNet) {
  return Number((bankNet * GUILT_FREE_DEFAULT_RATE).toFixed(2));
}

function calculateWealthProjection(investmentAmount) {
  const projection = [];

  for (let year = 1; year <= PROJECTION_YEARS; year++) {
    const value = investmentAmount * Math.pow(1 + ANNUAL_RETURN_RATE, year);

    projection.push({
      year,
      value: Number(value.toFixed(2)),
    });
  }

  return projection;
}

function calculateSpendingPlan({ grossSalary, bankNet }) {
  const finalBankNet = bankNet || estimateBankNet(grossSalary);
  const activeInvestments = calculateActiveInvestments(finalBankNet);

  return {
    grossSalary: Number(grossSalary),
    bankNet: Number(finalBankNet),
    fixedCosts: calculateFixedCosts(finalBankNet),
    savingsGoals: calculateSavingsGoals(finalBankNet),
    activeInvestments,
    guiltFreeSpending: calculateGuiltFreeSpending(finalBankNet),
    wealthProjection: calculateWealthProjection(activeInvestments),
  };
}

module.exports = {
  estimateBankNet,
  calculateFixedCosts,
  calculateSavingsGoals,
  calculateActiveInvestments,
  calculateGuiltFreeSpending,
  calculateWealthProjection,
  calculateSpendingPlan,
};