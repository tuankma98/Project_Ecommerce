import axiosClient from "./axiosClient";

const userAPI = {
  register(data) {
    const url = "/user";
    return axiosClient.post(url, data);
  },
  getAllUser(params) {
    const url = "/posts";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `user/${id}`;
    return axiosClient.get(url);
  },
  update(data) {
    const url = `/user/${data.id}`;
    return axiosClient.patch(url, data);
  },
};

export default userAPI;
