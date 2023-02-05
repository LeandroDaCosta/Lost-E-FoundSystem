import axios from "axios";

const url = "http://localhost:3030/api";

// Users Routes

async function getAllUsers() {
  const response = await axios.get(url + "/user");
  return response.data;
}
async function getUser(id) {
  const response = await axios.get(url + "/user/" + id);
  return response.data;
}

async function createUser(data) {
  const response = await axios.post(url + "/user", data);
  return response.data;
}

async function login(data) {
  const response = await axios.post(url + "/login", data);
  return response.data;
}

async function deleteUser(id) {
  const response = await axios.delete(url + "/user/" + id);
  return response.data;
}

async function updateUser(data, id) {
  const response = await axios.put(url + "/user/" + id, data);
  return response.data;
}

async function updateUserPassword(data, email) {
  const response = await axios.put(url + "/user/" + email, data);
  return response.data;
}

// Items Routes

async function getAllItems() {
  const response = await axios.get(url + "/founded");
  return response.data;
}
async function getItemById(id) {
  const response = await axios.get(url + "/founded/" + id);
  return response.data;
}
async function getItemByCategory(category) {
  const response = await axios.get(url + "/founded/byCategory/" + category);
  return response.data;
}

async function createItem(data) {
  const response = await axios.post(url + "/founded", data);
  return response.data;
}

async function deleteItem(id) {
  const response = await axios.delete(url + "/founded/" + id);
  return response.data;
}

async function updateItem(data, id) {
  const response = await axios.put(url + "/founded/" + id, data);
  return response.data;
}

export const api = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  updateUserPassword,
  login,

  getAllItems,
  getItemById,
  getItemByCategory,
  createItem,
  updateItem,
  deleteItem,
};
