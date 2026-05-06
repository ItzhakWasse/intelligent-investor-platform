import axios from "axios";

const API_BASE_URL = "http://localhost:5050/api";

export async function calculateSpendingPlan(payload) {
  const response = await axios.post(`${API_BASE_URL}/calculate`, payload);
  return response.data;
}

export async function createProfile(payload) {
  const response = await axios.post(`${API_BASE_URL}/profiles`, payload);
  return response.data;
}

export async function getProfiles() {
  const response = await axios.get(`${API_BASE_URL}/profiles`);
  return response.data;
}

export async function getProfileById(id) {
  const response = await axios.get(`${API_BASE_URL}/profiles/${id}`);
  return response.data;
}