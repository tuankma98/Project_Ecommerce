import axiosClient from "../utils/axios";

export const getData = async (endpoint, params, headers) => {
  try {
    const response = await axiosClient.get(`/${endpoint}`, { params, headers });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  }
};
