import { API_URL } from "../global.config";

export const getAllUser = async () => {
  const repsonse = await fetch(API_URL + "appuser");
  const data = await repsonse.json();

  return data;
};

export const getUserById = async (id) => {
  const repsonse = await fetch(API_URL + `appuser/${id}`);
  const data = await repsonse.json();

  console.log(data);

  return data;
};

export const getUserFromArray = (users, key, value) => {
  const user = users.filter((user) => user[key] == value);
  return user.length > 0 ? user[0] : '';
};

export const getUserByName = async (username) => {
  const users = await getAllUser();
  const user = users.filter((user) => user.username == username);

  return user[0];
};
