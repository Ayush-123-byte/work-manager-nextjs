import { httpAxios } from "@/helper/httpsHelper";

export const signUp = async (user) => {
  const response = await httpAxios
    .post("/api/users", user)
    .then((resp) => resp.data);
  return response;
};

export const LoginUser = async (user) => {
  const response = await httpAxios
    .post("/api/login", user)
    .then((resp) => resp.data);
  return response;
};

export const currentUser = async () => {
  const response = await httpAxios
    .get("/api/current")
    .then((resp) => resp.data);
  return response;
};

export const logoutUser = async () => {
  const response = await httpAxios
    .post("/api/logout")
    .then((resp) => resp.data);
  return response;
};
