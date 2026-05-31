-- CreateTable
CREATE TABLE "financial_profiles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "grossSalary" DOUBLE PRECISION NOT NULL,
    "bankNet" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "financial_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spending_plans" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "fixedCosts" DOUBLE PRECISION NOT NULL,
    "savingsGoals" DOUBLE PRECISION NOT NULL,
    "activeInvestments" DOUBLE PRECISION NOT NULL,
    "guiltFreeSpending" DOUBLE PRECISION NOT NULL,
    "wealthProjection" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spending_plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "spending_plans" ADD CONSTRAINT "spending_plans_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "financial_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

