import { useCallback, useEffect, useState } from "react";
import {
  calculateSpendingPlan,
  createProfile,
  getProfiles,
  getProfileById,
} from "./api/profilesApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    grossSalary: "",
    bankNet: "",
  });

  const appEnv = import.meta.env.VITE_APP_ENV || "Local";

  const [plan, setPlan] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadProfiles = useCallback(async () => {
    try {
      const result = await getProfiles();
      setProfiles(result.data || []);
    } catch {
      setError("Failed to load saved profiles");
    }
  }, []);

  useEffect(() => {
    async function fetchProfilesOnStart() {
      await loadProfiles();
    }

    fetchProfilesOnStart();
  }, [loadProfiles]);

  async function handleCalculate(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    const grossSalaryNumber = formData.grossSalary
      ? Number(formData.grossSalary)
      : 0;

    const bankNetNumber = formData.bankNet
      ? Number(formData.bankNet)
      : grossSalaryNumber
        ? Math.round(grossSalaryNumber * 0.7)
        : 0;

    if (!bankNetNumber) {
      setError("Bank net is required");
      return;
    }

    try {
      const result = await calculateSpendingPlan({
        grossSalary: grossSalaryNumber || undefined,
        bankNet: bankNetNumber,
      });

      setPlan(result.data);
      setMessage("Spending plan calculated successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to calculate plan");
    }
  }

  async function handleSaveProfile() {
    setError("");
    setMessage("");

    const nameInputValue =
      document.querySelector('input[placeholder="Yehuda Baza"]')?.value || "";

    const finalName = formData.name.trim() || nameInputValue.trim();

    if (!finalName) {
      setError("Name is required");
      return;
    }

    const grossSalaryNumber = formData.grossSalary
      ? Number(formData.grossSalary)
      : 0;

    const bankNetNumber = formData.bankNet
      ? Number(formData.bankNet)
      : grossSalaryNumber
        ? Math.round(grossSalaryNumber * 0.7)
        : 0;

    if (!bankNetNumber) {
      setError("Bank net is required");
      return;
    }

    try {
      const result = await createProfile({
        name: finalName,
        grossSalary: grossSalaryNumber || undefined,
        bankNet: bankNetNumber,
      });

      const latestPlan = result.data.spendingPlans[0];

      setPlan({
        grossSalary: result.data.grossSalary,
        bankNet: result.data.bankNet,
        fixedCosts: latestPlan.fixedCosts,
        savingsGoals: latestPlan.savingsGoals,
        activeInvestments: latestPlan.activeInvestments,
        guiltFreeSpending: latestPlan.guiltFreeSpending,
        wealthProjection: latestPlan.wealthProjection,
      });

      setFormData((prev) => ({
        ...prev,
        name: finalName,
      }));

      setMessage("Profile saved successfully");
      await loadProfiles();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save profile");
    }
  }

  async function handleLoadProfile(id) {
    setError("");
    setMessage("");

    try {
      const result = await getProfileById(id);
      const profile = result.data;
      const latestPlan = profile.spendingPlans[0];

      setFormData({
        name: profile.name,
        grossSalary: profile.grossSalary,
        bankNet: profile.bankNet,
      });

      setPlan({
        grossSalary: profile.grossSalary,
        bankNet: profile.bankNet,
        fixedCosts: latestPlan.fixedCosts,
        savingsGoals: latestPlan.savingsGoals,
        activeInvestments: latestPlan.activeInvestments,
        guiltFreeSpending: latestPlan.guiltFreeSpending,
        wealthProjection: latestPlan.wealthProjection,
      });

      setMessage("Profile loaded successfully");
    } catch {
      setError("Failed to load profile");
    }
  }

  const buckets = plan
    ? [
        {
          title: "Fixed Costs",
          subtitle: "Rent, bills, groceries",
          value: plan.fixedCosts,
          percent: "55%",
        },
        {
          title: "Savings Goals",
          subtitle: "Emergency fund, vacations",
          value: plan.savingsGoals,
          percent: "10%",
        },
        {
          title: "Active Investments",
          subtitle: "Long-term investments",
          value: plan.activeInvestments,
          percent: "10%",
        },
        {
          title: "Guilt-Free Spending",
          subtitle: "Hobbies, dining, entertainment",
          value: plan.guiltFreeSpending,
          percent: "27.5%",
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-slate-950 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-slate-300">Introduction to DevOps</p>

              <h1 className="text-4xl font-bold mt-2">
                The Intelligent Investor Platform
              </h1>

              <p className="text-slate-300 mt-3 max-w-2xl">
                A full-stack personal finance platform for calculating monthly
                spending buckets and visualizing long-term investment growth.
              </p>
            </div>

            <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Environment: {appEnv}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form
            onSubmit={handleCalculate}
            className="bg-white rounded-2xl shadow p-6 lg:col-span-1"
          >
            <h2 className="text-2xl font-semibold mb-4">Financial Profile</h2>

            <label className="block mb-3">
              <span className="text-sm font-medium">Name</span>
              <input
                className="mt-1 w-full rounded-lg border p-3"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Yehuda Baza"
              />
            </label>

            <label className="block mb-3">
              <span className="text-sm font-medium">Gross Salary</span>
              <input
                className="mt-1 w-full rounded-lg border p-3"
                type="number"
                value={formData.grossSalary}
                onChange={(e) =>
                  setFormData({ ...formData, grossSalary: e.target.value })
                }
                placeholder="15000"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium">Bank Net</span>
              <input
                className="mt-1 w-full rounded-lg border p-3"
                type="number"
                value={formData.bankNet}
                onChange={(e) =>
                  setFormData({ ...formData, bankNet: e.target.value })
                }
                placeholder="10000"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white rounded-lg p-3 font-semibold hover:bg-blue-800"
            >
              Calculate Plan
            </button>

            <button
              type="button"
              onClick={handleSaveProfile}
              className="w-full mt-3 bg-slate-900 text-white rounded-lg p-3 font-semibold hover:bg-slate-800"
            >
              Save Profile
            </button>

            {message && (
              <p className="mt-4 text-green-700 font-medium">{message}</p>
            )}

            {error && <p className="mt-4 text-red-700 font-medium">{error}</p>}
          </form>

          <section className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {buckets.length === 0 && (
                <div className="bg-white rounded-2xl shadow p-6 md:col-span-2">
                  <h2 className="text-2xl font-semibold">Your buckets</h2>
                  <p className="text-slate-600 mt-2">
                    Enter salary values and calculate your plan.
                  </p>
                </div>
              )}

              {buckets.map((bucket) => (
                <div
                  key={bucket.title}
                  className="bg-white rounded-2xl shadow p-6"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{bucket.title}</h3>
                      <p className="text-slate-500 text-sm">
                        {bucket.subtitle}
                      </p>
                    </div>

                    <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                      {bucket.percent}
                    </span>
                  </div>

                  <p className="text-3xl font-bold mt-5">
                    ₪{Number(bucket.value).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {plan && (
              <div className="bg-white rounded-2xl shadow p-6 mt-6">
                <h2 className="text-2xl font-semibold mb-4">
                  15-Year Investment Projection
                </h2>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={plan.wealthProjection}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        strokeWidth={3}
                        dot
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </section>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Saved Profiles</h2>

          {profiles.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
              <p className="font-medium text-slate-800">
                No saved profiles yet.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Create your first financial profile by entering salary details
                and clicking Save Profile.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => handleLoadProfile(profile.id)}
                  className="text-left border rounded-xl p-4 hover:bg-slate-50"
                >
                  <h3 className="font-bold">{profile.name}</h3>

                  <p className="text-sm text-slate-600">
                    Gross: ₪{Number(profile.grossSalary).toLocaleString()}
                  </p>

                  <p className="text-sm text-slate-600">
                    Bank Net: ₪{Number(profile.bankNet).toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;