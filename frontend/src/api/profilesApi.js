import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5050";

export async function calculateSpendingPlan(payload) {
  const response = await axios.post(`${API_BASE_URL}/api/calculate`, payload);
  return response.data;
}

export async function createProfile(payload) {
  const response = await axios.post(`${API_BASE_URL}/api/profiles`, payload);
  return response.data;
}

export async function getProfiles() {
  const response = await axios.get(`${API_BASE_URL}/api/profiles`);
  return response.data;
}

export async function getProfileById(id) {
  const response = await axios.get(`${API_BASE_URL}/api/profiles/${id}`);
  return response.data;
}