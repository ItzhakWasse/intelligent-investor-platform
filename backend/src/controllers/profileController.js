const prisma = require("../config/db");
const { calculateSpendingPlan } = require("../services/calculationService");

function calculateProfile(req, res) {
  try {
    const { grossSalary, bankNet } = req.body;

    if (!grossSalary || Number(grossSalary) <= 0) {
      return res.status(400).json({
        message: "Gross salary is required and must be greater than 0",
      });
    }

    if (bankNet !== undefined && Number(bankNet) <= 0) {
      return res.status(400).json({
        message: "Bank net must be greater than 0",
      });
    }

    const result = calculateSpendingPlan({
      grossSalary: Number(grossSalary),
      bankNet: bankNet ? Number(bankNet) : undefined,
    });

    return res.status(200).json({
      message: "Spending plan calculated successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to calculate spending plan",
      error: error.message,
    });
  }
}

async function createProfile(req, res) {
  try {
    const { name, grossSalary, bankNet } = req.body;

    if (!name || name.trim().length === 0) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    if (!grossSalary || Number(grossSalary) <= 0) {
      return res.status(400).json({
        message: "Gross salary is required and must be greater than 0",
      });
    }

    if (!bankNet || Number(bankNet) <= 0) {
      return res.status(400).json({
        message: "Bank net is required and must be greater than 0",
      });
    }

    const spendingPlan = calculateSpendingPlan({
      grossSalary: Number(grossSalary),
      bankNet: Number(bankNet),
    });

    const profile = await prisma.financialProfile.create({
      data: {
        name: name.trim(),
        grossSalary: Number(grossSalary),
        bankNet: Number(bankNet),
        spendingPlans: {
          create: {
            fixedCosts: spendingPlan.fixedCosts,
            savingsGoals: spendingPlan.savingsGoals,
            activeInvestments: spendingPlan.activeInvestments,
            guiltFreeSpending: spendingPlan.guiltFreeSpending,
            wealthProjection: spendingPlan.wealthProjection,
          },
        },
      },
      include: {
        spendingPlans: true,
      },
    });

    return res.status(201).json({
      message: "Financial profile created successfully",
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create financial profile",
      error: error.message,
    });
  }
}

async function getProfiles(req, res) {
  try {
    const profiles = await prisma.financialProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        spendingPlans: true,
      },
    });

    return res.status(200).json({
      message: "Financial profiles loaded successfully",
      data: profiles,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load financial profiles",
      error: error.message,
    });
  }
}

async function getProfileById(req, res) {
  try {
    const { id } = req.params;

    const profile = await prisma.financialProfile.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        spendingPlans: true,
      },
    });

    if (!profile) {
      return res.status(404).json({
        message: "Financial profile not found",
      });
    }

    return res.status(200).json({
      message: "Financial profile loaded successfully",
      data: profile,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to load financial profile",
      error: error.message,
    });
  }
}

module.exports = {
  calculateProfile,
  createProfile,
  getProfiles,
  getProfileById,
};