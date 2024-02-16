import { httpAxios } from "@/helper/httpsHelper";

export const addTask = async (task) => {
  const responce = await httpAxios
    .post("/api/tasks", task)
    .then((resp) => resp.data);
  return responce;
};

export const getalltaskOfUser = async (userId) => {
  try {
    const responce = await httpAxios
      .get(`/api/users/${userId}/tasks`)
      .then((resp) => resp.data);
    return responce;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (taskId) => {
  try {
    const responce = await httpAxios
      .delete(`/api/tasks/${taskId}`)
      .then((resp) => resp.data);
    return responce;
  } catch (error) {
    console.log(error);
  }
};
